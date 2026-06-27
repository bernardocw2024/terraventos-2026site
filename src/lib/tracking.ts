/**
 * Terra Ventos · Rastreio (F2 da Fábrica de Anúncios)
 *
 * Camada única de rastreio do site. Resolve o "buraco" de atribuição:
 *  - inicializa o Meta Pixel (somente se VITE_META_PIXEL_ID estiver definido → inerte por padrão);
 *  - captura UTMs + fbclid da URL e persiste na sessão (sobrevive à navegação SPA);
 *  - dispara eventos padrão (PageView, ViewContent, Lead, Contact);
 *  - monta links de WhatsApp com um CÓDIGO DE REFERÊNCIA no texto, para mapear a
 *    conversa de volta ao criativo exato (o wa.me não carrega UTM para dentro do chat).
 *
 * Tudo é no-op quando não há Pixel configurado, então em produção o comportamento
 * permanece idêntico até o ID ser provisionado (totalmente reversível).
 */

const PIXEL_ID = (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim() || '';
const WHATSAPP_NUMBER = '5585985572807';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORAGE_KEY = 'tv_attribution';

type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & { fbclid?: string };

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

/** Captura UTMs/fbclid da URL atual e mescla com o que já estava na sessão. */
export function captureAttribution(): Attribution {
  let stored: Attribution = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    stored = {};
  }

  if (typeof window === 'undefined') return stored;

  const params = new URLSearchParams(window.location.search);
  const fresh: Attribution = {};
  for (const key of UTM_KEYS) {
    const v = params.get(key);
    if (v) fresh[key] = v;
  }
  const fbclid = params.get('fbclid');
  if (fbclid) fresh.fbclid = fbclid;

  const merged = { ...stored, ...fresh };
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  } catch {
    /* ignora storage indisponível */
  }
  return merged;
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

/** Injeta o snippet base do Meta Pixel uma única vez (equivalente ao snippet oficial). */
function loadPixel(id: string) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const w = window as any;
  if (w.fbq) {
    w.fbq('init', id);
    return;
  }
  const n: any = (w.fbq = function (...args: unknown[]) {
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
  });
  if (!w._fbq) w._fbq = n;
  n.push = n;
  n.loaded = true;
  n.version = '2.0';
  n.queue = [];
  const t = document.createElement('script');
  t.async = true;
  t.src = 'https://connect.facebook.net/en_US/fbevents.js';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode?.insertBefore(t, s);
  w.fbq('init', id);
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

/** Inicializa o rastreio. Seguro chamar sempre — no-op sem Pixel configurado. */
export function initTracking() {
  captureAttribution();
  if (!PIXEL_ID) {
    if (import.meta.env.DEV) console.info('[tracking] VITE_META_PIXEL_ID ausente — Pixel inerte.');
    return;
  }
  loadPixel(PIXEL_ID);
  window.fbq?.('track', 'PageView');
}

/** Dispara um evento padrão do Pixel (no-op sem Pixel). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  const attribution = getAttribution();
  const payload = { ...attribution, ...params };
  if (PIXEL_ID && window.fbq) {
    window.fbq('track', name, payload);
  } else if (import.meta.env.DEV) {
    console.info('[tracking] (inerte)', name, payload);
  }
}

/** PageView manual — usar em mudanças de rota da SPA. */
export function trackPageView() {
  captureAttribution();
  if (PIXEL_ID && window.fbq) window.fbq('track', 'PageView');
}

/**
 * Monta a URL do WhatsApp carregando um código de referência no texto.
 * O código (ex.: utm_content do criativo, ou um ref de página) permite mapear
 * a conversa de volta ao anúncio exato — base do "custo por lead qualificado".
 */
export function buildWhatsAppUrl(opts: { ref?: string; message?: string } = {}): string {
  const attribution = getAttribution();
  const ref = opts.ref || attribution.utm_content || '';
  const base = opts.message?.trim() || 'Olá! Vim pelo site da Terra Ventos e gostaria de mais informações.';
  const text = ref ? `${base}\n\n[ref: ${ref}]` : base;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Handler conveniente: dispara evento Contact e devolve a URL do WhatsApp. */
export function trackWhatsAppClick(ref?: string) {
  trackEvent('Contact', { ref, channel: 'whatsapp' });
}
