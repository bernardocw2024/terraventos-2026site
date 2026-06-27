// Compliance de Habitação (Housing) do Meta (§5) — checador de copy excludente.
// Sinaliza linguagem de atributo pessoal / excludente; exige frasing neutro e inclusivo.

const EXCLUSIONARY = [
  { re: /\bperfeito para\b|\bideal para\b|\bfeito para\b/i, msg: 'Evite "perfeito/ideal para X" (atributo pessoal — risco Housing). Use frasing neutro.' },
  { re: /\bperfect for\b|\bideal for\b|\bmade for\b/i, msg: 'Avoid "perfect/ideal for X" (personal attribute — Housing risk).' },
  { re: /\bperfecto para\b|\bideal para\b/i, msg: 'Evita "perfecto/ideal para X" (atributo personal — riesgo Housing).' },
  { re: /\bexpatriados? ricos?\b|\brich expats?\b|\bwealthy\b/i, msg: 'Linguagem de renda/classe (excludente).' },
  { re: /\b(jovens?|young)\s+(profissionais|professionals)\b/i, msg: 'Segmentação por idade na copy (excludente).' },
  { re: /\b(famílias?|families|solteir[oa]s?|singles?|casais?|couples?)\b/i, msg: 'Status familiar na copy (excludente sob Housing).' },
  { re: /\b(cristãos?|christians?|jud(eus|aico)|muslim|católicos?)\b/i, msg: 'Religião na copy (excludente).' },
];

/**
 * @param {{text?:string}} input
 * @param {object} cfg
 * @returns {{ok:boolean, errors:string[], warnings:string[], notes:string[]}}
 */
export function checkCompliance(input, cfg = {}) {
  const errors = [];
  const warnings = [];
  const notes = [];
  const text = (input.text || '').toString();

  for (const { re, msg } of EXCLUSIONARY) {
    if (re.test(text)) warnings.push(msg);
  }

  if (cfg.compliance?.declare_housing_special_category) {
    notes.push('Lembrete: declarar Categoria Especial de Habitação (Housing) no anúncio de venda.');
  }
  if (cfg.compliance?.demographic_targeting_allowed === false) {
    notes.push('Segmentar só por país/região (sem age/gênero/CEP/interesse). O hook faz o filtro fino.');
  }

  // Warnings de compliance não bloqueiam por si só, mas exigem revisão humana.
  return { ok: true, errors, warnings, notes };
}
