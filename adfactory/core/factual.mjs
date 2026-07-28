// Guardrails factuais (§8 do Prompt Mestre) — PARADA TOTAL se violado.
// Verifica texto de hook/copy e metadados de criativo contra fatos inegociáveis.

const FORBIDDEN_PHRASES = [
  // Temporada de vento (6 meses, jun–dez)
  { re: /\bo ano todo\b|\bano inteiro\b|\bano todo\b/i, msg: 'Temporada de vento é 6 meses (jun–dez), nunca "o ano todo".' },
  { re: /\byear[-\s]?round\b|\ball year\b/i, msg: 'Wind season is 6 months (Jun–Dec), never "year-round".' },
  { re: /\btodo el año\b|\btodo el ano\b/i, msg: 'La temporada de viento son 6 meses (jun–dic), nunca "todo el año".' },
  { re: /\bvento constante\b|\bconstant wind\b|\bviento constante\b/i, msg: 'Não prometer vento "constante".' },
  // Bitupitá nova fronteira
  { re: /\b(perto|próximo|proximo|pertinho)\s+de\s+jeri/i, msg: 'Bitupitá é nova fronteira — nunca "perto de Jeri" (~2,5h do aeroporto).' },
  { re: /\bnear\s+jeri|\bclose\s+to\s+jeri/i, msg: 'Bitupitá is a new frontier — never "near Jeri".' },
  { re: /\bcerca\s+de\s+jeri|\bcerquita\s+de\s+jeri/i, msg: 'Bitupitá es nueva frontera — nunca "cerca de Jeri".' },
];

// Sinais de preço — permitido SÓ se vier de ficha real do site. Aqui apenas sinaliza p/ revisão.
const PRICE_SIGNALS = /(R\$|US\$|€|\bUSD\b|\bBRL\b)\s?\d|\b\d+\s?(mil|k|milh[õo]es|million)\b/i;

/**
 * @param {{text?:string, ai_used?:boolean, ai_label?:string, price_from_listing?:boolean}} input
 * @param {object} cfg
 * @returns {{ok:boolean, errors:string[], warnings:string[]}}
 */
export function checkFactual(input, cfg = {}) {
  const errors = [];
  const warnings = [];
  const text = (input.text || '').toString();

  // Frases proibidas (hard stop) — inclui as do config.
  const extra = (cfg.factual_guardrails?.forbid_phrases || []).map(p => ({
    re: new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'),
    msg: `Frase proibida pelo config: "${p}".`,
  }));
  for (const { re, msg } of [...FORBIDDEN_PHRASES, ...extra]) {
    if (re.test(text)) errors.push(msg);
  }

  // Preço sem origem de ficha real → erro; com origem → ok.
  if (PRICE_SIGNALS.test(text) && !input.price_from_listing) {
    errors.push('Sinal de preço detectado sem ficha real do site (use sensação vivida, não números).');
  }

  // Asset de IA precisa de rótulo.
  if (input.ai_used && !(input.ai_label && input.ai_label.trim())) {
    errors.push('Asset de IA sem rótulo obrigatório (ex.: "Projeção 3D / Recreación 3D").');
  }

  return { ok: errors.length === 0, errors, warnings };
}
