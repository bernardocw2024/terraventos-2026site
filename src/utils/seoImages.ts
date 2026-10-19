// Crawlers de preview social (WhatsApp, Instagram, Facebook) têm suporte inconsistente a
// AVIF — og:image/twitter:image nunca deve apontar para um .avif, mesmo que a própria página
// use avif normalmente. Função pura (roda tanto no gerador Node quanto no browser), então não
// pode checar o disco: assume a convenção do projeto de que todo .avif tem um par .webp com o
// mesmo nome-base (é o que os scripts de conversão em scripts/ sempre produzem).
export function toSocialSafeImage(imagePath: string): string {
  if (/\.avif$/i.test(imagePath)) {
    return imagePath.replace(/\.avif$/i, '.webp');
  }
  return imagePath;
}

// og:image/twitter:image precisa ser 1200x630 (1.91:1) — as fotos reais dos imóveis são quase
// quadradas ou 16:9, e ficam cortadas/com tarja no card de preview. scripts/generate-og-images.mjs
// pré-gera um recorte 1200x630 de cada imagem usada como capa em public/og/, espelhando o mesmo
// caminho (sempre .webp, resolve de quebra o problema do avif também). URLs remotas (ex: thumbnail
// de vídeo do Vimeo) não têm variante gerada — passam direto.
export function toOgImage(imagePath: string): string {
  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }
  return `/og${imagePath.replace(/\.[^./]+$/, '.webp')}`;
}

// Palavras que perdem o acento no nome do arquivo e precisam voltar no alt text.
const ALT_WORDS: Record<string, string> = {
  suite: 'suíte', area: 'área', anfitriao: 'anfitrião', prea: 'Preá', tv: 'TV', bernardo: 'Bernardo',
  sofa: 'sofá', rustico: 'rústico', rustica: 'rústica', condominio: 'condomínio', terreo: 'térreo',
  patio: 'pátio', luminarias: 'luminárias', armarios: 'armários', armario: 'armário',
  hospede: 'hóspede', marmore: 'mármore', escritorio: 'escritório', espreguicadeiras: 'espreguiçadeiras',
  espreguicadeira: 'espreguiçadeira', hidraulico: 'hidráulico', luminaria: 'luminária',
  terraco: 'terraço', poco: 'poço', pe: 'pé',
};

// Alt descritivo a partir do nome do arquivo: `/imoveis/villa-conduru-3-suite-1.webp` com slug
// `villa-conduru-3` vira "Suíte 1 – <título>". Um número de ordem na frente (`-07-suite-1.webp`)
// é descartado. Fotos só numeradas (`-01.webp`) não têm o que descrever e caem no fallback.
export function photoAlt(src: string, slug: string, propertyTitle: string, fallback: string): string {
  const base = src.split('/').pop()?.replace(/\.[^.]+$/, '') ?? '';
  if (!base.startsWith(`${slug}-`)) return fallback;
  const rest = base.slice(slug.length + 1);
  if (/^[\d-]*$/.test(rest)) return fallback;
  const words = rest.replace(/^\d+-/, '');
  const desc = words.split('-').map((w) => ALT_WORDS[w] ?? w).join(' ');
  return `${desc.charAt(0).toUpperCase()}${desc.slice(1)} – ${propertyTitle}`;
}
