// Pontuação do mata-mata (§6). Decide por unidade: hold | kill | iterate | graduate.
// Tudo configurável via config (data_gate, scoring, qualification).

function num(v) {
  if (v === '' || v == null) return null;
  const n = Number(String(v).replace(',', '.').replace(/[^\d.\-]/g, ''));
  return Number.isFinite(n) ? n : null;
}

/**
 * @param {object} c  linha de creatives.csv (impressions, spend/cpl, hook_rate, ctr, qual_leads, cost_per_qual_lead)
 * @param {object} cfg
 * @returns {{decision:string, reason:string, confidence:string}}
 */
export function scoreCreative(c, cfg) {
  const gate = cfg.data_gate || {};
  const sc = cfg.scoring || {};
  const q = cfg.qualification || {};

  const impressions = num(c.impressions) ?? 0;
  const hookRate = num(c.hook_rate);
  const ctr = num(c.ctr);
  const qualLeads = num(c.qual_leads) ?? 0;
  const cpql = num(c.cost_per_qual_lead);

  // Portão de dados: precisa de impressões OU verba mínima antes de qualquer decisão.
  const minImpr = gate.min_impressions_per_unit ?? 1000;
  const gatePassed = impressions >= minImpr; // verba checada no lançador; aqui usamos impressões.
  if (!gatePassed) {
    return { decision: 'hold', reason: `Portão de dados não atingido (${impressions}/${minImpr} impressões).`, confidence: 'low' };
  }

  const confidence = impressions < (sc.low_confidence_max_impressions ?? cfg.bracket?.low_confidence_max_impressions ?? 3000)
    ? 'low' : 'medium';

  // GRADUAR: tem lead qualificado dentro do alvo de custo.
  const target = q.target_cost_per_qualified_lead_brl;
  if (qualLeads >= 1 && (cpql == null || target == null || cpql <= target)) {
    return { decision: 'graduate', reason: `Lead(s) qualificado(s)=${qualLeads}${cpql != null ? `, CPQL R$${cpql}` : ''} dentro do alvo.`, confidence };
  }

  // MATAR: hook/CTR abaixo do piso na Etapa A.
  if (hookRate != null && hookRate < (sc.hook_rate_floor ?? 0.25)) {
    return { decision: 'kill', reason: `Hook rate ${(hookRate * 100).toFixed(1)}% < piso ${(sc.hook_rate_floor * 100).toFixed(0)}%.`, confidence };
  }
  if (ctr != null && ctr < (sc.ctr_floor ?? 1.5)) {
    return { decision: 'kill', reason: `CTR ${ctr}% < piso ${sc.ctr_floor}%.`, confidence };
  }

  // ITERAR: passou no portão, sobreviveu à Etapa A, mas sem lead qualificado ainda.
  return { decision: 'iterate', reason: 'Sobreviveu à triagem; sem lead qualificado ainda — iterar 1 variável.', confidence };
}

export function scoreAll(rows, cfg) {
  return rows.map(c => ({ creative_id: c.creative_id, ...scoreCreative(c, cfg) }));
}
