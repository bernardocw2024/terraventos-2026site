export type OportunidadeDetalhe = {
  id: string;
  slug: string;
  title: string;
  searchTitle?: string;
  image: string;
  badge: string;
  propertyTitle: string;
  location: string;
  rating: number;
  exclusiveText: string;
  summaryDescription?: string;
  about: string[];
  infra: string[];
  facilities: string[];
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
    extra?: string[];
  };
  mapImage: string;
  mapUrl?: string;
  videoSources?: string[];
  videoGalleryCredits?: string;
  documents?: {
    label: string;
    url: string;
    legend: string;
  }[];
  priceTag: string;
  price: string;
  installments: string;
  reservationUrl?: string;
  category: 'venda' | 'lancamento' | 'temporada' | 'investimento';
};

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: '10',
    slug: 'casa-alto-padrao-praia-barrinha',
    title: 'VENDA',
    image: '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/1.jpg',
    badge: 'Venda',
    propertyTitle: 'CASA DE ALTO PADRÃO NA PRAIA DA BARRINHA',
    location: 'Barrinha - AcaraÃº - CE',
    rating: 5,
    exclusiveText: '400 mÂ² | 4 SuÃ­tes | 5 Banheiros | Piscina | A 400m da Praia',
    summaryDescription: 'Casa de alto padrÃ£o a 400 metros da praia da Barrinha, com arquitetura praiana sofisticada, piscina, espaÃ§o gourmet, quadra de beach tennis e jardim com coqueiros.',
    about: [
      'Encante-se com essa casa simplesmente incrÃ­vel, onde o charme rÃºstico encontra o conforto e a sofisticaÃ§Ã£o. Localizada a apenas 400 metros da praia, Ã© o lugar perfeito para quem busca tranquilidade, contato com a natureza e momentos inesquecÃ­veis.',
      'A propriedade conta com uma arquitetura Ãºnica, com acabamentos em madeira, cobertura em palha e ambientes amplos e integrados, criando uma atmosfera acolhedora e elegante.',
      'Ãrea de lazer completa com piscina, espaÃ§o gourmet amplo, perfeito para receber amigos e famÃ­lia.',
      'Varanda superior com vista e ventilaÃ§Ã£o privilegiada. Jardim com coqueiros e muito verde.',
      'Quadra de areia para beach tennis/volley. Ambientes integrados e bem iluminados. Estilo praiano sofisticado.'
    ],
    infra: [
      'Ãrea Total: 400 mÂ²',
      'Ãrea do Terreno: 3.706,54 mÂ²',
      'OperaÃ§Ã£o: Venda | Finalidade: Residencial',
      'Status: Novo | SituaÃ§Ã£o: Desocupado',
      'CaracterÃ­sticas: Muro, Lavanderia, Quintal, Varanda, Sala de estar, Cozinha, Banheiro social'
    ],
    facilities: ['4 SuÃ­tes', '5 Banheiros', '3 Vagas', 'Piscina', 'EspaÃ§o Gourmet', 'Quadra de Areia', 'Varanda', 'Jardim com Coqueiros'],
    gallery: {
      main: '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/1.jpg',
      sideTop: '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/2.jpg',
      sideBottom: '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/3.jpg',
      extra: [
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/4.jpg',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/5.png',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/6.png',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/7.png',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/8.png',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/9.png',
        '/CasadeAltoPadraonaPraiadaBarrinha/fotosTerraVentos/10.png'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Barrinha+18,+Barrinha,+Acara%C3%BA+-+CE,+62580-000&hl=pt-BR&z=16&output=embed',
    priceTag: '',
    price: 'R$ 6.600.000,00',
    installments: 'Consulte condiÃ§Ãµes',
    category: 'venda'
  },
  {
    id: '09',
    slug: 'area-exclusiva-tatajuba-guriu-100000m',
    title: 'VENDA',
    image: 'https://vumbnail.com/1186057204.jpg',
    badge: 'Oportunidade Ãnica',
    propertyTitle: 'ÃREA EXCLUSIVA PÃ NA AREIA â 100.000 mÂ²',
    location: 'Entre Tatajuba e GuriÃº, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '100.000 mÂ² | 200m de Frente Mar | MatrÃ­cula e Escritura PÃºblica',
    about: [
      'Uma oportunidade monumental no litoral cearense: 10 hectares de Ã¡rea totalmente pÃ© na areia localizada estrategicamente entre as vilas de Tatajuba e GuriÃº.',
      'Com 200 metros de frente para o mar, esta propriedade Ã© um dos ativos mais raros e valiosos da regiÃ£o, ideal para o desenvolvimento de resorts de luxo, hotelaria de charme ou um refÃºgio particular de alto padrÃ£o.',
      'SeguranÃ§a JurÃ­dica Absoluta: ImÃ³vel com MatrÃ­cula e Escritura PÃºblica, garantindo uma transaÃ§Ã£o sÃ³lida e proteÃ§Ã£o patrimonial integral.',
      'Infraestrutura e Acesso: Acesso facilitado pelos fundos e proximidade estratÃ©gica com rede de energia elÃ©trica trifÃ¡sica (apenas 500 metros), reduzindo significativamente os custos de implementaÃ§Ã£o.',
      'Imagens e VÃ­deos por: Thiago Faquinel (@thiagofaquinel)'
    ],
    infra: [
      'Ãrea Total: 100.000 mÂ² (10 Hectares)',
      'Testada: 200 metros de frente mar',
      'Energia TrifÃ¡sica a 500m',
      'MatrÃ­cula e Escritura PÃºblica'
    ],
    facilities: ['200m Frente Mar', '10 Hectares', 'Energia TrifÃ¡sica', 'Escritura PÃºblica'],
    gallery: {
      main: 'https://vumbnail.com/1186057204.jpg',
      sideTop: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0â20â.jpg',
      sideBottom: '/GURIU/VS--Vimeo-TerraVentos-0â38â.jpg',
      extra: []
    },
    videoSources: [
      'https://player.vimeo.com/video/1186057204',
      'https://player.vimeo.com/video/1186057221'
    ],
    videoGalleryCredits: 'VÃ­deo por: Thiago Faquinel (@thiagofaquinel)',
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8477636,-40.6163572&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Tatajuba: O ParaÃ­so Escondido do Kitesurf',
        url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
        legend: 'Leia mais sobre a localizaÃ§Ã£o e o potencial de valorizaÃ§Ã£o da regiÃ£o.'
      }
    ],
    price: 'R$ 15.000.000,00',
    installments: 'Investimento: R$ 150,00 por mÂ²',
    priceTag: '',
    category: 'venda'
  },
  {
    id: '08',
    slug: 'terreno-exclusivo-tatajuba-1000m',
    title: 'VENDA',
    image: '/TATAJUBA/Image_from_Image.png (4).png',
    badge: 'Exclusividade',
    propertyTitle: 'TERRENO EXCLUSIVO EM TATAJUBA â 1.000 mÂ²',
    location: 'Tatajuba, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '1.000 mÂ² | MatrÃ­cula Individualizada | Oportunidade Ãnica',
    about: [
      'Descubra a joia de Tatajuba: Um terreno de 1.000 mÂ² no coraÃ§Ã£o da vila que Ã© o novo desejo do kitesurf mundial.',
      'SeguranÃ§a JurÃ­dica Total: ImÃ³vel com matrÃ­cula individualizada e processo de desmembramento finalizado, oferecendo a tranquilidade que o investidor experiente exige.',
      'LocalizaÃ§Ã£o EstratÃ©gica: Situado em uma regiÃ£o de altÃ­ssima valorizaÃ§Ã£o, ideal para quem busca construir um refÃºgio exclusivo ou realizar um investimento imobiliÃ¡rio estratÃ©gico.',
      'Estilo de Vida Tatajuba: Viva em harmonia com a natureza, em um local reconhecido por sua hospitalidade, ventos constantes e paisagens de tirar o fÃ´lego.'
    ],
    infra: [
      'Ãrea Total: 1.000 mÂ²',
      'MatrÃ­cula Individualizada',
      'LocalizaÃ§Ã£o Premium em Tatajuba',
      'Pronto para Desmembramento'
    ],
    facilities: ['1.000 mÂ²', 'MatrÃ­cula Pronta', 'Kitesurf Paradise', 'Exclusividade'],
    gallery: {
      main: '/TATAJUBA/Image_from_Image.png (4).png',
      sideTop: '/TATAJUBA/Image_from_Image.png (5).png',
      sideBottom: '/TATAJUBA/Image_from_Image.png (7).png',
      extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.854046,-40.696586&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Tatajuba: O ParaÃ­so Escondido do Kitesurf',
        url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
        legend: 'Leia mais sobre a localizaÃ§Ã£o e o potencial de valorizaÃ§Ã£o de Tatajuba.'
      },
      {
        label: 'Veja Planta',
        url: '/TATAJUBA/3a85c744-9b82-45ca-9042-125872c4e7f1.jpeg',
        legend: 'Visualize o desmembramento e dimensÃµes exatas da Ã¡rea.'
      }
    ],
    priceTag: '',
    price: 'R$ 800.000,00',
    installments: 'Consulte condiÃ§Ãµes exclusivas',
    category: 'venda'
  },
  {
    id: '07',
    slug: 'terreno-exclusivo-prea-200m-mar',
    title: 'VENDA',
    image: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
    badge: 'Oportunidade',
    propertyTitle: 'TERRENO EXCLUSIVO PREÃ â 200M DO MAR',
    location: 'PreÃ¡, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '250 mÂ² | 10m x 25m | Apenas 200m da Praia',
    about: [
      'Excelente oportunidade de investimento em um dos destinos mais valorizados do litoral cearense.',
      'Terreno com 250 mÂ² (10m x 25m) localizado em posiÃ§Ã£o estratÃ©gica no PreÃ¡.',
      'Situado a apenas 200 metros da praia, vizinho aos prestigiados empreendimentos Botanik e CarnaÃºba Windhouse.',
      'Ideal para quem busca construir a casa dos sonhos ou investir em um mercado em plena ascensÃ£o.'
    ],
    infra: [
      'Ãrea Total: 250 mÂ²',
      'DimensÃµes: 10m x 25m',
      'DistÃ¢ncia da Praia: 200m',
      'LocalizaÃ§Ã£o Premium'
    ],
    facilities: ['200m da Praia', 'Vizinho Botanik', 'Vizinho CarnaÃºba', 'Exclusividade'],
    gallery: {
      main: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
      sideTop: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.48.jpeg',
      sideBottom: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.48 (1).jpeg',
      extra: [
        '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.48 (2).jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8156572,-40.4110733&hl=pt-BR&z=15&output=embed',
    videoSources: [
      'https://player.vimeo.com/video/1185188271'
    ],
    priceTag: 'A partir de',
    price: 'R$ 400.000,00',
    installments: 'Consulte condiÃ§Ãµes de mercado',
    category: 'venda'
  },
  {
    id: '06',
    slug: 'prea-house',
    title: 'VENDA',
    image: '/Prea House/Image_from_Image.png (14).png',
    badge: 'Venda',
    propertyTitle: 'PREÃ HOUSE',
    location: 'PreÃ¡, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '745 mÂ² | 3 SuÃ­tes | Piscina de 68 mÂ²',
    about: [
      'Propriedade luxuosa composta por duas construÃ§Ãµes separadas ligadas por uma piscina central.',
      'Casa dos Fundos: 2 suÃ­tes (32.5 mÂ² cada), mÃ³veis planejados, Ã¡rea central de estar e cozinha (32 mÂ²) com ilha e bancadas de madeira, despensa 10 mÂ² e varanda frontal.',
      'PrÃ©dio Frontal: Ãrea Gourmet semiaberta (54 mÂ²), 1 suÃ­te (24 mÂ²), lavabo e depÃ³sito/garagem para quadriciclo (8.5 mÂ²).',
      'Rooftop Terrace: 96 mÂ² com preparaÃ§Ã£o estrutural para expansÃ£o e infraestrutura para aquecimento a gÃ¡s e bombas de pressÃ£o.',
      'Piscina em L: 65.000 litros (10m x 4m) com prainha, assentos embutidos e ionizador automatizado controlado por smartphone.',
      'Acabamento Premium: Esquadrias em Timborana, estrutura em MaÃ§aranduba e deck em Tatajuba.'
    ],
    infra: [
      'Ãrea Total: 745 mÂ² | ConstruÃ­da: 261 mÂ²',
      'Sistemas: Aquecimento a gÃ¡s em todos os pontos e irrigaÃ§Ã£o automatizada no jardim.',
      'SeguranÃ§a: Alarme sincronizado em todas as portas e sistema CCTV com 8 cÃ¢meras de alta definiÃ§Ã£o (acesso remoto).',
      'ElÃ©trica: PortÃµes automatizados com interfone e controle remoto.',
      'Versatilidade: TerraÃ§o preparado para construÃ§Ã£o de novas suÃ­tes ou Ã¡rea de lazer superior.'
    ],
    facilities: ['3 SuÃ­tes', 'Piscina de 68 mÂ²', 'Ãrea Gourmet', 'Rooftop', 'SeguranÃ§a CCTV', 'PortÃ£o EletrÃ´nico'],
    gallery: {
      main: '/Prea House/Image_from_Image.png (14).png',
      sideTop: '/Prea House/Image_from_Image.png (15).png',
      sideBottom: '/Prea House/Image_from_Image.png (16).png',
      extra: [
        '/Prea House/1.jpeg',
        '/Prea House/2.jpeg',
        '/Prea House/3.jpeg',
        '/Prea House/4.jpeg',
        '/Prea House/5.jpeg',
        '/Prea House/6.jpeg',
        '/Prea House/7.jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.812328,-40.428784&z=15&output=embed',
    priceTag: '',
    price: 'R$ 2.700.000,00',
    installments: 'Consulte condiÃ§Ãµes',
    category: 'venda'
  },
  {
    id: '04',
    slug: 'villa-prabhu',
    title: 'LANÃAMENTO',
    image: '/VILLA_PRABHU/PERSPECTIVAS-3D-VILLA-PRABHU-2.webp',
    badge: 'LANÃAMENTO',
    propertyTitle: 'VILLA PRABHU â PARACURU-CE',
    location: 'Paracuru, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: 'Loteamento Fechado em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia. Alto padrÃ£o e exclusividade em uma das praias mais belas do CearÃ¡',
    about: [
      'O Villa Prabhu Ã© um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e seguranÃ§a.',
      'Situado em uma regiÃ£o privilegiada com ampla Ã¡rea verde e recursos hÃ­dricos, o projeto destaca-se pelo planejamento urbano inteligente e integraÃ§Ã£o com a natureza.',
      'Lotes Exclusivos: Unidades espaÃ§osas com Ã¡reas privativas a partir de 242 mÂ² atÃ© mais de 600 mÂ².',
      'Planejamento de Etapas: Projeto dividido em fases, com a Etapa 1 jÃ¡ consolidada e unidades disponÃ­veis na Etapa 2.',
      'Urbanismo de Qualidade: Infraestrutura pensada para o bem-estar, com ruas como a Av. Prabhu e Rua Azalea.'
    ],
    infra: [
      'Financiamento Direto: Facilidade de pagamento em atÃ© 120 parcelas mensais.',
      'Pronto para Investir: DocumentaÃ§Ã£o e tabela de vendas atualizada para 2026.',
      'LocalizaÃ§Ã£o EstratÃ©gica: Quadras planejadas para garantir privacidade e fÃ¡cil acesso Ã s Ã¡reas comuns.',
      'CenÃ¡rio Natural: Loteamento cercado por Ã¡gua e vegetaÃ§Ã£o preservada.'
    ],
    facilities: ['Projeto UrbanÃ­stico', 'Parcelamento em 120x', 'Ãreas Verdes', 'Pronto para Construir'],
    gallery: {
      main: '/VILLA_PRABHU/PERSPECTIVAS-3D-VILLA-PRABHU-2.webp',
      sideTop: '/VILLA_PRABHU/Drone-47-1-1.webp',
      sideBottom: '/VILLA_PRABHU/PRABHU01.png',
      extra: [
        '/VILLA_PRABHU/PRABHU03.png',
        '/VILLA_PRABHU/PRABHU07.png',
        '/VILLA_PRABHU/image-1.webp',
        '/VILLA_PRABHU/pha.png',
        '/VILLA_PRABHU/prabhu22.png',
        '/VILLA_PRABHU/prabhu23.png'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.4146184,-39.046461&z=15&output=embed',
    videoSources: [
      'https://player.vimeo.com/video/1189032118',
      'https://player.vimeo.com/video/1179327775?h=c94b7f80f1',
      'https://player.vimeo.com/video/1179327749?h=9d3c5f80f1',
      'https://player.vimeo.com/video/1179327705?h=7a1b5f80f1',
      'https://player.vimeo.com/video/1179327631?h=2e9d5f80f1'
    ],
    documents: [
      {
        label: 'Tabela de PreÃ§os (120 meses) â Atualizada 2026',
        url: '/VILLA_PRABHU/Tabela de PreÃ§os (120 meses).pdf',
        legend: 'Detalhamento de valores, sinal e parcelas mensais.'
      },
      {
        label: 'Mapa de Disponibilidade (Masterplan)',
        url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf',
        legend: 'Visualize a localizaÃ§Ã£o exata de cada lote e Ã¡reas verdes.'
      }
    ],
    priceTag: 'Consulte',
    price: '',
    installments: 'A partir de 120 parcelas',
    category: 'lancamento',
  },
  {
    id: '01',
    slug: 'villa-condudu-3',
    title: 'TEMPORADA',
    image: '/VillaCondutuPaginaInicial/Image_from_Image.png (29).png',
    badge: 'Temporada',
    propertyTitle: 'CASA ALTO PADRÃO 3 SUÃTES',
    location: 'FRENTE Ã PRAIA DO PREÃ',
    rating: 5,
    exclusiveText: 'FRENTE Ã PRAIA DO PREÃ',
    about: [
      'Vila Conduru III â Piscina, churrasqueira, varanda e condomÃ­nio de luxo 24 horas.',
      'Seu RefÃºgio Privado Beira-Mar no PreÃ¡: A experiÃªncia definitiva de luxo rÃºstico.',
      'A Vila Conduru III Ã© agora seu palco privado para o melhor vento do mundo e eventos exclusivos. Localizada literalmente Ã  beira-mar.',
      '1. LocalizaÃ§Ã£o Beira-Mar: EsqueÃ§a transfers ou longas caminhadas. Aqui, o quintal Ã© a praia.',
      '2. ExperiÃªncia de Resort: A exclusividade de uma vila com as comodidades de um hotel boutique.',
      '3. Arquitetura que Respira (Design BioclimÃ¡tico)',
      '4. Estilo de Vida OrgÃ¢nico & Conectividade: A vila elimina as barreiras entre vocÃª e o paraÃ­so.',
      '5. Suporte Concierge Terra Ventos: Sua Ãºnica preocupaÃ§Ã£o serÃ¡ velejar.'
    ],
    infra: [
      'Piscina no condomÃ­nio',
      '3 suÃ­tes amplas',
      'Churrasqueira',
      'Beira-mar',
      'Kite-point',
      'Projeto Patricia Mureta',
      'Estacionamento',
      'SeguranÃ§a 24h'
    ],
    facilities: ['3 SuÃ­tes', 'Beira-mar', 'PÃ© na areia', 'Piscina', 'Cozinha Completa', 'Ar-condicionado', 'Lavabo', 'Estacionamento', 'SeguranÃ§a 24h'],
    gallery: {
      main: '/VillaCondutuPaginaInicial/Image_from_Image.png (29).png',
      sideTop: '/VillaCondutuPaginaInicial/Image_from_Image.png (31).png',
      sideBottom: '/VillaCondutuPaginaInicial/Final 01 (2).png',
      extra: [
        '/VillaCondutuPaginaInicial/FINAL 01 (1).png',
        '/VillaCondutuPaginaInicial/Final 01 (Wc).png',
        '/VillaCondutuPaginaInicial/FINAL 03 (1).png',
        '/VillaCondutuPaginaInicial/Final 03 (2).png',
        '/VillaCondutuPaginaInicial/Final 04 (1).png',
        '/VillaCondutuPaginaInicial/FINAL 08.png',
        '/VillaCondutuPaginaInicial/FINAL 09.png',
        '/VillaCondutuPaginaInicial/FINAL 12.png',
        '/VillaCondutuPaginaInicial/FINAL 13.png',
        '/VillaCondutuPaginaInicial/FINAL 14.png',
        '/VillaCondutuPaginaInicial/FINAL 15.png',
        '/VillaCondutuPaginaInicial/FINAL 16.png'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
    priceTag: 'DiÃ¡ria',
    price: 'Consulte',
    installments: 'consultar disponibilidade',
    reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    category: 'temporada',
  },
  {
    id: '02',
    slug: 'terrenos-bitupita',
    title: 'VENDA',
    image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
    badge: 'Venda',
    propertyTitle: 'TERRENOS PÃ NA AREIA EM BITUPITÃ',
    location: 'BitupitÃ¡, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '4.300 mÂ² | 10 Projetos de Terrenos Exclusivos',
    about: [
      'A PrÃ³xima Fronteira de ValorizaÃ§Ã£o: Exclusividade, pÃ© na areia e o mÂ² mais estratÃ©gico do Litoral Oeste.',
      'Existem lugares que o mercado ainda nÃ£o descobriu, mas o vento sim. BitupitÃ¡ Ã© o Ãºltimo refÃºgio intocado na Rota Costa dos Ventos.',
      '1. A Nova Rota do Foil: Com ventos constantes durante 6 a 8 meses por ano e Ã¡guas perfeitas para foil.',
      '2. Escassez Real: Um projeto de apenas 10 lotes exclusivos, garantindo baixa densidade e privacidade absoluta.',
      '3. Acesso Direto Beira-Mar: Propriedades com frente mar livre e acesso imediato Ã  praia.',
      '4. SeguranÃ§a JurÃ­dica Terra Ventos: DocumentaÃ§Ã£o 100% revisada com matrÃ­cula individualizada.'
    ],
    infra: [
      'LocalizaÃ§Ã£o Prime e Exclusiva',
      'Vila Privativa com 10 projetos',
      'PÃ© na areia',
      'Ideal para o velejo/kite'
    ],
    facilities: ['Projeto Exclusivo', 'Beira-mar', 'PrÃ³ximo a serviÃ§os'],
    gallery: {
      main: '/bitupitaPaginaIndividual/DJI_20251207012123_0102_D.jpg',
      sideTop: '/bitupitaPaginaIndividual/DJI_20251019210638_0111_D.jpg',
      sideBottom: '/bitupitaPaginaIndividual/DJI_20251020010202_0198_D.jpg',
      extra: [
        '/bitupitaPaginaIndividual/DJI_20251019210524_0108_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251020005753_0185_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
        '/bitupitaPaginaIndividual/DJI_20251207012338_0119_D.jpg',
        '/bitupitaPaginaIndividual/BITUparaiso.jpg',
        '/bitupitaPaginaIndividual/211204_BITUPITA_URBANIZACAO_HS1323.jpg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
    priceTag: 'A partir de',
    price: 'R$ 120 MIL',
    installments: 'Consulte disponibilidade',
    category: 'venda'
  },
  {
    id: '03',
    slug: 'vila-do-ingles',
    title: 'INVESTIMENTO',
    image: '/viladoinglesPaginaInicial/Final 04 (1).png',
    badge: 'Investimento',
    propertyTitle: 'VILA DO INGLÃS',
    location: 'PreÃ¡, CearÃ¡, Brasil',
    rating: 5,
    exclusiveText: '200 mÂ² | 2 Banheiros | 10 Projetos Exclusivos',
    about: [
      'A EssÃªncia do Luxo SustentÃ¡vel: Uma mistura Ãºnica de sustentabilidade moderna e tranquilidade.',
      'Inspirada em um refÃºgio de Nova York, esta residÃªncia oferece 200 mÂ² alimentados inteiramente por energia solar.',
      '1. Design SustentÃ¡vel: Sistemas inteligentes com painÃ©is solares no telhado.',
      '2. Conforto Estilo Spa: 2 banheiros modernos e imersivos.',
      '3. TransparÃªncia DinÃ¢mica: Amplas paredes de vidro do chÃ£o ao teto.',
      '4. Privacidade PanorÃ¢mica: TerraÃ§o privativo no rooftop.',
      '5. ConexÃ£o Exclusiva: O contraste entre a localizaÃ§Ã£o premium e a paz isolada.'
    ],
    infra: [
      'Sistema de painÃ©is solares no rooftop',
      'Paredes de vidro do chÃ£o ao teto',
      'TerraÃ§o privativo no rooftop',
      '2 banheiros modernos',
      'LocalizaÃ§Ã£o isolada de alto padrÃ£o'
    ],
    facilities: ['!Beira-mar', 'Ar-condicionado', '!MÃ¡quina de lavar', '!Internet', 'Aquecedor de Ã¡gua', 'Geladeira', 'SofÃ¡', 'Guarda-roupa'],
    gallery: {
      main: '/viladoinglesPaginaInicial/FINAL 09 (1).png',
      sideTop: '/viladoinglesPaginaInicial/FINAL 01 (3).png',
      sideBottom: '/viladoinglesPaginaInicial/Final 02 (2).png',
      extra: [
        '/viladoinglesPaginaInicial/Final 01 (2).png',
        '/viladoinglesPaginaInicial/FINAL 02 (3).png',
        '/viladoinglesPaginaInicial/Final 03 (2).png',
        '/viladoinglesPaginaInicial/Final 04 (1).png',
        '/viladoinglesPaginaInicial/Final 05 (1).png',
        '/viladoinglesPaginaInicial/Final 06 (1).png',
        '/viladoinglesPaginaInicial/Final 07 (1).png',
        '/viladoinglesPaginaInicial/FINAL 08 (1).png',
        '/viladoinglesPaginaInicial/Final 08 (Extra).png',
        '/viladoinglesPaginaInicial/Final 09 (Extra).png',
        '/viladoinglesPaginaInicial/FINAL 10 (1).png',
        '/viladoinglesPaginaInicial/FINAL 11 (1).png',
        '/viladoinglesPaginaInicial/FINAL 14 (1).png',
        '/viladoinglesPaginaInicial/imagem banheiro 1 .jpg',
        '/viladoinglesPaginaInicial/imagem banheiro 2.jpg',
        '/viladoinglesPaginaInicial/imagem banheiro 3.jpg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=40.773565,-73.956555&z=15&output=embed',
    priceTag: 'Status',
    price: 'Em Breve',
    installments: '',
    category: 'investimento'
  },
  {
    id: '05',
    slug: 'casa-matanzas',
    title: 'TEMPORADA',
    image: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
    badge: 'Temporada',
    propertyTitle: 'Casa Matanzas com tinaja / vista mar e bosque',
    location: 'Navidad, O\'Higgins, Chile',
    rating: 5,
    exclusiveText: 'Descubra Matanzas Paradise ð Casa moderna confortavelmente equipada para 6 hÃ³spedes, vistas panorÃ¢micas espetaculares do mar e da floresta.',
    about: [
      'Descubra Matanzas Paradise: Casa moderna confortavelmente equipada para 6 hÃ³spedes.',
      'Vistas panorÃ¢micas espetaculares do mar e da floresta.',
      'Ideal para quem busca tranquilidade em um dos destinos de kitesurf e windsurf mais icÃ´nicos do Chile.',
      '1. Fora da rede: energia solar, espaÃ§o sustentÃ¡vel em harmonia com a natureza.',
      '2. Estacionamento privado no local.',
      '3. LocalizaÃ§Ã£o Privilegiada: Apenas 7 min da Praia de Matanzas e La Vega de Pupuya.',
      '4. TerraÃ§o com hot tub (ofurÃ´ privado).',
      '5. Ambiente tranquilo, prÃ³ximo a restaurantes, supermercados e clubes esportivos.'
    ],
    infra: [
      'Vista para o mar',
      'Vista para o vale',
      'Cozinha completa',
      'Wi-Fi (Starlink)',
      'Estacionamento gratuito',
      'Hot tub privada',
      'Aceita animais',
      'CÃ¢meras de seguranÃ§a externas'
    ],
    facilities: ['Vista mar', 'Vista vale', 'Cozinha completa', 'Wi-Fi', 'Estacionamento', 'Hot tub privada', 'Pets allowed', 'CCTV'],
    gallery: {
      main: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11.jpeg',
      sideTop: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (1).jpeg',
      sideBottom: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (2).jpeg',
      extra: [
        '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
        '/Matanzas/4d4b9c44-ad67-43ad-8f6b-6497f7b6e7ea.avif',
        '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif',
        '/Matanzas/0bfb92e2-5b08-4696-9358-d73255e9a260.avif',
        '/Matanzas/15a79437-997a-4f9b-a07b-a36b5fe172d0.avif',
        '/Matanzas/24d1320e-ff30-4707-882b-e14889b2ea9f.avif',
        '/Matanzas/305fa07a-3d45-4f82-9123-3e865b38faba.avif',
        '/Matanzas/3085f490-6388-4f7c-95f9-6343c37aac7d.avif',
        '/Matanzas/350d46f6-6c96-4881-9528-f976da6fbdd2.avif',
        '/Matanzas/369ef9fe-3cde-4ff2-b972-97dc02848241.avif',
        '/Matanzas/65443974-02bc-47c0-a539-1176b151a859.avif',
        '/Matanzas/6645f7b5-7850-4a44-8ff9-2f81fa7ef623.avif',
        '/Matanzas/6bf326ed-a4c4-47d9-80db-6d6f54be6cdf.avif',
        '/Matanzas/725a4f32-c2a5-4742-9e90-08b08e521c18.avif',
        '/Matanzas/759bc098-ca7e-45f7-9704-acd9d1d5813c.avif',
        '/Matanzas/781a49e2-f375-4e78-bcf1-8c65c8b621a3.avif',
        '/Matanzas/83a2b71d-b9ec-4871-8a2c-fc2f497ae801.avif',
        '/Matanzas/90d53b04-d0e5-4165-8ddc-2aac9dcfc2fb.avif',
        '/Matanzas/91d6d8b9-8124-4c26-9667-42faac3e8e8a.avif',
        '/Matanzas/a932e2b8-9f65-46d6-888b-ec57fe433f45.avif',
        '/Matanzas/a9770997-5ed0-4be4-a499-e0cea6ad5cf3.avif',
        '/Matanzas/ab2b75b1-c894-4059-9449-3109eb6b4068.avif',
        '/Matanzas/b211e036-b276-4446-a3be-7ba65f801a82.avif',
        '/Matanzas/c51be852-eadb-4d58-9b5c-4913e56a873b.avif',
        '/Matanzas/cd0910d3-112f-4ef6-ac70-86906d62bd1c.avif',
        '/Matanzas/e57a4b54-7a44-4208-aa28-9c0f1d96c9e9.avif',
        '/Matanzas/f5cc0fd9-d4a5-4072-b7ec-d5bd90aeaad8.avif',
        '/Matanzas/f65a0d94-74da-40f4-9cf3-c6a9262e1be6.avif',
        '/Matanzas/fa0e51fa-d4a5-47cc-9cca-e9cd9d4ee58a.avif'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
    priceTag: 'DiÃ¡ria',
    price: 'Consulte',
    installments: 'Consulte pacotes',
    reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw',
    category: 'temporada'
  }
,
  {
    id: '11',
    slug: 'lote-109-taiba',
    title: 'VENDA',
    image: '/taiba/lote109_img-000.jpg',
    badge: 'Oportunidade',
    propertyTitle: 'LOTE 109 — TAIBA',
    location: 'Taiba, Ceará, Brasil',
    rating: 5,
    exclusiveText: '560 m² | 14 x 40m | Escritura | Murado | Pronto para Construir',
    summaryDescription: 'Terreno de 560 m² em localização estratégica entre duas casas já construídas em Taiba, totalmente murado e pronto para construir. Documentação regular com escritura.',
    about: [
      'Oportunidade única em Taiba: Lote de 560 m² (14 x 40 m) em localização privilegiada, situado estrategicamente entre duas casas já construídas.',
      'Segurança Jurídica: Imóvel com Escritura, garantindo transação sólida e proteção patrimonial integral.',
      'Totalmente murado e sem necessidade de aterro — um grande diferencial na região. Terreno 100% pronto para construir, sem custos adicionais de preparação.',
      'Taiba é um dos destinos mais valorizados do litoral cearense, conhecida por suas lagoas, ventos constantes ideais para kitesurf, e uma cena gastronômica e hoteleira em plena expansão.',
      'Valor muito abaixo do mercado — oportunidade para quem busca construir a casa dos sonhos ou investir em um terreno com alto potencial de valorização.'
    ],
    infra: [
      'Área Total: 560 m²',
      'Dimensões: 14 x 40 metros',
      'Escritura Pública',
      'Totalmente Murado',
      'Pronto para Construir (sem aterro)'
    ],
    facilities: ['560 m²', 'Escritura', 'Murado', 'Pronto para Construir', 'Localização Estratégica'],
    gallery: {
      main: '/taiba/lote109_img-000.jpg',
      sideTop: '/taiba/lote109_img-001.jpg',
      sideBottom: '/taiba/lote109_img-002.jpg',
      extra: [
        '/taiba/lote109_img-003.jpg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.5125,-38.9090&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Ficha do Lote 109',
        url: '/taiba/Lote_109_Taiba (1).pdf',
        legend: 'Detalhes completos, características e localização do terreno.'
      }
    ],
    priceTag: '',
    price: 'R$ 115.000,00',
    installments: 'À vista',
    category: 'venda'
  },
  {
    id: '12',
    slug: 'lote-barramar-lagoa-taiba',
    title: 'INVESTIMENTO',
    image: '/taiba/barramar720_img-000.jpg',
    badge: 'Investimento',
    propertyTitle: 'LOTE BARRAMAR LAGOA — TAIBA',
    location: 'Taiba, Ceará, Brasil',
    rating: 5,
    exclusiveText: '800 m² | 20 x 40m | ~300m da Lagoa do Kitesurf',
    summaryDescription: 'Terreno de 800 m² no Loteamento Barramar em Taiba, a apenas 300 metros da Lagoa do Kitesurf. Oportunidade de investimento em zona turística de alta valorização.',
    about: [
      'Oportunidade de investimento no Loteamento Barramar, em Taiba, Ceará: terreno de 800 m² (20 x 40 m) em zona turística de alta valorização.',
      'Localização Privilegiada: A apenas ~300 metros da famosa Lagoa do Kitesurf de Taiba, point mundial para esportes aquáticos e turismo de experiência.',
      'Taiba é reconhecida internacionalmente como um dos melhores destinos de kitesurf do mundo, com ventos constantes durante 6 a 8 meses por ano e infraestrutura turística em franca expansão.',
      'O Loteamento Barramar oferece terrenos amplos em uma região que combina tranquilidade, natureza e proximidade a serviços essenciais.',
      'Ideal para quem busca construir uma casa de veraneio, pousada ou investir em lotes com alto potencial de valorização no litoral cearense.'
    ],
    infra: [
      'Área Total: 800 m²',
      'Dimensões: 20 x 40 metros',
      'Distância da Lagoa: ~300 metros',
      'Loteamento Barramar'
    ],
    facilities: ['800 m²', 'Próximo à Lagoa', 'Kitesurf Paradise', 'Zona Turística'],
    gallery: {
      main: '/taiba/barramar720_img-000.jpg',
      sideTop: '/taiba/barramar720_img-001.jpg',
      sideBottom: '/taiba/Picture.png',
      extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.5125,-38.9090&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Ficha do Lote Barramar Lagoa',
        url: '/taiba/Lote_Barramar_Lagoa.pdf',
        legend: 'Detalhes completos do terreno no Loteamento Barramar.'
      }
    ],
    priceTag: '',
    price: 'R$ 215.000,00',
    installments: 'Consulte condições',
    category: 'investimento'
  }
];
