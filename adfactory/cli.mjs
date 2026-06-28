#!/usr/bin/env node
// CLI da Fábrica de Anúncios (F4). Tudo é offline/dry-run — nenhum gasto, nada irreversível.
//
//   node cli.mjs check "<texto>"     valida factual + compliance de um texto
//   node cli.mjs check-hooks         valida todos os hooks do banco
//   node cli.mjs plan                dry-run do lote: unidades, verba, bloqueios
//   node cli.mjs score               lê creatives.csv e decide matar/graduar/iterar
//   node cli.mjs utm <creative_id> [url]   monta UTM + link de WhatsApp com ref
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadConfig } from './core/config.mjs';
import { readCsvObjects } from './core/csv.mjs';
import { checkFactual } from './core/factual.mjs';
import { checkCompliance } from './core/compliance.mjs';
import { buildPlan } from './core/plan.mjs';
import { buildLaunchPlan } from './core/launcher.mjs';
import { scoreAll } from './core/scoring.mjs';
import { buildUtmUrl, buildWhatsAppUrl } from './core/utm.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA = join(__dirname, 'data');
const cfg = loadConfig();
const [cmd, ...args] = process.argv.slice(2);

const G = '\x1b[32m', R = '\x1b[31m', Y = '\x1b[33m', D = '\x1b[2m', X = '\x1b[0m';

function checkText(text, opts = {}) {
  const f = checkFactual({ text, ...opts }, cfg);
  const c = checkCompliance({ text }, cfg);
  return { f, c };
}

function printCheck(label, text, opts) {
  const { f, c } = checkText(text, opts);
  const status = f.ok ? `${G}FACTUAL OK${X}` : `${R}FACTUAL BLOQUEADO${X}`;
  console.log(`\n${label}\n  ${D}"${text}"${X}\n  ${status}`);
  f.errors.forEach(e => console.log(`    ${R}✗ ${e}${X}`));
  c.warnings.forEach(w => console.log(`    ${Y}⚠ ${w}${X}`));
  return f.ok;
}

switch (cmd) {
  case 'check': {
    const text = args.join(' ');
    if (!text) { console.error('Uso: node cli.mjs check "<texto>"'); process.exit(1); }
    const ok = printCheck('Texto:', text);
    process.exit(ok ? 0 : 2);
    break;
  }
  case 'check-hooks': {
    const hooks = readCsvObjects(join(DATA, 'hooks.csv'));
    let blocked = 0;
    for (const h of hooks) {
      const { f, c } = checkText(h.text);
      if (!f.ok) { blocked++; console.log(`${R}✗ ${h.hook_id} [${h.language}]${X} ${D}${h.text}${X}`); f.errors.forEach(e => console.log(`    ${R}${e}${X}`)); }
      else if (c.warnings.length) { console.log(`${Y}⚠ ${h.hook_id} [${h.language}]${X} ${D}${h.text}${X}`); c.warnings.forEach(w => console.log(`    ${Y}${w}${X}`)); }
    }
    console.log(`\n${blocked === 0 ? G : R}${hooks.length} hooks · ${blocked} bloqueados (factual)${X}`);
    process.exit(blocked === 0 ? 0 : 2);
    break;
  }
  case 'plan': {
    const plan = buildPlan(cfg);
    console.log(`\n${G}DRY-RUN · lote "${plan.campaign}"${X}  ${D}(config: ${cfg._source})${X}`);
    console.log(`Unidades planejadas: ${plan.total_units} · rodáveis no round 1: ${plan.runnable_round_1}`);
    console.log(`Verba: R$${plan.daily_total_brl}/dia · ~R$${plan.per_unit_daily_brl}/unidade · geos: ${(cfg.geos?.include || []).join(',')}\n`);
    for (const u of plan.units) {
      const flag = u.factual_ok ? `${G}✓${X}` : `${R}✗${X}`;
      const render = u.render_3d === 'sim' ? `${Y}[3D]${X}` : '    ';
      console.log(`${flag} ${render} ${u.creative_id.padEnd(34)} ${D}${u.hook.slice(0, 60)}${X}`);
      u.factual_errors.forEach(e => console.log(`       ${R}${e}${X}`));
    }
    if (plan.blocks.length) console.log(`\n${R}${plan.blocks.length} unidade(s) bloqueada(s) por guardrail factual — não lançar.${X}`);
    else console.log(`\n${G}Nenhum bloqueio factual. Pronto para revisão humana → F4 lançador.${X}`);
    break;
  }
  case 'score': {
    const rows = readCsvObjects(join(DATA, 'creatives.csv'));
    if (rows.length === 0) { console.log(`${Y}creatives.csv vazio — nada para pontuar ainda (preenchido na F3/F5).${X}`); break; }
    const results = scoreAll(rows, cfg);
    const color = { graduate: G, kill: R, iterate: Y, hold: D };
    for (const r of results) console.log(`${color[r.decision] || ''}${r.decision.toUpperCase().padEnd(9)}${X} ${r.creative_id.padEnd(34)} ${D}${r.reason} (${r.confidence})${X}`);
    break;
  }
  case 'launch': {
    const lp = buildLaunchPlan(cfg);
    console.log(`\n${R}● DRY-RUN — NADA foi enviado ao Meta. Tudo reversível.${X}  ${D}(config: ${cfg._source})${X}`);
    console.log(`\n${G}CAMPANHA${X}  ${lp.campaign.name}`);
    console.log(`  objetivo=${lp.campaign.objective} · categoria=${lp.campaign.special_ad_categories.join(',') || 'nenhuma'} · status=${lp.campaign.status}`);
    console.log(`  compliance: Housing=${lp.compliance.housing ? 'sim' : 'NÃO'} · demografia=${lp.compliance.demographic_targeting ? 'sim' : 'não'} · excluídos=${lp.compliance.excluded.join(',') || '—'}`);
    const b = lp.budget;
    const capColor = b.over_cap ? R : G;
    console.log(`  verba (${b.mode}): R$${b.daily_total_brl}/dia de ${lp.items.length} unidades · teto R$${b.cap_brl} ${capColor}${b.over_cap ? '⚠ ACIMA DO TETO' : '✓ dentro do teto'}${X}`);
    console.log(`\n${G}AD SETS / ADS${X} (${lp.items.length}):`);
    for (const it of lp.items) {
      console.log(`  • ${it.creative_id.padEnd(30)} R$${((it.adset.daily_budget_cents || 0) / 100).toFixed(2)}/dia ${it.ad.creative.ai_label ? Y + '[3D]' + X : '    '} ${D}${it.ad.creative.primary_text.slice(0, 48)}${X}`);
      console.log(`      ${D}→ ${it.ad.creative.link_url}${X}`);
    }
    if (lp.blocked_factual.length) console.log(`\n${R}${lp.blocked_factual.length} unidade(s) excluída(s) por guardrail factual (fail-safe).${X}`);
    console.log(`\n${D}Para lançar de verdade: configurar o Pixel (F2), aprovar as ferramentas Meta e remover o dry-run no lançador ao vivo.${X}`);
    break;
  }
  case 'utm': {
    const [creativeId, url] = args;
    if (!creativeId) { console.error('Uso: node cli.mjs utm <creative_id> [url]'); process.exit(1); }
    const lang = creativeId.split('-')[1];
    const base = url || 'https://terraventos.com/propriedade/terrenos-bitupita';
    console.log(`\nUTM:      ${buildUtmUrl(base, { campaign: 'lote-teste-1', creativeId, lang })}`);
    console.log(`WhatsApp: ${buildWhatsAppUrl({ ref: creativeId })}`);
    break;
  }
  default:
    console.log(`Fábrica de Anúncios · CLI (F4)\n\n  check "<texto>"        factual + compliance\n  check-hooks            valida o banco de hooks\n  plan                   dry-run do lote (unidades, verba, bloqueios)\n  launch                 dry-run do lançador Meta (campanha/ad sets/ads)\n  score                  decisões do mata-mata sobre creatives.csv\n  utm <creative_id> [url]  UTM + link de WhatsApp com ref\n`);
}
