// Planejador de lote (DRY-RUN). Expande conceitos → unidades de teste, valida cada hook
// (factual + compliance), aloca verba e NÃO faz nenhuma chamada de API.
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readCsvObjects } from './csv.mjs';
import { checkFactual } from './factual.mjs';
import { checkCompliance } from './compliance.mjs';
import { buildCreativeId } from './utm.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, '..', 'data');

// Formatos por conceito (aberturas × formato). Mantém ~14–16 unidades no lote 1.
const FORMATS = {
  C1: ['static', '9x16-reveal'],
  C2: ['static', 'carousel'],
  C3: ['static', '9x16-reveal'],
  C4: ['9x16-founder', '9x16-broll'],
  AWARENESS: ['9x16'],
};

const splitList = s => (s || '').split(';').map(x => x.trim()).filter(Boolean);

export function buildPlan(cfg) {
  const concepts = readCsvObjects(join(DATA, 'concepts.csv'));
  const hooks = readCsvObjects(join(DATA, 'hooks.csv'));
  const properties = readCsvObjects(join(DATA, 'properties.csv'));
  const propByRef = Object.fromEntries(properties.map(p => [p.property_ref, p]));

  const campaign = 'lote-teste-1';
  const units = [];
  const blocks = [];

  for (const concept of concepts) {
    if (concept.concept_id === 'AWARENESS') continue; // trilha separada, fora do lote de conversão
    const langs = splitList(concept.idiomas);
    const formats = FORMATS[concept.concept_id] || ['static', '9x16'];
    const conceptHookIds = splitList(concept.hooks);
    const prop = propByRef[concept.property_ref] || {};
    const aiEligible = String(prop.ai_eligible).toUpperCase() === 'TRUE';

    for (const lang of langs) {
      // pega o primeiro hook do conceito disponível neste idioma
      const hook = hooks.find(h => conceptHookIds.includes(h.hook_id) && h.language === lang)
        || hooks.find(h => h.language === lang);
      const hookText = hook?.text || '';
      const usesRender = concept.render_3d === 'sim' && aiEligible;

      for (const format of formats) {
        const opening = format.includes('reveal') ? 'reveal'
          : format.includes('founder') ? 'founder'
          : format.includes('broll') ? 'broll'
          : format.includes('carousel') ? 'split' : 'hero';
        const creativeId = buildCreativeId({ concept: concept.concept_id, lang, format: format.split('-')[0], opening, version: 1 });

        const aiUsed = usesRender && /reveal|render/.test(format);
        const factual = checkFactual({ text: hookText, ai_used: aiUsed, ai_label: aiUsed ? 'Projeção 3D' : '' }, cfg);
        const compliance = checkCompliance({ text: hookText }, cfg);

        const unit = {
          creative_id: creativeId,
          concept: concept.concept_id,
          lang,
          format,
          property_ref: concept.property_ref,
          render_3d: usesRender ? 'sim' : 'não',
          hook_id: hook?.hook_id || '(nenhum)',
          hook: hookText,
          factual_ok: factual.ok,
          factual_errors: factual.errors,
          compliance_warnings: compliance.warnings,
        };
        units.push(unit);
        if (!factual.ok) blocks.push({ creative_id: creativeId, errors: factual.errors });
      }
    }
  }

  // Verba
  const perUnit = cfg.budget?.per_unit_daily_brl ?? 6.5;
  const dailyTotal = cfg.budget?.daily_test_total_brl ?? 100;
  const maxUnits = cfg.budget?.max_units_round_1 ?? 16;
  const minAdset = cfg.meta?.min_daily_budget_brl ?? 5.14;
  const runnableNow = Math.min(units.length, maxUnits, Math.floor(dailyTotal / Math.max(perUnit, minAdset)));

  return {
    campaign,
    total_units: units.length,
    runnable_round_1: runnableNow,
    per_unit_daily_brl: perUnit,
    daily_total_brl: dailyTotal,
    units,
    blocks,
  };
}
