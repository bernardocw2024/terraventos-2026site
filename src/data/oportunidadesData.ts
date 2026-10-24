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
    sideTop: string | null;
    sideBottom: string | null;
    extra?: string[];
  };
  mapImage: string;
  mapUrl?: string;
  videoSources?: string[];
  videoThumbnails?: string[];
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
  unlisted?: boolean;
  /** Continua visível no site (listagem, busca etc), mas não aparece no carrossel
   * "Explore Nossos Projetos Exclusivos" da home — nem via curadoria manual nem
   * via auto-detecção de imóvel novo (ver ProjetosDestaque.tsx). */
  hideFromDestaque?: boolean;
  lotes?: LoteOverride[];
  referralCode?: string;
};

// Um terreno subdividido em lotes pode oferecer opções de preço/área diferentes
// (ex: comprar 1 lote vs. a área toda). Campos omitidos herdam do item pai.
export type LoteOverride = Partial<Pick<OportunidadeDetalhe,
  | 'priceTag' | 'price' | 'installments' | 'reservationUrl'
  | 'about' | 'infra' | 'facilities' | 'gallery' | 'mapImage' | 'mapUrl'
>> & {
  id: string;
  label: string;
};

export function resolveLoteView(item: OportunidadeDetalhe, loteId: string): OportunidadeDetalhe {
  const lote = item.lotes?.find(l => l.id === loteId);
  return lote ? { ...item, ...lote } : item;
}

export const oportunidadesData: OportunidadeDetalhe[] = [
  {
    id: 'vila-cangalha-camocim',
    slug: 'vila-cangalha-camocim-leo',
    title: 'LANÇAMENTO',
    searchTitle: 'Vila Cangalha — Condomínio Boutique em Camocim',
    image: '/imoveis/vila-cangalha-camocim-01.webp',
    badge: 'Lançamento Exclusivo',
    propertyTitle: 'VILA CANGALHA — CONDOMÍNIO BOUTIQUE EM CAMOCIM',
    location: 'Praia de Caraúbas, Camocim - CE',
    rating: 5,
    exclusiveText: 'Casas de 1, 2 e 3 Quartos com Piscina Privativa | Gestão Hoteleira Completa | Restaurante, Spa, Academia e Escola de Kite | Terrenos de 400 m²',
    summaryDescription: 'Condomínio boutique de casas de praia na Praia de Caraúbas, litoral oeste de Camocim, com gestão hoteleira completa — restaurante, spa, academia, espaço beauty, home office e escola de kite. Casas de 1, 2 e 3 quartos, com ou sem piscina privativa, a partir de R$ 1.059.422,77.',
    about: [
      'É raro encontrar uma casa de praia que una propriedade própria, estrutura de hotel e geração de renda em um único endereço. O Vila Cangalha nasce nesse conceito, na Praia de Caraúbas — uma das últimas praias preservadas do litoral oeste cearense, em Camocim, com mais de 60 km de faixa de areia, mar calmo e um dos ventos mais fortes do estado, condição rara para a prática de kitesurf e outros esportes náuticos.',
      'Cada terreno tem 400 m² (20x20) e o proprietário escolhe entre três modelos de casa — Lagoa (1 quarto), Duna (2 quartos) e Palmeira (3 quartos) —, cada um disponível com ou sem piscina privativa e fire deck. Todas as casas têm varanda gourmet e quartos equipados com Smart TV, ar-condicionado, cama king size, frigobar e chuveiro ao ar livre.',
      'A área comum foi projetada para que o morador nunca precise sair do condomínio: recepção 24h, restaurante com café da manhã, almoço e jantar, spa com sala de massagem e espaço de meditação, academia completa, home office compartilhado com sala de reunião, espaço beauty, capela para cerimônias, brinquedoteca, piscina adulto e infantil, quadras de beach tennis e vôlei, e um Kite Point com escola de kitesurf credenciada e armazenamento de equipamento.',
      'O diferencial do Vila Cangalha é o modelo de gestão hoteleira, em parceria com uma pousada boutique de hotelaria de luxo com mais de 5 anos de experiência nos Lençóis Maranhenses: o proprietário recebe participação nos resultados da locação de todas as casas, além do restaurante, do SPA, da escola de kite e das quadras — sem se preocupar com limpeza, manutenção ou taxa de condomínio tradicional. Estudos de viabilidade de mercado (comparando Jericoacoara, Preá e Barra Grande) projetam taxa de ocupação atual de 44% ao ano, podendo variar de 26% (cenário pessimista) a 71% (cenário otimista).',
      'A comercialização é flexível: cada terreno pode ser vendido separadamente da casa, e a tabela de preços prevê até 6 configurações por lote (com e sem piscina, em cada um dos três modelos). O valor final reúne terreno, casa e enxoval completo, entregue pronto para uso. O empreendimento já conta com alvará e licença ambiental (AMA-LI) emitidos, matrícula em cartório disponível e tabela de preços aberta, com entrada de 30%, financiamento da incorporação em até 36 parcelas e 20% na entrega das chaves.'
    ],
    infra: [
      'Área total do condomínio: 30.104 m², com 37 lotes de 400 m² (20x20) cada',
      'Recepção 24h, administração e estacionamento',
      'Restaurante com café da manhã, almoço e jantar',
      'Spa, sala de massagem e espaço de meditação',
      'Academia completa e home office compartilhado com sala de reunião',
      'Espaço Beauty (salão)',
      'Capela para cerimônias',
      'Brinquedoteca / guarderia',
      'Piscina adulto e infantil, jogos e churrasqueira',
      'Quadras de beach tennis e vôlei de praia',
      'Kite Point: escola de kitesurf credenciada, com armazenamento de equipamento',
      'Gestão hoteleira completa: limpeza, manutenção, check-in/check-out e central de reservas'
    ],
    facilities: ['Terrenos de 400 m²', 'Casas de 1 a 3 Quartos', 'Piscina Privativa', 'Gestão Hoteleira', 'Restaurante & Spa', 'Escola de Kite'],
    gallery: {
      main: '/imoveis/vila-cangalha-camocim-01.webp',
      sideTop: '/imoveis/vila-cangalha-camocim-02.webp',
      sideBottom: '/imoveis/vila-cangalha-camocim-03.webp',
      extra: [
        '/imoveis/vila-cangalha-camocim-04.webp',
        '/imoveis/vila-cangalha-camocim-05.webp',
        '/imoveis/vila-cangalha-camocim-06.webp',
        '/imoveis/vila-cangalha-camocim-07.webp',
        '/imoveis/vila-cangalha-camocim-08.webp',
        '/imoveis/vila-cangalha-camocim-09.webp',
        '/imoveis/vila-cangalha-camocim-10.webp',
        '/imoveis/vila-cangalha-camocim-11.webp',
        '/imoveis/vila-cangalha-camocim-12.webp',
        '/imoveis/vila-cangalha-camocim-13.webp',
        '/imoveis/vila-cangalha-camocim-14.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8726917,-40.9128774&hl=pt-BR&z=16&output=embed',
    videoSources: [],
    documents: [
      {
        label: 'Book de Apresentação',
        url: '/documentos/vila-cangalha-camocim-book-apresentacao.pdf',
        legend: 'Apresentação completa do Vila Cangalha: conceito, infraestrutura, modelos de casa e proposta de gestão hoteleira.'
      },
      {
        label: 'Tabela de Preços Completa',
        url: '/documentos/vila-cangalha-camocim-tabela-de-precos.pdf',
        legend: 'Tabela com todas as combinações de terreno e modelo de casa (com e sem piscina), entrada, financiamento e parcelas.'
      }
    ],
    priceTag: 'A partir de',
    price: 'R$ 1.059.422,77',
    installments: 'Entrada 30% + financiamento da incorporação em até 36x + 20% nas chaves',
    category: 'lancamento',
    lotes: [
      {
        id: 'visao-geral',
        label: 'Visão Geral do Condomínio'
      },
      {
        id: 'casa-lagoa-1q',
        label: 'Casa Lagoa — 1 Quarto',
        priceTag: 'A partir de',
        price: 'R$ 1.059.422,77',
        installments: 'Até R$ 1.595.389,32 na versão com piscina — consulte a tabela completa',
        about: [
          'Modelo compacto de 1 quarto (94,55 m² sem piscina, ou 155,43 m² na versão com piscina privativa e fire deck), pensado para casais ou para quem busca a menor unidade de entrada no Vila Cangalha.',
          'A casa reúne varanda gourmet, sala de estar integrada e um quarto equipado com Smart TV, ar-condicionado, cama king size, frigobar e chuveiro ao ar livre.',
          'Preço a partir de R$ 1.059.422,77 (sem piscina) até R$ 1.595.389,32 (com piscina), variando conforme a localização do terreno dentro do condomínio — consulte a tabela de preços completa para todas as combinações de lote.'
        ],
        infra: [
          'Área construída: 94,55 m² (sem piscina) ou 155,43 m² (com piscina)',
          '1 quarto com Smart TV, ar-condicionado, cama king size e frigobar',
          'Chuveiro ao ar livre',
          'Varanda gourmet',
          'Piscina privativa e fire deck (versão com piscina)',
          'Terreno de 400 m² (20x20)'
        ],
        facilities: ['1 Quarto', '94 a 155 m²', 'Piscina Opcional', 'Varanda Gourmet'],
        gallery: {
          main: '/imoveis/vila-cangalha-camocim-lagoa-01.webp',
          sideTop: '/imoveis/vila-cangalha-camocim-lagoa-02.webp',
          sideBottom: null,
          extra: []
        }
      },
      {
        id: 'casa-duna-2q',
        label: 'Casa Duna — 2 Quartos',
        priceTag: 'A partir de',
        price: 'R$ 1.436.074,79',
        installments: 'Até R$ 2.051.477,57 na versão com piscina — consulte a tabela completa',
        about: [
          'Modelo duplex de 2 quartos (130,80 m² sem piscina, ou 191,68 m² com piscina privativa e fire deck), com pé-direito duplo na sala de estar e escada em madeira que conecta os dois pavimentos.',
          'O térreo reúne varanda gourmet, sala de estar integrada e jardim de inverno sob a escada; no pavimento superior, as suítes têm acesso a uma varanda voltada para o coqueiral. Ambos os quartos são equipados com Smart TV, ar-condicionado, cama king size, frigobar e chuveiro ao ar livre.',
          'Preço a partir de R$ 1.436.074,79 (sem piscina) até R$ 2.051.477,57 (com piscina), variando conforme a localização do terreno — consulte a tabela de preços completa para todas as combinações.'
        ],
        infra: [
          'Área construída: 130,80 m² (sem piscina) ou 191,68 m² (com piscina)',
          '2 quartos, ambos com Smart TV, ar-condicionado, cama king size e frigobar',
          'Sala de estar com pé-direito duplo e escada em madeira',
          'Varanda gourmet e jardim de inverno',
          'Piscina privativa e fire deck (versão com piscina)',
          'Terreno de 400 m² (20x20)'
        ],
        facilities: ['2 Quartos', '131 a 192 m²', 'Duplex', 'Piscina Opcional'],
        gallery: {
          main: '/imoveis/vila-cangalha-camocim-duna-01.webp',
          sideTop: '/imoveis/vila-cangalha-camocim-duna-02.webp',
          sideBottom: '/imoveis/vila-cangalha-camocim-duna-03.webp',
          extra: ['/imoveis/vila-cangalha-camocim-duna-04.webp']
        }
      },
      {
        id: 'casa-palmeira-3q',
        label: 'Casa Palmeira — 3 Quartos',
        priceTag: 'A partir de',
        price: 'R$ 1.581.326,07',
        installments: 'Até R$ 2.206.983,01 na versão com piscina — consulte a tabela completa',
        about: [
          'O maior modelo do Vila Cangalha, com 3 quartos (152,40 m² sem piscina, ou 213,28 m² com piscina privativa e fire deck), indicado para famílias grandes ou para quem pretende operar mais de uma unidade de hospedagem simultaneamente.',
          'Assim como os demais modelos, a casa Palmeira tem varanda gourmet, sala de estar integrada e suítes equipadas com Smart TV, ar-condicionado, cama king size, frigobar e chuveiro ao ar livre, distribuídas em dois pavimentos.',
          'Preço a partir de R$ 1.581.326,07 (sem piscina) até R$ 2.206.983,01 (com piscina), variando conforme a localização do terreno — consulte a tabela de preços completa para todas as combinações.'
        ],
        infra: [
          'Área construída: 152,40 m² (sem piscina) ou 213,28 m² (com piscina)',
          '3 quartos, todos com Smart TV, ar-condicionado, cama king size e frigobar',
          '2 pavimentos, com varanda gourmet no térreo',
          'Piscina privativa e fire deck (versão com piscina)',
          'Terreno de 400 m² (20x20)'
        ],
        facilities: ['3 Quartos', '152 a 213 m²', '2 Pavimentos', 'Piscina Opcional'],
        gallery: {
          main: '/imoveis/vila-cangalha-camocim-palmeira-01.webp',
          sideTop: '/imoveis/vila-cangalha-camocim-palmeira-02.webp',
          sideBottom: '/imoveis/vila-cangalha-camocim-palmeira-03.webp',
          extra: ['/imoveis/vila-cangalha-camocim-palmeira-04.webp']
        }
      }
    ]
  },
  {
    id: 'casa-2-chales-serrote-jericoacoara',
    slug: 'casa-2-chales-serrote-jericoacoara-dolores',
    title: 'VENDA',
    searchTitle: 'Casa + 2 Chalés no Serrote — Jericoacoara',
    image: '/imoveis/casa-2-chales-serrote-jericoacoara-01.webp',
    badge: 'Oportunidade Exclusiva',
    propertyTitle: 'CASA + 2 CHALÉS NO SERROTE — JERICOACOARA',
    location: 'Beco do Serrote, Jericoacoara - CE',
    rating: 5,
    exclusiveText: '4 Unidades | Casa + 2 Chalés | 311 m² no coração do Serrote | 300 m da Praia da Malhada',
    summaryDescription: 'Conjunto à venda no Beco do Serrote, a área mais nobre de Jericoacoara: casa principal e dois chalés que somam 4 unidades de hospedagem, totalmente mobiliados, em um jardim exuberante a 300 metros da Praia da Malhada e a passos da Rua do Forró.',
    about: [
      'É raro um endereço assim ficar disponível em Jericoacoara. Este conjunto está no Beco do Serrote — a região mais valorizada da vila —, a apenas 300 metros da Praia da Malhada e a poucos passos da Rua do Forró: toda a energia de Jeri ao redor e, ao mesmo tempo, o silêncio de um quintal cercado por vegetação.',
      'São 4 unidades de hospedagem independentes, distribuídas em uma casa principal e dois chalés, unidas por um jardim maduro e sombreado, com redário, varandas e estares ao ar livre. Os dois chalés têm cozinha própria e mezanino de madeira; a casa principal reúne uma suíte no pavimento superior e um apartamento térreo com cozinha independente.',
      'Tudo é entregue mobiliado e pronto para uso, no estilo rústico-sofisticado de Jeri — madeira de demolição, telha cerâmica, iluminação artesanal e acabamentos que envelhecem bem. Uma configuração ideal para morar em uma unidade e rentabilizar as demais, ou para operar como pousada boutique de alto padrão.',
      'O terreno tem 311,81 m², com cerca de 12,3 metros de frente para o Beco do Serrote e aproximadamente 25 metros de profundidade, e 191 m² de área construída. A propriedade conta ainda com lavanderia, rouparia, área de churrasco, cisterna de 5.000 litros e duas caixas d’água de 2.000 litros.',
      'A documentação está em ordem, com levantamento topográfico registrado — segurança jurídica para uma compra tranquila. Jericoacoara é um dos destinos de maior valorização do litoral brasileiro, com voos diretos das principais capitais para o Aeroporto de Jericoacoara (JJD) e demanda de locação forte o ano inteiro. Um ativo escasso, em localização insubstituível.'
    ],
    infra: [
      'Terreno de 311,81 m² (frente de ~12,3 m para o Beco do Serrote)',
      'Área construída de 191 m²',
      '4 unidades de hospedagem: casa principal + 2 chalés',
      '2 chalés com cozinha e mezanino de madeira',
      'Suíte no pavimento superior da casa principal',
      'Apartamento térreo com cozinha independente',
      'Lavanderia e rouparia',
      'Área de churrasco',
      'Cisterna de 5.000 litros + 2 caixas d’água de 2.000 litros',
      'Totalmente mobiliado (porteira fechada)',
      'Documentação em ordem, com levantamento topográfico registrado',
      'A 300 m da Praia da Malhada e a passos da Rua do Forró'
    ],
    facilities: ['311 m² de Terreno', 'Casa + 2 Chalés', '4 Unidades', 'Mobiliado', '300 m da Praia', 'Serrote'],
    gallery: {
      main: '/imoveis/casa-2-chales-serrote-jericoacoara-01.webp',
      sideTop: '/imoveis/casa-2-chales-serrote-jericoacoara-02.webp',
      sideBottom: '/imoveis/casa-2-chales-serrote-jericoacoara-03.webp',
      extra: [
        '/imoveis/casa-2-chales-serrote-jericoacoara-04.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-05.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-06.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-07.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-08.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-09.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-10.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-11.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-12.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-13.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-14.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-15.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-16.webp',
        '/imoveis/casa-2-chales-serrote-jericoacoara-17.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.79371,-40.51372&hl=pt-BR&z=18&output=embed',
    videoSources: ['https://player.vimeo.com/video/1221853632', 'https://player.vimeo.com/video/1221856310'],
    documents: [
      {
        label: 'Levantamento Topográfico',
        url: '/documentos/casa-2-chales-serrote-jericoacoara-levantamento-topografico.pdf',
        legend: 'Levantamento planimétrico do terreno no Beco do Serrote, Jijoca de Jericoacoara — 311,81 m² e perímetro de 75,37 m.'
      }
    ],
    priceTag: 'Valor',
    price: 'R$ 2.500.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: 'casa-prea-5-suites-vlad',
    slug: 'casa-praia-do-prea-5-suites-vlad',
    title: 'VENDA',
    searchTitle: 'Casa 5 Suítes Praia do Preá',
    image: '/imoveis/casa-praia-do-prea-5-suites-vlad-01.webp',
    badge: 'Alto Padrão',
    propertyTitle: 'CASA 5 SUÍTES NA PRAIA DO PREÁ',
    location: 'Praia do Preá, Ceará',
    rating: 5,
    exclusiveText: '5 Suítes | Dois Andares Independentes | 1.734 m² de Terreno',
    summaryDescription: 'Casa de alto padrão na Praia do Preá, a poucos minutos do centro, com 5 suítes distribuídas em dois andares que podem ser usados de forma independente.',
    about: [
      'Casa de alto padrão à venda na Praia do Preá, a poucos minutos do centro, combinando localização tranquila com vista privilegiada.',
      'São 5 suítes bem distribuídas em dois andares, que podem ser utilizados de forma independente — ideal para famílias grandes ou para quem busca flexibilidade de uso, unindo espaço e aconchego.',
      'A infraestrutura interna, somada à proximidade com bons restaurantes e beach clubs, torna o dia a dia mais simples, sem a necessidade de grandes deslocamentos.'
    ],
    infra: [
      '5 Suítes distribuídas em 2 andares independentes',
      'Área construída: 739,56 m²',
      'Área total do terreno: 1.734,10 m²',
      'A poucos minutos do centro do Preá',
      'Próximo a restaurantes e beach clubs'
    ],
    facilities: ['5 Suítes', '739m² Construídos', '1.734m² de Terreno', 'Praia do Preá'],
    gallery: {
      main: '/imoveis/casa-praia-do-prea-5-suites-vlad-01.webp',
      sideTop: '/imoveis/casa-praia-do-prea-5-suites-vlad-02.webp',
      sideBottom: '/imoveis/casa-praia-do-prea-5-suites-vlad-03.webp',
      extra: [
        '/imoveis/casa-praia-do-prea-5-suites-vlad-04.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-05.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-06.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-07.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-08.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-09.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-10.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-11.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-12.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Preá,+Cruz,+Ceará&hl=pt-BR&z=14&output=embed',
    videoSources: [],
    priceTag: 'Valor',
    price: 'R$ 7.500.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: 'vila-prea-gusso',
    slug: 'vila-exclusiva-prea-gusso',
    title: 'VENDA',
    searchTitle: 'Vila Exclusiva no Preá',
    image: '/imoveis/vila-exclusiva-prea-gusso-01.webp',
    badge: 'Oportunidade Exclusiva',
    propertyTitle: 'VILA EXCLUSIVA NO PREÁ',
    location: 'Preá, Cruz - CE',
    rating: 5,
    exclusiveText: '4 Suítes | Piscina | Cozinha Gourmet | 782m² de Terreno',
    summaryDescription: 'Vila exclusiva no Preá, a 7 minutos a pé da praia, com 4 suítes distribuídas em 3 apartamentos independentes, piscina em estilo resort e cozinha gourmet externa.',
    about: [
      'Uma das casas mais espetaculares do Preá, esta vila exclusiva combina sofisticação, conforto e privacidade a apenas 7 minutos de caminhada da praia. Projetada para um estilo de vida elegante e descontraído, é perfeita para famílias, receber amigos ou para quem valoriza o lifestyle do kitesurf em uma das regiões mais desejadas do Ceará.',
      'A propriedade acomoda confortavelmente mais de 10 pessoas, distribuídas em três apartamentos independentes, totalizando 4 quartos privativos, 4 banheiros completos e um quinto banheiro de apoio junto à piscina e à cozinha gourmet externa.',
      'No térreo, dois estúdios aconchegantes de um quarto, totalmente independentes, cada um com cama queen-size, duas camas de solteiro adicionais, banheiro privativo e cozinha compacta. No andar superior, um apartamento amplo e iluminado com dois quartos, ambos com cama queen-size, sala de estar espaçosa, sofá conversível em duas camas extras, dois banheiros completos e kitchenette.',
      'O grande destaque é a área externa, com piscina em estilo resort e uma cozinha gourmet ao ar livre totalmente equipada, ideal para confraternizações. A casa ainda conta com lavanderia, banheiro adicional, amplo espaço de armazenamento, e uma arquitetura que privilegia a integração entre ambientes internos e externos, com paisagismo exuberante e acabamentos de alto padrão.',
      'Localizada em uma das áreas mais valorizadas do Preá, a propriedade está inserida em um entorno que combina tranquilidade, natureza preservada e excelente infraestrutura — restaurantes renomados, cafés charmosos, mercados, escolas, lojas e serviços essenciais, mantendo um ambiente residencial agradável e com ótima qualidade de vida.',
      'O Preá faz parte do polo turístico de Jericoacoara, reconhecido pelo forte crescimento imobiliário e alto potencial de valorização, e está a aproximadamente 15 minutos do Aeroporto Regional de Jericoacoara (JJD), com voos diretos das principais capitais do Brasil — fortalecendo o potencial do imóvel tanto para uso residencial quanto para investimento.'
    ],
    infra: [
      'Casa de vila com 3 apartamentos independentes (4 suítes)',
      '5 banheiros completos',
      'Área construída de 220 m² em terreno de 782,49 m² (lote 14 x 55,9 m)',
      'Construção nova, finalizada em dezembro de 2025',
      '5 vagas de estacionamento, 2 pisos',
      'Piscina em estilo resort e cozinha gourmet externa equipada',
      'Churrasqueira e varanda gourmet',
      'Dependência de empregada e depósito',
      'Closet, ar-condicionado e internet via fibra óptica',
      'Permite animais de estimação',
      'A 7 minutos a pé da praia do Preá',
      'A aprox. 15 minutos do Aeroporto Regional de Jericoacoara (JJD)'
    ],
    facilities: ['4 Suítes', 'Piscina', 'Cozinha Gourmet', '782m² de Terreno', '7 min da Praia'],
    gallery: {
      main: '/imoveis/vila-exclusiva-prea-gusso-01.webp',
      sideTop: '/imoveis/vila-exclusiva-prea-gusso-02.webp',
      sideBottom: '/imoveis/vila-exclusiva-prea-gusso-03.webp',
      extra: [
        '/imoveis/vila-exclusiva-prea-gusso-04.webp',
        '/imoveis/vila-exclusiva-prea-gusso-05.webp',
        '/imoveis/vila-exclusiva-prea-gusso-06.webp',
        '/imoveis/vila-exclusiva-prea-gusso-07.webp',
        '/imoveis/vila-exclusiva-prea-gusso-08.webp',
        '/imoveis/vila-exclusiva-prea-gusso-09.webp',
        '/imoveis/vila-exclusiva-prea-gusso-10.webp',
        '/imoveis/vila-exclusiva-prea-gusso-11.webp',
        '/imoveis/vila-exclusiva-prea-gusso-12.webp',
        '/imoveis/vila-exclusiva-prea-gusso-13.webp',
        '/imoveis/vila-exclusiva-prea-gusso-14.webp',
        '/imoveis/vila-exclusiva-prea-gusso-15.webp',
        '/imoveis/vila-exclusiva-prea-gusso-16.webp',
        '/imoveis/vila-exclusiva-prea-gusso-17.webp',
        '/imoveis/vila-exclusiva-prea-gusso-18.webp',
        '/imoveis/vila-exclusiva-prea-gusso-19.webp',
        '/imoveis/vila-exclusiva-prea-gusso-20.webp',
        '/imoveis/vila-exclusiva-prea-gusso-21.webp',
        '/imoveis/vila-exclusiva-prea-gusso-22.webp',
        '/imoveis/vila-exclusiva-prea-gusso-23.webp',
        '/imoveis/vila-exclusiva-prea-gusso-24.webp',
        '/imoveis/vila-exclusiva-prea-gusso-25.webp',
        '/imoveis/vila-exclusiva-prea-gusso-26.webp',
        '/imoveis/vila-exclusiva-prea-gusso-27.webp',
        '/imoveis/vila-exclusiva-prea-gusso-28.webp',
        '/imoveis/vila-exclusiva-prea-gusso-29.webp',
        '/imoveis/vila-exclusiva-prea-gusso-30.webp',
        '/imoveis/vila-exclusiva-prea-gusso-31.webp',
        '/imoveis/vila-exclusiva-prea-gusso-32.webp',
        '/imoveis/vila-exclusiva-prea-gusso-33.webp',
        '/imoveis/vila-exclusiva-prea-gusso-34.webp',
        '/imoveis/vila-exclusiva-prea-gusso-35.webp',
        '/imoveis/vila-exclusiva-prea-gusso-36.webp',
        '/imoveis/vila-exclusiva-prea-gusso-37.webp',
        '/imoveis/vila-exclusiva-prea-gusso-38.webp',
        '/imoveis/vila-exclusiva-prea-gusso-39.webp',
        '/imoveis/vila-exclusiva-prea-gusso-40.webp',
        '/imoveis/vila-exclusiva-prea-gusso-41.webp',
        '/imoveis/vila-exclusiva-prea-gusso-42.webp',
        '/imoveis/vila-exclusiva-prea-gusso-43.webp',
        '/imoveis/vila-exclusiva-prea-gusso-44.webp',
        '/imoveis/vila-exclusiva-prea-gusso-45.webp',
        '/imoveis/vila-exclusiva-prea-gusso-46.webp',
        '/imoveis/vila-exclusiva-prea-gusso-47.webp',
        '/imoveis/vila-exclusiva-prea-gusso-48.webp',
        '/imoveis/vila-exclusiva-prea-gusso-49.webp',
        '/imoveis/vila-exclusiva-prea-gusso-50.webp',
        '/imoveis/vila-exclusiva-prea-gusso-51.webp',
        '/imoveis/vila-exclusiva-prea-gusso-52.webp',
        '/imoveis/vila-exclusiva-prea-gusso-53.webp',
        '/imoveis/vila-exclusiva-prea-gusso-54.webp',
        '/imoveis/vila-exclusiva-prea-gusso-55.webp',
        '/imoveis/vila-exclusiva-prea-gusso-56.webp',
        '/imoveis/vila-exclusiva-prea-gusso-57.webp',
        '/imoveis/vila-exclusiva-prea-gusso-58.webp',
        '/imoveis/vila-exclusiva-prea-gusso-59.webp',
        '/imoveis/vila-exclusiva-prea-gusso-60.webp',
        '/imoveis/vila-exclusiva-prea-gusso-61.webp',
        '/imoveis/vila-exclusiva-prea-gusso-62.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Av+Vila+Formosa,+Preá,+Cruz,+Ceará&hl=pt-BR&z=15&output=embed',
    videoSources: [],
    priceTag: 'Valor',
    price: 'R$ 4.490.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    unlisted: true
  },
  {
    id: 'casa-vila-9-bangalos-prea-gusso',
    slug: 'casa-vila-9-bangalos-prea-gusso',
    title: 'VENDA',
    searchTitle: 'Casa de Vila 9 Bangalôs no Preá',
    image: '/imoveis/casa-vila-9-bangalos-prea-gusso-01.webp',
    badge: 'Oportunidade Exclusiva',
    propertyTitle: 'CASA DE VILA COM 9 BANGALÔS NO PREÁ',
    location: 'Preá, Cruz - CE',
    rating: 5,
    exclusiveText: '9 Bangalôs Independentes | 9 Suítes | Piscina | 1.151 m² de Terreno',
    summaryDescription: 'Sofisticada casa de vila com 9 bangalôs independentes no coração do Preá, a uma quadra do Rancho do Peixe e do Rancho do Kite, a 250 metros da praia.',
    about: [
      'Uma sofisticada casa de vila composta por nove bangalôs independentes, localizada no coração do Preá, a apenas uma quadra do Rancho do Peixe e do Rancho do Kite.',
      'Um imóvel raro que combina identidade regional, arquitetura autoral e estrutura completa para operação imediata em um dos destinos mais valorizados do kitesurf mundial.',
      'Localizado no coração do Preá, o imóvel está inserido em uma das áreas mais valorizadas do litoral do Ceará. A poucos passos da praia e vizinho de empreendimentos icônicos como Rancho do Peixe e Rancho do Kite, o entorno combina sofisticação discreta, natureza preservada e infraestrutura turística consolidada.',
      'O Preá integra o polo de Jericoacoara, destino internacional conhecido por suas condições ideais de vento durante grande parte do ano, atraindo público europeu e sul-americano para esportes náuticos e turismo de experiência.',
      'A região conta com restaurantes de alto padrão, beach clubs, escolas de kitesurf, mercados, farmácias e serviços essenciais, mantendo ao mesmo tempo o charme rústico e a atmosfera exclusiva que valorizam o metro quadrado ano após ano. Além disso, o acesso facilitado pelo Aeroporto Regional de Jericoacoara impulsiona o fluxo turístico e fortalece o potencial de ocupação internacional — um entorno que equilibra natureza, infraestrutura e valorização contínua.'
    ],
    infra: [
      '15 ambientes no total',
      '9 suítes privativas',
      '10 banheiros completos',
      'Área útil de 525 m²',
      'Terreno de 1.151,74 m² (lote de 25,9 x 45 m)',
      'Construção de 2021',
      '250 metros da praia',
      'Casa de vila com 9 bangalôs independentes',
      'Piscina de 35 m²',
      'Churrasqueira de 2 metros',
      'Lavanderia e depósito',
      'Gerador a diesel 32 kV',
      'Poço artesiano e internet via fibra óptica',
      'Casa mobiliada, com acabamentos em madeira, pedra e concreto',
      'Circuito de câmeras de segurança',
      'Cozinha grande com armários planejados',
      'Jardim, deck e piscina coletiva',
      'Varanda, hall de entrada e janelas amplas',
      'Espaço gourmet com sala de jantar integrada',
      'Aquecimento elétrico e TV a cabo',
      'Vista aberta, em rua residencial tranquila',
      'A poucos minutos do Aeroporto Regional de Jericoacoara, escolas, igrejas e comércio local'
    ],
    facilities: ['9 Bangalôs', '9 Suítes', 'Piscina', '1.151m² de Terreno', '250m da Praia'],
    gallery: {
      main: '/imoveis/casa-vila-9-bangalos-prea-gusso-01.webp',
      sideTop: '/imoveis/casa-vila-9-bangalos-prea-gusso-04.webp',
      sideBottom: '/imoveis/casa-vila-9-bangalos-prea-gusso-03.webp',
      extra: [
        '/imoveis/casa-vila-9-bangalos-prea-gusso-05.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-06.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-07.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-08.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-09.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-10.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-11.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-12.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-13.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-14.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-15.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-16.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-17.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-18.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-19.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-20.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-21.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-22.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-23.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-24.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-25.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-26.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-27.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-28.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-29.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-30.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-31.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-32.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-33.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-34.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-35.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-36.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-37.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-38.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-39.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-40.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-41.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-42.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-43.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-44.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-45.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-46.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-47.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-48.webp',
        '/imoveis/casa-vila-9-bangalos-prea-gusso-49.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Vila+Formosa,+Preá,+Cruz,+Ceará&hl=pt-BR&z=15&output=embed',
    videoSources: [],
    priceTag: 'Valor',
    price: 'R$ 5.800.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    unlisted: true
  },
  {
    id: 'imovel-centro-praia',
    slug: 'imovel-centro-praia',
    title: 'VENDA',
    searchTitle: 'Imóvel no Centro - Praia',
    image: '/imoveis/imovel-centro-praia-01.webp',
    badge: 'Oportunidade',
    propertyTitle: 'IMÓVEL NO CENTRO',
    location: 'Praia',
    rating: 5,
    exclusiveText: '2 Suítes | Piscina | 250m da praia',
    summaryDescription: 'Imóvel super bem localizado no centro, ao lado da praça e a apenas 250 metros da praia. Com piscina, deck com churrasqueira e varanda.',
    about: [
      'Não perca a oportunidade de morar em um lugar completo e super bem localizado!',
      'Este imóvel fica no centro, ao lado da praça, a apenas 250 metros da praia, próximo aos melhores restaurantes, farmácias e mercantis da região.',
      'Conta com 2 suítes espaçosas, 2 quartos sociais, 1 banheiro social, sala ampla, cozinha arejada e quartos no andar inferior com ar condicionado.',
      'A área externa é ideal para confraternizações, possuindo piscina para lazer e relaxamento, deck com churrasqueira, varanda espaçosa e área de vôlei para diversão ao ar livre.'
    ],
    infra: [
      '2 Suítes espaçosas',
      '2 Quartos Sociais',
      'Piscina',
      'Deck com churrasqueira',
      'Varanda espaçosa',
      'Área de vôlei'
    ],
    facilities: ['Piscina', 'Deck com Churrasqueira', 'Ar condicionado', '250m da Praia'],
    gallery: {
      main: '/imoveis/imovel-centro-praia-01.webp',
      sideTop: '/imoveis/imovel-centro-praia-02.webp',
      sideBottom: '/imoveis/imovel-centro-praia-03.webp',
      extra: [
        '/imoveis/imovel-centro-praia-04.webp',
        '/imoveis/imovel-centro-praia-05.webp',
        '/imoveis/imovel-centro-praia-06.webp',
        '/imoveis/imovel-centro-praia-07.webp',
        '/imoveis/imovel-centro-praia-08.webp',
        '/imoveis/imovel-centro-praia-09.webp',
        '/imoveis/imovel-centro-praia-10.webp',
        '/imoveis/imovel-centro-praia-11.webp',
        '/imoveis/imovel-centro-praia-12.webp',
        '/imoveis/imovel-centro-praia-13.webp',
        '/imoveis/imovel-centro-praia-14.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.815967,-40.422329&hl=pt-BR&z=15&output=embed',
    priceTag: 'Valor',
    price: 'R$ 500.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: 'imovel-nova-taiba',
    slug: 'imovel-nova-taiba',
    title: 'VENDA',
    searchTitle: 'Imóvel Nova Taíba',
    image: '/imoveis/imovel-nova-taiba-01.webp',
    badge: 'Exclusivo',
    propertyTitle: 'IMÓVEL LOTEAMENTO NOVA TAÍBA',
    location: 'Nova Taíba',
    rating: 5,
    exclusiveText: '7 Suítes | 520m² Construída | 2.000m² Área',
    summaryDescription: 'Imóvel no Loteamento Nova Taíba, com 7 suítes, piscina, quadra de beach tennis e 2.000m² de área total.',
    about: [
      'Excelente opção para moradia, veraneio ou investimento no Loteamento Nova Taíba. Com 2.000 metros de área total e 520m² de área construída.',
      'O imóvel é composto por 7 suítes completas, ideais para famílias grandes, 5 salas amplas com boa integração dos ambientes, cozinha espaçosa, banheiro social e varandas amplas.',
      'A área externa inclui uma piscina ampla com iluminação, quadra de beach tennis e paisagismo adaptado ao local.',
      'Totalmente murado com muros altos, proporcionando mais privacidade e segurança. Uma oportunidade única em uma das regiões mais valorizadas do litoral.'
    ],
    infra: [
      '2.000m² de área total',
      '520m² de área construída',
      '7 suítes completas',
      'Piscina com iluminação',
      'Quadra de beach tennis'
    ],
    facilities: ['7 Suítes', 'Piscina', 'Quadra Beach Tennis', 'Loteamento Fechado'],
    gallery: {
      main: '/imoveis/imovel-nova-taiba-01.webp',
      sideTop: '/imoveis/imovel-nova-taiba-02.webp',
      sideBottom: '/imoveis/imovel-nova-taiba-03.webp',
      extra: [
        '/imoveis/imovel-nova-taiba-04.webp',
        '/imoveis/imovel-nova-taiba-05.webp',
        '/imoveis/imovel-nova-taiba-06.webp',
        '/imoveis/imovel-nova-taiba-07.webp',
        '/imoveis/imovel-nova-taiba-08.webp',
        '/imoveis/imovel-nova-taiba-09.webp',
        '/imoveis/imovel-nova-taiba-10.webp',
        '/imoveis/imovel-nova-taiba-11.webp',
        '/imoveis/imovel-nova-taiba-12.webp',
        '/imoveis/imovel-nova-taiba-13.webp',
        '/imoveis/imovel-nova-taiba-14.webp',
        '/imoveis/imovel-nova-taiba-15.webp',
        '/imoveis/imovel-nova-taiba-16.webp',
        '/imoveis/imovel-nova-taiba-17.webp',
        '/imoveis/imovel-nova-taiba-18.webp',
        '/imoveis/imovel-nova-taiba-19.webp',
        '/imoveis/imovel-nova-taiba-20.webp',
        '/imoveis/imovel-nova-taiba-21.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.524458,-38.898858&hl=pt-BR&z=15&output=embed',
    priceTag: 'Valor',
    price: 'R$ 850.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    unlisted: true
  },
  {
    id: 'casa-praia-taiba',
    slug: 'casa-praia-taiba',
    title: 'VENDA',
    searchTitle: 'Casa de Praia em Taíba',
    image: '/imoveis/casa-praia-taiba-01.webp',
    badge: 'Alto Padrão',
    propertyTitle: 'CASA DE PRAIA NO MORRO DO CHAPÉU',
    location: 'Taíba, Ceará',
    rating: 5,
    exclusiveText: 'Piscina | Edícula Gourmet | Excelente Localização',
    summaryDescription: 'Encantadora casa de praia localizada na desejada região do Morro do Chapéu em Taíba, oferecendo excelente área de lazer.',
    about: [
      'Descubra este paraíso rústico localizado na valorizada região do Morro do Chapéu, em Taíba.',
      'A propriedade foi concebida para oferecer uma experiência completa de lazer e descanso, perfeita para momentos em família ou recepção de convidados.',
      'Destaque para sua área externa com uma piscina convidativa e uma edícula espaçosa equipada com cozinha gourmet, churrasqueira e amplas varandas.',
      'Seu design rústico e aconchegante integra-se perfeitamente à atmosfera litorânea da região.'
    ],
    infra: [
      'Piscina',
      'Edícula rústica com churrasqueira',
      'Varandas amplas',
      'Jardim'
    ],
    facilities: ['Piscina', 'Área Gourmet', 'Churrasqueira'],
    gallery: {
      main: '/imoveis/casa-praia-taiba-01.webp',
      sideTop: '/imoveis/casa-praia-taiba-02.webp',
      sideBottom: '/imoveis/casa-praia-taiba-03.webp',
      extra: [
        '/imoveis/casa-praia-taiba-04.webp',
        '/imoveis/casa-praia-taiba-05.webp',
        '/imoveis/casa-praia-taiba-06.webp',
        '/imoveis/casa-praia-taiba-07.webp',
        '/imoveis/casa-praia-taiba-08.webp',
        '/imoveis/casa-praia-taiba-09.webp',
        '/imoveis/casa-praia-taiba-10.webp',
        '/imoveis/casa-praia-taiba-11.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.516653,-38.884544&hl=pt-BR&z=15&output=embed',
    priceTag: 'Valor',
    price: 'R$ 1.100.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    unlisted: true
  },
  {
    id: 'imovel-duplex-vila-chapeu',
    slug: 'imovel-duplex-vila-chapeu',
    title: 'VENDA',
    searchTitle: 'Imóvel Duplex com 530m²',
    image: '/imoveis/imovel-duplex-vila-chapeu-01.webp',
    badge: 'Exclusivo',
    propertyTitle: 'IMÓVEL DUPLEX 530M²',
    location: 'Atrás da Vila Chapéu',
    rating: 5,
    exclusiveText: '5 Quartos | Piscina de 10m | 5.300m² Terreno',
    summaryDescription: 'Excelente imóvel duplex com 530 m² de área construída em um terreno de 5.300 m², localizado em ponto alto com excelente ventilação.',
    about: [
      'Excelente imóvel duplex com 530 m² de área construída em um terreno de 5.300 m², localizado em um ponto alto, com excelente ventilação e em uma região de grande valorização.',
      'O imóvel conta com 5 quartos, sendo 4 suítes (2 no térreo e 2 no superior), 1 quarto social, banheiro social, ampla sala de estar, cozinha e varanda.',
      'A área externa inclui um deck com piscina de 10 metros, caramanchão e garagem para até 4 veículos.',
      'Localizado atrás do empreendimento Vila Chapéu, oferecendo tranquilidade, espaço e fácil acesso.'
    ],
    infra: [
      '5.300 m² de área de terreno',
      '530 m² de área construída',
      '4 Suítes e 1 Quarto Social',
      'Piscina de 10 metros com deck',
      'Garagem para 4 veículos'
    ],
    facilities: ['5 Quartos', 'Piscina de 10m', 'Deck', 'Excelente Ventilação'],
    gallery: {
      main: '/imoveis/imovel-duplex-vila-chapeu-01.webp',
      sideTop: '/imoveis/imovel-duplex-vila-chapeu-02.webp',
      sideBottom: '/imoveis/imovel-duplex-vila-chapeu-03.webp',
      extra: [
        '/imoveis/imovel-duplex-vila-chapeu-04.webp',
        '/imoveis/imovel-duplex-vila-chapeu-05.webp',
        '/imoveis/imovel-duplex-vila-chapeu-06.webp',
        '/imoveis/imovel-duplex-vila-chapeu-07.webp',
        '/imoveis/imovel-duplex-vila-chapeu-08.webp',
        '/imoveis/imovel-duplex-vila-chapeu-09.webp',
        '/imoveis/imovel-duplex-vila-chapeu-10.webp',
        '/imoveis/imovel-duplex-vila-chapeu-11.webp',
        '/imoveis/imovel-duplex-vila-chapeu-12.webp',
        '/imoveis/imovel-duplex-vila-chapeu-13.webp',
        '/imoveis/imovel-duplex-vila-chapeu-14.webp',
        '/imoveis/imovel-duplex-vila-chapeu-15.webp',
        '/imoveis/imovel-duplex-vila-chapeu-16.webp',
        '/imoveis/imovel-duplex-vila-chapeu-17.webp',
        '/imoveis/imovel-duplex-vila-chapeu-18.webp',
        '/imoveis/imovel-duplex-vila-chapeu-19.webp',
        '/imoveis/imovel-duplex-vila-chapeu-20.webp',
        '/imoveis/imovel-duplex-vila-chapeu-21.webp',
        '/imoveis/imovel-duplex-vila-chapeu-22.webp',
        '/imoveis/imovel-duplex-vila-chapeu-23.webp',
        '/imoveis/imovel-duplex-vila-chapeu-24.webp',
        '/imoveis/imovel-duplex-vila-chapeu-25.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Vila+Chapéu&hl=pt-BR&z=15&output=embed',
    priceTag: 'Valor',
    price: 'R$ 1.500.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: "prado-farol",
    slug: "terreno-praia-do-farol",
    title: "VENDA",
    searchTitle: "Terreno Praia do Farol",
    image: "/imoveis/terreno-praia-do-farol-01.webp",
    badge: "Oportunidade Exclusiva",
    propertyTitle: "TERRENO PRAIA DO FAROL",
    location: "Farol do Itapajé - Itarema, CE",
    rating: 5,
    exclusiveText: "Área exclusiva à venda. Total: R$ 4.000.000,00",
    summaryDescription: "Terreno com frente para lagoa em área de alta valorização do litoral cearense. A apenas 2 minutos da praia, ideal para casas de alto padrão, pousada ou hotel boutique.",
    about: [
      "Terreno com frente para lagoa, localizado em uma das áreas de maior valorização do litoral cearense.",
      "A apenas 2 minutos de carro da praia, com acesso direto para pedestres, oferece excelente potencial para casas de alto padrão, pousada, hotel boutique ou vila residencial.",
      "Uma oportunidade única em uma região impulsionada pelo turismo, esportes de vento e novos empreendimentos de alto padrão."
    ],
    infra: [
      "Localização estratégica frente para lagoa.",
      "2 minutos da praia e 5 minutos da Ilha do Guajirú.",
      "Próximo aos empreendimentos Hura Beach, Kalit e Pura Vida.",
      "Aprox. 45 minutos do Aeroporto Regional de Jericoacoara."
    ],
    facilities: ["8.600 m²", "Oportunidade", "Terreno"],
    gallery: {
      main: '/imoveis/terreno-praia-do-farol-01.webp',
      sideTop: '/imoveis/terreno-praia-do-farol-02.webp',
      sideBottom: '/imoveis/terreno-praia-do-farol-03.webp',
      extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Farol+do+Itapajé,+Itarema,+CE&hl=pt-BR&z=14&output=embed',
    videoSources: [
      "https://player.vimeo.com/video/1203999302",
      "https://player.vimeo.com/video/1203999301"
    ],
    priceTag: "Valor",
    price: "R$ 4.000.000,00",
    installments: "Consulte condições",
    category: "venda"
  },
  {
    id: "terreno-barrinha",
    slug: "terreno-barrinha-1753m",
    title: "VENDA",
    searchTitle: "Terreno Barrinha Pé na Areia",
    image: "/imoveis/terreno-barrinha-1753m-01.webp",
    badge: "Oportunidade Rara",
    propertyTitle: "TERRENO BARRINHA PÉ NA AREIA",
    location: "Sítio Barrinha, Acaraú - CE",
    rating: 5,
    exclusiveText: "Área de 1.753 m² (0,1753 ha) de frente para o mar, bem próximo ao Preá.",
    summaryDescription: "Oportunidade rara de investimento na desejada região da Barrinha, bem próximo ao Preá. Área de 1.753 m² pé na areia com documentação 100% regularizada.",
    about: [
      "Oportunidade rara de investimento na desejada região da Barrinha, localizada bem próximo ao Preá. Esta área total de 1.753 m² (0,1753 ha) está posicionada de frente para o mar, oferecendo uma localização altamente estratégica e exclusiva para o desenvolvimento de projetos de alto padrão, como pousadas boutique, vilas de luxo ou residências privativas.",
      "O imóvel destaca-se pela segurança jurídica, contando com documentação totalmente regularizada, incluindo Título de Domínio definitivo emitido pelo IDACE e matrícula registrada no Cartório de Registro de Imóveis. Toda a delimitação geográfica e a área pé na areia podem ser visualizadas detalhadamente através do memorial descritivo e das perspectivas reais da propriedade."
    ],
    infra: [
      "Área Total: 1.753 m² (0,1753 hectares)",
      "Perímetro: 167,89 metros",
      "Situação Jurídica: Imóvel com Título de Domínio IDACE Nº 131884/2022 e Matrícula Nº 5.656 registrada no Cartório do 2º Ofício de Acaraú - CE",
      "Localização: Sítio Barrinha, Acaraú - CE (região do Preá), com frente direta para a praia"
    ],
    facilities: ["1.753 m²", "Pé na areia", "Frente para o mar", "Matrícula Registrada"],
    gallery: {
        main: '/imoveis/terreno-barrinha-1753m-01.webp',
        sideTop: '/imoveis/terreno-barrinha-1753m-02.webp',
        sideBottom: '/imoveis/terreno-barrinha-1753m-03.webp',
        extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8089825,-40.3543899&hl=pt-BR&z=14&output=embed',
    videoSources: ["https://player.vimeo.com/video/1202481207"],
    priceTag: "Valor",
    price: "R$ 1.800.000,00",
    installments: "Consulte condições",
    category: "venda"
  },
  {
    id: "terreno-barrinha-matricula",
    slug: "terreno-barrinha-1840m2-matricula",
    title: "VENDA",
    searchTitle: "Terreno Barrinha 1.840m² com Matrícula",
    image: "/imoveis/terreno-barrinha-1840m2-matricula-01.webp",
    badge: "Oportunidade Rara",
    propertyTitle: "TERRENO BARRINHA 1.840M² — MATRÍCULA E FINANCIAMENTO BANCÁRIO",
    location: "Barrinha, Acaraú - CE",
    rating: 5,
    exclusiveText: "1.840 m² | Matrícula Registrada | Financiamento Bancário Pré-Aprovado | 450m do Centro",
    summaryDescription: "Terreno de 1.840 m² na Barrinha, a 450m do centro e 800m do mar — com matrícula registrada e financiamento bancário pré-aprovado, uma combinação rara no mercado.",
    about: [
      "Oportunidade rara na Barrinha: terreno de 1.840 m², a apenas 450 metros do centro e 800 metros do mar, em localização estratégica entre a praia e a infraestrutura urbana da região.",
      "O grande diferencial deste imóvel é a segurança jurídica e financeira raramente encontrada no mercado: o terreno possui matrícula registrada em cartório e conta com financiamento bancário pré-aprovado, agilizando significativamente o processo de aquisição para o comprador.",
      "Um terreno de contorno irregular e generosas dimensões — 39,8 m e 25,3 m nas laterais mais longas — ideal para o desenvolvimento de um projeto residencial ou de hospedagem em uma das regiões mais promissoras do litoral cearense."
    ],
    infra: [
      "Área total de 1.840 m²",
      "Matrícula registrada em cartório",
      "Financiamento bancário pré-aprovado",
      "A 450 metros do centro",
      "A 800 metros do mar",
      "Dimensões: 39,8 m / 31 m / 25,3 m / 23 m / 25,3 m / 3,6 m (perímetro irregular)"
    ],
    facilities: ["1.840 m²", "Matrícula Registrada", "Financiamento Pré-Aprovado", "450m do Centro"],
    gallery: {
      main: '/imoveis/terreno-barrinha-1840m2-matricula-01.webp',
      sideTop: null,
      sideBottom: null,
      extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Barrinha,+Acaraú+-+CE&hl=pt-BR&z=15&output=embed',
    videoSources: [],
    priceTag: "Valor",
    price: "R$ 1.050.000,00",
    installments: "Consulte condições",
    category: "venda"
  },
  {
    id: "residencial-jacaranda",
    slug: "residencial-jacaranda-prea",
    title: "LANÇAMENTO",
    searchTitle: "Residencial Jacarandá Preá",
    image: "/imoveis/residencial-jacaranda-prea-01.webp",
    badge: "Lançamento",
    propertyTitle: "RESIDENCIAL JACARANDÁ — PREÁ",
    location: "Preá, Cruz - CE",
    rating: 5,
    exclusiveText: "12 Casas | 3 Suítes | 130m² | A partir de R$ 595.000,00 | Financiamento Facilitado",
    summaryDescription: "Residencial Jacarandá no Preá: 12 casas de alto padrão com 3 suítes, 130 m² de área construída, condições especiais de financiamento bancário e entrada facilitada com a construtora.",
    about: [
      "O Residencial Jacarandá é um lançamento exclusivo da Investimentos Imobiliários Preá Ltda., pensado para quem quer realizar o sonho da casa própria no litoral cearense — a apenas 15 minutos do Aeroporto de Jericoacoara e perto do Lagun Beach Club.",
      "São apenas 12 casas em uma rua tranquila e sem saída, cada uma com 3 suítes com varanda, sala de jantar e TV integradas, 1 banheiro social, área de jardim, garagem interna privativa e varanda gourmet.",
      "O empreendimento oferece três formas de pagamento: à vista, financiamento direto com a construtora (30% de entrada + restante em até 12x sem juros) ou financiamento bancário — o Residencial Jacarandá também se enquadra na faixa 4 do programa Minha Casa Minha Vida."
    ],
    infra: [
      "Lotes a partir de 180 m²",
      "Área construída de 130 m² por unidade",
      "3 suítes com varanda",
      "1 banheiro social",
      "Sala de jantar e TV integradas",
      "Área de jardim e varanda gourmet",
      "1 vaga de garagem interna por unidade",
      "Somente 12 casas, em rua tranquila e sem saída",
      "Matrícula individual por unidade",
      "A 15 minutos do Aeroporto de Jericoacoara, perto do Lagun Beach Club"
    ],
    facilities: ["3 Suítes", "130m² Construídos", "180m² de Lote", "12 Casas", "Financiamento Facilitado"],
    gallery: {
      main: '/imoveis/residencial-jacaranda-prea-01.webp',
      sideTop: '/imoveis/residencial-jacaranda-prea-02.webp',
      sideBottom: '/imoveis/residencial-jacaranda-prea-03.webp',
      extra: [
        '/imoveis/residencial-jacaranda-prea-04.webp',
        '/imoveis/residencial-jacaranda-prea-05.webp',
        '/imoveis/residencial-jacaranda-prea-06.webp',
        '/imoveis/residencial-jacaranda-prea-07.webp',
        '/imoveis/residencial-jacaranda-prea-08.webp',
        '/imoveis/residencial-jacaranda-prea-09.webp',
        '/imoveis/residencial-jacaranda-prea-10.webp',
        '/imoveis/residencial-jacaranda-prea-11.webp',
        '/imoveis/residencial-jacaranda-prea-12.webp',
        '/imoveis/residencial-jacaranda-prea-13.webp',
        '/imoveis/residencial-jacaranda-prea-14.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Preá,+Cruz,+Ceará&hl=pt-BR&z=14&output=embed',
    videoSources: [],
    documents: [
      {
        label: "Flyer Residencial Jacarandá",
        url: "/documentos/residencial-jacaranda-flyer.pdf",
        legend: "Plantas, acabamentos e condições de pagamento do empreendimento."
      }
    ],
    priceTag: "A partir de",
    price: "R$ 595.000,00",
    installments: "Entrada de 30% + 12x sem juros ou financiamento bancário",
    category: "lancamento"
  },
  {
    id: "15",
    slug: "lotes-exclusivos-taiba",
    title: "VENDA",
    searchTitle: "Lotes Exclusivos Taíba",
    image: "/imoveis/lotes-exclusivos-taiba-01.webp",
    badge: "Lançamento",
    propertyTitle: "LOTES EXCLUSIVOS TAÍBA",
    location: "Taíba, Ceará",
    rating: 5,
    exclusiveText: "Área de 2.800m² subdividida em 5 lotes de 540m². Quadra da praia, próximo ao Villa Marola.",
    summaryDescription: "Oportunidade rara de investimento na Taíba. 5 lotes de 540m² a uma quadra da praia, com luz elétrica instalada.",
    about: [
      "Oportunidade rara de investimento na desejada praia da Taíba. Esta área total de 2.800m² é composta por 5 lotes de 540m² cada, localizados a apenas uma quadra da praia.",
      "Situada perto do renomado Villa Marola, a propriedade já conta com energia elétrica instalada e pronta para o desenvolvimento de projetos de alto padrão, como resorts boutique ou vilas de luxo."
    ],
    infra: [
      "Área Total: 2.800 m²",
      "Subdivisão: 5 lotes de 540m²",
      "Infraestrutura: Luz elétrica instalada",
      "Localização: Quadra da Praia, perto do Villa Marola"
    ],
    facilities: ["2.800 m²", "5 Lotes", "Quadra da Praia", "Luz Elétrica"],
    gallery: {
        main: '/imoveis/lotes-exclusivos-taiba-02.webp',
        sideTop: '/imoveis/lotes-exclusivos-taiba-01.webp',
        sideBottom: null,
        extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-3.5073804,-38.8940624&hl=pt-BR&z=15&output=embed',
    videoSources: [],
    priceTag: "A partir de",
    price: "R$ 250.000,00",
    installments: "Lotes individuais: R$ 250.000,00",
    category: "venda",
    unlisted: true,
    lotes: [
      { id: "all", label: "Todos (5 lotes)", priceTag: "Total (5 lotes)", price: "R$ 1.300.000,00" },
      { id: "single", label: "1 Lote (540m²)", priceTag: "Por lote (540m²)", price: "R$ 250.000,00" },
    ]
  },
  {
    id: "14",
    slug: "terreno-serrote-jericoacoara",
    title: "VENDA",
    searchTitle: "Terreno Serrote Jericoacoara",
    image: "/imoveis/terreno-serrote-jericoacoara-01.webp",
    badge: "Lançamento",
    propertyTitle: "TERRENO SERROTE JERICOACOARA",
    location: "Jericoacoara, Ceará",
    rating: 5,
    exclusiveText: "Lote de 200m² com 7 metros de frente pela Rua do Forró, com acesso Serrote.",
    summaryDescription: "Oportunidade exclusiva no coração de Jericoacoara. Terreno de 200m² com 7 metros de frente, localizado estrategicamente na Rua do Forró.",
    about: [
      "Oportunidade exclusiva no coração de Jericoacoara. Terreno de 200m² com 7 metros de frente, localizado estrategicamente na Rua do Forró e com acesso para o Serrote.",
      "Ideal para a construção da sua casa dos sonhos ou um empreendimento de alto padrão, em um dos destinos mais desejados do Brasil."
    ],
    infra: [
      "Área Total: 200 m²",
      "Frente: 7 metros",
      "Acesso: Rua do Forró e Serrote"
    ],
    facilities: ["200 m²", "7m de frente", "Localização Premium"],
    gallery: {
        main: '/imoveis/terreno-serrote-jericoacoara-01.webp',
        sideTop: null,
        sideBottom: null,
        extra: []
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.7963,-40.5134&hl=pt-BR&z=17&output=embed',
    videoSources: ["https://player.vimeo.com/video/1202147252"],
    priceTag: "Valor",
    price: "R$ 1.200.000,00",
    installments: "Consulte condições",
    category: "venda"
  },
  {
    id: "vila-aysu-jericoacoara",
    slug: "vila-aysu-jericoacoara",
    title: "VENDA",
    searchTitle: "Vila Aysú",
    image: "/imoveis/vila-aysu-jericoacoara-01.webp",
    badge: "Porteira Fechada",
    propertyTitle: "Vila Aysú",
    location: "Jericoacoara, Ceará",
    rating: 5,
    exclusiveText: "Uma oportunidade rara no coração de Jericoacoara. Propriedade completa com escritura e construção averbada, dividida em dois blocos de moradia e locação, com vista deslumbrante para o Parque Nacional.",
    summaryDescription: "Vila Aysú é um investimento perfeito para uso pessoal e geração imediata de renda. Casa de dois pavimentos com suíte vista mar, mais um bloco de locação com 2 suítes e 2 quitinetes independentes, totalmente mobiliada.",
    about: [
      "Apresentamos a Vila Aysú, uma propriedade rara e completa em Jericoacoara, com escritura e construção totalmente averbada em matrícula. Este é um investimento perfeito tanto para uso pessoal quanto para geração imediata de renda, vendido na modalidade porteira fechada (totalmente mobiliado).",
      "O terreno de 280m² abriga 260m² de área construída dividida de forma inteligente. Na parte frontal, encontra-se uma casa de dois pavimentos com suíte no andar superior, que presenteia seus moradores com uma bela varanda e vista incrível para o Parque Nacional de Jericoacoara. O térreo desta casa principal conta com sala, cozinha, banheiro social, lavanderia, área de depósito e garagem.",
      "Separando as duas áreas construídas há um charmoso deck em madeira Ipê, criando um ambiente perfeito para lazer, com espaço suficiente para a futura construção de uma piscina.",
      "Nos fundos, a propriedade apresenta um bloco térreo pensado para rentabilidade imediata: são duas suítes independentes e dois apartamentos tipo quitinete. Todas as unidades já se encontram mobiliadas e prontas para locação."
    ],
    infra: [
      "Área total do terreno: 280m² (7m x 36m)",
      "Área construída total: 260m²",
      "Casa principal com suíte vista mar/parque",
      "Bloco de fundos com 4 unidades de locação (2 suítes + 2 quitinetes)",
      "Deck central em madeira Ipê",
      "Garagem e área de depósito"
    ],
    facilities: ["Mobiliado (Porteira Fechada)", "Pronto para Locação", "Escritura Pública", "Deck de Madeira", "Garagem", "Vista para Parque Nacional"],
    gallery: {
        main: '/imoveis/vila-aysu-jericoacoara-02.webp',
        sideTop: '/imoveis/vila-aysu-jericoacoara-03.webp',
        sideBottom: '/imoveis/vila-aysu-jericoacoara-01.webp',
        extra: [
            '/imoveis/vila-aysu-jericoacoara-04.webp',
            '/imoveis/vila-aysu-jericoacoara-05.webp',
            '/imoveis/vila-aysu-jericoacoara-06.webp',
            '/imoveis/vila-aysu-jericoacoara-07.webp',
            '/imoveis/vila-aysu-jericoacoara-08.webp',
            '/imoveis/vila-aysu-jericoacoara-09.webp',
            '/imoveis/vila-aysu-jericoacoara-10.webp',
            '/imoveis/vila-aysu-jericoacoara-11.webp',
            '/imoveis/vila-aysu-jericoacoara-12.webp'
        ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8004400730133057,-40.51396179199219&hl=pt-BR&z=17&output=embed',
    videoSources: [],
    priceTag: "Valor Total",
    price: "R$ 2.700.000",
    installments: "Porteira Fechada",
    category: "venda"
  },
  {
    id: '13',
    slug: 'mansao-praia-do-prea',
    title: 'VENDA',
    image: '/imoveis/mansao-praia-do-prea-93.webp',
    badge: 'Alto Padrão',
    propertyTitle: 'CASA ALTO PADRÃO NA PRAIA DO PREÁ',
    location: 'Praia do Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '4 Suítes | Academia | SPA | Rooftop | A 500m do mar',
    summaryDescription: 'Belíssima casa de alto padrão no bairro de mansões do Preá, com 4 suítes, rooftop com SPA e vista para o mar e para o Parque Nacional de Jericoacoara.',
    about: [
      'Belíssima casa alto padrão, arejada e com muita iluminação natural, a apenas 500 metros do mar e 400 da rua principal no bairro de mansões do Preá.',
      'O imóvel conta com fechaduras biométricas, câmeras de segurança, cerca elétrica, hospedando confortavelmente 12 pessoas distribuídas em suas quatro suítes.',
      'Sala de estar/TV com pé direito duplo, sala de jantar integrada à cozinha equipada com ilha de 3m e área gourmet com churrasqueira e cervejeira.',
      'Amplo rooftop com vista mar e vista para o Parque Nacional de Jericoacoara, equipado com SPA de hidromassagem para 8 pessoas.',
      'A casa possui poço artesiano com filtro, gerador de energia e caixa d\'água de 3.000 litros, além de academia completa, piscina com deck e prainha com areia.'
    ],
    infra: [
      'Localização: Bairro de mansões, a 500m do mar',
      'Garagem para 3 veículos',
      'Rooftop com SPA e vista mar',
      'Gerador de energia',
      'Sistema de segurança completo'
    ],
    facilities: ['4 Suítes', 'Piscina e Prainha', 'Academia', 'Rooftop com SPA', 'Área Gourmet', 'Ar-condicionado', 'Poço Artesiano', 'Segurança'],
    gallery: {
        main: '/imoveis/mansao-praia-do-prea-93.webp',
        sideTop: '/imoveis/mansao-praia-do-prea-02.webp',
        sideBottom: '/imoveis/mansao-praia-do-prea-03.webp',
        extra: ["/imoveis/mansao-praia-do-prea-01.webp","/imoveis/mansao-praia-do-prea-04.webp","/imoveis/mansao-praia-do-prea-05.webp","/imoveis/mansao-praia-do-prea-06.webp","/imoveis/mansao-praia-do-prea-07.webp","/imoveis/mansao-praia-do-prea-08.webp","/imoveis/mansao-praia-do-prea-09.webp","/imoveis/mansao-praia-do-prea-10.webp","/imoveis/mansao-praia-do-prea-11.webp","/imoveis/mansao-praia-do-prea-12.webp","/imoveis/mansao-praia-do-prea-13.webp","/imoveis/mansao-praia-do-prea-14.webp","/imoveis/mansao-praia-do-prea-15.webp","/imoveis/mansao-praia-do-prea-16.webp","/imoveis/mansao-praia-do-prea-17.webp","/imoveis/mansao-praia-do-prea-18.webp","/imoveis/mansao-praia-do-prea-19.webp","/imoveis/mansao-praia-do-prea-20.webp","/imoveis/mansao-praia-do-prea-21.webp","/imoveis/mansao-praia-do-prea-22.webp","/imoveis/mansao-praia-do-prea-23.webp","/imoveis/mansao-praia-do-prea-24.webp","/imoveis/mansao-praia-do-prea-25.webp","/imoveis/mansao-praia-do-prea-26.webp","/imoveis/mansao-praia-do-prea-27.webp","/imoveis/mansao-praia-do-prea-28.webp","/imoveis/mansao-praia-do-prea-29.webp","/imoveis/mansao-praia-do-prea-30.webp","/imoveis/mansao-praia-do-prea-31.webp","/imoveis/mansao-praia-do-prea-32.webp","/imoveis/mansao-praia-do-prea-33.webp","/imoveis/mansao-praia-do-prea-34.webp","/imoveis/mansao-praia-do-prea-35.webp","/imoveis/mansao-praia-do-prea-36.webp","/imoveis/mansao-praia-do-prea-37.webp","/imoveis/mansao-praia-do-prea-38.webp","/imoveis/mansao-praia-do-prea-39.webp","/imoveis/mansao-praia-do-prea-40.webp","/imoveis/mansao-praia-do-prea-41.webp","/imoveis/mansao-praia-do-prea-42.webp","/imoveis/mansao-praia-do-prea-43.webp","/imoveis/mansao-praia-do-prea-44.webp","/imoveis/mansao-praia-do-prea-45.webp","/imoveis/mansao-praia-do-prea-46.webp","/imoveis/mansao-praia-do-prea-47.webp","/imoveis/mansao-praia-do-prea-48.webp","/imoveis/mansao-praia-do-prea-49.webp","/imoveis/mansao-praia-do-prea-50.webp","/imoveis/mansao-praia-do-prea-51.webp","/imoveis/mansao-praia-do-prea-52.webp","/imoveis/mansao-praia-do-prea-53.webp","/imoveis/mansao-praia-do-prea-54.webp","/imoveis/mansao-praia-do-prea-55.webp","/imoveis/mansao-praia-do-prea-56.webp","/imoveis/mansao-praia-do-prea-57.webp","/imoveis/mansao-praia-do-prea-58.webp","/imoveis/mansao-praia-do-prea-59.webp","/imoveis/mansao-praia-do-prea-60.webp","/imoveis/mansao-praia-do-prea-61.webp","/imoveis/mansao-praia-do-prea-62.webp","/imoveis/mansao-praia-do-prea-63.webp","/imoveis/mansao-praia-do-prea-64.webp","/imoveis/mansao-praia-do-prea-65.webp","/imoveis/mansao-praia-do-prea-66.webp","/imoveis/mansao-praia-do-prea-67.webp","/imoveis/mansao-praia-do-prea-68.webp","/imoveis/mansao-praia-do-prea-69.webp","/imoveis/mansao-praia-do-prea-70.webp","/imoveis/mansao-praia-do-prea-71.webp","/imoveis/mansao-praia-do-prea-72.webp","/imoveis/mansao-praia-do-prea-73.webp","/imoveis/mansao-praia-do-prea-74.webp","/imoveis/mansao-praia-do-prea-75.webp","/imoveis/mansao-praia-do-prea-76.webp","/imoveis/mansao-praia-do-prea-77.webp","/imoveis/mansao-praia-do-prea-78.webp","/imoveis/mansao-praia-do-prea-79.webp","/imoveis/mansao-praia-do-prea-80.webp","/imoveis/mansao-praia-do-prea-81.webp","/imoveis/mansao-praia-do-prea-82.webp","/imoveis/mansao-praia-do-prea-83.webp","/imoveis/mansao-praia-do-prea-84.webp","/imoveis/mansao-praia-do-prea-85.webp","/imoveis/mansao-praia-do-prea-86.webp","/imoveis/mansao-praia-do-prea-87.webp","/imoveis/mansao-praia-do-prea-88.webp","/imoveis/mansao-praia-do-prea-89.webp","/imoveis/mansao-praia-do-prea-90.webp","/imoveis/mansao-praia-do-prea-91.webp","/imoveis/mansao-praia-do-prea-92.webp","/imoveis/mansao-praia-do-prea-94.webp","/imoveis/mansao-praia-do-prea-95.webp","/imoveis/mansao-praia-do-prea-96.webp","/imoveis/mansao-praia-do-prea-97.webp","/imoveis/mansao-praia-do-prea-98.webp","/imoveis/mansao-praia-do-prea-99.webp","/imoveis/mansao-praia-do-prea-100.webp","/imoveis/mansao-praia-do-prea-101.webp","/imoveis/mansao-praia-do-prea-102.webp","/imoveis/mansao-praia-do-prea-103.webp","/imoveis/mansao-praia-do-prea-104.webp","/imoveis/mansao-praia-do-prea-105.webp","/imoveis/mansao-praia-do-prea-106.webp","/imoveis/mansao-praia-do-prea-107.webp","/imoveis/mansao-praia-do-prea-108.webp","/imoveis/mansao-praia-do-prea-109.webp","/imoveis/mansao-praia-do-prea-110.webp","/imoveis/mansao-praia-do-prea-111.webp","/imoveis/mansao-praia-do-prea-112.webp","/imoveis/mansao-praia-do-prea-113.webp","/imoveis/mansao-praia-do-prea-114.webp","/imoveis/mansao-praia-do-prea-115.webp","/imoveis/mansao-praia-do-prea-116.webp","/imoveis/mansao-praia-do-prea-117.webp","/imoveis/mansao-praia-do-prea-118.webp","/imoveis/mansao-praia-do-prea-119.webp","/imoveis/mansao-praia-do-prea-120.webp","/imoveis/mansao-praia-do-prea-121.webp","/imoveis/mansao-praia-do-prea-122.webp","/imoveis/mansao-praia-do-prea-123.webp","/imoveis/mansao-praia-do-prea-124.webp","/imoveis/mansao-praia-do-prea-125.webp","/imoveis/mansao-praia-do-prea-126.webp","/imoveis/mansao-praia-do-prea-127.webp","/imoveis/mansao-praia-do-prea-128.webp","/imoveis/mansao-praia-do-prea-129.webp","/imoveis/mansao-praia-do-prea-130.webp","/imoveis/mansao-praia-do-prea-131.webp","/imoveis/mansao-praia-do-prea-132.webp","/imoveis/mansao-praia-do-prea-133.webp","/imoveis/mansao-praia-do-prea-134.webp","/imoveis/mansao-praia-do-prea-135.webp","/imoveis/mansao-praia-do-prea-136.webp","/imoveis/mansao-praia-do-prea-137.webp","/imoveis/mansao-praia-do-prea-138.webp","/imoveis/mansao-praia-do-prea-139.webp","/imoveis/mansao-praia-do-prea-140.webp","/imoveis/mansao-praia-do-prea-141.webp","/imoveis/mansao-praia-do-prea-142.webp","/imoveis/mansao-praia-do-prea-143.webp","/imoveis/mansao-praia-do-prea-144.webp","/imoveis/mansao-praia-do-prea-145.webp","/imoveis/mansao-praia-do-prea-146.webp","/imoveis/mansao-praia-do-prea-147.webp","/imoveis/mansao-praia-do-prea-148.webp","/imoveis/mansao-praia-do-prea-149.webp","/imoveis/mansao-praia-do-prea-150.webp","/imoveis/mansao-praia-do-prea-151.webp","/imoveis/mansao-praia-do-prea-152.webp","/imoveis/mansao-praia-do-prea-153.webp","/imoveis/mansao-praia-do-prea-154.webp","/imoveis/mansao-praia-do-prea-155.webp","/imoveis/mansao-praia-do-prea-156.webp","/imoveis/mansao-praia-do-prea-157.webp","/imoveis/mansao-praia-do-prea-158.webp","/imoveis/mansao-praia-do-prea-159.webp","/imoveis/mansao-praia-do-prea-160.webp","/imoveis/mansao-praia-do-prea-161.webp","/imoveis/mansao-praia-do-prea-162.webp","/imoveis/mansao-praia-do-prea-163.webp","/imoveis/mansao-praia-do-prea-164.webp","/imoveis/mansao-praia-do-prea-165.webp","/imoveis/mansao-praia-do-prea-166.webp","/imoveis/mansao-praia-do-prea-167.webp","/imoveis/mansao-praia-do-prea-168.webp","/imoveis/mansao-praia-do-prea-169.webp","/imoveis/mansao-praia-do-prea-170.webp","/imoveis/mansao-praia-do-prea-171.webp","/imoveis/mansao-praia-do-prea-172.webp","/imoveis/mansao-praia-do-prea-173.webp","/imoveis/mansao-praia-do-prea-174.webp","/imoveis/mansao-praia-do-prea-175.webp","/imoveis/mansao-praia-do-prea-176.webp","/imoveis/mansao-praia-do-prea-177.webp","/imoveis/mansao-praia-do-prea-178.webp","/imoveis/mansao-praia-do-prea-179.webp","/imoveis/mansao-praia-do-prea-180.webp","/imoveis/mansao-praia-do-prea-181.webp","/imoveis/mansao-praia-do-prea-182.webp","/imoveis/mansao-praia-do-prea-183.webp","/imoveis/mansao-praia-do-prea-184.webp","/imoveis/mansao-praia-do-prea-185.webp"]
      },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8170056343078613,-40.42036056518555&hl=pt-BR&z=17&output=embed',
    videoSources: [
      "https://player.vimeo.com/video/1201412713",
      "https://player.vimeo.com/video/1201412789",
      "https://player.vimeo.com/video/1201412849",
      "https://player.vimeo.com/video/1201412979",
      "https://player.vimeo.com/video/1201413032",
      "https://player.vimeo.com/video/1201413057",
      "https://player.vimeo.com/video/1201413090",
      "https://player.vimeo.com/video/1201413261",
      "https://player.vimeo.com/video/1201413287",
      "https://player.vimeo.com/video/1201413321",
      "https://player.vimeo.com/video/1201412910",
      "https://player.vimeo.com/video/1201413348",
      "https://player.vimeo.com/video/1201413371",
      "https://player.vimeo.com/video/1201413409",
      "https://player.vimeo.com/video/1201413430",
      "https://player.vimeo.com/video/1201413461",
      "https://player.vimeo.com/video/1201413486",
      "https://player.vimeo.com/video/1201413513",
      "https://player.vimeo.com/video/1201413537",
      "https://player.vimeo.com/video/1201413572",
      "https://player.vimeo.com/video/1201413599",
      "https://player.vimeo.com/video/1201413616",
      "https://player.vimeo.com/video/1201413633",
      "https://player.vimeo.com/video/1201413652",
      "https://player.vimeo.com/video/1201413678",
      "https://player.vimeo.com/video/1201413701",
      "https://player.vimeo.com/video/1201413719"
    ],
    videoGalleryCredits: "Mais imagens no @casaohanaprea",
    priceTag: '',
    price: 'R$ 4.000.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: '10',
    slug: 'casa-alto-padrao-praia-barrinha',
    title: 'VENDA',
    image: '/imoveis/casa-alto-padrao-praia-barrinha-01.webp',
    badge: 'Venda',
    propertyTitle: 'CASA DE ALTO PADRÃO NA PRAIA DA BARRINHA',
    location: 'Barrinha - Acaraú - CE',
    rating: 5,
    exclusiveText: '400 m² | 4 Suítes | 5 Banheiros | Piscina | A 400m da Praia',
    summaryDescription: 'Casa de alto padrão a 400 metros da praia da Barrinha, com arquitetura praiana sofisticada, piscina, espaço gourmet, quadra de beach tennis e jardim com coqueiros.',
    about: [
      'Encante-se com essa casa simplesmente incrível, onde o charme rústico encontra o conforto e a sofisticação. Localizada a apenas 400 metros da praia, é o lugar perfeito para quem busca tranquilidade, contato com a natureza e momentos inesquecíveis.',
      'A propriedade conta com uma arquitetura única, com acabamentos em madeira, cobertura em palha e ambientes amplos e integrados, criando uma atmosfera acolhedora e elegante.',
      'Área de lazer completa com piscina, espaço gourmet amplo, perfeito para receber amigos e família.',
      'Varanda superior com vista e ventilação privilegiada. Jardim com coqueiros e muito verde.',
      'Quadra de areia para beach tennis/volley. Ambientes integrados e bem iluminados. Estilo praiano sofisticado.'
    ],
    infra: [
      'Área Total: 400 m²',
      'Área do Terreno: 3.706,54 m²',
      'Operação: Venda | Finalidade: Residencial',
      'Status: Novo | Situação: Desocupado',
      'Características: Muro, Lavanderia, Quintal, Varanda, Sala de estar, Cozinha, Banheiro social'
    ],
    facilities: ['4 Suítes', '5 Banheiros', '3 Vagas', 'Piscina', 'Espaço Gourmet', 'Quadra de Areia', 'Varanda', 'Jardim com Coqueiros'],
    gallery: {
      main: '/imoveis/casa-alto-padrao-praia-barrinha-01.webp',
      sideTop: '/imoveis/casa-alto-padrao-praia-barrinha-02.webp',
      sideBottom: '/imoveis/casa-alto-padrao-praia-barrinha-03.webp',
      extra: [
        '/imoveis/casa-alto-padrao-praia-barrinha-04.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-05.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-06.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-07.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-08.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-09.webp',
        '/imoveis/casa-alto-padrao-praia-barrinha-10.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Barrinha+18,+Barrinha,+Acara%C3%BA+-+CE,+62580-000&hl=pt-BR&z=16&output=embed',
    priceTag: '',
    price: 'R$ 6.600.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
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
      sideTop: '/imoveis/area-exclusiva-tatajuba-guriu-100000m-01.webp',
      sideBottom: '/imoveis/area-exclusiva-tatajuba-guriu-100000m-02.webp',
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
    image: '/imoveis/terreno-exclusivo-tatajuba-1000m-01.webp',
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
      main: '/imoveis/terreno-exclusivo-tatajuba-1000m-01.webp',
      sideTop: '/imoveis/terreno-exclusivo-tatajuba-1000m-02.webp',
      sideBottom: '/imoveis/terreno-exclusivo-tatajuba-1000m-03.webp',
      extra: []
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
        url: '/imoveis/terreno-exclusivo-tatajuba-1000m-04.webp',
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
    image: '/imoveis/terreno-exclusivo-prea-200m-mar-01.webp',
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
      main: '/imoveis/terreno-exclusivo-prea-200m-mar-01.webp',
      sideTop: '/imoveis/terreno-exclusivo-prea-200m-mar-02.webp',
      sideBottom: '/imoveis/terreno-exclusivo-prea-200m-mar-03.webp',
      extra: [
        '/imoveis/terreno-exclusivo-prea-200m-mar-04.webp'
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
    category: 'venda',
    unlisted: true
  },
  {
    id: '06',
    slug: 'prea-house',
    title: 'VENDA',
    image: '/imoveis/prea-house-01.webp',
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
      main: '/imoveis/prea-house-01.webp',
      sideTop: '/imoveis/prea-house-02.webp',
      sideBottom: '/imoveis/prea-house-03.webp',
      extra: [
        '/imoveis/prea-house-04.webp',
        '/imoveis/prea-house-05.webp',
        '/imoveis/prea-house-06.webp',
        '/imoveis/prea-house-07.webp',
        '/imoveis/prea-house-08.webp',
        '/imoveis/prea-house-09.webp',
        '/imoveis/prea-house-10.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.815576,-40.420863&z=15&output=embed',
    priceTag: '',
    price: 'R$ 2.700.000,00',
    installments: 'Consulte condições',
    category: 'venda'
  },
  {
    id: '04',
    slug: 'villa-prabhu',
    title: 'LANÇAMENTO',
    image: '/imoveis/villa-prabhu-01.webp',
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
      main: '/imoveis/villa-prabhu-01.webp',
      sideTop: '/imoveis/villa-prabhu-02.webp',
      sideBottom: '/imoveis/villa-prabhu-03.webp',
      extra: [
        '/imoveis/villa-prabhu-04.webp',
        '/imoveis/villa-prabhu-05.webp',
        '/imoveis/villa-prabhu-06.webp',
        '/imoveis/villa-prabhu-07.webp',
        '/imoveis/villa-prabhu-08.webp',
        '/imoveis/villa-prabhu-09.webp'
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
        label: 'Tabela de Preços (120 meses) – Atualizada 2026',
        url: '/documentos/villa-prabhu-tabela-precos-120-meses.pdf',
        legend: 'Detalhamento de valores, sinal e parcelas mensais.'
      },
      {
        label: 'Mapa de Disponibilidade (Masterplan)',
        url: '/documentos/villa-prabhu-mapa-disponibilidade-masterplan.pdf',
        legend: 'Visualize a localização exata de cada lote e áreas verdes.'
      }
    ],
    priceTag: 'Consulte',
    price: '',
    installments: 'A partir de 120 parcelas',
    category: 'lancamento',
  },
  {
    id: 'casa-prea-5-suites-vlad-2',
    slug: 'casa-praia-do-prea-5-suites-vlad-2',
    title: 'VENDA',
    searchTitle: 'Casa 5 Suítes Praia do Preá',
    image: '/imoveis/casa-praia-do-prea-5-suites-vlad-2-01.webp',
    badge: 'Alto Padrão',
    propertyTitle: 'CASA 5 SUÍTES NA PRAIA DO PREÁ',
    location: 'Praia do Preá, Ceará',
    rating: 5,
    exclusiveText: '5 Suítes | Dois Andares Independentes | 1.734 m² de Terreno',
    summaryDescription: 'Casa de alto padrão na Praia do Preá, a poucos minutos do centro, com 5 suítes distribuídas em dois andares que podem ser usados de forma independente.',
    about: [
      'Casa de alto padrão à venda na Praia do Preá, em localização tranquila e a poucos minutos do centro, com vista privilegiada para o mar.',
      'São 5 suítes distribuídas em dois andares que podem ser usados de forma independente, garantindo flexibilidade de espaço aliada a uma sensação de aconchego — ideal para famílias grandes ou para quem recebe convidados com frequência.',
      'A infraestrutura interna, somada à proximidade com bons restaurantes e beach clubs do Preá, torna o dia a dia mais prático, sem a necessidade de grandes deslocamentos.'
    ],
    infra: [
      '5 suítes distribuídas em 2 andares independentes',
      'Área construída de 739,56 m²',
      'Terreno total de 1.734,10 m²',
      'A poucos minutos do centro do Preá',
      'Próximo a restaurantes e beach clubs'
    ],
    facilities: ['5 Suítes', '739m² Construídos', '1.734m² de Terreno', 'Praia do Preá'],
    gallery: {
      main: '/imoveis/casa-praia-do-prea-5-suites-vlad-2-01.webp',
      sideTop: '/imoveis/casa-praia-do-prea-5-suites-vlad-2-02.webp',
      sideBottom: '/imoveis/casa-praia-do-prea-5-suites-vlad-2-03.webp',
      extra: [
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-04.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-05.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-06.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-07.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-08.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-09.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-10.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-11.webp',
        '/imoveis/casa-praia-do-prea-5-suites-vlad-2-12.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Preá,+Cruz,+Ceará&hl=pt-BR&z=14&output=embed',
    videoSources: [],
    priceTag: 'Valor',
    price: 'R$ 7.500.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    hideFromDestaque: true
  },
  {
    id: '01',
    slug: 'villa-conduru-3',
    title: 'ALUGUEL',
    image: '/imoveis/villa-conduru-3-01-sala-cozinha-integrada.webp',
    badge: 'Aluguel de Temporada',
    propertyTitle: 'CASA ALTO PADRÃO 3 SUÍTES (ALUGUEL)',
    location: 'FRENTE À PRAIA DO PREÁ',
    rating: 5,
    exclusiveText: 'ALUGUEL DE TEMPORADA FRENTE À PRAIA DO PREÁ',
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
      main: '/imoveis/villa-conduru-3-01-sala-cozinha-integrada.webp',
      sideTop: '/imoveis/villa-conduru-3-02-sala-estar-parede-pedra.webp',
      sideBottom: '/imoveis/villa-conduru-3-03-sala-jantar-vista-jardim.webp',
      extra: [
        '/imoveis/villa-conduru-3-04-sala-tv-parede-pedra.webp',
        '/imoveis/villa-conduru-3-05-sala-integrada-vista-cozinha.webp',
        '/imoveis/villa-conduru-3-06-cozinha-completa-forno.webp',
        '/imoveis/villa-conduru-3-07-suite-master-cama-rede.webp',
        '/imoveis/villa-conduru-3-08-suite-master-pe-direito-alto.webp',
        '/imoveis/villa-conduru-3-09-sala-estar-cortinas-jardim.webp',
        '/imoveis/villa-conduru-3-10-sala-estar-jantar-parede-pedra.webp',
        '/imoveis/villa-conduru-3-11-area-jantar-cozinha.webp',
        '/imoveis/villa-conduru-3-12-sala-estar-sofa.webp',
        '/imoveis/villa-conduru-3-13-sala-integrada-cozinha-pedra.webp',
        '/imoveis/villa-conduru-3-14-cozinha-bancada-pedra.webp',
        '/imoveis/villa-conduru-3-15-suite-master-cama-casal.webp',
        '/imoveis/villa-conduru-3-16-suite-master-vista-banheiro.webp',
        '/imoveis/villa-conduru-3-17-suite-master-decoracao.webp',
        '/imoveis/villa-conduru-3-18-suite-master-varanda-rede.webp',
        '/imoveis/villa-conduru-3-19-suite-master-armarios-madeira.webp',
        '/imoveis/villa-conduru-3-20-suite-master-vista-varanda.webp',
        '/imoveis/villa-conduru-3-21-suite-master-armario-rustico.webp',
        '/imoveis/villa-conduru-3-22-suite-master-luminarias-palha.webp',
        '/imoveis/villa-conduru-3-23-suite-master-ampla.webp',
        '/imoveis/villa-conduru-3-24-quarto-2-escrivaninha.webp',
        '/imoveis/villa-conduru-3-25-quarto-2-rede-decoracao.webp',
        '/imoveis/villa-conduru-3-26-quarto-2-sofa.webp',
        '/imoveis/villa-conduru-3-27-quarto-2-bancada-trabalho.webp',
        '/imoveis/villa-conduru-3-28-quarto-3-cama-casal.webp',
        '/imoveis/villa-conduru-3-29-quarto-3-quadro-decoracao.webp',
        '/imoveis/villa-conduru-3-30-quarto-3-varanda.webp',
        '/imoveis/villa-conduru-3-31-quarto-3-vista-banheiro.webp',
        '/imoveis/villa-conduru-3-32-varanda-superior-vista-jardim.webp',
        '/imoveis/villa-conduru-3-33-banheiro-espelho-madeira.webp',
        '/imoveis/villa-conduru-3-34-banheiro-bancada-rustica.webp',
        '/imoveis/villa-conduru-3-35-banheiro-espelho-redondo.webp',
        '/imoveis/villa-conduru-3-36-banheiro-cuba-pedra.webp',
        '/imoveis/villa-conduru-3-37-banheiro-box-vidro.webp',
        '/imoveis/villa-conduru-3-38-banheiro-luminarias-palha.webp',
        '/imoveis/villa-conduru-3-39-area-gourmet-mesa-jantar.webp',
        '/imoveis/villa-conduru-3-40-area-gourmet-churrasqueira.webp',
        '/imoveis/villa-conduru-3-41-area-externa-cozinha-gourmet.webp',
        '/imoveis/villa-conduru-3-42-patio-jardim-iluminado.webp',
        '/imoveis/villa-conduru-3-43-varanda-rede-vista-jardim.webp',
        '/imoveis/villa-conduru-3-44-varanda-quarto-3.webp',
        '/imoveis/villa-conduru-3-45-varanda-rede-artesanal.webp',
        '/imoveis/villa-conduru-3-46-varanda-terreo-poltronas-madeira.webp',
        '/imoveis/villa-conduru-3-47-varanda-deck-madeira-jardim.webp',
        '/imoveis/villa-conduru-3-48-jardim-condominio-deck.webp',
        '/imoveis/villa-conduru-3-49-piscina-condominio-prea.webp',
        '/imoveis/villa-conduru-3-50-piscina-condominio-deck.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8166,-40.4004&z=15&output=embed',
    videoSources: [
      "https://player.vimeo.com/video/1201808506",
      "https://player.vimeo.com/video/1201808597",
      "https://player.vimeo.com/video/1201808664"
    ],
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
    image: '/imoveis/terrenos-bitupita-01.webp',
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
      'Ideal para o velejo/kite',
      'Lotes disponíveis: 2, 3, 4, 7, 8 e 10'
    ],
    facilities: ['Projeto Exclusivo', 'Beira-mar', 'Próximo a serviços'],
    gallery: {
      main: '/imoveis/terrenos-bitupita-02.webp',
      sideTop: '/imoveis/terrenos-bitupita-03.webp',
      sideBottom: '/imoveis/terrenos-bitupita-04.webp',
      extra: [
        '/imoveis/terrenos-bitupita-05.webp',
        '/imoveis/terrenos-bitupita-06.webp',
        '/imoveis/terrenos-bitupita-01.webp',
        '/imoveis/terrenos-bitupita-07.webp',
        '/imoveis/terrenos-bitupita-08.webp',
        '/imoveis/terrenos-bitupita-09.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
    priceTag: 'A partir de',
    price: 'R$ 150 MIL',
    installments: 'Consulte disponibilidade',
    category: 'venda',
    unlisted: true
  },
  {
    id: '03',
    slug: 'vila-do-ingles',
    title: 'TEMPORADA',
    image: '/imoveis/vila-do-ingles-23-piscina-palmeiras.webp',
    badge: 'Temporada',
    propertyTitle: 'VILA DO INGLÊS',
    location: 'Preá, Ceará, Brasil',
    rating: 5,
    exclusiveText: '2.000 m² | 3 Quartos | 3 Banheiros | Exclusivo Réveillon',
    about: [
      'A Vila do Inglês é uma propriedade de 2.000 m², 100% privativa, no coração do Preá — pensada para grandes celebrações e para reunir quem você mais ama num só lugar. Piscina privativa, quadra de esportes com rede de beach tennis, área gourmet com churrasqueira e um jardim natural que convida a desacelerar assim que você chega.',
      'Por dentro, conforto do início ao fim: todos os quartos com ar-condicionado, cozinha de fazenda completa com liquidificador, tostadeira e cafeteira, lava-roupas, lava-louças e até ovos fresquinhos de galinhas criadas soltas no terreno. Chuveiro ao ar livre, detector de fumaça, guarda de kite e estacionamento para 5 carros garantem que nada falte durante a estadia — e cozinheira e serviço de limpeza estão disponíveis à parte, para quem quiser zero preocupação.',
      'Disponível com exclusividade para o Réveillon: a casa toda, com 3 quartos e 3 banheiros + 2 sofás-cama, acomodando até 8 pessoas. Fale com a Terra Ventos para consultar valores e garanta a virada do ano no Preá.'
    ],
    infra: [
      'Piscina privativa',
      '2.000 m² de área, 100% privativo',
      'Quadra de esportes com rede de beach tennis',
      'Área gourmet com churrasqueira',
      'Jardim natural e chuveiro ao ar livre',
      'Todos os quartos com ar-condicionado',
      'Detector de fumaça',
      'Cozinha de fazenda (lava-louças, lava-roupas, liquidificador, tostadeira, cafeteira)',
      'Ovos de galinhas livres',
      'Guarda de kite',
      'Estacionamento para 5 carros',
      'Cozinheira e limpeza disponíveis à parte'
    ],
    facilities: ['Piscina Privativa', 'Ar-condicionado', 'Área Gourmet', 'Churrasqueira', 'Quadra de Esportes', 'Guarda de Kite', 'Estacionamento', 'Detector de Fumaça'],
    gallery: {
      main: '/imoveis/vila-do-ingles-23-piscina-palmeiras.webp',
      sideTop: '/imoveis/vila-do-ingles-21-anfitriao-bernardo-cachorro.webp',
      sideBottom: '/imoveis/vila-do-ingles-02-sala-estar-jantar-integrada.webp',
      extra: [
        '/imoveis/vila-do-ingles-01-fachada-piscina.webp',
        '/imoveis/vila-do-ingles-07-varanda-rede-artesanal.webp',
        '/imoveis/vila-do-ingles-08-cozinha-completa-bancada.webp',
        '/imoveis/vila-do-ingles-24-piscina-frontal-espreguicadeiras.webp',
        '/imoveis/vila-do-ingles-25-piscina-espreguicadeira-madeira-palmeiras.webp',
        '/imoveis/vila-do-ingles-26-varanda-externa-jardim-areia.webp',
        '/imoveis/vila-do-ingles-27-varanda-pufe-listrado.webp',
        '/imoveis/vila-do-ingles-28-varanda-rede-plantas-tropicais.webp',
        '/imoveis/vila-do-ingles-29-varanda-vista-sala.webp',
        '/imoveis/vila-do-ingles-30-varanda-porta-sala-jantar.webp',
        '/imoveis/vila-do-ingles-04-area-jantar-janelas-madeira.webp',
        '/imoveis/vila-do-ingles-05-mesa-frutas-regionais.webp',
        '/imoveis/vila-do-ingles-06-area-gourmet-churrasqueira.webp',
        '/imoveis/vila-do-ingles-03-sala-jantar-cortinas-linho.webp',
        '/imoveis/vila-do-ingles-31-sala-jantar-estar-portas-abertas.webp',
        '/imoveis/vila-do-ingles-32-sala-tv-sofa-terracota.webp',
        '/imoveis/vila-do-ingles-33-sala-sofa-ventilador-teto.webp',
        '/imoveis/vila-do-ingles-34-sala-sofa-quadros.webp',
        '/imoveis/vila-do-ingles-35-sala-mesa-jantar-redonda.webp',
        '/imoveis/vila-do-ingles-09-cozinha-corredor-madeira.webp',
        '/imoveis/vila-do-ingles-36-cozinha-anfitriao-bernardo.webp',
        '/imoveis/vila-do-ingles-37-cozinha-cooktop-azulejo-hidraulico.webp',
        '/imoveis/vila-do-ingles-38-cozinha-armarios-madeira-luminaria.webp',
        '/imoveis/vila-do-ingles-39-detalhe-porta-madeira-artesanal.webp',
        '/imoveis/vila-do-ingles-12-suite-1-cama-casal.webp',
        '/imoveis/vila-do-ingles-13-suite-1-vista-banheiro.webp',
        '/imoveis/vila-do-ingles-40-suite-cama-casal-porta-madeira.webp',
        '/imoveis/vila-do-ingles-41-suite-armario-rustico-detalhe.webp',
        '/imoveis/vila-do-ingles-14-suite-2-armario-rustico.webp',
        '/imoveis/vila-do-ingles-42-suite-tv-janela-venezianas.webp',
        '/imoveis/vila-do-ingles-15-suite-3-janelas-madeira.webp',
        '/imoveis/vila-do-ingles-43-suite-3-cama-janela.webp',
        '/imoveis/vila-do-ingles-44-suite-3-armario-janela-palmeiras.webp',
        '/imoveis/vila-do-ingles-45-suite-3-cama-porta.webp',
        '/imoveis/vila-do-ingles-46-suite-3-cabeceira-janela.webp',
        '/imoveis/vila-do-ingles-17-banheiro-revestimento-terracota.webp',
        '/imoveis/vila-do-ingles-18-banheiro-box-espelho.webp',
        '/imoveis/vila-do-ingles-19-banheiro-cuba-pedra.webp',
        '/imoveis/vila-do-ingles-20-banheiro-cuba-marmore.webp',
        '/imoveis/vila-do-ingles-47-banheiro-terracota-cuba-pedra.webp',
        '/imoveis/vila-do-ingles-10-sala-tv-sofa.webp',
        '/imoveis/vila-do-ingles-11-sala-tv-espelho-palha.webp',
        '/imoveis/vila-do-ingles-16-quarto-escritorio-sofa-cama.webp',
        '/imoveis/vila-do-ingles-48-hospede-sala-tv.webp',
        '/imoveis/vila-do-ingles-49-hospede-vista-banheiro-espelho-palha.webp',
        '/imoveis/vila-do-ingles-22-hospede-quarto.webp',
        '/imoveis/vila-do-ingles-50-fachada-muro-pedra-janela.webp'
      ]
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Preá+-+Caiçara,+Cruz+-+CE,+62595-000,+Brasil&hl=pt-BR&z=15&output=embed',
    priceTag: 'Réveillon',
    price: 'SOB CONSULTA',
    installments: 'Pacote exclusivo para o Réveillon',
    category: 'temporada',
  },
  {
    id: '05',
    slug: 'casa-matanzas',
    title: 'TEMPORADA',
    image: '/imoveis/casa-matanzas-01.webp',
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
      main: '/imoveis/casa-matanzas-02.webp',
      sideTop: '/imoveis/casa-matanzas-03.webp',
      sideBottom: '/imoveis/casa-matanzas-04.webp',
      extra: [
        '/imoveis/casa-matanzas-01.webp',
        '/imoveis/casa-matanzas-05.webp',
        '/imoveis/casa-matanzas-06.webp',
        '/imoveis/casa-matanzas-07.webp',
        '/imoveis/casa-matanzas-08.webp',
        '/imoveis/casa-matanzas-09.webp',
        '/imoveis/casa-matanzas-10.webp',
        '/imoveis/casa-matanzas-11.webp',
        '/imoveis/casa-matanzas-12.webp',
        '/imoveis/casa-matanzas-13.webp',
        '/imoveis/casa-matanzas-14.webp',
        '/imoveis/casa-matanzas-15.webp',
        '/imoveis/casa-matanzas-16.webp',
        '/imoveis/casa-matanzas-17.webp',
        '/imoveis/casa-matanzas-18.webp',
        '/imoveis/casa-matanzas-19.webp',
        '/imoveis/casa-matanzas-20.webp',
        '/imoveis/casa-matanzas-21.webp',
        '/imoveis/casa-matanzas-22.webp',
        '/imoveis/casa-matanzas-23.webp',
        '/imoveis/casa-matanzas-24.webp',
        '/imoveis/casa-matanzas-25.webp',
        '/imoveis/casa-matanzas-26.webp',
        '/imoveis/casa-matanzas-27.webp',
        '/imoveis/casa-matanzas-28.webp',
        '/imoveis/casa-matanzas-29.webp',
        '/imoveis/casa-matanzas-30.webp',
        '/imoveis/casa-matanzas-31.webp',
        '/imoveis/casa-matanzas-32.webp'
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
,
  {
    id: '11',
    slug: 'lote-109-taiba',
    title: 'VENDA',
    image: '/imoveis/lote-109-taiba-01.webp',
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
      main: '/imoveis/lote-109-taiba-01.webp',
      sideTop: '/imoveis/lote-109-taiba-02.webp',
      sideBottom: '/imoveis/lote-109-taiba-03.webp',
      extra: [
        '/imoveis/lote-109-taiba-04.webp'
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
    category: 'venda',
    unlisted: true
  },
  {
    id: '12',
    slug: 'lote-barramar-lagoa-taiba',
    title: 'INVESTIMENTO',
    image: '/imoveis/lote-barramar-lagoa-taiba-01.webp',
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
      main: '/imoveis/lote-barramar-lagoa-taiba-01.webp',
      sideTop: '/imoveis/lote-barramar-lagoa-taiba-02.webp',
      sideBottom: '/imoveis/lote-barramar-lagoa-taiba-03.webp',
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
    category: 'investimento',
    unlisted: true
  },
  {
  id: 'new-1',
  slug: 'terreno-acarau-castelhano-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-acarau-castelhano-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO ACARAÚ — CASTELHANO',
  location: 'Acaraú - CE, Bairro Castelhano',
  rating: 5,
  exclusiveText: 'Terreno à Venda em Acaraú | Bairro Castelhano',
  summaryDescription: 'Terreno de 1.680 m² limpo, pé no chão e pronto para construir.',
  about: [
      'Os 24 metros de frente abrem um horizonte de possibilidades em uma região que já não aceita amadores.',
      'Pisar nesse chão perto da Vila Carnaúba é entender, na prática, por que o Baixo Acaraú entrou no radar de quem realmente entende de patrimônio.',
      'São 1.680 m² de terreno limpo, pé no chão e pronto para construir, com a conveniência de já ter dois banheiros estruturados. Você sente a brisa que vem do Preá enquanto visualiza a planta de um condomínio ou de uma casa de veraneio que aproveite os 70 metros de profundidade.',
      'O ritmo aqui é outro. Tudo o que facilita o dia a dia e a logística de uma obra está ao redor: do supermercado à farmácia, passando pela estrutura de saúde e a proximidade estratégica com o aeroporto.',
      'Não se trata apenas de metros quadrados, mas de posicionamento geográfico em um eixo de valorização real. É terra firme para quem busca segurança e quer ver o investimento ganhar corpo com a vizinhança de alto padrão que se consolida a cada dia.',
      'Se você busca o equilíbrio entre o sossego da Praia do Preá e a praticidade urbana de Acaraú, as dimensões deste lote entregam exatamente esse encaixe. Vale a visita para medir o potencial com os próprios olhos.'
    ],
  infra: [
      'Bairro: CASTELHANO',
      'Área Total: 1.680,00 m²',
      'Frente: 24,00 Metros',
      'Fundo: 70,00 Metros',
      'Valor por m²: R$ 369,04'
    ],
  facilities: [
      'Aeroporto',
      'Creche',
      'Escola',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-acarau-castelhano-simi-01.webp',
    sideTop: '/imoveis/terreno-acarau-castelhano-simi-02.webp',
    sideBottom: '/imoveis/terreno-acarau-castelhano-simi-03.webp',
    extra: [
      '/imoveis/terreno-acarau-castelhano-simi-04.webp',
      '/imoveis/terreno-acarau-castelhano-simi-06.webp',
      '/imoveis/terreno-acarau-castelhano-simi-07.webp',
      '/imoveis/terreno-acarau-castelhano-simi-08.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8262348,-40.3646828&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 620.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-2',
  slug: 'terreno-vila-prea-215m-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-vila-prea-215m-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO VILA PREÁ — 215,80 m²',
  location: 'Vila Preá, Cruz - CE',
  rating: 5,
  exclusiveText: '215,80 m² | Vila Preá',
  summaryDescription: 'Terreno de 215,80 m² localizado na Vila Preá com dimensões perfeitas para construção.',
  about: [
      'Terreno para Venda no bairro Vila Preá, região PREÁ.',
      '04 Lotes disponíveis, cada um com Área Total de 215,80 m².',
      'Frente do terreno com 8,30 Metros, Fundos do terreno com 8,30 Metros.',
      'Lateral esquerda do terreno com 26,00 Metros, Lateral direita do terreno com 26,00 Metros.'
    ],
  infra: [
      'Bairro: Vila Preá',
      'Área Total: 215,80 m²',
      'Frente: 8,30 Metros',
      'Fundo: 8,30 Metros',
      'Esquerda: 26,00 Metros',
      'Direita: 26,00 Metros'
    ],
  facilities: [
      'Academia',
      'Lago natural',
      'Pedra Furada',
      'Praia de Jericoacoara',
      'Lagun Beach',
      'Lagoa Azul',
      'Lagoa do Paraíso',
      'Parque Nacional',
      'Buraco Azul',
      'Aeroporto',
      'Creche',
      'Escola',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-vila-prea-215m-simi-01.webp',
    sideTop: '/imoveis/terreno-vila-prea-215m-simi-02.webp',
    sideBottom: '/imoveis/terreno-vila-prea-215m-simi-03.webp',
    extra: [
      '/imoveis/terreno-vila-prea-215m-simi-04.webp',
      '/imoveis/terreno-vila-prea-215m-simi-05.webp',
      '/imoveis/terreno-vila-prea-215m-simi-06.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-2.8144661,-40.4039212&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 360.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-3',
  slug: 'terreno-barrinha-2760m-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-barrinha-2760m-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO BARRINHA — 2.760,00 m²',
  location: 'Barrinha, Acaraú - CE',
  rating: 5,
  exclusiveText: '2.760,00 m² | Terreno em Barrinha',
  summaryDescription: 'Terreno Exclusivo de 2.760,00 m² à venda na Praia da Barrinha, região de alta valorização.',
  about: [
      'Terreno Exclusivo à Venda na Praia da Barrinha!',
      'Uma excelente oportunidade para quem busca investir em uma das regiões mais valorizadas do litoral cearense.',
      'Localizado na Praia da Barrinha, com fácil acesso às famosas praias do Preá e Jericoacoara, este terreno reúne localização privilegiada, amplo espaço e grande potencial de valorização.',
      'Destaques do imóvel:',
      '✔ Região turística em constante crescimento',
      '✔ Próximo às praias do Preá e Jericoacoara',
      '✔ Excelente para empreendimentos turísticos, pousadas ou residências de alto padrão',
      '✔ Fácil acesso e localização estratégica',
      '✔ Alto potencial de valorização e retorno sobre o investimento.',
      'Invista em uma área privilegiada, cercada pelas belezas naturais que tornam essa região uma das mais desejadas do Brasil. Seu próximo grande investimento está aqui.'
    ],
  infra: [
      'Bairro: Barrinha',
      'Área Total: 2.760,00 m²',
      'Valor por m²: R$ 516,00'
    ],
  facilities: [
      'Dunas e Lagoas',
      "Beira d'água",
      'Lagun Beach',
      'Lagoa do Paraíso',
      'Parque Nacional',
      'Buraco Azul',
      'Aeroporto',
      'Creche',
      'Lagoa Azul',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-barrinha-2760m-simi-01.webp',
    sideTop: '/imoveis/terreno-barrinha-2760m-simi-02.webp',
    sideBottom: '/imoveis/terreno-barrinha-2760m-simi-03.webp',
    extra: [
      '/imoveis/terreno-barrinha-2760m-simi-04.webp',
      '/imoveis/terreno-barrinha-2760m-simi-05.webp',
      '/imoveis/terreno-barrinha-2760m-simi-06.webp',
      '/imoveis/terreno-barrinha-2760m-simi-08.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=-22.9354322,-42.4904624&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 1.426.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-4',
  slug: 'terreno-praia-do-prea-1273m-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-praia-do-prea-1273m-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO PRAIA DO PREÁ — 1.273,00 m²',
  location: 'Praia do Preá, Cruz - CE',
  rating: 5,
  exclusiveText: '1.273,00 m² | Praia do Preá',
  summaryDescription: 'Terreno de 1.273,00 m² na Praia do Preá com 12,35 metros de frente.',
  about: [
      'Terreno para Venda no bairro Praia Do Preá/CE.',
      'Área Total de 1.273,00 m².',
      'Frente do terreno com 12,35 Metros, Fundos do terreno com 24,00 Metros.'
    ],
  infra: [
      'Bairro: Praia Do Preá',
      'Área Total: 1.273,00 m²',
      'Frente: 12,35 Metros',
      'Fundo: 24,00 Metros',
      'Valor por m²: R$ 589,00'
    ],
  facilities: [
      'Aeroporto',
      'Creche',
      'Escola',
      'Lagoa Azul',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-praia-do-prea-1273m-simi-01.webp',
    sideTop: '/imoveis/terreno-praia-do-prea-1273m-simi-02.webp',
    sideBottom: '/imoveis/terreno-praia-do-prea-1273m-simi-03.webp',
    extra: [
      '/imoveis/terreno-praia-do-prea-1273m-simi-04.webp',
      '/imoveis/terreno-praia-do-prea-1273m-simi-05.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=praia+do+pre%C3%A1&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 750.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-5',
  slug: 'terreno-praia-do-prea-523m-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-praia-do-prea-523m-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO PRAIA DO PREÁ — 523,00 m²',
  location: 'Praia do Preá, Cruz - CE',
  rating: 5,
  exclusiveText: '523,00 m² | Praia do Preá',
  summaryDescription: 'Terreno com 523,00 m² de área total, localizado na Praia do Preá.',
  about: [
      'Terreno para Venda no bairro Praia Do Preá/CE.',
      'Área Total de 523,00 m².',
      'Uma excelente oportunidade de investimento ou moradia, cercada de comodidades.'
    ],
  infra: [
      'Bairro: Praia Do Preá',
      'Área Total: 523,00 m²',
      'Valor por m²: R$ 699,00'
    ],
  facilities: [
      'Aeroporto',
      'Creche',
      'Escola',
      'Lagoa Azul',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-praia-do-prea-523m-simi-01.webp',
    sideTop: '/imoveis/terreno-praia-do-prea-523m-simi-02.webp',
    sideBottom: '/imoveis/terreno-praia-do-prea-523m-simi-03.webp',
    extra: []
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=praia+do+pre%C3%A1&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 366.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-6',
  slug: 'terreno-praia-do-prea-600m-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-praia-do-prea-600m-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO PRAIA DO PREÁ — 600,00 m²',
  location: 'Praia do Preá, Cruz - CE',
  rating: 5,
  exclusiveText: '600,00 m² | Praia do Preá',
  summaryDescription: 'Oportunidade de terreno de 600,00 m² na Praia do Preá.',
  about: [
      'OPORTUNIDADE IMPERDÍVEL NA PRAIA DO PREÁ!',
      'Excelente terreno à venda na Praia do Preá, com 20x30 metros (total de 600m²), em localização estratégica ao lado do restaurante Tempero da Chica.',
      'Ideal para investimento, construção de pousada, casa de veraneio ou empreendimento comercial, em uma região que cresce cada vez mais e atrai turistas do mundo inteiro.',
      'Localizado próximo a destinos paradisíacos como Jericoacoara e Barrinha.',
      'Uma excelente oportunidade para investir em uma das regiões mais valorizadas do litoral cearense!'
    ],
  infra: [
      'Bairro: Praia Do Preá',
      'Ponto de Referência: Tempero da Chica',
      'Área Total: 600,00 m²',
      'Frente: 20,00 Metros',
      'Fundo: 30,00 Metros',
      'Valor por m²: R$ 583,00'
    ],
  facilities: [
      'Dunas e Lagoas',
      'Pedra Furada',
      'Praia de Jericoacoara',
      "Beira d'água",
      'Lagun Beach',
      'Lagoa do Paraíso',
      'Parque Nacional',
      'Buraco Azul',
      'Aeroporto',
      'Creche',
      'Lagoa Azul',
      'Posto de saúde',
      'Praia do Preá',
      'Bares e Restaurantes',
      'Farmácia',
      'Supermercado'
    ],
  gallery: {
    main: '/imoveis/terreno-praia-do-prea-600m-simi-01.webp',
    sideTop: '/imoveis/terreno-praia-do-prea-600m-simi-02.webp',
    sideBottom: '/imoveis/terreno-praia-do-prea-600m-simi-03.webp',
    extra: [
      '/imoveis/terreno-praia-do-prea-600m-simi-04.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=praia+do+pre%C3%A1&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 350.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
  id: 'new-7',
  slug: 'terreno-cruz-cavalo-bravo-simi',
  title: 'VENDA',
  image: '/imoveis/terreno-cruz-cavalo-bravo-simi-01.webp',
  badge: 'Oportunidade',
  propertyTitle: 'TERRENO CRUZ — CAVALO BRAVO PREÁ',
  location: 'Cruz - CE, Bairro Cavalo Bravo Preá',
  rating: 5,
  exclusiveText: 'Terreno no bairro Cavalo Bravo Preá',
  summaryDescription: 'Terreno de 231,00 m² (11x21m) no bairro Cavalo Bravo em Cruz.',
  about: [
      'OPORTUNIDADE IMPERDÍVEL NA PRAIA DO PREÁ!',
      'Está procurando um excelente investimento ou o lugar ideal para construir seu imóvel na praia? Temos a opção perfeita para você!',
      'Terreno na Praia do Preá com Medidas: 11m x 21m.',
      'Uma oportunidade única em uma das regiões que mais crescem no litoral cearense, próxima às belezas naturais, turismo em expansão e com grande potencial de valorização.',
      '✔ Ideal para morar',
      '✔ Perfeito para investir',
      '✔ Excelente localização'
    ],
  infra: [
      'Localização: Praia do Preá / Cavalo Bravo',
      'Dimensões: 11m x 21m',
      'Área Total: 231,00 m²'
    ],
  facilities: [
      'Excelente Localização',
      'Turismo em Expansão',
      'Próximo à Praia',
      'Belezas Naturais'
    ],
  gallery: {
    main: '/imoveis/terreno-cruz-cavalo-bravo-simi-01.webp',
    sideTop: '/imoveis/terreno-cruz-cavalo-bravo-simi-02.webp',
    sideBottom: '/imoveis/terreno-cruz-cavalo-bravo-simi-03.webp',
    extra: [
      '/imoveis/terreno-cruz-cavalo-bravo-simi-04.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-05.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-06.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-07.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-08.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-09.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-10.webp',
      '/imoveis/terreno-cruz-cavalo-bravo-simi-11.webp'
    ]
  },
  mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Pousada+Cavalo+Bravo,+Cruz+-+CE&hl=pt-BR&z=15&output=embed',
  priceTag: '',
  price: 'R$ 210.000,00',
  installments: 'Consulte condições',
  category: 'venda',
  unlisted: true
},
  {
    id: 'new-8',
    slug: 'terreno-prea-esquina-praca-nova-simi',
    title: 'VENDA',
    searchTitle: 'Terreno de Esquina - Praia do Preá',
    image: '/imoveis/terreno-prea-esquina-praca-nova-simi-01.webp',
    badge: 'Oportunidade',
    propertyTitle: 'TERRENO DE ESQUINA PRAIA DO PREÁ',
    location: 'Praia do Preá, Cruz - CE (Praça Nova)',
    rating: 5,
    exclusiveText: 'Terreno de Esquina à Venda na Praia do Preá',
    summaryDescription: 'Terreno de esquina com 1.350 m² (27x50m), a apenas 350m da praia e próximo à Praça Nova no Preá.',
    about: [
      'Terreno de esquina exclusivo à venda na Praia do Preá!',
      'Com uma área total de 1.350 m² (27x50m), este terreno oferece uma localização estratégica e muito privilegiada.',
      'Situado próximo à Praça Nova e a apenas 350 metros da praia, é o local perfeito para construir uma pousada, empreendimento comercial ou uma casa de alto padrão.',
      'Uma oportunidade rara de investimento no coração de um dos litorais mais procurados e valorizados do mundo.'
    ],
    infra: [
      'Bairro: Praia do Preá',
      'Ponto de Referência: Próximo à Praça Nova e a 350m da praia',
      'Área Total: 1.350,00 m²',
      'Dimensões: 27,00m x 50,00m'
    ],
    facilities: [
      'A 350m da Praia',
      'Terreno de Esquina',
      'Próximo à Praça Nova',
      'Excelente Localização',
      'Alto Potencial Comercial',
      'Turismo em Expansão'
    ],
    gallery: {
      main: '/imoveis/terreno-prea-esquina-praca-nova-simi-01.webp',
      sideTop: '/imoveis/terreno-prea-esquina-praca-nova-simi-01.webp',
      sideBottom: '/imoveis/terreno-prea-esquina-praca-nova-simi-01.webp'
    },
    mapImage: '/mapa.avif',
    mapUrl: 'https://maps.google.com/maps?q=Pra%C3%A7a+Nova,+Praia+do+Pre%C3%A1,+Cruz+-+CE&hl=pt-BR&z=16&output=embed',
    priceTag: 'Valor total',
    price: 'R$ 1.600.000,00',
    installments: 'Consulte condições',
    category: 'venda',
    unlisted: true
  },
{
  id: "parque-nacional-1-carlos",
  slug: "terreno-parque-nacional-3044m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Parque Nacional 3.044m²",
  image: "/imoveis/terreno-parque-nacional-3044m-carlos-01.webp",
  badge: "Oportunidade",
  propertyTitle: "TERRENO EXCLUSIVO PARQUE NACIONAL",
  location: "Parque Nacional, Preá - CE",
  rating: 5,
  exclusiveText: "Terreno de 3.044m² | Todo Murado | Excelente Localização",
  summaryDescription: "Aproveite esta rara oportunidade de adquirir um terreno totalmente murado com 3.044m² no cobiçado setor do Parque Nacional. Ideal para projetos residenciais de alto padrão ou pousadas de charme.",
  about: [
    "Uma oportunidade extraordinária para quem busca espaço, privacidade e contato com a natureza no exclusivo setor do Parque Nacional.",
    "Este amplo terreno de 3.044m² já se encontra totalmente murado, proporcionando segurança e agilidade para o início do seu projeto.",
    "Sua localização estratégica o torna ideal tanto para a construção de uma residência luxuosa quanto para o desenvolvimento de uma pousada ou hotel boutique, capitalizando sobre a alta demanda turística da região."
  ],
  infra: [
    "Área Total: 3.044 m²",
    "Totalmente murado",
    "Localização: Setor do Parque Nacional",
    "Excelente potencial de valorização"
  ],
  facilities: [
    "3.044 m²",
    "Murado",
    "Pronto para construir",
    "Contato com a natureza"
  ],
  gallery: {
    main: "/imoveis/terreno-parque-nacional-3044m-carlos-01.webp",
    sideTop: "/imoveis/terreno-parque-nacional-3044m-carlos-02.webp",
    sideBottom: "/imoveis/terreno-parque-nacional-3044m-carlos-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 2.000.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "parque-nacional-2-carlos",
  slug: "terreno-perto-mar-2110m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Perto do Mar Parque Nacional",
  image: "/imoveis/terreno-perto-mar-2110m-carlos-01.webp",
  badge: "Oportunidade Rara",
  propertyTitle: "TERRENO PREMIUM PERTO DO MAR",
  location: "Parque Nacional, Preá - CE",
  rating: 5,
  exclusiveText: "Terreno de 2.110m² | Próximo ao Mar | Setor Parque Nacional",
  summaryDescription: "Excepcional terreno de 2.110m² super bem localizado perto do mar, no cobiçado setor do Parque Nacional. O cenário perfeito para o seu refúgio de luxo.",
  about: [
    "Descubra este refúgio perfeito! Um terreno excepcional de 2.110m² com uma localização super privilegiada, a poucos passos do mar.",
    "Situado no desejado setor do Parque Nacional, esta área oferece a combinação perfeita entre a serenidade da natureza e a proximidade com as belas praias da região.",
    "Uma oportunidade inigualável para o desenvolvimento de um projeto arquitetônico arrojado, garantindo alta rentabilidade e qualidade de vida."
  ],
  infra: [
    "Área Total: 2.110 m²",
    "Proximidade com o mar",
    "Localização premium no Parque Nacional"
  ],
  facilities: [
    "2.110 m²",
    "Perto do Mar",
    "Setor Parque Nacional"
  ],
  gallery: {
    main: "/imoveis/terreno-perto-mar-2110m-carlos-01.webp",
    sideTop: "/imoveis/terreno-perto-mar-2110m-carlos-01.webp",
    sideBottom: "/imoveis/terreno-perto-mar-2110m-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.700.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-1-carlos",
  slug: "terreno-prea-1300m-mar-carlos",
  title: "VENDA",
  searchTitle: "Terreno Preá 1.300m² Perto do Mar",
  image: "/imoveis/terreno-prea-1300m-mar-carlos-01.webp",
  badge: "Excelente Localização",
  propertyTitle: "TERRENO PREÁ PERTO DO MAR - 1.300M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.300m² | A poucos metros do mar | Documentação OK",
  summaryDescription: "Terreno espetacular de 1.300m² localizado a poucos metros das águas cristalinas do Preá. Documentação totalmente regularizada, pronto para construir o projeto dos seus sonhos.",
  about: [
    "Apresentamos uma oportunidade imperdível: um magnífico terreno de 1.300m² super bem localizado na vibrante vila do Preá.",
    "Sua proximidade com o mar (apenas a poucos metros) torna este lote perfeito para quem deseja acordar sentindo a brisa oceânica ou para o desenvolvimento de uma pousada boutique.",
    "Além da localização privilegiada, o terreno conta com toda a documentação 100% regularizada, garantindo segurança total para o seu investimento."
  ],
  infra: [
    "Área Total: 1.300 m²",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "1.300 m²",
    "Perto do mar",
    "Documentação regular"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-1300m-mar-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-1300m-mar-carlos-01.webp",
    sideBottom: "/imoveis/terreno-prea-1300m-mar-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.500.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-2-carlos",
  slug: "terreno-prea-1342m-mar-carlos",
  title: "VENDA",
  searchTitle: "Terreno Preá 1.342m² Perto do Mar",
  image: "/imoveis/terreno-prea-1342m-mar-carlos-01.webp",
  badge: "Excelente Localização",
  propertyTitle: "TERRENO PREÁ PERTO DO MAR - 1.342M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.342m² | A poucos metros do mar | Documentação OK",
  summaryDescription: "Amplo terreno de 1.342m² estrategicamente posicionado a poucos metros do mar no Preá. Invista com segurança em um dos litorais que mais valoriza no Brasil.",
  about: [
    "Invista em qualidade de vida com este amplo terreno de 1.342m², situado em uma das localizações mais disputadas do Preá.",
    "A apenas alguns passos da praia, é o cenário ideal para uma residência pé na areia de luxo ou para empreender no crescente mercado de turismo local.",
    "Negocie com tranquilidade: a propriedade possui documentação totalmente desembaraçada e pronta para transferência."
  ],
  infra: [
    "Área Total: 1.342 m²",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "1.342 m²",
    "Perto do mar",
    "Documentação regular"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-1342m-mar-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-1342m-mar-carlos-01.webp",
    sideBottom: "/imoveis/terreno-prea-1342m-mar-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.100.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-3-carlos",
  slug: "terreno-prea-344m-mar-carlos",
  title: "VENDA",
  searchTitle: "Terreno Preá 344m² Perto do Mar",
  image: "/imoveis/terreno-prea-344m-mar-carlos-01.webp",
  badge: "Excelente Localização",
  propertyTitle: "TERRENO PREÁ PERTO DO MAR - 344M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "344m² | A poucos metros do mar | Documentação OK",
  summaryDescription: "Compacto e exclusivo: Terreno de 344m² a poucos metros da praia no Preá. A escolha certa para um charmoso refúgio de praia com documentação perfeita.",
  about: [
    "Esta é a sua chance de ter um pedaço do paraíso! Terreno charmoso e funcional de 344m², com localização invejável no Preá.",
    "Perfeito para quem deseja construir uma casa de praia prática e aconchegante, aproveitando a proximidade imediata com o mar.",
    "Assim como as melhores opções da nossa carteira, conta com documentação rigorosamente em dia, permitindo a você focar apenas no seu projeto de vida."
  ],
  infra: [
    "Área Total: 344 m²",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "344 m²",
    "Perto do mar",
    "Documentação regular"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-344m-mar-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-344m-mar-carlos-01.webp",
    sideBottom: "/imoveis/terreno-prea-344m-mar-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 550.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-4-carlos",
  slug: "terreno-prea-700m-mar-carlos",
  title: "VENDA",
  searchTitle: "Terreno Preá 700m² Perto do Mar",
  image: "/imoveis/terreno-prea-700m-mar-carlos-01.webp",
  badge: "Excelente Localização",
  propertyTitle: "TERRENO PREÁ PERTO DO MAR - 700M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "700m² | A poucos metros do mar | Documentação OK",
  summaryDescription: "Excelente oportunidade: Lote de 700m² incrivelmente posicionado a poucos metros da praia do Preá. Segurança jurídica total para a realização da sua obra.",
  about: [
    "Um excelente lote de 700m² que harmoniza tamanho e localização com perfeição. Situado no cobiçado destino do Preá, fica a poucos metros da areia e do mar.",
    "Este terreno oferece espaço de sobra para um belo projeto residencial de alto padrão ou para pequenos empreendimentos de hospedagem boutique.",
    "Vendido com toda a documentação aprovada e ok, pronto para você iniciar sua jornada no litoral cearense sem complicações."
  ],
  infra: [
    "Área Total: 700 m²",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "700 m²",
    "Perto do mar",
    "Documentação regular"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-700m-mar-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-700m-mar-carlos-01.webp",
    sideBottom: "/imoveis/terreno-prea-700m-mar-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.000.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-5-carlos",
  slug: "terreno-prea-1417m-esquina-carlos",
  title: "VENDA",
  searchTitle: "Terreno Esquina Preá 1.417m²",
  image: "/imoveis/terreno-prea-1417m-esquina-carlos-01.webp",
  badge: "Terreno de Esquina",
  propertyTitle: "TERRENO PREÁ ESQUINA PERTO DO MAR - 1.417M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.417m² | Terreno de Esquina | A poucos metros do mar",
  summaryDescription: "Oportunidade ímpar: Grandioso terreno de esquina com 1.417m², a poucos metros do mar no Preá. Dupla frente e excelente potencial arquitetônico.",
  about: [
    "A grandiosidade e versatilidade se encontram neste terreno de esquina com expressivos 1.417m² no Preá.",
    "Sua posição em esquina garante ventilação privilegiada, múltiplas opções de acesso e um design arquitetônico imponente, tudo isso a poucos metros da orla.",
    "Uma verdadeira joia para investidores que desejam maximizar visibilidade e luxo, acompanhado de documentação 100% regularizada."
  ],
  infra: [
    "Área Total: 1.417 m²",
    "Características: Terreno de esquina",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "1.417 m²",
    "Esquina",
    "Perto do mar"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-1417m-esquina-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-1417m-esquina-carlos-02.webp",
    sideBottom: "/imoveis/terreno-prea-1417m-esquina-carlos-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.400.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-6-carlos",
  slug: "terreno-prea-1100m-mar-carlos",
  title: "VENDA",
  searchTitle: "Terreno Preá 1.100m² Perto do Mar",
  image: "/imoveis/terreno-prea-1100m-mar-carlos-01.webp",
  badge: "Excelente Localização",
  propertyTitle: "TERRENO PREÁ PERTO DO MAR - 1.100M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.100m² | A poucos metros do mar | Documentação OK",
  summaryDescription: "Prestigioso lote de 1.100m² com excelente localização na praia do Preá. Ideal para a casa dos sonhos a poucos metros da orla.",
  about: [
    "Aproveite a oportunidade de adquirir este prestigiado lote de 1.100m², situado muito próximo ao vibrante litoral do Preá.",
    "A metragem versátil permite tanto o planejamento de uma residência espaçosa com ampla área de lazer, quanto empreendimentos comerciais de sucesso.",
    "Segurança total no seu negócio com documentação devidamente regularizada e pronta para assinatura."
  ],
  infra: [
    "Área Total: 1.100 m²",
    "Localização: A poucos metros do mar",
    "Situação Jurídica: Documentação toda OK"
  ],
  facilities: [
    "1.100 m²",
    "Perto do mar",
    "Documentação regular"
  ],
  gallery: {
    main: "/imoveis/terreno-prea-1100m-mar-carlos-01.webp",
    sideTop: "/imoveis/terreno-prea-1100m-mar-carlos-02.webp",
    sideBottom: "/imoveis/terreno-prea-1100m-mar-carlos-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 850.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-8-carlos",
  slug: "terreno-sitio-fenix-300m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Sítio Fênix 300m²",
  image: "/imoveis/terreno-sitio-fenix-300m-carlos-01.webp",
  badge: "Ótima Oportunidade",
  propertyTitle: "TERRENO RUA DO SÍTIO FÊNIX - 300M²",
  location: "Rua do Sítio Fênix, Ceará, Brasil",
  rating: 5,
  exclusiveText: "Terreno localizado na Rua do Sítio Fênix | 300m²",
  summaryDescription: "Praticidade e boa localização definem este terreno de 300m² na conceituada Rua do Sítio Fênix. Um investimento inteligente com excelente custo-benefício.",
  about: [
    "Localizado estrategicamente na calma e valorizada Rua do Sítio Fênix, este terreno de 300m² é uma oportunidade inteligente para moradia ou investimento.",
    "Seu tamanho prático é ideal para uma casa de veraneio moderna, minimizando custos de manutenção sem perder o conforto e a proximidade com as principais vias de acesso."
  ],
  infra: [
    "Área Total: 300 m²",
    "Localização: Rua do Sítio Fênix",
    "Perfil: Residencial"
  ],
  facilities: [
    "300 m²",
    "Boa localização",
    "Pronto para construir"
  ],
  gallery: {
    main: "/imoveis/terreno-sitio-fenix-300m-carlos-01.webp",
    sideTop: "/imoveis/terreno-sitio-fenix-300m-carlos-01.webp",
    sideBottom: "/imoveis/terreno-sitio-fenix-300m-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 750.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-10-carlos",
  slug: "terreno-esquina-murado-1500m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Esquina Murado Preá 1.500m²",
  image: "/imoveis/terreno-esquina-murado-1500m-carlos-01.webp",
  badge: "Destaque",
  propertyTitle: "TERRENO PREÁ DE ESQUINA MURADO - 1.500M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.500m² | Esquina | Todo Murado",
  summaryDescription: "Terreno magnífico de esquina com 1.500m², totalmente murado e incrivelmente bem localizado no Preá. O cenário pronto para o seu próximo grande empreendimento.",
  about: [
    "Apresentamos um ativo raro e poderoso no Preá: um terreno de esquina com 1.500m², que já se encontra integralmente murado.",
    "Sua visibilidade e dupla frente proporcionam um valor comercial inestimável para pousadas, bem como uma privacidade ímpar para uma suntuosa residência privada.",
    "Estando super bem localizado, ele garante fácil acesso às melhores atrações e às belezas naturais da região."
  ],
  infra: [
    "Área Total: 1.500 m²",
    "Características: Esquina e Todo murado",
    "Localização premium no Preá"
  ],
  facilities: [
    "1.500 m²",
    "Esquina",
    "Todo Murado",
    "Alta Visibilidade"
  ],
  gallery: {
    main: "/imoveis/terreno-esquina-murado-1500m-carlos-01.webp",
    sideTop: "/imoveis/terreno-esquina-murado-1500m-carlos-02.webp",
    sideBottom: "/imoveis/terreno-esquina-murado-1500m-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.900.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-11-carlos",
  slug: "terreno-vista-parque-nacional-1000m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Vista Parque Nacional 1.000m²",
  image: "/imoveis/terreno-vista-parque-nacional-1000m-carlos-01.webp",
  badge: "Vista Panorâmica",
  propertyTitle: "TERRENO PREÁ VISTA PARQUE NACIONAL - 1.000M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.000m² | Vista para o Parque Nacional",
  summaryDescription: "Viva a natureza! Terreno de 1.000m² com vista espetacular para o Parque Nacional de Jericoacoara e localização privilegiada no Preá.",
  about: [
    "A serenidade e a beleza natural definem este maravilhoso terreno de 1.000m², que ostenta uma deslumbrante vista permanente para o Parque Nacional.",
    "Localizado super bem no Preá, ele combina o conforto de estar perto das facilidades da vila com o privilégio de ter a natureza exuberante como sua vizinha diária.",
    "Uma propriedade perfeita para relaxar e desfrutar dos famosos fins de tarde cearenses."
  ],
  infra: [
    "Área Total: 1.000 m²",
    "Destaque: Vista para o Parque Nacional",
    "Localização: Super bem localizado em Preá"
  ],
  facilities: [
    "1.000 m²",
    "Vista Parque Nacional",
    "Natureza"
  ],
  gallery: {
    main: "/imoveis/terreno-vista-parque-nacional-1000m-carlos-01.webp",
    sideTop: "/imoveis/terreno-vista-parque-nacional-1000m-carlos-01.webp",
    sideBottom: "/imoveis/terreno-vista-parque-nacional-1000m-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 680.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-12-carlos",
  slug: "terreno-esquina-150m-mar-1126m-carlos",
  title: "VENDA",
  searchTitle: "Terreno Esquina 150m do Mar 1.126m²",
  image: "/imoveis/terreno-esquina-150m-mar-1126m-carlos-01.webp",
  badge: "Oportunidade Premium",
  propertyTitle: "TERRENO PREÁ ESQUINA 150M DO MAR - 1.126M²",
  location: "Preá, Ceará, Brasil",
  rating: 5,
  exclusiveText: "1.126m² | De Esquina | Apenas 150m do Mar",
  summaryDescription: "Terreno de esquina premium com 1.126m², situado a exatos 150 metros das ondas do Preá. Potencial máximo de valorização e luxo.",
  about: [
    "Para os compradores mais exigentes, apresentamos este lote premium de 1.126m², estrategicamente localizado a incríveis 150 metros da praia.",
    "Por ser de esquina, ele maximiza a entrada de luz natural e a ventilação constante, fundamentais para uma residência sustentável e arejada na praia.",
    "A localização não poderia ser melhor: no coração do Preá, um dos polos de turismo e esportes de vento de maior crescimento internacional."
  ],
  infra: [
    "Área Total: 1.126 m²",
    "Características: De esquina",
    "Distância: A 150m do mar"
  ],
  facilities: [
    "1.126 m²",
    "Esquina",
    "150m do mar",
    "Alta valorização"
  ],
  gallery: {
    main: "/imoveis/terreno-esquina-150m-mar-1126m-carlos-01.webp",
    sideTop: "/imoveis/terreno-esquina-150m-mar-1126m-carlos-01.webp",
    sideBottom: "/imoveis/terreno-esquina-150m-mar-1126m-carlos-01.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Preá,+CE&z=15&output=embed",
  videoSources: [],
  priceTag: "Valor",
  price: "R$ 1.500.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "terreno-tatajuba-5405m2",
  slug: "terreno-tatajuba-camocim-5405m2",
  title: "VENDA",
  searchTitle: "Terreno em Tatajuba – 5.405 m²",
  image: "/imoveis/terreno-tatajuba-camocim-5405m2-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "TERRENO EM TATAJUBA – 5.405 M²",
  location: "Vila de Tatajuba, Camocim - CE",
  rating: 5,
  exclusiveText: "5.405 m² em 3 Glebas | Entre Dunas e a Foz do Rio | Documentação Georreferenciada",
  summaryDescription: "Terreno de 5.405 m² na Vila de Tatajuba, Distrito de Guriú (Camocim-CE), dividido em 3 glebas, encravado entre as dunas e a foz do rio, a poucos passos do mar. Documentação com levantamento planialtimétrico georreferenciado.",
  about: [
    "Uma oportunidade rara na badalada Vila de Tatajuba: terreno de 5.405 m² encravado entre as dunas e a foz do rio, no Distrito de Guriú, em Camocim (CE) — um dos points mais procurados do litoral cearense por kitesurfistas e amantes de natureza preservada.",
    "A área é dividida em três glebas complementares (1.064,46 m², 4.086,84 m² e 254,44 m²), o que permite planejar desde uma grande propriedade única até um projeto fracionado, como pousada boutique, vila de casas ou refúgio particular de alto padrão.",
    "Vegetação de coqueiros e mata nativa emolduram o terreno, que fica a poucos passos da faixa de areia e da paisagem única formada pelo encontro do rio com o mar — cenário que consagrou Tatajuba como um dos 'paraísos escondidos do kitesurf' no litoral do Ceará.",
    "Documentação em dia: Levantamento Planialtimétrico Georreferenciado (ART CE20241475260), com memorial descritivo detalhado das três glebas, disponível para download nesta página."
  ],
  infra: [
    "Área Total: 5.405 m² (3 glebas)",
    "Gleba A: 1.064,46 m²",
    "Gleba B: 4.086,84 m²",
    "Gleba C: 254,44 m²",
    "Localização: Vila de Tatajuba, Distrito de Guriú, Camocim - CE",
    "Documentação: Levantamento Planialtimétrico Georreferenciado (ART CE20241475260)"
  ],
  facilities: ["5.405 m²", "3 Glebas", "Pé na Duna", "Perto do Mar", "Foz do Rio"],
  gallery: {
    main: "/imoveis/terreno-tatajuba-camocim-5405m2-01.webp",
    sideTop: "/imoveis/terreno-tatajuba-camocim-5405m2-02.webp",
    sideBottom: "/imoveis/terreno-tatajuba-camocim-5405m2-03.webp",
    extra: ["/imoveis/terreno-tatajuba-camocim-5405m2-04.webp"]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.853978,-40.700511&hl=pt-BR&z=15&output=embed",
  videoSources: [
    "https://player.vimeo.com/video/1216507452",
    "https://player.vimeo.com/video/1216507450",
    "https://player.vimeo.com/video/1216507454",
    "https://player.vimeo.com/video/1216507451"
  ],
  documents: [
    {
      label: "Planta Topográfica Georreferenciada",
      url: "/documentos/terreno-tatajuba-5405m2-planta-topografica-georreferenciada.pdf",
      legend: "Levantamento planialtimétrico georreferenciado com a divisão das 3 glebas (ART CE20241475260)."
    }
  ],
  priceTag: "Valor",
  price: "R$ 1.700.000,00",
  installments: "Consulte condições e forma de pagamento",
  category: "venda",
  referralCode: "RICAMOT"
},
{
  id: "lotes-tatajuba-5-lotes",
  slug: "lotes-tatajuba-camocim",
  title: "VENDA",
  searchTitle: "Lotes em Tatajuba – a partir de 400 m²",
  image: "/imoveis/lotes-tatajuba-camocim-01.webp",
  badge: "Lançamento",
  propertyTitle: "LOTES EM TATAJUBA — CAMOCIM, CE",
  location: "Vila de Tatajuba, Camocim - CE",
  rating: 5,
  exclusiveText: "5 Lotes de 400 a 604 m² | Ao Lado de La Ventana e Avra | A partir de R$ 330.000,00",
  summaryDescription: "Conjunto de 5 lotes na Vila de Tatajuba, próximos às vilas La Ventana e Avra e à orla, com áreas entre 400,86 m² e 604,06 m². A partir de R$ 330.000,00 cada lote.",
  about: [
    "Conjunto exclusivo de 5 lotes à venda na Vila de Tatajuba (Camocim-CE), vizinhos às renomadas vilas La Ventana e Avra e a poucos passos da orla — uma das regiões de maior valorização do litoral cearense nos últimos anos.",
    "São 5 lotes com áreas entre 400,86 m² e 604,06 m², ideais para projetos residenciais de alto padrão, pousadas boutique ou investimento com potencial de valorização acelerada, dada a proximidade com empreendimentos já consolidados na região.",
    "A localização privilegiada garante fácil acesso à praia, à lagoa e à foz do rio, além de contar com a infraestrutura já instalada no entorno — casas de alto padrão, pousadas e uma vizinhança de padrão internacional.",
    "Cada lote pode ser adquirido individualmente (a partir de R$ 330.000,00) ou em conjunto. A planta com a divisão detalhada das 5 áreas está disponível para download nesta página."
  ],
  infra: [
    "Área Total: 2.511,85 m² (5 lotes)",
    "Lote 01: 604,06 m²",
    "Lote 02: 400,86 m²",
    "Lote 03: 503,69 m²",
    "Lote 04: 501,71 m²",
    "Lote 05: 501,53 m²",
    "Localização: Vila de Tatajuba, ao lado de La Ventana e Avra"
  ],
  facilities: ["5 Lotes", "400 a 604 m²", "Ao Lado de La Ventana e Avra", "Perto da Orla"],
  gallery: {
    main: "/imoveis/lotes-tatajuba-camocim-01.webp",
    sideTop: "/imoveis/lotes-tatajuba-camocim-02.webp",
    sideBottom: "/imoveis/lotes-tatajuba-camocim-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.855043,-40.694569&hl=pt-BR&z=15&output=embed",
  videoSources: [],
  documents: [
    {
      label: "Planta com Divisão dos 5 Lotes",
      url: "/documentos/lotes-tatajuba-planta-divisao-5-lotes.pdf",
      legend: "Planta com a divisão dos 5 lotes e as áreas individuais de cada um."
    }
  ],
  priceTag: "A partir de",
  price: "R$ 330.000,00",
  installments: "Lotes individuais: R$ 330.000,00 cada",
  category: "venda",
  lotes: [
    { id: "all", label: "Todos os 5 Lotes (2.511,85 m²)", priceTag: "Valor total", price: "R$ 1.650.000,00" },
    { id: "lote-01", label: "Lote 01 (604,06 m²)", priceTag: "Valor", price: "R$ 330.000,00" },
    { id: "lote-02", label: "Lote 02 (400,86 m²)", priceTag: "Valor", price: "R$ 330.000,00" },
    { id: "lote-03", label: "Lote 03 (503,69 m²)", priceTag: "Valor", price: "R$ 330.000,00" },
    { id: "lote-04", label: "Lote 04 (501,71 m²)", priceTag: "Valor", price: "R$ 330.000,00" },
    { id: "lote-05", label: "Lote 05 (501,53 m²)", priceTag: "Valor", price: "R$ 330.000,00" }
  ],
  referralCode: "RICAMOT"
},
{
  id: "casa-beira-mar-tatajuba",
  slug: "casa-beira-mar-tatajuba",
  title: "VENDA",
  searchTitle: "Casa Beira-Mar em Tatajuba",
  image: "/imoveis/casa-beira-mar-tatajuba-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "CASA BEIRA-MAR EM TATAJUBA",
  location: "Tatajuba, Camocim - CE",
  rating: 5,
  exclusiveText: "Frente ao mar | Terreno de aproximadamente 3.100 m² | Casa nova em estilo tropical",
  summaryDescription: "Casa recém-concluída de frente para o mar em Tatajuba, em terreno de aproximadamente 3.100 m². Projeto tropical com madeira, amplas aberturas de vidro, suíte loft, varanda e churrasqueira.",
  about: [
    "Uma residência recém-concluída, de frente para o mar em Tatajuba, criada para integrar arquitetura tropical, paisagem e ventilação natural. A casa combina madeira, amplas aberturas de vidro e vistas abertas para a praia.",
    "O terreno possui aproximadamente 3.100 m² e a casa conta com cerca de 115 a 120 m² de área interna, além de varanda e área externa com churrasqueira. No piso superior, uma suíte loft amplia a conexão com o entorno.",
    "A configuração atual oferece 1 quarto e 2 banheiros, com possibilidade de implantação de um segundo quarto no pavimento térreo. Uma oportunidade para quem procura uma casa nova, privativa e pé na areia em Tatajuba.",
    "A situação documental é de posse, com cadeia documentada desde 2006. Desde 2019, os direitos possessórios estão em nome de sociedade brasileira destinada exclusivamente ao imóvel, já incluído no processo oficial de regularização fundiária do IDACE."
  ],
  infra: [
    "Terreno: aproximadamente 3.100 m²",
    "Área interna: aproximadamente 115 a 120 m²",
    "1 quarto (com possibilidade de segundo quarto no térreo)",
    "2 banheiros",
    "Varanda e área externa com churrasqueira",
    "Suíte loft no piso superior",
    "Documentação: posse com cadeia documentada desde 2006; em regularização fundiária pelo IDACE"
  ],
  facilities: ["Frente ao mar", "3.100 m²", "Casa nova", "Estilo tropical", "Churrasqueira"],
  gallery: {
    main: "/imoveis/casa-beira-mar-tatajuba-01.webp",
    sideTop: "/imoveis/casa-beira-mar-tatajuba-02.webp",
    sideBottom: "/imoveis/casa-beira-mar-tatajuba-03.webp",
    extra: [
      "/imoveis/casa-beira-mar-tatajuba-04.webp",
      "/imoveis/casa-beira-mar-tatajuba-05.webp",
      "/imoveis/casa-beira-mar-tatajuba-06.webp",
      "/imoveis/casa-beira-mar-tatajuba-07.webp",
      "/imoveis/casa-beira-mar-tatajuba-08.webp",
      "/imoveis/casa-beira-mar-tatajuba-09.webp",
      "/imoveis/casa-beira-mar-tatajuba-10.webp",
      "/imoveis/casa-beira-mar-tatajuba-11.webp",
      "/imoveis/casa-beira-mar-tatajuba-12.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.854947,-40.704965&hl=pt-BR&z=16&output=embed",
  videoSources: ["https://player.vimeo.com/video/1217022357"],
  priceTag: "Valor",
  price: "R$ 3.000.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "ALBERTO",
  unlisted: true
},
{
  id: "casa-alto-padrao-taiba-vista-mar",
  slug: "casa-alto-padrao-taiba-vista-mar",
  unlisted: true, // Taíba fora do ar a pedido (02/10/2026) — não excluir
  title: "VENDA",
  searchTitle: "Casa Alto Padrão em Granito — Taíba",
  image: "/imoveis/casa-alto-padrao-taiba-vista-mar-23.webp",
  badge: "Alto Padrão",
  propertyTitle: "CASA ALTO PADRÃO EM GRANITO — TAÍBA",
  location: "Taíba, Ceará",
  rating: 5,
  exclusiveText: "6 Suítes | Academia | Piscina | Acesso Privativo ao Mar",
  summaryDescription: "Imóvel de alto padrão em Taíba, todo em granito, com vista privilegiada e acesso privativo ao mar. 6 suítes, piscina, área gourmet, academia e garagem para mais de 10 veículos.",
  about: [
    "Imóvel de alto padrão em Taíba, todo revestido em granito, com vista privilegiada e acesso privativo ao mar. Ideal para quem busca conforto, espaço e exclusividade em uma localização valorizada.",
    "Pavimento superior composto por 4 suítes amplas, todas climatizadas e com móveis planejados, proporcionando praticidade e conforto.",
    "Pavimento térreo com 2 suítes, sala ampla e bem ventilada, área de jantar integrada, cozinha espaçosa, despensa e banheiro social, com excelente distribuição dos ambientes.",
    "Área externa completa, com piscina, cadeiras de sol, espaço para fogueira, área gourmet com mesa para refeições e churrasqueira, além de academia privativa. Garagem com capacidade para mais de 10 veículos."
  ],
  infra: [
    "6 suítes ao todo (4 no pavimento superior, 2 no térreo)",
    "Todas as suítes superiores climatizadas e com móveis planejados",
    "Piscina, área gourmet com churrasqueira e espaço para fogueira",
    "Academia privativa",
    "Garagem para mais de 10 veículos",
    "Acesso privativo ao mar"
  ],
  facilities: ["6 Suítes", "Piscina", "Academia Privativa", "Área Gourmet", "Garagem 10+ Carros", "Acesso Privativo ao Mar"],
  gallery: {
    main: "/imoveis/casa-alto-padrao-taiba-vista-mar-23.webp",
    sideTop: "/imoveis/casa-alto-padrao-taiba-vista-mar-01.webp",
    sideBottom: "/imoveis/casa-alto-padrao-taiba-vista-mar-13.webp",
    extra: [
      "/imoveis/casa-alto-padrao-taiba-vista-mar-02.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-03.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-04.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-05.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-06.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-07.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-08.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-09.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-10.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-11.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-12.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-14.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-15.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-16.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-17.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-18.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-19.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-20.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-21.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-22.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-24.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-25.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-26.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-27.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-28.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-29.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-30.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-31.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-32.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-33.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-34.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-35.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-36.webp",
      "/imoveis/casa-alto-padrao-taiba-vista-mar-37.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-3.495008,-38.919417&hl=pt-BR&z=16&output=embed",
  priceTag: "Valor",
  price: "R$ 3.500.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "YAN"
},
{
  id: "terreno-nova-taiba-1920m2",
  slug: "terreno-nova-taiba-1920m2",
  unlisted: true, // Taíba fora do ar a pedido (02/10/2026) — não excluir
  title: "VENDA",
  searchTitle: "Terreno em Nova Taíba — 1.920 m² com Casa",
  image: "/imoveis/terreno-nova-taiba-1920m2-06.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "TERRENO EM NOVA TAÍBA — 1.920 M² COM CASA",
  location: "Loteamento Nova Taíba, Taíba - CE",
  rating: 5,
  exclusiveText: "1.920 m² em 3 Lotes de 16x40m | Entrada Privativa para o Mar | Avenida Principal",
  summaryDescription: "Terreno com uma casa, dividido em 3 lotes de 16x40m cada (1.920 m² ao todo), na avenida principal do Loteamento Nova Taíba, com entrada privativa para o mar e próximo à lagoa do kitesurf.",
  about: [
    "Terreno com uma casa já construída, localizado na avenida principal do Loteamento Nova Taíba, próximo a grandes investimentos da região e à lagoa do kitesurf em Taíba.",
    "A área total de 1.920 m² é dividida em 3 lotes de 16x40 metros cada, com entrada privativa para o mar — uma opção flexível para quem quer comprar o conjunto todo ou negociar por lote.",
    "Localização estratégica na Nova Taíba, uma das regiões de maior valorização do litoral cearense nos últimos anos."
  ],
  infra: [
    "Área Total: 1.920 m² (3 lotes de 16x40m)",
    "Casa já construída no terreno",
    "Entrada privativa para o mar",
    "Localização: avenida principal do Loteamento Nova Taíba",
    "Próximo à lagoa do kitesurf em Taíba"
  ],
  facilities: ["1.920 m²", "3 Lotes de 16x40m", "Entrada Privativa ao Mar", "Casa no Terreno"],
  gallery: {
    main: "/imoveis/terreno-nova-taiba-1920m2-06.webp",
    sideTop: "/imoveis/terreno-nova-taiba-1920m2-10.webp",
    sideBottom: "/imoveis/terreno-nova-taiba-1920m2-14.webp",
    extra: [
      "/imoveis/terreno-nova-taiba-1920m2-03.webp",
      "/imoveis/terreno-nova-taiba-1920m2-05.webp",
      "/imoveis/terreno-nova-taiba-1920m2-07.webp",
      "/imoveis/terreno-nova-taiba-1920m2-08.webp",
      "/imoveis/terreno-nova-taiba-1920m2-09.webp",
      "/imoveis/terreno-nova-taiba-1920m2-11.webp",
      "/imoveis/terreno-nova-taiba-1920m2-12.webp",
      "/imoveis/terreno-nova-taiba-1920m2-13.webp",
      "/imoveis/terreno-nova-taiba-1920m2-15.webp",
      "/imoveis/terreno-nova-taiba-1920m2-16.webp",
      "/imoveis/terreno-nova-taiba-1920m2-17.webp",
      "/imoveis/terreno-nova-taiba-1920m2-19.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-3.494773,-38.918924&hl=pt-BR&z=16&output=embed",
  priceTag: "Valor",
  price: "R$ 1.300.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "YAN"
},
{
  id: "casa-duplex-pe-na-areia-taiba",
  slug: "casa-duplex-pe-na-areia-taiba",
  unlisted: true, // Taíba fora do ar a pedido (02/10/2026) — não excluir
  title: "VENDA",
  searchTitle: "Casa Duplex Pé na Areia — Taíba",
  image: "/imoveis/casa-duplex-pe-na-areia-taiba-04.webp",
  badge: "Grande Potencial",
  propertyTitle: "CASA DUPLEX PÉ NA AREIA — TAÍBA",
  location: "Taíba, Ceará",
  rating: 4,
  exclusiveText: "3 Suítes | Piscina 7x5m | Estacionamento p/ 15+ Carros | Pé na Areia",
  summaryDescription: "Casa duplex pé na areia na praia de Taíba, próxima à lagoa do kitesurf, com 1.280 m² de área e grande potencial para reforma e valorização.",
  about: [
    "Casa duplex pé na areia, situada na praia de Taíba, próxima à lagoa do kitesurf. Uma oportunidade e tanto para reformar do seu jeito e agregar valor, com potencial para diversos tipos de projeto.",
    "No pavimento superior: 3 suítes, sendo uma com varanda privativa para o mar e para a piscina, closet em uma das suítes e na sala de acesso aos quartos — todos voltados para o nascente (face leste, com incidência de vento).",
    "No pavimento inferior: sala ampla com jardim de inverno, cozinha ampla com despensa, mais uma suíte nascente e varandas em L voltadas para o nascente.",
    "Área externa com chalé suíte independente, edícula, estacionamento para 15 ou mais carros, piscina de 7x5m (35 m²) com vista para o mar e deck completo."
  ],
  infra: [
    "Área do terreno: 1.280 m²",
    "3 suítes no pavimento superior (1 com varanda para mar e piscina)",
    "Sala ampla com jardim de inverno e 1 suíte no pavimento térreo",
    "Chalé suíte e edícula independentes",
    "Piscina 7x5m (35 m²) com vista mar e deck completo",
    "Estacionamento para 15+ veículos",
    "Grande potencial para reforma e personalização"
  ],
  facilities: ["3 Suítes", "Piscina 7x5m", "Pé na Areia", "Estacionamento 15+ Carros", "Chalé + Edícula"],
  gallery: {
    main: "/imoveis/casa-duplex-pe-na-areia-taiba-04.webp",
    sideTop: "/imoveis/casa-duplex-pe-na-areia-taiba-01.webp",
    sideBottom: "/imoveis/casa-duplex-pe-na-areia-taiba-03.webp",
    extra: ["/imoveis/casa-duplex-pe-na-areia-taiba-02.webp"]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Morro+do+Chapéu,+Taíba,+CE&hl=pt-BR&z=14&output=embed",
  videoSources: ["https://player.vimeo.com/video/1218903860"],
  priceTag: "Valor",
  price: "R$ 1.200.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "DINIZ"
},
{
  id: "terreno-morro-do-chapeu-taiba-832m2",
  slug: "terreno-morro-do-chapeu-taiba-832m2",
  unlisted: true, // Taíba fora do ar a pedido (02/10/2026) — não excluir
  title: "VENDA",
  searchTitle: "Terreno Morro do Chapéu — Taíba, 832 m²",
  image: "/imoveis/terreno-morro-do-chapeu-taiba-832m2-02.webp",
  badge: "Pronto para Construir",
  propertyTitle: "TERRENO NO MORRO DO CHAPÉU — TAÍBA, 832 M²",
  location: "Morro do Chapéu, Taíba - CE",
  rating: 5,
  exclusiveText: "832 m² (16x52) | Vista Mar Completa | Matrícula, Registro e IPTU em Dia",
  summaryDescription: "Terreno de 832 m² no Morro do Chapéu, em Taíba, com vista mar completa e quase pé na areia. Matrícula, registro e IPTU em dia, pronto para construir.",
  about: [
    "Terreno na praia de Taíba, no Morro do Chapéu, completamente vista mar. O imóvel se destaca por possuir matrícula e registro, além de um visual que engloba dunas, coqueirais e o vento que atrai eventos internacionais de kitesurf na região.",
    "Terreno de 16x52m (832 m² de área total), com matrícula, registro e IPTU em dia — pronto para construir."
  ],
  infra: [
    "Área: 16x52m (832 m² total)",
    "Vista mar completa, quase pé na areia",
    "Matrícula, registro e IPTU em dia",
    "Pronto para construir",
    "Localização: Morro do Chapéu, Taíba"
  ],
  facilities: ["832 m²", "Vista Mar Completa", "Matrícula e Registro", "Pronto para Construir"],
  gallery: {
    main: "/imoveis/terreno-morro-do-chapeu-taiba-832m2-02.webp",
    sideTop: "/imoveis/terreno-morro-do-chapeu-taiba-832m2-01.webp",
    sideBottom: "/imoveis/terreno-morro-do-chapeu-taiba-832m2-04.webp",
    extra: [
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-03.webp",
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-05.webp",
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-06.webp",
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-vista-aerea-google-maps.webp",
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-planta-lotes-matricula-4621.webp",
      "/imoveis/terreno-morro-do-chapeu-taiba-832m2-planta-topografica-georreferenciada.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-3.516538,-38.881427&hl=pt-BR&z=15&output=embed",
  videoSources: ["https://player.vimeo.com/video/1218904183", "https://player.vimeo.com/video/1219881715"],
  priceTag: "Valor",
  price: "R$ 700.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "DINIZ"
},
{
  id: "terreno-taiba-2560m2",
  slug: "terreno-taiba-2560m2",
  unlisted: true, // Taíba fora do ar a pedido (02/10/2026) — não excluir
  title: "VENDA",
  searchTitle: "Terreno em Taíba — 2.560 m²",
  image: "/imoveis/terreno-taiba-2560m2-02.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "TERRENO EM TAÍBA — 2.560 M²",
  location: "Taíba, Ceará",
  rating: 5,
  exclusiveText: "32x80m (2.560 m²) | Versátil para Diversos Projetos | Possibilidade de Metade (16x80)",
  summaryDescription: "Terreno de 32x80m (2.560 m²) em Taíba, versátil para diversos tipos de projeto. Possibilidade de negociar apenas metade da área (16x80m).",
  about: [
    "Terreno de 32x80m (2.560 m² de área total) em Taíba, uma área versátil que serve para diversos tipos de projeto.",
    "Também é possível negociar apenas metade da área (16x80m, 1.280 m²) — consulte condições."
  ],
  infra: [
    "Área total: 32x80m (2.560 m²)",
    "Possibilidade de compra de metade: 16x80m (1.280 m²)",
    "Localização: Taíba, Ceará"
  ],
  facilities: ["2.560 m²", "32x80m", "Versátil", "Opção de Meia Área"],
  gallery: {
    main: "/imoveis/terreno-taiba-2560m2-02.webp",
    sideTop: "/imoveis/terreno-taiba-2560m2-01.webp",
    sideBottom: "/imoveis/terreno-taiba-2560m2-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Taíba,+CE&hl=pt-BR&z=13&output=embed",
  videoSources: ["https://player.vimeo.com/video/1218904458"],
  priceTag: "Valor",
  price: "R$ 2.200.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "DINIZ",
  lotes: [
    { id: "all", label: "Área total (32x80 — 2.560 m²)", priceTag: "Valor total", price: "R$ 2.200.000,00" },
    { id: "half", label: "Metade (16x80 — 1.280 m²)", priceTag: "Valor", price: "Consulte condições", installments: "Consulte condições" }
  ]
},
{
  id: "terreno-vila-sao-francisco-tatajuba",
  slug: "terreno-vila-sao-francisco-tatajuba",
  title: "VENDA",
  searchTitle: "Terreno Vila São Francisco — Tatajuba",
  image: "/imoveis/terreno-vila-sao-francisco-tatajuba-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "TERRENO VILA SÃO FRANCISCO — TATAJUBA",
  location: "Vila São Francisco, ao lado de Tatajuba, Camocim - CE",
  rating: 5,
  exclusiveText: "2.000 m² por R$ 550,00/m² | Possibilidade de até 4.000 m² Total | Ao Lado de Tatajuba",
  summaryDescription: "Terreno na Vila São Francisco, ao lado de Tatajuba. 2.000 m² disponíveis a R$ 550,00/m² (R$ 1.100.000,00), com possibilidade de ampliar para até 4.000 m² caso o sócio também venda sua parte.",
  about: [
    "Terreno localizado na Vila São Francisco, ao lado de Tatajuba, com área total de 8.015,003 m² (100 metros de frente por 80 metros de fundo), com memorial descritivo e planta topográfica georreferenciada.",
    "O proprietário atual possui 50% da área e está vendendo metade da sua parte: 2.000 m² a R$ 550,00 o metro quadrado (R$ 1.100.000,00). O sócio também demonstrou interesse em vender sua metade, o que pode viabilizar uma área de até 4.000 m² no total.",
    "O imóvel conta com documento de compra e venda registrado, memorial descritivo, planta topográfica com poligonal completa e resultado de demarcação do IDACE. No terreno há uma casinha de manutenção e dois poços pequenos, e o local já conta com energia elétrica instalada."
  ],
  infra: [
    "Área total do imóvel: 8.015,003 m² (100m de frente x 80m de fundo)",
    "Área disponível para venda: 2.000 m² (com opção de até 4.000 m² total)",
    "Documento de compra e venda registrado",
    "Memorial descritivo e planta topográfica com poligonal completa",
    "Resultado de demarcação do IDACE",
    "Casinha de manutenção e 2 poços no terreno",
    "Energia elétrica já instalada"
  ],
  facilities: ["2.000 m²", "R$ 550/m²", "Ao Lado de Tatajuba", "Energia Elétrica", "Poços Próprios"],
  gallery: {
    main: "/imoveis/terreno-vila-sao-francisco-tatajuba-01.webp",
    sideTop: "/imoveis/terreno-vila-sao-francisco-tatajuba-02.webp",
    sideBottom: "/imoveis/terreno-vila-sao-francisco-tatajuba-03.webp",
    extra: []
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.8497674,-40.6838496&hl=pt-BR&z=16&output=embed",
  documents: [
    {
      label: "Memorial Descritivo",
      url: "/documentos/terreno-vila-sao-francisco-tatajuba-memorial-descritivo.pdf",
      legend: "Memorial descritivo do terreno, com área total de 8.015,003 m² e perímetro de 381,302 m."
    },
    {
      label: "Planta Topográfica — Poligonal Completa",
      url: "/documentos/terreno-vila-sao-francisco-tatajuba-planta-topografica.pdf",
      legend: "Planta topográfica com a poligonal completa da área."
    },
    {
      label: "Resultado de Demarcação — IDACE",
      url: "/documentos/terreno-vila-sao-francisco-tatajuba-resultado-demarcacao-idace.pdf",
      legend: "Protocolo de medição e resultado de demarcação emitido pelo IDACE."
    }
  ],
  priceTag: "Valor (2.000 m²)",
  price: "R$ 1.100.000,00",
  installments: "Consulte condições",
  category: "venda",
  referralCode: "ALBERTO",
  lotes: [
    { id: "confirmado", label: "2.000 m² (metade confirmada)", priceTag: "Valor", price: "R$ 1.100.000,00" },
    { id: "total", label: "Até 4.000 m² (se o sócio também vender)", priceTag: "Valor estimado", price: "R$ 2.200.000,00", installments: "Sujeito à adesão do sócio — consulte condições" }
  ]
},
{
  id: "chale-divino-tatajuba",
  slug: "chale-divino-tatajuba",
  title: "VENDA",
  searchTitle: "Chalé Divino em Tatajuba",
  image: "/imoveis/chale-divino-tatajuba-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "CHALÉ DIVINO — TATAJUBA",
  location: "Vila Tatajuba, Camocim - CE",
  rating: 5,
  exclusiveText: "Chalé autêntico de madeira e palha | Terreno de 431,63 m² | A poucos passos do mar",
  summaryDescription: "Chalé autêntico em madeira e cobertura de palha na Vila Tatajuba, litoral oeste do Ceará. Terreno de 431,63 m², dois pavimentos, quarto com dossel e varanda entre coqueiros, a poucos passos do mar.",
  about: [
    "Erguido em madeira sob uma generosa cobertura de palha, o Chalé Divino é um refúgio autêntico na Vila Tatajuba — comunidade tradicional de pescadores que se tornou um dos destinos mais desejados do litoral cearense entre dunas, lagoas e os ventos que atraem kitesurfistas do mundo inteiro.",
    "A casa se distribui em dois pavimentos. No térreo, a escada de madeira conduz ao banheiro em estilo rústico, com cuba de apoio emoldurada por um espelho de fibra natural. No piso superior, sob o pé-direito alto da cobertura de sapé, a sala se integra à cozinha e ao dormitório, onde a cama de casal ganha um dossel de tecido leve — e se abre para a varanda voltada aos coqueiros e ao horizonte.",
    "São 431,63 m² de terreno e aproximadamente 70 m² de área construída, com estrutura em madeira, abastecimento de água pela rede pública e esgotamento sanitário por fossa séptica. Um convite para quem busca uma casa de praia com personalidade — para uso próprio ou como chalé de temporada, aproveitando o fluxo turístico crescente de Tatajuba.",
    "A situação documental é de posse, com ocupação consolidada há 7 anos e sem litígios. O imóvel já está cadastrado (código de campo/lote TT316) no Projeto de Regularização Fundiária Especial do IDACE para a Comunidade Tradicional de Tatajuba."
  ],
  infra: [
    "Terreno: 431,63 m²",
    "Área construída: aproximadamente 70 m²",
    "Estrutura em madeira com cobertura de palha",
    "2 pavimentos: térreo e piso superior",
    "1 dormitório com dossel",
    "Banheiro em estilo rústico",
    "Abastecimento de água pela rede pública",
    "Esgotamento sanitário por fossa séptica",
    "Documentação: posse, com 7 anos de ocupação; cadastrado (lote TT316) no Projeto de Regularização Fundiária Especial do IDACE — Comunidade Tradicional de Tatajuba"
  ],
  facilities: ["Vila Tatajuba", "431,63 m²", "Madeira & Palha", "2 Pavimentos", "Perto do Mar"],
  gallery: {
    main: "/imoveis/chale-divino-tatajuba-01.webp",
    sideTop: "/imoveis/chale-divino-tatajuba-02.webp",
    sideBottom: "/imoveis/chale-divino-tatajuba-03.webp",
    extra: [
      "/imoveis/chale-divino-tatajuba-04.webp",
      "/imoveis/chale-divino-tatajuba-05.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=Divino+tatajuba+-+Praia+de,+Camocim+-+CE,+62400-000&ftid=0x7ebd57108826f67:0x2c869f7dd5a2a173&hl=pt-BR&z=17&output=embed",
  videoSources: ["https://player.vimeo.com/video/1219550272"],
  videoThumbnails: ["/imoveis/chale-divino-tatajuba-video-capa.webp"],
  priceTag: "Valor",
  price: "R$ 1.800.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "casa-alto-padrao-prea-4-suites-simi",
  slug: "casa-alto-padrao-prea-4-suites-simi",
  title: "VENDA",
  searchTitle: "Casa Alto Padrão 4 Suítes — Praia do Preá",
  image: "/imoveis/casa-alto-padrao-prea-4-suites-simi-01-fachada-jardim.webp",
  badge: "Alto Padrão",
  propertyTitle: "CASA ALTO PADRÃO 4 SUÍTES — PRAIA DO PREÁ",
  location: "Praia do Preá, Cruz - CE",
  rating: 5,
  exclusiveText: "4 Suítes | Terraço Vista Mar com Jacuzzi | 1.800 m² de Terreno | A 200 m da praia",
  summaryDescription: "Casa de alto padrão na Praia do Preá, a apenas 200 m da praia: 1.800 m² de terreno, 300 m² construídos, 4 suítes, escritório, terraço com vista para o mar e jacuzzi, jardim com pomar e garagem para 3 carros.",
  about: [
    "Exclusividade, conforto e sofisticação a poucos passos do mar.",
    "Apresentamos uma residência de alto padrão, projetada para oferecer qualidade de vida, privacidade e bem-estar em um dos cenários mais privilegiados da região.",
    "Com aproximadamente 1.800 m² de terreno e 300 m² de área construída, o imóvel reúne ambientes amplos, funcionais e acabamentos que valorizam cada detalhe.",
    "São 4 suítes espaçosas, escritório privativo ideal para home office, terraço com vista para o mar e jacuzzi — perfeito para momentos de lazer e contemplação —, garagem para até 3 veículos e amplo jardim com pomar, a apenas 200 metros da praia.",
    "Uma propriedade que une elegância, funcionalidade e uma localização privilegiada, ideal para quem busca viver com exclusividade ou investir em um imóvel de alto padrão próximo ao litoral."
  ],
  infra: [
    "Terreno: 1.800 m²",
    "Área construída: 300 m²",
    "4 suítes espaçosas, com closet",
    "Escritório privativo, ideal para home office",
    "Terraço com vista para o mar e jacuzzi",
    "Sala de jantar, cozinha e despensa",
    "Bar e churrasqueira",
    "Área de serviço",
    "Garagem para até 3 veículos",
    "Amplo jardim com pomar",
    "Aquecimento de água por energia solar",
    "Irrigação automática do paisagismo",
    "Poço artesiano",
    "Ar-condicionado, portão eletrônico e câmeras de segurança",
    "Apenas 200 metros da praia"
  ],
  facilities: ["4 Suítes", "300 m² Construídos", "1.800 m² de Terreno", "Terraço Vista Mar", "Jacuzzi", "Energia Solar", "A 200 m da Praia"],
  gallery: {
    main: "/imoveis/casa-alto-padrao-prea-4-suites-simi-01-fachada-jardim.webp",
    sideTop: "/imoveis/casa-alto-padrao-prea-4-suites-simi-02-fachada-paisagismo.webp",
    sideBottom: "/imoveis/casa-alto-padrao-prea-4-suites-simi-03-fachada-gramado.webp",
    extra: [
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-04-acesso-garagem.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-05-fachada-lateral.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-06-varanda-area-externa.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-07-varanda-jardim.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-08-sala-portas-madeira.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-09-terraco-vista-mar.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-10-sala-cozinha-integrada.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-11-sala-escada.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-12-mezanino.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-13-suite-varanda.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-14-suite-armarios.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-15-corredor.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-16-banheiro-suite.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-17-suite-sacada.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-18-cozinha-azulejo-hidraulico.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-19-cozinha-bancada.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-20-cozinha-planejada.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-21-cozinha-despensa.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-22-varanda-pomar.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-23-jardim-poco.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-24-jardim-area-externa.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-25-banheiro.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-26-banheiro-social.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-27-suite-closet.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-28-suite.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-29-banheiro-suite-2.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-30-quarto-escritorio.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-31-suite-sacada-vista.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-32-suite-2.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-33-escada-pe-direito-duplo.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-34-mezanino-vista.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-35-mezanino-forro-madeira.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-36-jardim-palmeiras.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-37-jardim-flores.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-38-jardim-pomar.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-39-jardim-palmeiras-2.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-40-jardim-paisagismo.webp",
      "/imoveis/casa-alto-padrao-prea-4-suites-simi-41-vista-jardim.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.815145,-40.420544&hl=pt-BR&z=16&output=embed",
  documents: [
    {
      label: "Apresentação do Imóvel",
      url: "/documentos/casa-alto-padrao-prea-4-suites-simi-apresentacao.pdf",
      legend: "Material completo da casa: fotos, diferenciais, áreas e valor."
    },
    {
      label: "Projeto Arquitetônico",
      url: "/documentos/casa-alto-padrao-prea-4-suites-simi-projeto-arquitetonico.pdf",
      legend: "Fachada norte e plantas baixas do pavimento térreo e do pavimento superior."
    },
    {
      label: "Localização (KML)",
      url: "/documentos/casa-alto-padrao-prea-4-suites-simi-localizacao.kml",
      legend: "Ponto exato da casa para abrir no Google Earth ou Google Maps."
    }
  ],
  priceTag: "Valor",
  price: "R$ 4.500.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "casa-3-quartos-piscina-cavalo-bravo-prea",
  slug: "casa-3-quartos-piscina-cavalo-bravo-prea",
  title: "VENDA",
  searchTitle: "Casa 3 Quartos com Piscina — Cavalo Bravo, Preá",
  image: "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-01-fachada-piscina.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "CASA COM PISCINA EM CAVALO BRAVO — PREÁ",
  location: "Cavalo Bravo, Praia do Preá, Cruz - CE",
  rating: 5,
  exclusiveText: "Terreno de 1.300 m² | 250 m² Construídos | 3 Quartos | Piscina | Mobiliada",
  summaryDescription: "Casa mobiliada e toda climatizada em Cavalo Bravo, no Preá: 1.300 m² de terreno, 250 m² construídos, 2 suítes de alto padrão, apartamento independente no pavimento superior, piscina e área gourmet. Matrícula e escritura em dia.",
  about: [
    "Em uma rua tranquila e cercada por árvores, na região de Cavalo Bravo, no Preá, esta propriedade reúne conforto, espaço e privacidade em um terreno de 1.300 m² — em uma das regiões mais desejadas do litoral cearense.",
    "A casa tem 250 m² de área construída, é entregue toda mobiliada e com todos os ambientes climatizados. A casa principal é térrea, com 2 suítes de alto padrão — uma delas com banheira —, banheiro social, sala ampla integrada à cozinha totalmente equipada e uma varanda generosa que se abre para a piscina e o jardim.",
    "Na parte superior, um apartamento completo com o terceiro quarto, cozinha, banheiro e varanda com rede, privativo e independente — estrutura com total autonomia para hóspedes, familiares ou outras possibilidades de uso, inclusive locação.",
    "Completam a propriedade a piscina com deck, a área gourmet com churrasqueira em um anexo próprio, amplo estacionamento e uma extensa área verde, com árvores maduras que garantem sombra e muita privacidade.",
    "Documentação em dia: imóvel com matrícula e escritura, garantindo segurança jurídica na compra. Ideal como residência, casa de férias ou investimento no crescente mercado imobiliário do Preá."
  ],
  infra: [
    "Terreno: 1.300 m²",
    "Área construída: 250 m²",
    "3 quartos no total: 2 suítes de alto padrão na casa principal + 1 quarto no apartamento superior",
    "Casa principal térrea, com banheiro social",
    "Sala ampla e ambientes integrados",
    "Cozinha totalmente equipada",
    "Apartamento superior independente, com cozinha, banheiro e varanda",
    "Piscina com deck",
    "Área gourmet com churrasqueira",
    "Amplo estacionamento",
    "Totalmente mobiliada e com todos os ambientes climatizados",
    "Extensa área verde e muita privacidade",
    "Documentação: matrícula e escritura"
  ],
  facilities: ["1.300 m² de Terreno", "250 m² Construídos", "3 Quartos", "Piscina", "Área Gourmet", "Mobiliada", "Matrícula e Escritura"],
  gallery: {
    main: "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-01-fachada-piscina.webp",
    sideTop: "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-02-sala-cozinha-integrada.webp",
    sideBottom: "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-03-piscina-casa-principal.webp",
    extra: [
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-04-piscina-varanda-rede.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-05-piscina-area-gourmet.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-06-piscina-deck-espreguicadeiras.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-07-piscina-jardim-arvores.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-08-varanda-jantar-sala.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-09-varanda-mesa-madeira.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-10-varanda-integrada-jardim.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-11-varanda-estar-cozinha.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-12-cozinha-ilha-luminarias.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-13-cozinha-planejada-ilha.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-14-cozinha-bancada-banquetas.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-15-sala-estar.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-16-sala-estar-quadros.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-17-suite-cama-casal.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-18-suite-decoracao.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-19-banheiro-suite-banheira.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-20-banheira-suite.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-21-banheiro-social.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-22-apartamento-superior-quarto.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-23-apartamento-superior-quarto-vista.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-24-apartamento-superior-cozinha.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-25-apartamento-superior-varanda-rede.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-26-apartamento-superior-banheiro.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-27-area-gourmet-churrasqueira.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-28-area-gourmet-bancada.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-29-area-gourmet-mesa.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-30-fachada-escada-jardim.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-31-fachada-garagem.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-32-fachada-varanda-rede.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-33-entrada-estacionamento.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-34-lavanderia.webp",
      "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-35-jardim-lateral.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.833513,-40.412647&hl=pt-BR&z=16&output=embed",
  videoSources: [
    "https://player.vimeo.com/video/1231801370",
    "https://player.vimeo.com/video/1231801371",
    "https://player.vimeo.com/video/1232372166"
  ],
  videoThumbnails: [
    "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-video-1-capa.webp",
    "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-video-2-capa.webp",
    "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-video-3-capa.webp"
  ],
  priceTag: "Valor",
  price: "R$ 1.700.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "casa-4-suites-piscina-prea",
  slug: "casa-4-suites-piscina-prea",
  title: "VENDA",
  searchTitle: "Casa 4 Suítes com Piscina — Praia do Preá",
  image: "/imoveis/casa-4-suites-piscina-prea-01-piscina-raia-mural-kitesurf.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "CASA 4 SUÍTES COM PISCINA — PRAIA DO PREÁ",
  location: "Praia do Preá, Cruz - CE",
  rating: 5,
  exclusiveText: "4 Suítes | Piscina de 15 m | 258 m² Construídos | A 5 minutos a pé da praia",
  summaryDescription: "Sobrado moderno no Preá, a 5 minutos a pé da praia: 4 suítes, piscina de 15 m com deck, jardim com pergolado, terraço no rooftop e gerador com autonomia total. Em rua tranquila de casas, sem saída, e já operando no Airbnb com nota 5,0 (56 avaliações).",
  about: [
    "Uma casa cheia de luz, cor e personalidade, a apenas 5 minutos a pé da Praia do Preá — um dos melhores spots de kitesurf do mundo.",
    "O sobrado tem 258 m² construídos em dois pavimentos, em terreno de 320 m². No térreo, sala de estar e sala de jantar integradas à cozinha americana, com portas de vidro e madeira que se abrem para a piscina e para o jardim. Os murais artísticos nas paredes externas dão à casa uma identidade única.",
    "São 4 suítes no total: as suítes Sol, Mar e Dunas, todas amplas, com cama king, ar-condicionado, banheiro privativo e bancada de home office (Sol e Dunas também têm varanda privativa), além da suíte master, ainda maior, com escritório e closet integrados.",
    "A área externa reúne piscina em raia de 15 metros com deck de madeira, espreguiçadeiras, pergolado com lounge, jardim com palmeiras e um terraço no rooftop com vista para o pôr do sol. Completam a casa lavabo e lavanderia.",
    "Infraestrutura pensada para a vida no litoral: gerador com autonomia total, poço profundo de 40 metros e fossa séptica, com todas as plantas (arquitetônica, elétrica e hidráulica). A casa fica em uma rua tranquila de casas, sem saída, na mesma rua da Casa Ohana.",
    "Hoje a casa já opera com sucesso como hospedagem no Airbnb: as suítes Sol, Mar e Dunas têm nota 5,0, com 56 avaliações no total e anfitriã Superhost — ideal para morar, passar temporadas ou investir com renda imediata."
  ],
  infra: [
    "Terreno: 320 m²",
    "Área construída: 258 m² (2 pavimentos)",
    "4 suítes, todas com banheiro privativo",
    "Suíte master com escritório e closet",
    "Suítes com cama king, ar-condicionado e home office",
    "Varandas privativas",
    "Lavabo",
    "Sala de estar e sala de jantar integradas",
    "Cozinha americana equipada",
    "Piscina em raia de 15 m com deck de madeira",
    "Jardim com palmeiras e pergolado com lounge",
    "Terraço no rooftop com vista para o pôr do sol",
    "Lavanderia",
    "Gerador com autonomia total",
    "Poço profundo de 40 m e fossa séptica",
    "Plantas arquitetônica, elétrica e hidráulica",
    "Rua tranquila de casas, sem saída",
    "A 5 minutos a pé da praia",
    "Já opera no Airbnb: nota 5,0 nas 3 suítes (56 avaliações), Superhost"
  ],
  facilities: ["4 Suítes", "258 m² Construídos", "Piscina de 15 m", "Rooftop", "Gerador", "Poço Profundo", "Perto da Praia"],
  gallery: {
    main: "/imoveis/casa-4-suites-piscina-prea-01-piscina-raia-mural-kitesurf.webp",
    sideTop: "/imoveis/casa-4-suites-piscina-prea-02-piscina-deck-madeira.webp",
    sideBottom: "/imoveis/casa-4-suites-piscina-prea-03-sala-jantar-mesa-madeira-mural.webp",
    extra: [
      "/imoveis/casa-4-suites-piscina-prea-04-piscina-espreguicadeiras.webp",
      "/imoveis/casa-4-suites-piscina-prea-05-pergolado-lounge-jardim.webp",
      "/imoveis/casa-4-suites-piscina-prea-06-sala-jantar-cozinha-integrada.webp",
      "/imoveis/casa-4-suites-piscina-prea-07-sala-jantar-vista-piscina.webp",
      "/imoveis/casa-4-suites-piscina-prea-08-sala-jantar-portas-vidro.webp",
      "/imoveis/casa-4-suites-piscina-prea-09-cozinha-americana-luminarias.webp",
      "/imoveis/casa-4-suites-piscina-prea-10-cozinha-bancada-vista-piscina.webp",
      "/imoveis/casa-4-suites-piscina-prea-11-sala-estar-neon-aparador.webp",
      "/imoveis/casa-4-suites-piscina-prea-12-suite-sol-cama-king-solteiro.webp",
      "/imoveis/casa-4-suites-piscina-prea-13-suite-sol-sofa.webp",
      "/imoveis/casa-4-suites-piscina-prea-14-suite-sol-home-office-varanda.webp",
      "/imoveis/casa-4-suites-piscina-prea-15-suite-sol-ampla.webp",
      "/imoveis/casa-4-suites-piscina-prea-16-suite-sol-bancada-trabalho.webp",
      "/imoveis/casa-4-suites-piscina-prea-17-suite-sol-tv-varanda.webp",
      "/imoveis/casa-4-suites-piscina-prea-18-suite-sol-home-office.webp",
      "/imoveis/casa-4-suites-piscina-prea-19-suite-sol-banheiro-box.webp",
      "/imoveis/casa-4-suites-piscina-prea-20-suite-mar-cama-king-solteiro.webp",
      "/imoveis/casa-4-suites-piscina-prea-21-suite-mar-vista-piscina.webp",
      "/imoveis/casa-4-suites-piscina-prea-22-suite-mar-vista-mural.webp",
      "/imoveis/casa-4-suites-piscina-prea-23-suite-mar-cama-king.webp",
      "/imoveis/casa-4-suites-piscina-prea-24-suite-mar-ampla.webp",
      "/imoveis/casa-4-suites-piscina-prea-25-suite-mar-janela-jardim.webp",
      "/imoveis/casa-4-suites-piscina-prea-26-suite-mar-home-office.webp",
      "/imoveis/casa-4-suites-piscina-prea-27-suite-mar-banheiro-box.webp",
      "/imoveis/casa-4-suites-piscina-prea-28-suite-dunas-cama-king-varanda.webp",
      "/imoveis/casa-4-suites-piscina-prea-29-suite-dunas-ampla.webp",
      "/imoveis/casa-4-suites-piscina-prea-30-suite-dunas-cama-king.webp",
      "/imoveis/casa-4-suites-piscina-prea-31-suite-dunas-varanda-privativa.webp",
      "/imoveis/casa-4-suites-piscina-prea-32-varanda-vista-piscina.webp",
      "/imoveis/casa-4-suites-piscina-prea-33-suite-dunas-home-office.webp",
      "/imoveis/casa-4-suites-piscina-prea-34-suite-dunas-noite.webp",
      "/imoveis/casa-4-suites-piscina-prea-35-suite-dunas-banheiro-box.webp",
      "/imoveis/casa-4-suites-piscina-prea-36-suite-dunas-banheiro.webp",
      "/imoveis/casa-4-suites-piscina-prea-37-lavabo.webp",
      "/imoveis/casa-4-suites-piscina-prea-38-jardim-palmeira.webp",
      "/imoveis/casa-4-suites-piscina-prea-39-jardim-entrada.webp",
      "/imoveis/casa-4-suites-piscina-prea-40-jardim-pedras-gatos.webp",
      "/imoveis/casa-4-suites-piscina-prea-41-escada-hall.webp",
      "/imoveis/casa-4-suites-piscina-prea-42-lavanderia.webp",
      "/imoveis/casa-4-suites-piscina-prea-43-terraco-por-do-sol.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.8173525,-40.4203743&hl=pt-BR&z=16&output=embed",
  documents: [
    {
      label: "Projeto Arquitetônico",
      url: "/documentos/casa-4-suites-piscina-prea-projeto-arquitetonico.pdf",
      legend: "Plantas do pavimento térreo, do pavimento superior, da cobertura e de situação, com quadro de áreas."
    },
    {
      label: "Avaliações no Airbnb — Suíte Sol",
      url: "https://www.airbnb.com.br/rooms/1210057610664415425",
      legend: "Anúncio real da casa no Airbnb: nota 5,0 com 19 avaliações de hóspedes."
    },
    {
      label: "Avaliações no Airbnb — Suíte Mar",
      url: "https://www.airbnb.com.br/rooms/1210050195544843480",
      legend: "Anúncio real da casa no Airbnb: nota 5,0 com 18 avaliações de hóspedes."
    },
    {
      label: "Avaliações no Airbnb — Suíte Dunas",
      url: "https://www.airbnb.com.br/rooms/1210033995543673713",
      legend: "Anúncio real da casa no Airbnb: nota 5,0 com 19 avaliações de hóspedes."
    }
  ],
  priceTag: "Valor",
  price: "R$ 3.500.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "villa-casa-suica-kite-villas-guajiru",
  slug: "villa-casa-suica-kite-villas-guajiru",
  title: "VENDA",
  searchTitle: "Villa 2 Suítes Pé na Areia — Casa Suíça Kite Villas — Ilha do Guajiru",
  image: "/imoveis/villa-casa-suica-kite-villas-guajiru-01-villa-piscina-privativa-deck.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "VILLA PÉ NA AREIA — CASA SUÍÇA KITE VILLAS — ILHA DO GUAJIRU",
  location: "Praia do Farol, Itarema - CE",
  rating: 5,
  exclusiveText: "Pé na Areia | 178 m² | 2 Suítes | Piscina Privativa | Spot de Kitesurf",
  summaryDescription: "Villa de 178 m² com 2 suítes e piscina privativa no Casa Suíça Kite Villas, condomínio fechado de 14 villas pé na areia na Praia do Farol, Ilha do Guajiru (Itarema), com 100 m de frente para o mar, ponto de kite, piscina, quadra de tênis e restaurante — e gestão hoteleira que aluga a villa quando você não está.",
  about: [
    "Kitesurf no quintal de casa: o Casa Suíça Kite Villas fica na Praia do Farol, na Ilha do Guajiru, em Itarema — uma das praias mais tranquilas do litoral oeste do Ceará, em frente a uma enorme lagoa de águas rasas e cristalinas formada por uma faixa de areia de 7 km, perfeita tanto para quem está aprendendo quanto para kiters experientes.",
    "O condomínio fica em um terreno de 20.000 m² com 100 metros de frente para a praia e reúne apenas 14 villas individuais, cercadas de jardins, coqueiros e área de preservação permanente. O projeto é do mesmo grupo da Casa Suíça, pousada e escola de kite que opera na Ilha do Guajiru desde 2006.",
    "Cada villa tem 178 m², com 2 suítes com banheiro privativo, sala de estar com janelas panorâmicas, cozinha completa com vista para o mar, área de serviço e um amplo terraço coberto com deck de madeira e piscina privativa. Arquitetura em madeira e cobertura natural, integrada à paisagem, com vaga de estacionamento própria.",
    "Áreas comuns pensadas para a vida de praia: grande piscina com vista para o mar, bar na praia com deck, mirante e apoio às atividades no mar (ponto de kite exclusivo dos moradores), escola de kitesurf e wingfoil, restaurante com vista para o pôr do sol, quadra de tênis, área de churrasco e eventos, gerador e estacionamento para moradores e visitantes.",
    "Construção da RA Construtora, especializada em alto padrão no Nordeste, e gestão da KV ADM com serviços de hotel: check-in e check-out, limpeza diária, manutenção e, sob demanda, chef particular ou babá. Quando você não estiver usando, a administração aluga a sua villa — hoje as villas do condomínio são alugadas por R$ 2.000 a R$ 2.500 a diária.",
    "Localização estratégica na Rota dos Ventos: a cerca de 40 minutos do aeroporto de Jericoacoara, perto do Preá, de Jericoacoara e de Icaraizinho, e a poucas horas de Fortaleza. Unidades limitadas — algumas villas já foram vendidas; consulte a disponibilidade."
  ],
  infra: [
    "Villa de 178 m²",
    "2 suítes com banheiro privativo",
    "Sala de estar com janelas panorâmicas",
    "Cozinha completa com vista para o mar",
    "Área de serviço",
    "Terraço coberto com deck de madeira",
    "Piscina privativa",
    "Ar-condicionado e Wi-Fi",
    "1 vaga de estacionamento",
    "Condomínio fechado com apenas 14 villas",
    "Terreno de 20.000 m² com 100 m de frente para o mar",
    "Acesso direto à praia (pé na areia)",
    "Ponto de kite e bar na praia exclusivos dos moradores",
    "Escola de kitesurf e wingfoil",
    "Piscina comum com vista para o mar",
    "Restaurante com vista para o pôr do sol",
    "Quadra de tênis",
    "Área de churrasco e eventos",
    "Gerador",
    "Área de preservação permanente",
    "Gestão hoteleira (KV ADM): check-in/check-out, limpeza diária e manutenção",
    "Renda com aluguel por temporada quando a villa não estiver em uso",
    "Construção RA Construtora (alto padrão)",
    "A ~40 min do aeroporto de Jericoacoara"
  ],
  facilities: ["Pé na Areia", "178 m²", "2 Suítes", "Piscina Privativa", "Spot de Kitesurf", "Condomínio Fechado", "Gestão Hoteleira"],
  gallery: {
    main: "/imoveis/villa-casa-suica-kite-villas-guajiru-01-villa-piscina-privativa-deck.webp",
    sideTop: "/imoveis/villa-casa-suica-kite-villas-guajiru-02-piscina-condominio-vista-mar.webp",
    sideBottom: "/imoveis/villa-casa-suica-kite-villas-guajiru-03-sala-estar-vista-mar.webp",
    extra: [
      "/imoveis/villa-casa-suica-kite-villas-guajiru-04-vista-aerea-condominio-praia.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-05-vista-aerea-praia-do-farol.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-06-lagoa-kitesurf-praia-do-farol.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-07-villa-piscina-espreguicadeiras.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-08-villa-fachada-jardim.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-09-jardim-piscina-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-10-villa-fachada-piscina.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-11-deck-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-12-piscina-raia-deck-madeira.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-13-espreguicadeiras-piscina-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-14-lounge-deck-piscina.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-15-terraco-coberto-poltronas.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-16-mesa-terraco-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-17-mesa-jantar-terraco.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-18-terraco-jantar-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-19-sala-estar-sofa.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-20-cozinha-madeira.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-21-cozinha-equipada.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-22-cozinha-bancada-concreto.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-23-suite-cama-casal.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-24-suite-rede-vista-mar.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-25-suite-ampla.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-26-suite-casal-cabeceira.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-27-suite-duas-camas.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-28-varanda-rede.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-29-banheiro-cubas.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-30-banheiro-cuba-pedra.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-31-banheiro-suite.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-32-piscina-condominio-jardim.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-33-quadra-tenis.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-34-vista-aerea-piscina-privativa.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-35-kitesurf-lagoa.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-36-villa-noite-varanda.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-37-piscina-iluminada-noite.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-38-villa-noite-jardim.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-39-varanda-noite.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-40-piscina-privativa-noite.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-41-planta-baixa-178m2.webp",
      "/imoveis/villa-casa-suica-kite-villas-guajiru-42-plano-mestre-condominio.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.8735,-39.9420&hl=pt-BR&z=14&output=embed",
  videoSources: [
    "https://youtu.be/d4kR4Yx7kSo"
  ],
  documents: [
    {
      label: "E-book do Empreendimento",
      url: "/documentos/villa-casa-suica-kite-villas-ebook.pdf",
      legend: "Apresentação completa do Casa Suíça Kite Villas: localização, planta baixa da villa de 178 m², áreas comuns, plano mestre, construção e gestão."
    }
  ],
  priceTag: "Valor",
  price: "R$ 2.500.000,00",
  installments: "Consulte condições",
  category: "venda"
},
{
  id: "sitio-espinho-camocim",
  slug: "sitio-espinho-camocim",
  title: "VENDA",
  searchTitle: "Sítio Espinho — 549 ha — Camocim",
  image: "/imoveis/sitio-espinho-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "SÍTIO ESPINHO — 549 HA — CAMOCIM",
  location: "Barrinha, Camocim - CE",
  rating: 5,
  exclusiveText: "549 hectares | 2.746 m de Frente Mar | Dunas, Lagoa e Litoral Preservado",
  summaryDescription: "Sítio Espinho: 549,04 hectares certificados (SIGEF) na Barrinha, Camocim, com 2.746,67 m de frente para o Oceano Atlântico, extenso campo de dunas móveis e lagoas, e confrontação sul com o Lago das Cangalhas.",
  about: [
    "O Sítio Espinho é um raro ativo de 549,04 hectares no litoral oeste de Camocim, com área certificada pelo SIGEF e perímetro de 11.248,10 m. A propriedade tem frente direta para o Oceano Atlântico — 2.746,67 metros de orla — e confronta ao sul com o Lago das Cangalhas.",
    "A paisagem é dominada por um extenso campo de dunas móveis brancas e lagoas interdunares sazonais, entremeadas por trechos de vegetação nativa e coqueirais. Dentro da própria área foi identificado um ponto de kitesurf reconhecido localmente, o 'Cangalhas Secret Point'.",
    "Localizado a aproximadamente 15 km a oeste da sede de Camocim e a 6 km da Vila de Maceió, o imóvel está no coração da Rota das Emoções, um dos principais corredores turísticos do Nordeste. Camocim conta com aeroporto regional modernizado e é servida pela rodovia estruturante CE-085.",
    "Uma oportunidade de escala rara no litoral cearense — indicada para quem busca um ativo de grande extensão, com paisagem de dunas e lagoa preservada e potencial de longo prazo no corredor turístico-esportivo do vento."
  ],
  infra: [
    "Área total certificada (SIGEF): 549,0392 ha — perímetro de 11.248,10 m",
    "2.746,67 m de frente para o Oceano Atlântico",
    "Confrontação sul com o Lago das Cangalhas",
    "Extenso campo de dunas móveis e lagoas interdunares",
    "Ponto de kitesurf identificado dentro da área (Cangalhas Secret Point)",
    "A ~15 km a oeste de Camocim e 6 km da Vila de Maceió",
    "Camocim: aeroporto regional modernizado e rodovia estruturante CE-085"
  ],
  facilities: ["549 Hectares", "2,7 km Frente Mar", "Kitesurf", "Dunas e Lagoa"],
  gallery: {
    main: "/imoveis/sitio-espinho-01.webp",
    sideTop: "/imoveis/sitio-espinho-02.webp",
    sideBottom: "/imoveis/sitio-espinho-03.webp",
    extra: [
      "/imoveis/sitio-espinho-04.webp",
      "/imoveis/sitio-espinho-05.webp",
      "/imoveis/sitio-espinho-06.webp",
      "/imoveis/sitio-espinho-07.webp",
      "/imoveis/sitio-espinho-08.webp",
      "/imoveis/sitio-espinho-09.webp",
      "/imoveis/sitio-espinho-10.webp",
      "/imoveis/sitio-espinho-11.webp",
      "/imoveis/sitio-espinho-12.webp",
      "/imoveis/sitio-espinho-13.webp",
      "/imoveis/sitio-espinho-14.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-2.896414,-40.996641&hl=pt-BR&z=13&output=embed",
  videoSources: [
    "https://drive.google.com/file/d/1f2KRbA9b1Fz05uNjo05LtR6Jd1FiSgjC/preview",
    "https://drive.google.com/file/d/1O_oOnecjFqCfITuXOHwpXnYQSbPPe0vl/preview",
    "https://drive.google.com/file/d/1NcfVyzy36gEj7kAHR_g8ttzASRYIzcUH/preview",
    "https://drive.google.com/file/d/1O7ztnuIJFeH0kR_V4meJX9D6BLvhiz1q/preview"
  ],
  videoThumbnails: [
    "/imoveis/sitio-espinho-05.webp",
    "/imoveis/sitio-espinho-08.webp",
    "/imoveis/sitio-espinho-11.webp",
    "/imoveis/sitio-espinho-14.webp"
  ],
  documents: [
    {
      label: "Memorial Descritivo",
      url: "/documentos/sitio-espinho-memorial-descritivo.pdf",
      legend: "Memorial descritivo georreferenciado do Sítio Espinho, matrícula 783, com área de 549,0392 ha e perímetro de 11.248,10 m."
    },
    {
      label: "Planta SIGEF — INCRA",
      url: "/documentos/sitio-espinho-planta-sigef.pdf",
      legend: "Planta de certificação SIGEF/INCRA da poligonal do imóvel."
    },
    {
      label: "Planta Georreferenciada — Levantamento Planialtimétrico",
      url: "/documentos/sitio-espinho-planta-georreferenciada.pdf",
      legend: "Planta com o levantamento planialtimétrico completo, tabela de coordenadas, azimutes e distâncias."
    }
  ],
  priceTag: "Valor",
  price: "R$ 15.000.000,00",
  installments: "Consulte condições",
  category: "venda",
  unlisted: true
},
{
  id: "terreno-icarai-amontada",
  slug: "terreno-icarai-amontada",
  title: "VENDA",
  searchTitle: "Empreendimento Icaraí — Amontada",
  image: "/imoveis/terreno-icarai-amontada-01.webp",
  badge: "Oportunidade Exclusiva",
  propertyTitle: "TERRENO ICARAÍ — 36 HA — AMONTADA",
  location: "Icaraí de Amontada, Amontada - CE",
  rating: 5,
  exclusiveText: "36,17 hectares | Frente Mar | Potencial para Pousada, Hotel ou Resort",
  summaryDescription: "Gleba de 36,1745 hectares em Icaraí de Amontada, com frente para o mar, zoneamento ambiental já elaborado e enquadramento favorável para licenciamento de pousada, hotel ou resort.",
  about: [
    "Gleba de 36,1745 hectares situada na porção leste do município de Amontada, no litoral oeste do Ceará, em Icaraí de Amontada, com frente direta para o mar.",
    "O terreno é caracterizado pelo predomínio de áreas alagáveis, dunas fixas e depósitos eólicos de topo plano. Segundo o Estudo de Zoneamento Ambiental elaborado para a gleba, aproximadamente 82,98% da área (descontadas as porções classificadas como Área de Preservação Permanente) apresenta potencial de uso, respeitada a capacidade de suporte do ambiente natural.",
    "O enquadramento ambiental identificado viabiliza o licenciamento municipal de hotel (até 240 unidades habitacionais) ou pousada (até 80 unidades habitacionais) como empreendimento de baixo potencial poluidor-degradador, conforme resoluções do COEMA.",
    "Icaraí de Amontada é uma região de crescimento turístico consolidado no litoral cearense, com fácil acesso e desenvolvimento imobiliário já presente na orla — um cenário favorável para um empreendimento hoteleiro ou de pousadas de médio a grande porte."
  ],
  infra: [
    "Área total: 36,1745 ha, com frente para o mar",
    "~82,98% da área (fora de APP) com potencial de uso",
    "17,02% de dunas fixas classificadas como Área de Preservação Permanente (APP)",
    "Enquadramento para licenciamento municipal de hotel (até 240 UH) ou pousada (até 80 UH)",
    "Estudo de Zoneamento Ambiental elaborado pela Carcará Ambiental",
    "Região de crescimento turístico consolidado, com fácil acesso"
  ],
  facilities: ["36 Hectares", "Frente Mar", "Potencial Hoteleiro", "Zoneamento Ambiental"],
  gallery: {
    main: "/imoveis/terreno-icarai-amontada-01.webp",
    sideTop: "/imoveis/terreno-icarai-amontada-02.webp",
    sideBottom: "/imoveis/terreno-icarai-amontada-03.webp",
    extra: [
      "/imoveis/terreno-icarai-amontada-04.webp",
      "/imoveis/terreno-icarai-amontada-05.webp",
      "/imoveis/terreno-icarai-amontada-06.webp",
      "/imoveis/terreno-icarai-amontada-07.webp",
      "/imoveis/terreno-icarai-amontada-08.webp",
      "/imoveis/terreno-icarai-amontada-09.webp"
    ]
  },
  mapImage: "/mapa.avif",
  mapUrl: "https://maps.google.com/maps?q=-3.045154,-39.620133&hl=pt-BR&z=15&output=embed",
  videoSources: [
    "https://drive.google.com/file/d/16vxDt9hbgMou-OqnL4x14NrQPiECKy1x/preview"
  ],
  videoThumbnails: [
    "/imoveis/terreno-icarai-amontada-01.webp"
  ],
  documents: [
    {
      label: "Zoneamento Ambiental — Gleba Amontada",
      url: "/documentos/terreno-icarai-amontada-zoneamento-ambiental.pdf",
      legend: "Estudo de zoneamento ambiental da gleba, com enquadramento legal e potencial de licenciamento para pousada, hotel ou resort — elaborado pela Carcará Ambiental."
    }
  ],
  priceTag: "Valor",
  price: "Consulte condições",
  installments: "Consulte condições",
  category: "venda",
  unlisted: true
}
];
