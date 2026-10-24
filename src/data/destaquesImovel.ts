// Números que aparecem em destaque no topo da página de cada imóvel
// (quartos, suítes, banheiros e áreas). Fica separado de oportunidadesData
// para ser fácil de conferir e atualizar. Preencha só o que estiver
// confirmado no anúncio — campo ausente simplesmente não aparece.
// Ao cadastrar um imóvel novo, adicione a entrada dele aqui pelo slug.

export type DestaquesImovel = {
  /** Total de quartos (inclui suítes). Aceita faixa, ex: "1–3". */
  quartos?: string;
  suites?: string;
  banheiros?: string;
  areaTerreno?: string;
  areaConstruida?: string;
};

export const destaquesImovel: Record<string, DestaquesImovel> = {
  // Casas
  'casa-3-quartos-piscina-cavalo-bravo-prea': { quartos: '3', suites: '2', banheiros: '4', areaTerreno: '1.300 m²', areaConstruida: '250 m²' },
  'prea-house': { quartos: '3', suites: '3', areaTerreno: '745 m²', areaConstruida: '261 m²' },
  'mansao-praia-do-prea': { quartos: '4', suites: '4' },
  'villa-casa-suica-kite-villas-guajiru': { quartos: '2', suites: '2', banheiros: '2', areaConstruida: '178 m²' },
  'casa-4-suites-piscina-prea': { quartos: '4', suites: '4', areaTerreno: '320 m²', areaConstruida: '258 m²' },
  'casa-alto-padrao-prea-4-suites-simi': { quartos: '4', suites: '4', areaTerreno: '1.800 m²', areaConstruida: '300 m²' },
  'casa-praia-do-prea-5-suites-vlad': { quartos: '5', suites: '5', areaTerreno: '1.734 m²', areaConstruida: '739 m²' },
  'casa-praia-do-prea-5-suites-vlad-2': { quartos: '5', suites: '5', areaTerreno: '1.734 m²', areaConstruida: '739 m²' },
  'casa-alto-padrao-praia-barrinha': { quartos: '4', suites: '4', banheiros: '5', areaTerreno: '3.706 m²', areaConstruida: '400 m²' },
  'imovel-centro-praia': { quartos: '4', suites: '2', banheiros: '3' },
  'imovel-duplex-vila-chapeu': { quartos: '5', suites: '4', banheiros: '5', areaTerreno: '5.300 m²', areaConstruida: '530 m²' },
  'casa-2-chales-serrote-jericoacoara-dolores': { areaTerreno: '311 m²', areaConstruida: '191 m²' },
  'vila-aysu-jericoacoara': { areaTerreno: '280 m²', areaConstruida: '260 m²' },
  'chale-divino-tatajuba': { quartos: '1', banheiros: '1', areaTerreno: '431 m²', areaConstruida: '70 m²' },

  // Temporada
  'vila-do-ingles': { quartos: '3', banheiros: '3', areaTerreno: '2.000 m²' },
  'villa-conduru-3': { quartos: '3', suites: '3' },

  // Lançamentos
  'residencial-jacaranda-prea': { quartos: '3', suites: '3', banheiros: '4', areaConstruida: '130 m²' },
  'vila-cangalha-camocim-leo': { quartos: '1–3', areaTerreno: '400 m²' },

  // Terrenos
  'terreno-praia-do-farol': { areaTerreno: '8.600 m²' },
  'terreno-barrinha-1753m': { areaTerreno: '1.753 m²' },
  'terreno-barrinha-1840m2-matricula': { areaTerreno: '1.840 m²' },
  'terreno-serrote-jericoacoara': { areaTerreno: '200 m²' },
  'area-exclusiva-tatajuba-guriu-100000m': { areaTerreno: '100.000 m²' },
  'terreno-exclusivo-tatajuba-1000m': { areaTerreno: '1.000 m²' },
  'terreno-tatajuba-camocim-5405m2': { areaTerreno: '5.405 m²' },
  'lotes-tatajuba-camocim': { areaTerreno: '400–604 m²' },
  'terreno-vila-sao-francisco-tatajuba': { areaTerreno: '2.000 m²' },
  'terreno-parque-nacional-3044m-carlos': { areaTerreno: '3.044 m²' },
  'terreno-perto-mar-2110m-carlos': { areaTerreno: '2.110 m²' },
  'terreno-prea-1300m-mar-carlos': { areaTerreno: '1.300 m²' },
  'terreno-prea-1342m-mar-carlos': { areaTerreno: '1.342 m²' },
  'terreno-prea-344m-mar-carlos': { areaTerreno: '344 m²' },
  'terreno-prea-700m-mar-carlos': { areaTerreno: '700 m²' },
  'terreno-prea-1417m-esquina-carlos': { areaTerreno: '1.417 m²' },
  'terreno-prea-1100m-mar-carlos': { areaTerreno: '1.100 m²' },
  'terreno-sitio-fenix-300m-carlos': { areaTerreno: '300 m²' },
  'terreno-esquina-murado-1500m-carlos': { areaTerreno: '1.500 m²' },
  'terreno-vista-parque-nacional-1000m-carlos': { areaTerreno: '1.000 m²' },
  'terreno-esquina-150m-mar-1126m-carlos': { areaTerreno: '1.126 m²' },
};

/** Link "abrir no Google Maps" a partir do mapUrl de embed do imóvel. */
export function googleMapsLink(mapUrl?: string): string | null {
  if (!mapUrl) return null;
  const q = mapUrl.match(/[?&]q=([^&]+)/)?.[1];
  if (!q) return null;
  let query = q.replace(/\+/g, ' ');
  try {
    query = decodeURIComponent(query);
  } catch {
    // mantém como está se tiver % solto
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
