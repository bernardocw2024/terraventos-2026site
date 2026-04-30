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
    id: '09',
    slug: 'area-exclusiva-tatajuba-guriu-100000m',
    title: 'VENDA',
    image: 'https://vumbnail.com/1186057204.jpg',
    badge: 'Oportunidade Única',
    propertyTitle: 'ÁREA EXCLUSIVA PÉ NA AREIA — 100.000 m²',
    location: 'Entre Tatajuba e Guriú, Ceará, Brasil',
    rating: 5,
    exclusiveText: '100.000 m² | 200m de Frente Mar | Matrícula e Escritura Pública',
    about: [
      'Uma oportunidade monumental no litoral cearense: 10 hectares de área totalmente pé na areia localizada estrategicamente entre as vilas de Tatajuba e Guriú.',
      'Com 200 metros de frente para o mar, esta propriedade é um dos ativos mais raros e valiosos da região, ideal para o desenvolvimento de resorts de luxo, hotelaria de charme ou um refúgio particular de alto padrão.',
      'Segurança Jurídica Absoluta: Imóvel com Matrícula e Escritura Pública, garantindo uma transação sólida e proteção patrimonial integral.',
      'Infraestrutura e Acesso: Acesso facilitado pelos fundos e proximidade estratégica com rede de energia elétrica trifásica (apenas 500 metros), reduzindo significativamente os custos de implementação.',
      'Imagens e Vídeos por: Thiago Faquinel (@thiagofaquinel)'
    ],
    infra: [
      'Área Total: 100.000 m² (10 Hectares)',
      'Testada: 200 metros de frente mar',
      'Energia Trifásica a 500m',
      'Matrícula e Escritura Pública'
    ],
    facilities: ['200m Frente Mar', '10 Hectares', 'Energia Trifásica', 'Escritura Pública'],
    gallery: {
      main: 'https://vumbnail.com/1186057204.jpg',
      sideTop: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0’20”.jpg',
      sideBottom: '/GURIU/VS--Vimeo-TerraVentos-0’38”.jpg',
      extra: []
    },
    videoSources: [
      'https://player.vimeo.com/video/1186057204',
      'https://player.vimeo.com/video/1186057221'
    ],
    videoGalleryCredits: 'Vídeo por: Thiago Faquinel (@thiagofaquinel)',
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8477636,-40.6163572&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Tatajuba: O Paraíso Escondido do Kitesurf',
        url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
        legend: 'Leia mais sobre a localização e o potencial de valorização da região.'
      }
    ],
    price: 'R$ 15.000.000,00',
    installments: 'Investimento: R$ 150,00 por m²',
    priceTag: '',
    category: 'venda'
  },
  {
    id: '08',
    slug: 'terreno-exclusivo-tatajuba-1000m',
    title: 'VENDA',
    image: '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg',
    badge: 'Exclusividade',
    propertyTitle: 'TERRENO EXCLUSIVO EM TATAJUBA — 1.000 m²',
    location: 'Tatajuba, Ceará, Brasil',
    rating: 5,
    exclusiveText: '1.000 m² | Matrícula Individualizada | Oportunidade Única',
    about: [
      'Descubra a joia de Tatajuba: Um terreno de 1.000 m² no coração da vila que é o novo desejo do kitesurf mundial.',
      'Segurança Jurídica Total: Imóvel com matrícula individualizada e processo de desmembramento finalizado, oferecendo a tranquilidade que o investidor experiente exige.',
      'Localização Estratégica: Situado em uma região de altíssima valorização, ideal para quem busca construir um refúgio exclusivo ou realizar um investimento imobiliário estratégico.',
      'Estilo de Vida Tatajuba: Viva em harmonia com a natureza, em um local reconhecido por sua hospitalidade, ventos constantes e paisagens de tirar o fôlego.'
    ],
    infra: [
      'Área Total: 1.000 m²',
      'Matrícula Individualizada',
      'Localização Premium em Tatajuba',
      'Pronto para Desmembramento'
    ],
    facilities: ['1.000 m²', 'Matrícula Pronta', 'Kitesurf Paradise', 'Exclusividade'],
    gallery: {
      main: '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg',
      sideTop: '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22 (1).jpeg',
      sideBottom: '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.23.jpeg',
      extra: [
        '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.23 (1).jpeg',
        '/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.23 (2).jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.854046,-40.696586&hl=pt-BR&z=15&output=embed',
    documents: [
      {
        label: 'Tatajuba: O Paraíso Escondido do Kitesurf',
        url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
        legend: 'Leia mais sobre a localização e o potencial de valorização de Tatajuba.'
      },
      {
        label: 'Veja Planta',
        url: '/TATAJUBA/3a85c744-9b82-45ca-9042-125872c4e7f1.jpeg',
        legend: 'Visualize o desmembramento e dimensões exatas da área.'
      }
    ],
    priceTag: '',
    price: 'R$ 800.000,00',
    installments: 'Consulte condições exclusivas',
    category: 'venda'
  },
  {
    id: '07',
    slug: 'terreno-exclusivo-prea-200m-mar',
    title: 'VENDA',
    image: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
    badge: 'Oportunidade',
    propertyTitle: 'TERRENO EXCLUSIVO PREÁ — 200M DO MAR',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '250 m² | 10m x 25m | Apenas 200m da Praia',
    about: [
      'Excelente oportunidade de investimento em um dos destinos mais valorizados do litoral cearense.',
      'Terreno com 250 m² (10m x 25m) localizado em posição estratégica no Preá.',
      'Situado a apenas 200 metros da praia, vizinho aos prestigiados empreendimentos Botanik e Carnaúba Windhouse.',
      'Ideal para quem busca construir a casa dos sonhos ou investir em um mercado em plena ascensão.'
    ],
    infra: [
      'Área Total: 250 m²',
      'Dimensões: 10m x 25m',
      'Distância da Praia: 200m',
      'Localização Premium'
    ],
    facilities: ['200m da Praia', 'Vizinho Botanik', 'Vizinho Carnaúba', 'Exclusividade'],
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
    installments: 'Consulte condições de mercado',
    category: 'venda'
  },
  {
    id: '06',
    slug: 'prea-house',
    title: 'VENDA',
    image: '/Prea House/WhatsApp Image 2026-04-20 at 09.12.53.jpeg',
    badge: 'Venda',
    propertyTitle: 'PREÁ HOUSE',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '745 m² | 3 Suítes | Piscina de 68 m²',
    about: [
      'Propriedade luxuosa composta por duas construções separadas ligadas por uma piscina central.',
      'Casa dos Fundos: 2 suítes (32.5 m² cada), móveis planejados, área central de estar e cozinha (32 m²) com ilha e bancadas de madeira, despensa 10 m² e varanda frontal.',
      'Prédio Frontal: Área Gourmet semiaberta (54 m²), 1 suíte (24 m²), lavabo e depósito/garagem para quadriciclo (8.5 m²).',
      'Rooftop Terrace: 96 m² com preparação estrutural para expansão e infraestrutura para aquecimento a gás e bombas de pressão.',
      'Piscina em L: 65.000 litros (10m x 4m) com prainha, assentos embutidos e ionizador automatizado controlado por smartphone.',
      'Acabamento Premium: Esquadrias em Timborana, estrutura em Maçaranduba e deck em Tatajuba.'
    ],
    infra: [
      'Área Total: 745 m² | Construída: 261 m²',
      'Sistemas: Aquecimento a gás em todos os pontos e irrigação automatizada no jardim.',
      'Segurança: Alarme sincronizado em todas as portas e sistema CCTV com 8 câmeras de alta definição (acesso remoto).',
      'Elétrica: Portões automatizados com interfone e controle remoto.',
      'Versatilidade: Terraço preparado para construção de novas suítes ou área de lazer superior.'
    ],
    facilities: ['3 Suítes', 'Piscina de 68 m²', 'Área Gourmet', 'Rooftop', 'Segurança CCTV', 'Portão Eletrônico'],
    gallery: {
      main: '/Prea House/WhatsApp Image 2026-04-20 at 09.13.04.jpeg',
      sideTop: '/Prea House/WhatsApp Image 2026-04-20 at 09.12.55.jpeg',
      sideBottom: '/Prea House/WhatsApp Image 2026-04-20 at 09.13.06.jpeg',
      extra: [
        '/Prea House/1.jpeg',
        '/Prea House/2.jpeg',
        '/Prea House/3.jpeg',
        '/Prea House/4.jpeg',
        '/Prea House/5.jpeg',
        '/Prea House/6.jpeg',
        '/Prea House/7.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.52 (1).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.53 (1).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.54 (1).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.54.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.56.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.56 (1).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.56 (2).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.57.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.58.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.58 (1).jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.12.59.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.13.01.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.13.03.jpeg',
        '/Prea House/WhatsApp Image 2026-04-20 at 09.13.11.jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.812328,-40.428784&z=15&output=embed',
    priceTag: '',
    price: 'R$ 2.700.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: '04',
    slug: 'villa-prabhu',
    title: 'LANÇAMENTO',
    image: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
    badge: 'LANÇAMENTO',
    propertyTitle: 'VILLA PRABHU — PARACURU-CE',
    location: 'Paracuru, Ceará, Brasil',
    rating: 5,
    exclusiveText: 'Loteamento Fechado em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia. Alto padrão e exclusividade em uma das praias mais belas do Ceará',
    about: [
      'O Villa Prabhu é um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e segurança.',
      'Situado em uma região privilegiada com ampla área verde e recursos hídricos, o projeto destaca-se pelo planejamento urbano inteligente e integração com a natureza.',
      'Lotes Exclusivos: Unidades espaçosas com áreas privativas a partir de 242 m² até mais de 600 m².',
      'Planejamento de Etapas: Projeto dividido em fases, com a Etapa 1 já consolidada e unidades disponíveis na Etapa 2.',
      'Urbanismo de Qualidade: Infraestrutura pensada para o bem-estar, com ruas como a Av. Prabhu e Rua Azalea.'
    ],
    infra: [
      'Financiamento Direto: Facilidade de pagamento em até 120 parcelas mensais.',
      'Pronto para Investir: Documentação e tabela de vendas atualizada para 2026.',
      'Localização Estratégica: Quadras planejadas para garantir privacidade e fácil acesso às áreas comuns.',
      'Cenário Natural: Loteamento cercado por água e vegetação preservada.'
    ],
    facilities: ['Projeto Urbanístico', 'Parcelamento em 120x', 'Áreas Verdes', 'Pronto para Construir'],
    gallery: {
      main: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg',
      sideTop: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56.jpeg',
      sideBottom: '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (2).jpeg',
      extra: [
        '/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (1).jpeg'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.4146184,-39.046461&z=15&output=embed',
    videoSources: [
      'https://player.vimeo.com/video/1179327775?h=c94b7f80f1',
      'https://player.vimeo.com/video/1179327749?h=9d3c5f80f1',
      'https://player.vimeo.com/video/1179327705?h=7a1b5f80f1',
      'https://player.vimeo.com/video/1179327631?h=2e9d5f80f1'
    ],
    documents: [
      {
        label: 'Tabela de Preços (120 meses) – Atualizada 2026',
        url: '/VILLA_PRABHU/Tabela de Preços (120 meses).pdf',
        legend: 'Detalhamento de valores, sinal e parcelas mensais.'
      },
      {
        label: 'Mapa de Disponibilidade (Masterplan)',
        url: '/VILLA_PRABHU/Mapa de Disponibilidade (Masterplan).pdf',
        legend: 'Visualize a localização exata de cada lote e áreas verdes.'
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
    image: '/VillaCondutuPaginaInicial/FINAL 14.png',
    badge: 'Temporada',
    propertyTitle: 'CASA ALTO PADRÃO 3 SUÍTES',
    location: 'FRENTE À PRAIA DO PREÁ',
    rating: 5,
    exclusiveText: 'FRENTE À PRAIA DO PREÁ',
    about: [
      'Vila Conduru III — Piscina, churrasqueira, varanda e condomínio de luxo 24 horas.',
      'Seu Refúgio Privado Beira-Mar no Preá: A experiência definitiva de luxo rústico.',
      'A Vila Conduru III é agora seu palco privado para o melhor vento do mundo e eventos exclusivos. Localizada literalmente à beira-mar.',
      '1. Localização Beira-Mar: Esqueça transfers ou longas caminhadas. Aqui, o quintal é a praia.',
      '2. Experiência de Resort: A exclusividade de uma vila com as comodidades de um hotel boutique.',
      '3. Arquitetura que Respira (Design Bioclimático)',
      '4. Estilo de Vida Orgânico & Conectividade: A vila elimina as barreiras entre você e o paraíso.',
      '5. Suporte Concierge Terra Ventos: Sua única preocupação será velejar.'
    ],
    infra: [
      'Piscina no condomínio',
      '3 suítes amplas',
      'Churrasqueira',
      'Beira-mar',
      'Kite-point',
      'Projeto Patricia Mureta',
      'Estacionamento',
      'Segurança 24h'
    ],
    facilities: ['3 Suítes', 'Beira-mar', 'Pé na areia', 'Piscina', 'Cozinha Completa', 'Ar-condicionado', 'Lavabo', 'Estacionamento', 'Segurança 24h'],
    gallery: {
      main: '/VillaCondutuPaginaInicial/Final 01 (2).png',
      sideTop: '/VillaCondutuPaginaInicial/FINAL 02 (1).png',
      sideBottom: '/VillaCondutuPaginaInicial/Final 02 (2).png',
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
    priceTag: 'Diária',
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
    propertyTitle: 'TERRENOS PÉ NA AREIA EM BITUPITÁ',
    location: 'Bitupitá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '4.300 m² | 10 Projetos de Terrenos Exclusivos',
    about: [
      'A Próxima Fronteira de Valorização: Exclusividade, pé na areia e o m² mais estratégico do Litoral Oeste.',
      'Existem lugares que o mercado ainda não descobriu, mas o vento sim. Bitupitá é o último refúgio intocado na Rota Costa dos Ventos.',
      '1. A Nova Rota do Foil: Com ventos constantes durante 6 a 8 meses por ano e águas perfeitas para foil.',
      '2. Escassez Real: Um projeto de apenas 10 lotes exclusivos, garantindo baixa densidade e privacidade absoluta.',
      '3. Acesso Direto Beira-Mar: Propriedades com frente mar livre e acesso imediato à praia.',
      '4. Segurança Jurídica Terra Ventos: Documentação 100% revisada com matrícula individualizada.'
    ],
    infra: [
      'Localização Prime e Exclusiva',
      'Vila Privativa com 10 projetos',
      'Pé na areia',
      'Ideal para o velejo/kite'
    ],
    facilities: ['Projeto Exclusivo', 'Beira-mar', 'Próximo a serviços'],
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
    propertyTitle: 'VILA DO INGLÊS',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '200 m² | 2 Banheiros | 10 Projetos Exclusivos',
    about: [
      'A Essência do Luxo Sustentável: Uma mistura única de sustentabilidade moderna e tranquilidade.',
      'Inspirada em um refúgio de Nova York, esta residência oferece 200 m² alimentados inteiramente por energia solar.',
      '1. Design Sustentável: Sistemas inteligentes com painéis solares no telhado.',
      '2. Conforto Estilo Spa: 2 banheiros modernos e imersivos.',
      '3. Transparência Dinâmica: Amplas paredes de vidro do chão ao teto.',
      '4. Privacidade Panorâmica: Terraço privativo no rooftop.',
      '5. Conexão Exclusiva: O contraste entre a localização premium e a paz isolada.'
    ],
    infra: [
      'Sistema de painéis solares no rooftop',
      'Paredes de vidro do chão ao teto',
      'Terraço privativo no rooftop',
      '2 banheiros modernos',
      'Localização isolada de alto padrão'
    ],
    facilities: ['!Beira-mar', 'Ar-condicionado', '!Máquina de lavar', '!Internet', 'Aquecedor de água', 'Geladeira', 'Sofá', 'Guarda-roupa'],
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
    exclusiveText: 'Descubra Matanzas Paradise 🌊 Casa moderna confortavelmente equipada para 6 hóspedes, vistas panorâmicas espetaculares do mar e da floresta.',
    about: [
      'Descubra Matanzas Paradise: Casa moderna confortavelmente equipada para 6 hóspedes.',
      'Vistas panorâmicas espetaculares do mar e da floresta.',
      'Ideal para quem busca tranquilidade em um dos destinos de kitesurf e windsurf mais icônicos do Chile.',
      '1. Fora da rede: energia solar, espaço sustentável em harmonia com a natureza.',
      '2. Estacionamento privado no local.',
      '3. Localização Privilegiada: Apenas 7 min da Praia de Matanzas e La Vega de Pupuya.',
      '4. Terraço com hot tub (ofurô privado).',
      '5. Ambiente tranquilo, próximo a restaurantes, supermercados e clubes esportivos.'
    ],
    infra: [
      'Vista para o mar',
      'Vista para o vale',
      'Cozinha completa',
      'Wi-Fi (Starlink)',
      'Estacionamento gratuito',
      'Hot tub privada',
      'Aceita animais',
      'Câmeras de segurança externas'
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
    priceTag: 'Diária',
    price: 'Consulte',
    installments: 'Consulte pacotes',
    reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw',
    category: 'temporada'
  }
];
