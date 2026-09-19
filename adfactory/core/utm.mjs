// Construtor de nomenclatura + UTM + referência de WhatsApp.
// creative_id / utm_content = [concept]-[lang]-[format]-[opening]-v[n]

const WHATSAPP_NUMBER = '5585985572807';

export function buildCreativeId({ concept, lang, format, opening, version = 1 }) {
  return [concept, lang, format, opening, `v${version}`]
    .filter(Boolean)
    .join('-')
    .replace(/\s+/g, '');
}

export function buildUtmUrl(baseUrl, { campaign, creativeId, lang }) {
  const u = new URL(baseUrl);
  u.searchParams.set('utm_source', 'meta');
  u.searchParams.set('utm_medium', 'paid');
  if (campaign) u.searchParams.set('utm_campaign', campaign);
  if (creativeId) u.searchParams.set('utm_content', creativeId);
  if (lang) u.searchParams.set('utm_term', lang);
  return u.toString();
}

// O wa.me não carrega UTM para dentro do chat → embute um código de referência no texto.
export function buildWhatsAppUrl({ ref, message } = {}) {
  const base = (message || 'Olá! Vim pelo site da Terra Ventos e gostaria de mais informações.').trim();
  const text = ref ? `${base}\n\n[ref: ${ref}]` : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
