// Lançador Meta — DRY-RUN. Monta os payloads de campanha/ad set/ad que SERIAM
// enviados à Marketing API, aplica compliance (Housing) + factual + tetos de verba.
// NÃO faz nenhuma chamada de API. Falha com segurança: unidade que viola factual é excluída.
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readCsvObjects } from './csv.mjs';
import { buildPlan } from './plan.mjs';
import { buildUtmUrl, buildWhatsAppUrl } from './utm.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');

const brl = (n) => Math.round(n * 100); // reais → centavos

export function buildLaunchPlan(cfg) {
  const plan = buildPlan(cfg);
  const properties = readCsvObjects(join(DATA, 'properties.csv'));
  const propByRef = Object.fromEntries(properties.map(p => [p.property_ref, p]));

  const geos = cfg.geos || {};
  const brRegions = geos.br_regions || [];
  const includeCountries = (geos.include || []).filter(c => !(c === 'BR' && brRegions.length));
  const excludeCountries = (geos.exclude || []).filter(c => /^[A-Z]{2}$/.test(c)); // MENA não é country code

  // Campanha (uma por lote) — Categoria Especial de Habitação obrigatória.
  const campaign = {
    name: `TV | ${plan.campaign} | Housing`,
    objective: cfg.launch.objective,
    special_ad_categories: cfg.compliance?.declare_housing_special_category ? ['HOUSING'] : [],
    status: cfg.launch.status,
    buying_type: 'AUCTION',
    daily_budget_cents: cfg.launch.budget_mode === 'CBO' ? brl(cfg.budget.daily_test_total_brl) : undefined,
  };

  // Alvo: só país/região (sem age/gênero/CEP/interesse). O hook faz o filtro fino.
  const targeting = {
    geo_locations: {
      countries: includeCountries,
      ...(brRegions.length ? { regions_note: `BR estados ${brRegions.join('/')} — resolver region keys na API` } : {}),
    },
    excluded_geo_locations: { countries: excludeCountries, note: 'MENA/Egito excluídos (anti-persona)' },
    age_min: cfg.launch.age_min,
    age_max: cfg.launch.age_max,
    genders: [1, 2], // Housing: todos
    publisher_platforms: ['facebook', 'instagram'],
  };

  // Unidades rodáveis (passaram no factual) limitadas ao round 1.
  const runnable = plan.units.filter(u => u.factual_ok).slice(0, plan.runnable_round_1);
  const perUnitCents = brl(cfg.budget.per_unit_daily_brl);
  const minCents = brl(cfg.meta?.min_daily_budget_brl ?? 5.14);

  const items = runnable.map(u => {
    const prop = propByRef[u.property_ref] || {};
    const lp = prop.site_url || 'https://terraventos.com';
    const utmUrl = buildUtmUrl(lp, { campaign: plan.campaign, creativeId: u.creative_id, lang: u.lang });
    const adset = {
      name: `AS | ${u.creative_id}`,
      ...(cfg.launch.budget_mode === 'ABO' ? { daily_budget_cents: Math.max(perUnitCents, minCents) } : {}),
      optimization_goal: cfg.launch.optimization_goal,
      billing_event: cfg.launch.billing_event,
      targeting,
      status: cfg.launch.status,
    };
    const ad = {
      name: `AD | ${u.creative_id}`,
      status: cfg.launch.status,
      creative: {
        source_asset: u.source_asset || '(produzir na F3)',
        ai_label: u.render_3d === 'sim' ? 'Projeção 3D' : null,
        primary_text: u.hook,
        call_to_action: cfg.launch.call_to_action,
        link_url: utmUrl,
        whatsapp_fallback: buildWhatsAppUrl({ ref: u.creative_id }),
        format: u.format,
        language: u.lang,
      },
    };
    return { creative_id: u.creative_id, adset, ad };
  });

  const dailyTotalCents = items.reduce((s, it) => s + (it.adset.daily_budget_cents || 0), 0);
  const capCents = brl(cfg.budget.daily_test_total_brl);
  const overCap = cfg.launch.budget_mode === 'ABO' && dailyTotalCents > capCents;

  return {
    dry_run: true,
    campaign,
    items,
    blocked_factual: plan.blocks,
    budget: {
      mode: cfg.launch.budget_mode,
      per_unit_brl: cfg.budget.per_unit_daily_brl,
      daily_total_brl: dailyTotalCents / 100,
      cap_brl: cfg.budget.daily_test_total_brl,
      over_cap: overCap,
    },
    compliance: {
      housing: campaign.special_ad_categories.includes('HOUSING'),
      demographic_targeting: false,
      excluded: excludeCountries,
    },
  };
}
