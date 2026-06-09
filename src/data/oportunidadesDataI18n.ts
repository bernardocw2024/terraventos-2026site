import { oportunidadesData, type OportunidadeDetalhe } from './oportunidadesData';

export const oportunidadesDataByLang: Record<string, Partial<OportunidadeDetalhe>[]> = {
  pt: [
    {
      id: '10',
      slug: 'casa-alto-padrao-praia-barrinha', category: 'venda',
      title: 'VENDA',
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
      priceTag: '',
      price: 'R$ 6.600.000,00',
      installments: 'Consulte condiÃ§Ãµes',
    },
    {
      id: '09',
      slug: 'area-exclusiva-tatajuba-guriu-100000m', category: 'venda',
      title: 'VENDA',
      image: 'https://vumbnail.com/1186057204.jpg',
      badge: 'Oportunidade Ãnica',
      propertyTitle: 'ÃREA EXCLUSIVA PÃ NA AREIA â 100.000 mÂ²',
      location: 'Entre Tatajuba e GuriÃº, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '100.000 mÂ² | 200m de Frente Mar | MatrÃ­cula e Escritura PÃºblica',
      summaryDescription: 'Ãrea monumental de 10 hectares estrategicamente entre Tatajuba e GuriÃº, com 200m de frente mar e escritura pÃºblica.',
      about: [
        'Uma oportunidade monumental no litoral cearense: 10 hectares de Ã¡rea totalmente pÃ© na areia localizada estrategicamente entre as vilas de Tatajuba e GuriÃº.',
        'Com 200 metros de frente para o mar, esta propriedade Ã© um dos ativos mais raros e valiosos da regiÃ£o, ideal para o desenvolvimento de resorts de luxo, hotelaria de charme ou um refÃºgio particular de alto padrÃ£o.',
        'SeguranÃ§a JurÃ­dica Absoluta: ImÃ³vel com MatrÃ­cula e Escritura PÃºblica, garantindo uma transaÃ§Ã£o sÃ³lida e proteÃ§Ã£o patrimonial integral.',
        'Infraestrutura e Acesso: Acesso facilitado pelos fundos e proximidade estratÃ©gica com rede de energia elÃ©trica trifÃ¡sica (apenas 500 metros), reduzindo significativamente os custos de implementaÃ§Ã£o.'
      ],
      infra: [
        'Ãrea Total: 100.000 mÂ² (10 Hectares)',
        'Testada: 200 metros de frente mar',
        'Energia TrifÃ¡sica a 500m',
        'MatrÃ­cula e Escritura PÃºblica'
      ],
      facilities: ['200m Frente Mar', '10 Hectares', 'Energia TrifÃ¡sica', 'Escritura PÃºblica'],
      price: 'R$ 15.000.000,00',
      installments: 'Investimento: R$ 150,00 por mÂ²',
      priceTag: '',
    },
    {
      id: '08',
      slug: 'terreno-exclusivo-tatajuba-1000m', category: 'venda',
      title: 'VENDA',
      image: '/TATAJUBA/Image_from_Image.png (4).png',
      badge: 'Exclusividade',
      propertyTitle: 'TERRENO EXCLUSIVO EM TATAJUBA â 1.000 mÂ²',
      location: 'Tatajuba, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '1.000 mÂ² | MatrÃ­cula Individualizada | Oportunidade Ãnica',
      summaryDescription: 'Oportunidade exclusiva em Tatajuba: Terreno de 1.000 mÂ² com matrÃ­cula individualizada, no coraÃ§Ã£o do paraÃ­so do kitesurf.',
      about: [
        'Oportunidade rara em Tatajuba: Meio lote de 1.000 mÂ² localizado em uma das Ã¡reas mais cobiÃ§adas do paraÃ­so do kitesurf.',
        'SeguranÃ§a JurÃ­dica: ImÃ³vel com matrÃ­cula individualizada e processo de desmembramento finalizado, garantindo uma transaÃ§Ã£o segura e transparente.',
        'LocalizaÃ§Ã£o EstratÃ©gica: RegiÃ£o de alta valorizaÃ§Ã£o, ideal para quem busca exclusividade e contato direto com a natureza exuberante de Tatajuba.',
        'Pronto para Investir: Ãrea retificada e pronta para receber seu projeto dos sonhos ou para compor uma carteira de investimentos sÃ³lidos no litoral cearense.'
      ],
      infra: [
        'Ãrea Total: 1.000 mÂ²',
        'MatrÃ­cula Individualizada',
        'LocalizaÃ§Ã£o Premium em Tatajuba',
        'Pronto para Desmembramento'
      ],
      facilities: ['1.000 mÂ²', 'MatrÃ­cula Pronta', 'Kitesurf Paradise', 'Exclusividade'],
      price: 'R$ 800.000,00',
      installments: 'Consulte condiÃ§Ãµes exclusivas',
      priceTag: '',
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
    },
    {
      id: '07',
      slug: 'terreno-exclusivo-prea-200m-mar', category: 'venda',
      title: 'VENDA',
      image: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
      badge: 'Oportunidade',
      propertyTitle: 'TERRENO EXCLUSIVO PREÃ â 200M DO MAR',
      location: 'PreÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '250 mÂ² | 10m x 25m | Apenas 200m da Praia',
      summaryDescription: 'Excelente oportunidade no PreÃ¡: Terreno de 250mÂ² a apenas 200 metros do mar, vizinho ao Botanik e CarnaÃºba Windhouse.',
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
      videoSources: [
        'https://player.vimeo.com/video/1185188271'
      ],
      priceTag: 'A partir de',
      price: 'R$ 400.000,00',
      installments: 'Consulte condiÃ§Ãµes de mercado',
    },
    {
      id: '06',
      slug: 'prea-house', category: 'venda',
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
      installments: 'Consulte condiÃ§Ãµes'
    },
    {
      id: '04',
      slug: 'villa-prabhu', category: 'lancamento',
      title: 'LANÃAMENTO',
      image: '/VILLA_PRABHU/PERSPECTIVAS-3D-VILLA-PRABHU-2.webp',
      badge: 'LANÃAMENTO',
      propertyTitle: 'VILLA PRABHU â PARACURU-CE',
      location: 'Paracuru, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: 'Loteamento Fechado em Paracuru-CE com lagoa privativa, lazer completo e a 100m da praia. Alto padrÃ£o e exclusividade em uma das praias mais belas do CearÃ¡',
      summaryDescription: 'O Villa Prabhu Ã© um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e seguranÃ§a em uma regiÃ£o privilegiada.',
      about: [
        'O Villa Prabhu Ã© um empreendimento planejado pela Bianchi Urbanismo, focado em oferecer qualidade de vida e seguranÃ§a.',
        'Situado em uma regiÃ£o privilegiada com ampla Ã¡rea verde e recursos hÃ­dricos, o projeto destaca-se pelo planejamento urbano inteligente e integraÃ§Ã£o com a natureza.',
        'Lotes Exclusivos: Unidades espaÃ§osas com Ã¡reas privativas a partir de 242 mÂ² atÃ© mais de 600 mÂ².',
        'Planejamento de Etapas: Projeto dividido em fases, com a Etapa 1 jÃ¡ consolidada e unidades disponÃ­veis na Etapa 2.',
        'Urbanismo de Qualidade: Infraestrutura pensada para o bem-estar, com ruas como a Av. Prabhu e Rua Azalea.',
      ],
      infra: [
        'Financiamento Direto: Facilidade de pagamento em atÃ© 120 parcelas mensais.',
        'Pronto para Investir: DocumentaÃ§Ã£o e tabela de vendas atualizada para 2026.',
        'LocalizaÃ§Ã£o EstratÃ©gica: Quadras planejadas para garantir privacidade e fÃ¡cil acesso Ã s Ã¡reas comuns.',
        'CenÃ¡rio Natural: Loteamento cercado por Ã¡gua e vegetaÃ§Ã£o preservada.',
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
    },
    {
      id: '01',
      slug: 'villa-condudu-3', category: 'temporada',
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
        '5. Suporte Concierge Terra Ventos: Sua Ãºnica preocupaÃ§Ã£o serÃ¡ velejar.',
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
        main: '/VillaCondutuPaginaInicial/Final 01 (2).png',
        sideTop: '/VillaCondutuPaginaInicial/FINAL 02 (1).png',
        sideBottom: '/VillaCondutuPaginaInicial/Final 02 (2).png',
        extra: [
          '/VillaCondutuPaginaInicial/FINAL 03 (1).png',
          '/VillaCondutuPaginaInicial/FINAL 08.png',
          '/VillaCondutuPaginaInicial/FINAL 09.png',
          '/VillaCondutuPaginaInicial/FINAL 12.png',
          '/VillaCondutuPaginaInicial/FINAL 13.png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
      priceTag: 'DiÃ¡ria',
      price: 'Consulte',
      installments: 'consultar disponibilidade',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    },
    {
      id: '02',
      slug: 'terrenos-bitupita', category: 'venda',
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
        '4. SeguranÃ§a JurÃ­dica Terra Ventos: DocumentaÃ§Ã£o 100% revisada com matrÃ­cula individualizada.',
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
          '/bitupitaPaginaIndividual/BITUparaiso.jpg'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
      priceTag: 'A partir de',
      price: 'R$ 120 MIL',
      installments: 'Consulte disponibilidade',
    },
    {
      id: '03',
      slug: 'vila-do-ingles', category: 'investimento',
      title: 'INVESTIMENTO',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'Investimento',
      propertyTitle: 'VILA DO INGLÃS',
      location: 'PreÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '200 mÂ² | 2 Banheiros | 10 Projetos Exclusivos',
      about: [
        'La Esencia del Lujo Sostenible: Una mezcla Ãºnica de sostenibilidad moderna y tranquilidad.',
        'Inspirada en un refugio de Nueva York, esta residencia ofrece 200 mÂ² alimentados enteriramente por energÃ­a solar.',
        '1. Design SustentÃ¡vel: Sistemas inteligentes com painÃ©is solares no telhado.',
        '2. Conforto Estilo Spa: 2 banheiros modernos e imersivos.',
        '3. TransparÃªncia DinÃ¢mica: Amplas paredes de vidro do chÃ£o ao teto.',
        '4. Privacidade PanorÃ¢mica: TerraÃ§o privativo no rooftop.',
        '5. ConexÃ£o Exclusiva: O contraste entre a localizaÃ§Ã£o premium e a paz isolada.',
      ],
      infra: [
        'Sistema de painÃ©is solares no rooftop',
        'Paredes de vidro do chÃ£o ao teto',
        'TerraÃ§o privativo no rooftop',
        '2 banheiros modernos',
        'LocalizaÃ§Ã£o isolada de alto padrÃ£o'
      ],
      facilities: ['!Beira-mar', 'Ar-condicionado', '!Lavadora', '!Internet', 'Aquecedor de Ã¡gua', 'Geladeira', 'SofÃ¡', 'ArmÃ¡rio'],
      gallery: {
        main: '/viladoinglesPaginaInicial/FINAL 09 (1).png',
        sideTop: '/viladoinglesPaginaInicial/FINAL 01 (3).png',
        sideBottom: '/viladoinglesPaginaInicial/Final 02 (2).png',
        extra: [
          '/viladoinglesPaginaInicial/FINAL 08 (1).png',
          '/viladoinglesPaginaInicial/Final 05 (1).png',
          '/viladoinglesPaginaInicial/Final 06 (1).png',
          '/viladoinglesPaginaInicial/Final 07 (1).png',
          '/viladoinglesPaginaInicial/FINAL 02 (3).png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=40.773565,-73.956555&z=15&output=embed',
      priceTag: 'Status',
      price: 'Em Breve',
      installments: '',
    },
    {
      id: '05',
      slug: 'casa-matanzas', category: 'temporada',
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
          '/Matanzas/90d53b04-d0e5-4165-8ddc-2aac9dcfc2fb.avif',
          '/Matanzas/369ef9fe-3cde-4ff2-b972-97dc02848241.avif',
          '/Matanzas/6645f7b5-7850-4a44-8ff9-2f81fa7ef623.avif',
          '/Matanzas/cd0910d3-112f-4ef6-ac70-86906d62bd1c.avif',
          '/Matanzas/f65a0d94-74da-40f4-9cf3-c6a9262e1be6.avif'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
      priceTag: 'DiÃ¡ria',
      price: 'Consulte',
      installments: 'Consulte pacotes',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
    },
  ,
    {
      id: '11', slug: 'lote-109-taiba', category: 'venda',
      title: 'VENDA', badge: 'Oportunidade',
      propertyTitle: 'LOTE 109 — TAIBA',
      location: 'Taiba, Ceará, Brasil',
      exclusiveText: '560 m² | 14 x 40m | Escritura | Murado | Pronto para Construir',
      summaryDescription: 'Terreno de 560 m² em localização estratégica entre duas casas já construídas em Taiba, totalmente murado e pronto para construir.',
      about: ['Oportunidade única em Taiba: Lote de 560 m² (14 x 40 m) em localização privilegiada, situado estrategicamente entre duas casas já construídas.','Segurança Jurídica: Imóvel com Escritura, garantindo transação sólida e proteção patrimonial integral.','Totalmente murado e sem necessidade de aterro — um grande diferencial na região. Terreno 100% pronto para construir.','Taiba é um dos destinos mais valorizados do litoral cearense, com ventos constantes ideais para kitesurf e alta valorização imobiliária.','Valor muito abaixo do mercado — oportunidade imperdível.'],
      infra: ['Área Total: 560 m²','Dimensões: 14 x 40 metros','Escritura Pública','Totalmente Murado','Pronto para Construir (sem aterro)'],
      facilities: ['560 m²','Escritura','Murado','Pronto para Construir','Localização Estratégica'],
      priceTag: '', price: 'R$ 115.000,00', installments: 'À vista'
    },
    {
      id: '12', slug: 'lote-barramar-lagoa-taiba', category: 'investimento',
      title: 'INVESTIMENTO', badge: 'Investimento',
      propertyTitle: 'LOTE BARRAMAR LAGOA — TAIBA',
      location: 'Taiba, Ceará, Brasil',
      exclusiveText: '800 m² | 20 x 40m | ~300m da Lagoa do Kitesurf',
      summaryDescription: 'Terreno de 800 m² no Loteamento Barramar em Taiba, a apenas 300 metros da Lagoa do Kitesurf.',
      about: ['Oportunidade de investimento no Loteamento Barramar, em Taiba, Ceará: terreno de 800 m² (20 x 40 m) em zona turística de alta valorização.','Localização Privilegiada: A apenas ~300 metros da famosa Lagoa do Kitesurf de Taiba.','Taiba é reconhecida internacionalmente como um dos melhores destinos de kitesurf do mundo.','O Loteamento Barramar oferece terrenos amplos em uma região que combina tranquilidade, natureza e serviços.','Ideal para construir casa de veraneio, pousada ou investir com alto potencial de valorização.'],
      infra: ['Área Total: 800 m²','Dimensões: 20 x 40 metros','Distância da Lagoa: ~300 metros','Loteamento Barramar'],
      facilities: ['800 m²','Próximo à Lagoa','Kitesurf Paradise','Zona Turística'],
      priceTag: '', price: 'R$ 215.000,00', installments: 'Consulte condições'
    }],
  en: [
    {
      id: '10',
      slug: 'casa-alto-padrao-praia-barrinha', category: 'venda',
      title: 'FOR SALE',
      badge: 'For Sale',
      propertyTitle: 'HIGH-END BEACH HOUSE â PRAIA DA BARRINHA',
      location: 'Barrinha - AcaraÃº - CE',
      rating: 5,
      exclusiveText: '400 mÂ² | 4 Suites | 5 Bathrooms | Pool | 400m from the Beach',
      summaryDescription: 'High-end beach house 400 meters from Praia da Barrinha, featuring sophisticated coastal architecture, pool, gourmet space, beach tennis court and garden with coconut palms.',
      about: [
        'Be enchanted by this simply incredible house, where rustic charm meets comfort and sophistication. Located just 400 meters from the beach, it is the perfect place for those seeking tranquility, contact with nature and unforgettable moments.',
        'The property features a unique architecture with wood finishes, palm thatch roofing and spacious, integrated environments, creating a welcoming and elegant atmosphere.',
        'Complete leisure area with pool, large gourmet space, perfect for entertaining friends and family.',
        'Upper veranda with privileged views and ventilation. Garden with coconut palms and lush greenery.',
        'Sand court for beach tennis/volleyball. Integrated, well-lit environments. Sophisticated coastal style.'
      ],
      infra: [
        'Total Area: 400 mÂ²',
        'Land Area: 3,706.54 mÂ²',
        'Operation: Sale | Purpose: Residential',
        'Status: New | Occupancy: Vacant',
        'Features: Wall, Laundry, Backyard, Veranda, Living Room, Kitchen, Guest Bathroom'
      ],
      facilities: ['4 Suites', '5 Bathrooms', '3 Parking Spots', 'Pool', 'Gourmet Space', 'Sand Court', 'Veranda', 'Coconut Palm Garden'],
      priceTag: '',
      price: 'R$ 6,600,000.00',
      installments: 'Consult conditions',
    },
    {
      id: '09',
      slug: 'area-exclusiva-tatajuba-guriu-100000m', category: 'venda',
      title: 'FOR SALE',
      image: 'https://vumbnail.com/1186057204.jpg',
      badge: 'Unique Opportunity',
      propertyTitle: 'EXCLUSIVE BEACHFRONT AREA â 100,000 sqm',
      location: 'Between Tatajuba and GuriÃº, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '100,000 mÂ² | 200m Beachfront | Title & Public Deed',
      summaryDescription: 'Monumental 10-hectare area strategically located between Tatajuba and GuriÃº, with 200m of beachfront and public deed.',
      about: [
        'A monumental opportunity on the CearÃ¡ coast: 10 hectares of fully beachfront area strategically located between the villages of Tatajuba and GuriÃº.',
        'With 200 meters of beachfront, this property is one of the rarest and most valuable assets in the region, ideal for the development of luxury resorts, charming hotels, or a high-end private retreat.',
        'Absolute Legal Security: Property with Title and Public Deed, ensuring a solid transaction and full asset protection.',
        'Infrastructure and Access: Easy access from the back and strategic proximity to the three-phase power grid (only 500 meters), significantly reducing implementation costs.'
      ],
      infra: [
        'Total Area: 100,000 mÂ² (10 Hectares)',
        'Frontage: 200 meters of beachfront',
        'Three-phase power at 500m',
        'Title & Public Deed'
      ],
      facilities: ['200m Beachfront', '10 Hectares', 'Three-phase Power', 'Public Deed'],
      price: 'R$ 15,000,000.00',
      installments: 'Investment: R$ 150.00 per sqm',
      priceTag: '',
    },
    {
      id: '08',
      slug: 'terreno-exclusivo-tatajuba-1000m', category: 'venda',
      title: 'FOR SALE',
      image: '/TATAJUBA/Image_from_Image.png (4).png',
      badge: 'Exclusivity',
      propertyTitle: 'EXCLUSIVE LAND IN TATAJUBA â 1,000 mÂ²',
      location: 'Tatajuba, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '1,000 mÂ² | Individual Registration | Unique Opportunity',
      summaryDescription: 'Exclusive opportunity in Tatajuba: 1,000 sqm lot with individual registration, in the heart of the kitesurfing paradise.',
      about: [
        'Rare opportunity in Tatajuba: Half lot of 1,000 sqm located in one of the most coveted areas of the kitesurfing paradise.',
        'Legal Security: Property with individual registration and finalized splitting process, ensuring a safe and transparent transaction.',
        'Strategic Location: High appreciation region, ideal for those seeking exclusivity and direct contact with the exuberant nature of Tatajuba.',
        'Ready to Invest: Rectified area ready for your dream project or for a solid investment portfolio on the CearÃ¡ coast.'
      ],
      infra: [
        'Total Area: 1,000 sqm',
        'Individual Registration',
        'Premium Location in Tatajuba',
        'Ready for Splitting'
      ],
      facilities: ['1,000 sqm', 'Ready Registration', 'Kitesurf Paradise', 'Exclusivity'],
      price: 'R$ 800,000.00',
      installments: 'Consult exclusive conditions',
      priceTag: '',
      documents: [
        {
          label: 'Tatajuba: The Hidden Kitesurf Paradise',
          url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
          legend: 'Read more about the location and appreciation potential of Tatajuba.'
        },
        {
          label: 'See Floor Plan',
          url: '/TATAJUBA/3a85c744-9b82-45ca-9042-125872c4e7f1.jpeg',
          legend: 'View the exact dimensions and subdivision of the area.'
        }
      ],
    },
    {
      id: '07',
      slug: 'terreno-exclusivo-prea-200m-mar', category: 'venda',
      title: 'FOR SALE',
      image: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
      badge: 'Opportunity',
      propertyTitle: 'EXCLUSIVE PREÃ LAND â 200M FROM THE SEA',
      location: 'PreÃ¡, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '250 sqm | 10m x 25m | Only 200m from the Beach',
      summaryDescription: 'Excellent opportunity in PreÃ¡: 250 sqm lot just 200 meters from the sea, neighboring Botanik and CarnaÃºba Windhouse.',
      about: [
        'Excellent investment opportunity in one of the most valued destinations on the CearÃ¡ coast.',
        'Land with 250 sqm (10m x 25m) located in a strategic position in PreÃ¡.',
        'Situated just 200 meters from the beach, neighboring the prestigious Botanik and CarnaÃºba Windhouse developments.',
        'Ideal for those looking to build their dream home or invest in a booming market.'
      ],
      infra: [
        'Total Area: 250 sqm',
        'Dimensions: 10m x 25m',
        'Distance to the Beach: 200m',
        'Premium Location'
      ],
      facilities: ['200m from Beach', 'Botanik Neighbor', 'CarnaÃºba Neighbor', 'Exclusivity'],
      videoSources: [
        'https://player.vimeo.com/video/1185188271'
      ],
      priceTag: 'Starting at',
      price: 'R$ 400,000.00',
      installments: 'Consult market conditions',
    },
    {
      id: '06',
      slug: 'prea-house', category: 'venda',
      title: 'FOR SALE',
      image: '/Prea House/Image_from_Image.png (14).png',
      badge: 'For Sale',
      propertyTitle: 'PREÃ HOUSE',
      location: 'PreÃ¡, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '745 mÂ² Land Area | 261 mÂ² Built Area | 68 mÂ² Pool',
      summaryDescription: 'PreÃ¡ House: Luxury property with 745 sqm total area, gourmet area and spectacular L-shaped pool. Top-tier infrastructure and finishes for the best experience in CearÃ¡.',
      about: [
        'Luxury property consisting of two separate buildings with the swimming pool situated in between.',
        'Rear House: 2 suites (32.5 mÂ² each) with custom furniture, central Kitchen/Living area (32 mÂ²) with island, 10 mÂ² laundry, and front veranda.',
        'Front Building: Semi-open Gourmet Area (54 mÂ²), 1 Suite (24 mÂ²), powder room, and ATV garage (8.5 mÂ²).',
        'Rooftop Terrace: 96 mÂ² structurally prepared for future expansion with installed plumbing and infrastructure for gas heating.',
        'L-shaped Pool: 65,000 liters (10m x 4m) featuring a "prainha" beach area, built-in seating, and smartphone-automated ionizer.',
        'Premium Finishes: Timborana wood doors/windows, MaÃ§aranduba structure, and Tatajuba wood deck.'
      ],
      infra: [
        'Land Area: 745 mÂ² | Total Built: 261 mÂ²',
        'Systems: Gas water heater in all faucets/showers and automated garden irrigation system.',
        'Security: Alarm on all doors and 8-camera CCTV system with DVR (remote access via smartphone).',
        'Electric: Automated gates with intercom and remote control.',
        'Expansion: Terrace prepared for sewage, water, and extra tank connections for future suites.'
      ],
      facilities: ['3 Suites', '68 mÂ² Pool', 'Gourmet Area', 'Rooftop', 'CCTV Security', 'Automated Gates'],
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
      price: 'R$ 2,700,000.00',
      installments: 'Consult conditions'
    },
    {
      id: '04',
      slug: 'villa-prabhu', category: 'lancamento',
      title: 'LAUNCH',
      image: '/VILLA_PRABHU/PERSPECTIVAS-3D-VILLA-PRABHU-2.webp',
      badge: 'LAUNCH',
      propertyTitle: 'VILLA PRABHU â PARACURU-CE',
      location: 'Paracuru, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: 'Gated Community of Lots in Paracuru-CE with private lagoon, full leisure facilities and 100m from the beach. High standard and exclusivity in one of CearÃ¡\u0027s most beautiful beaches',
      summaryDescription: 'Villa Prabhu is a development planned by Bianchi Urbanismo, focused on offering quality of life and security in a privileged region.',
      about: [
        'Villa Prabhu is a development planned by Bianchi Urbanismo, focused on offering quality of life and security.',
        'Located in a privileged region with ample green area and water resources, the project stands out for its intelligent urban planning and integration with nature.',
        'Exclusive Lots: Spacious units with private areas ranging from 242 mÂ² to over 600 mÂ².',
        'Phase Planning: Project divided into phases, with Phase 1 already consolidated and units available in Phase 2.',
        'Quality Urbanism: Infrastructure designed for well-being, with streets like Av. Prabhu and Rua Azalea.',
      ],
      infra: [
        'Direct Financing: Easy payment in up to 120 monthly installments.',
        'Ready to Invest: Documentation and sales table updated for 2026.',
        'Strategic Location: Planned blocks to ensure privacy and easy access to common areas.',
        'Natural Setting: Development surrounded by water and preserved vegetation.',
      ],
      facilities: ['Urbanistic Project', '120x Installments', 'Green Areas', 'Ready to Build'],
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
      priceTag: 'Consult',
      price: 'On Request',
      installments: 'From 120 installments',
    },
    {
      id: '01',
      slug: 'villa-condudu-3', category: 'temporada',
      title: 'STAY',
      image: '/VillaCondutuPaginaInicial/Image_from_Image.png (29).png',
      badge: 'Stay',
      propertyTitle: 'HIGH-END HOUSE 3 SUITES',
      location: 'BEACHFRONT PREÃ',
      rating: 5,
      exclusiveText: 'BEACHFRONT PREÃ',
      summaryDescription: 'Ready high-end residences with contemporary architecture integrated into nature. Ideal for a second home and exclusive beachfront experiences.',
      about: [
        'Vila Conduru III â Pool, barbecue, veranda and premium 24h gated community.',
        'Your Private Beachfront Retreat in PreÃ¡: The ultimate rustic-luxury experience.',
        'Vila Conduru III is now your private spot for the best wind in the world and exclusive events. Located literally on the beachfront.',
        '1. Beachfront Location: Forget transfers or long walks. Here, the backyard is the beach.',
        '2. Resort-Style Experience: The exclusivity of a vila with the amenities of a boutique hotel.',
        '3. Breathable Architecture (Bioclimatic Design)',
        '4. Organic Lifestyle & Connectivity: The villa eliminates barriers between you and paradise.',
        '5. Terra Ventos Concierge Support: Your only concern will be sailing.',
      ],
      infra: [
        'Pool in the condominium',
        '3 large suites',
        'Barbecue area',
        'Beachfront',
        'Kite-point',
        'Patricia Mureta Project',
        'Parking',
        '24h Security/Portaria'
      ],
      facilities: ['3 Suites', 'Beachfront', 'Feet in the sand', 'Pool', 'Full kitchen', 'Air conditioning', 'Powder room', 'Parking', '24h Security'],
      gallery: {
        main: '/VillaCondutuPaginaInicial/Final 01 (2).png',
        sideTop: '/VillaCondutuPaginaInicial/FINAL 02 (1).png',
        sideBottom: '/VillaCondutuPaginaInicial/Final 02 (2).png',
        extra: [
          '/VillaCondutuPaginaInicial/FINAL 03 (1).png',
          '/VillaCondutuPaginaInicial/FINAL 08.png',
          '/VillaCondutuPaginaInicial/FINAL 09.png',
          '/VillaCondutuPaginaInicial/FINAL 12.png',
          '/VillaCondutuPaginaInicial/FINAL 13.png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
      priceTag: 'Daily',
      price: 'On Request',
      installments: 'check availability',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    },
    {
      id: '02',
      slug: 'terrenos-bitupita', category: 'venda',
      title: 'FOR SALE',
      image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
      badge: 'For Sale',
      propertyTitle: 'BEACHFRONT LAND IN BITUPITÃ',
      location: 'BitupitÃ¡, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '4,300 mÂ² | 10 Exclusive Land Projects',
      summaryDescription: 'Beachfront land in the latest planned village on the Costa dos Ventos Route. Strategic investment opportunity with the best appreciation drivers.',
      about: [
        'The Next Appreciation Frontier: Exclusivity, beachfront access, and the most strategic mÂ² on the West Coast.',
        'There are places the market has not yet discovered, but the wind has. BitupitÃ¡ is the last untouched refuge on the Costa dos Ventos Route.',
        'The New Foil Route: With constant winds for 6 to 8 months a year and perfect waters.',
        'Real Scarcity: A project of only 10 exclusive lots, guaranteeing low density and privacy absolute.',
        'Direct Beachfront Access: Properties with open sea frontage and direct beach access.',
        'Terra Ventos Legal Security: 100% reviewed documentation with individual registration.',
      ],
      infra: [
        'Prime and exclusive location',
        'Private Villa with 10 projects',
        'Feet in the sand',
        'Ideal for sailing/kite'
      ],
      facilities: ['Exclusive project', 'Beachfront', 'Close to amenities'],
      gallery: {
        main: '/bitupitaPaginaIndividual/DJI_20251207012123_0102_D.jpg',
        sideTop: '/bitupitaPaginaIndividual/DJI_20251019210638_0111_D.jpg',
        sideBottom: '/bitupitaPaginaIndividual/DJI_20251020010202_0198_D.jpg',
        extra: [
          '/bitupitaPaginaIndividual/DJI_20251019210524_0108_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251020005753_0185_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251207012338_0119_D.jpg',
          '/bitupitaPaginaIndividual/BITUparaiso.jpg'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
      priceTag: 'Starting at',
      price: 'R$ 120,000',
      installments: 'Check availability',
    },
    {
      id: '03',
      slug: 'vila-do-ingles', category: 'investimento',
      title: 'INVESTMENT',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'Investment',
      propertyTitle: 'VILA DO INGLÃS',
      location: 'PreÃ¡, CearÃ¡, Brazil',
      rating: 5,
      exclusiveText: '2,200 sq.ft | 2 Bathrooms | 10 Exclusive Projects',
      summaryDescription: 'Boutique developments for early-vision investors. Product featuring applied wind study, architectural customization, and highly scarce locations.',
      about: [
        'The Essence of Sustainable Luxury: A unique blend of modern sustainability and tranquility.',
        'Inspired by a New York refuge, this residence offers 2,200 sq.ft entirely powered by solar energy.',
        '1. Sustainable Design: Smart systems with rooftop solar panels.',
        '2. Spa-Style Comfort: 2 modern immersive bathrooms.',
        '3. Dynamic Transparency: Wide floor-to-ceiling glass walls.',
        '4. Panoramic Privacy: Private rooftop terrace.',
        '5. Exclusive Connection: The contrast between a prime location and isolated peace.',
      ],
      infra: ['Rooftop solar panel system', 'Floor-to-ceiling glass walls', 'Private rooftop terrace', '2 Modern bathrooms', 'Prime isolated location'],
      facilities: ['!Beachfront', 'Air conditioning', '!Washing machine', '!Internet', 'Water heater', 'Refrigerator', 'Sofa', 'Wardrobe'],
      gallery: {
        main: '/viladoinglesPaginaInicial/FINAL 09 (1).png',
        sideTop: '/viladoinglesPaginaInicial/FINAL 01 (3).png',
        sideBottom: '/viladoinglesPaginaInicial/Final 02 (2).png',
        extra: [
          '/viladoinglesPaginaInicial/FINAL 08 (1).png',
          '/viladoinglesPaginaInicial/Final 05 (1).png',
          '/viladoinglesPaginaInicial/Final 06 (1).png',
          '/viladoinglesPaginaInicial/Final 07 (1).png',
          '/viladoinglesPaginaInicial/FINAL 02 (3).png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=40.773565,-73.956555&z=15&output=embed',
      priceTag: 'Status',
      price: 'Coming Soon',
      installments: '',
    },
    {
      id: '05',
      slug: 'casa-matanzas', category: 'temporada',
      title: 'STAY',
      image: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
      badge: 'Stay',
      propertyTitle: 'Casa Matanzas with hot tub / mountain and sea view',
      location: 'Navidad, O\'Higgins, Chile',
      rating: 5,
      exclusiveText: 'Discover Matanzas Paradise ð Modern house comfortably equipped for 6 guests, spectacular panoramic sea and forest views.',
      summaryDescription: 'Discover Matanzas Paradise: Modern house comfortably equipped for 6 guests, spectacular panoramic sea and forest views. Equipped with a hot tub and Starlink Wi-Fi.',
      about: [
        'Discover Matanzas Paradise: Modern house comfortably equipped for 6 guests.',
        'Spectacular panoramic sea and forest views.',
        'Ideal for those seeking tranquility in one of Chile\'s most iconic kitesurfing and windsurfing destinations.',
        '1. Off-grid: solar energy, sustainable space in harmony with nature.',
        '2. Private parking on site.',
        '3. Prime Location: Just 7 min from Matanzas Beach and La Vega de Pupuya.',
        '4. Terrace with hot tub (private Jacuzzi).',
        '5. Quiet environment, close to restaurants, supermarkets, and sports clubs.'
      ],
      infra: [
        'Ocean view',
        'Valley view',
        'Full kitchen',
        'Wi-Fi (Starlink)',
        'Free parking',
        'Private hot tub',
        'Pets allowed',
        'External security cameras'
      ],
      facilities: ['Ocean view', 'Valley view', 'Full kitchen', 'Wi-Fi', 'Free parking', 'Private hot tub', 'Pets allowed', 'External security cameras'],
      gallery: {
        main: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11.jpeg',
        sideTop: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (1).jpeg',
        sideBottom: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (2).jpeg',
        extra: [
          '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
          '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif',
          '/Matanzas/4d4b9c44-ad67-43ad-8f6b-6497f7b6e7ea.avif',
          '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif',
          '/Matanzas/90d53b04-d0e5-4165-8ddc-2aac9dcfc2fb.avif',
          '/Matanzas/369ef9fe-3cde-4ff2-b972-97dc02848241.avif',
          '/Matanzas/6645f7b5-7850-4a44-8ff9-2f81fa7ef623.avif',
          '/Matanzas/cd0910d3-112f-4ef6-ac70-86906d62bd1c.avif',
          '/Matanzas/f65a0d94-74da-40f4-9cf3-c6a9262e1be6.avif'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
      priceTag: 'Daily',
      price: 'On Request',
      installments: 'Consult packages',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
    },
  ,
    {
      id: '11', slug: 'lote-109-taiba', category: 'venda',
      title: 'FOR SALE', badge: 'Opportunity',
      propertyTitle: 'LOT 109 — TAIBA',
      location: 'Taiba, Ceará, Brazil',
      exclusiveText: '560 m² | 14 x 40m | Deed | Walled | Ready to Build',
      summaryDescription: '560 m² lot strategically located between two already-built houses in Taiba, fully walled and ready to build.',
      about: ['Unique opportunity in Taiba: 560 m² lot (14 x 40 m) in a privileged location, strategically situated between two already-built houses.','Legal Security: Property with Public Deed, ensuring a solid transaction and full asset protection.','Fully walled with no need for landfill — a major differentiator in the region. 100% ready to build.','Taiba is one of the most valued destinations on the Ceará coast, known for its lagoons, constant winds ideal for kitesurfing, and expanding tourism infrastructure.','Priced well below market value — an unmissable opportunity.'],
      infra: ['Total Area: 560 m²','Dimensions: 14 x 40 meters','Public Deed','Fully Walled','Ready to Build (no landfill)'],
      facilities: ['560 m²','Deed','Walled','Ready to Build','Strategic Location'],
      priceTag: '', price: 'R$ 115,000.00', installments: 'Cash'
    },
    {
      id: '12', slug: 'lote-barramar-lagoa-taiba', category: 'investimento',
      title: 'INVESTMENT', badge: 'Investment',
      propertyTitle: 'BARRAMAR LAGOON LOT — TAIBA',
      location: 'Taiba, Ceará, Brazil',
      exclusiveText: '800 m² | 20 x 40m | ~300m from Kitesurf Lagoon',
      summaryDescription: '800 m² lot at Loteamento Barramar in Taiba, just 300 meters from the Kitesurf Lagoon.',
      about: ['Investment opportunity at Loteamento Barramar in Taiba, Ceará: 800 m² lot (20 x 40 m) in a high-appreciation tourist zone.','Privileged Location: Just ~300 meters from the famous Taiba Kitesurf Lagoon.','Taiba is internationally recognized as one of the best kitesurfing destinations in the world.','Loteamento Barramar offers spacious lots in a region that combines tranquility, nature, and essential services.','Ideal for building a vacation home, guesthouse, or investing with high appreciation potential.'],
      infra: ['Total Area: 800 m²','Dimensions: 20 x 40 meters','Distance to Lagoon: ~300 meters','Loteamento Barramar'],
      facilities: ['800 m²','Near Lagoon','Kitesurf Paradise','Tourist Zone'],
      priceTag: '', price: 'R$ 215,000.00', installments: 'Contact for terms'
    }],
  es: [
    {
      id: '10',
      slug: 'casa-alto-padrao-praia-barrinha', category: 'venda',
      title: 'VENTA',
      badge: 'Venta',
      propertyTitle: 'CASA DE ALTA GAMA EN PRAIA DA BARRINHA',
      location: 'Barrinha - AcaraÃº - CE',
      rating: 5,
      exclusiveText: '400 mÂ² | 4 Suites | 5 BaÃ±os | Piscina | A 400m de la Playa',
      summaryDescription: 'Casa de alta gama a 400 metros de Praia da Barrinha, con arquitectura costera sofisticada, piscina, espacio gourmet, cancha de beach tennis y jardÃ­n con palmeras.',
      about: [
        'QuÃ©date maravillado con esta casa simplemente increÃ­ble, donde el encanto rÃºstico se une a la comodidad y la sofisticaciÃ³n. Ubicada a solo 400 metros de la playa, es el lugar perfecto para quienes buscan tranquilidad, contacto con la naturaleza y momentos inolvidables.',
        'La propiedad cuenta con una arquitectura Ãºnica, con acabados en madera, cubierta de palma y ambientes amplios e integrados, creando una atmÃ³sfera acogedora y elegante.',
        'Ãrea de ocio completa con piscina, amplio espacio gourmet, perfecto para recibir amigos y familia.',
        'Terraza superior con vistas y ventilaciÃ³n privilegiadas. JardÃ­n con palmeras cocoteras y mucho verde.',
        'Cancha de arena para beach tennis/voley. Ambientes integrados y bien iluminados. Estilo costero sofisticado.'
      ],
      infra: [
        'Ãrea Total: 400 mÂ²',
        'Ãrea del Terreno: 3.706,54 mÂ²',
        'OperaciÃ³n: Venta | Finalidad: Residencial',
        'Estado: Nuevo | OcupaciÃ³n: Desocupado',
        'CaracterÃ­sticas: Muro, LavanderÃ­a, Patio, Terraza, Sala de estar, Cocina, BaÃ±o social'
      ],
      facilities: ['4 Suites', '5 BaÃ±os', '3 Garajes', 'Piscina', 'Espacio Gourmet', 'Cancha de Arena', 'Terraza', 'JardÃ­n con Palmeras'],
      priceTag: '',
      price: 'R$ 6.600.000,00',
      installments: 'Consulte condiciones',
    },
    {
      id: '09',
      slug: 'area-exclusiva-tatajuba-guriu-100000m', category: 'venda',
      title: 'VENTA',
      image: 'https://vumbnail.com/1186057204.jpg',
      badge: 'Oportunidad Ãnica',
      propertyTitle: 'ÃREA EXCLUSIVA FRENTE AL MAR â 100.000 mÂ²',
      location: 'Entre Tatajuba y GuriÃº, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '100.000 mÂ² | 200m Frente al Mar | MatrÃ­cula y Escritura PÃºblica',
      summaryDescription: 'Ãrea monumental de 10 hectÃ¡reas estratÃ©gicamente entre Tatajuba y GuriÃº, con 200 m de frente al mar y escritura pÃºblica.',
      about: [
        'Una oportunidad monumental en la costa de CearÃ¡: 10 hectÃ¡reas de Ã¡rea totalmente frente al mar ubicada estratÃ©gicamente entre los pueblos de Tatajuba y GuriÃº.',
        'Con 200 metros de frente al mar, esta propiedad es uno de los activos mÃ¡s raros e valiosos de la regiÃ³n, ideal para el desarrollo de resorts de lujo, hoteles con encanto o un refugio privado de alto nivel.',
        'Seguridad JurÃ­dica Absoluta: Propiedad con MatrÃ­cula y Escritura PÃºblica, garantizando una transacciÃ³n sÃ³lida y una protecciÃ³n patrimonial integral.',
        'Infraestructura y Acceso: Acceso facilitado por la parte trasera y proximidad estratÃ©gica con la red de energÃ­a elÃ©ctrica trifÃ¡sica (a solo 500 metros), reduciendo significativamente los costos.'
      ],
      infra: [
        'Ãrea Total: 100.000 mÂ² (10 HectÃ¡reas)',
        'Frente: 200 metros de frente al mar',
        'EnergÃ­a TrifÃ¡sica a 500m',
        'MatrÃ­cula y Escritura PÃºblica'
      ],
      facilities: ['200m Frente al Mar', '10 HectÃ¡reas', 'EnergÃ­a TrifÃ¡sica', 'Escritura PÃºblica'],
      price: 'R$ 15.000.000,00',
      installments: 'InversiÃ³n: R$ 150,00 por mÂ²',
      priceTag: '',
    },
    {
      id: '08',
      slug: 'terreno-exclusivo-tatajuba-1000m', category: 'venda',
      title: 'VENTA',
      image: '/TATAJUBA/Image_from_Image.png (4).png',
      badge: 'Exclusividad',
      propertyTitle: 'TERRENO EXCLUSIVO EN TATAJUBA â 1.000 mÂ²',
      location: 'Tatajuba, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '1.000 mÂ² | MatrÃ­cula Individual | Oportunidad Ãnica',
      summaryDescription: 'Oportunidad exclusiva en Tatajuba: Terreno de 1.000 mÂ² con matrÃ­cula individual, en el corazÃ³n del paraÃ­so del kitesurf.',
      about: [
        'Oportunidad rara en Tatajuba: Medio lote de 1.000 mÂ² ubicado en una de las zonas mÃ¡s codiciadas del paraÃ­so del kitesurf.',
        'Seguridad JurÃ­dica: Propiedad con matrÃ­cula individual y proceso de desmembramento finalizado, garantizando una transacciÃ³n segura y transparente.',
        'UbicaciÃ³n EstratÃ©gica: RegiÃ³n de alta valorizaciÃ³n, ideal para quienes buscan exclusividad y contacto directo con la naturaleza exuberante de Tatajuba.',
        'Listo para Invertir: Ãrea rectificada y lista para su proyecto soÃ±ado o para una sÃ³lida cartera de inversiones en la costa de CearÃ¡.'
      ],
      infra: [
        'Ãrea Total: 1.000 mÂ²',
        'MatrÃ­cula Individual',
        'UbicaciÃ³n Premium en Tatajuba',
        'Listo para Desmembramiento'
      ],
      facilities: ['1.000 mÂ²', 'MatrÃ­cula Lista', 'Kitesurf Paradise', 'Exclusividad'],
      price: 'R$ 800.000,00',
      installments: 'Consulte condiciones exclusivas',
      priceTag: '',
      documents: [
        {
          label: 'Tatajuba: El ParaÃ­so Escondido del Kitesurf',
          url: 'https://blog.terraventos.com/p/tatajuba-the-hidden-kitesurf-paradise',
          legend: 'Lea mÃ¡s sobre la ubicaciÃ³n y el potencial de valorizaciÃ³n de Tatajuba.'
        },
        {
          label: 'Ver Planta',
          url: '/TATAJUBA/3a85c744-9b82-45ca-9042-125872c4e7f1.jpeg',
          legend: 'Visualice el desmembramiento y las dimensiones exactas del Ã¡rea.'
        }
      ],
    },
    {
      id: '07',
      slug: 'terreno-exclusivo-prea-200m-mar', category: 'venda',
      title: 'VENTA',
      image: '/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg',
      badge: 'Oportunidad',
      propertyTitle: 'TERRENO EXCLUSIVO PREÃ â 200M DEL MAR',
      location: 'PreÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '250 mÂ² | 10m x 25m | A solo 200m de la Playa',
      summaryDescription: 'Excelente oportunidad en PreÃ¡: Terreno de 250mÂ² a solo 200 metros del mar, vecino a Botanik y CarnaÃºba Windhouse.',
      about: [
        'Excelente oportunidad de inversiÃ³n en uno de los destinos mÃ¡s valorados de la costa de CearÃ¡.',
        'Terreno de 250 mÂ² (10m x 25m) ubicado en una posiciÃ³n estratÃ©gica en PreÃ¡.',
        'Situado a solo 200 metros de la playa, vecino a los prestigiosos desarrollos Botanik y CarnaÃºba Windhouse.',
        'Ideal para quienes buscan construir la casa de sus sueÃ±os o investir en un mercado en pleno auge.'
      ],
      infra: [
        'Ãrea Total: 250 mÂ²',
        'Dimensiones: 10m x 25m',
        'Distancia a la Playa: 200m',
        'UbicaciÃ³n Premium'
      ],
      facilities: ['200m de la Playa', 'Vecino Botanik', 'Vecino CarnaÃºba', 'Exclusividad'],
      videoSources: [
        'https://player.vimeo.com/video/1185188271'
      ],
      priceTag: 'Desde',
      price: 'R$ 400.000,00',
      installments: 'Consulte condiciones de mercado',
    },
    {
      id: '06',
      slug: 'prea-house', category: 'venda',
      title: 'VENTA',
      image: '/Prea House/Image_from_Image.png (14).png',
      badge: 'Venta',
      propertyTitle: 'PREÃ HOUSE',
      location: 'PreÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '745 mÂ² Terreno | 261 mÂ² ConstrucciÃ³n | Piscina 68 mÂ²',
      summaryDescription: 'PreÃ¡ House: Propiedad de lujo con 745 mÂ² de Ã¡rea total, Ã¡rea gourmet y espectacular piscina en L. Infraestructura y acabados de primera para la mejor experiencia en CearÃ¡.',
      about: [
        'Propiedad de lujo que consta de dos dependencias separadas com la piscina situada en el medio.',
        'Casa Trasera: 2 suites (32.5 mÂ² cada una), muebles a medida, Ã¡rea de cocina/sala (32 mÂ²) com isla, lavanderÃ­a 10 mÂ² e terraza.',
        'Edificio Frontal: Ãrea Gourmet semiabierta (54 mÂ²), 1 suite (24 mÂ²), baÃ±o de visitas y garaje para ATV (8.5 mÂ²).',
        'Terraza en la Azotea: 96 mÂ² preparada estructuralmente para futura expansiÃ³n com fontanerÃ­a e infraestructura de gas.',
        'Piscina en L: 65.000 litros (10m x 4m) com Ã¡rea de playa, asientos integrados e ionizador automatizado vÃ­a smartphone.',
        'Acabados Premium: Ventanas y puertas en madera Timborana, estructura de MaÃ§aranduba e deck de Tatajuba.'
      ],
      infra: [
        'Ãrea del Terreno: 745 mÂ² | ConstruÃ­da: 261 mÂ²',
        'Sistemas: Calentador de agua a gas en todos los puntos e sistema de riego automÃ¡tico en el jardÃ­n.',
        'Seguridad: Alarma en todas las puertas y sistema CCTV com 8 cÃ¡maras (acceso remoto por smartphone).',
        'ElÃ©ctrica: Portones automÃ¡ticos com intercomunicador y control remoto.',
        'ExpansiÃ³n: Estructura de azotea preparada para futuras suites com todas as conexiones de agua y desagÃ¼e.'
      ],
      facilities: ['3 Suites', 'Piscina 68 mÂ²', 'Ãrea Gourmet', 'Rooftop', 'Seguridad CCTV', 'Portones AutomÃ¡ticos'],
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
      installments: 'Consulte condiciones'
    },
    {
      id: '04',
      slug: 'villa-prabhu', category: 'lancamento',
      title: 'LANZAMIENTO',
      image: '/VILLA_PRABHU/PERSPECTIVAS-3D-VILLA-PRABHU-2.webp',
      badge: 'LANZAMIENTO',
      propertyTitle: 'VILLA PRABHU â PARACURU-CE',
      location: 'Paracuru, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: 'Loteamiento Cerrado de Terrenos en Paracuru-CE com laguna privada, ocio completo y a 100m de la playa. Alto estÃ¡ndar y exclusividad en una de las playas mÃ¡s bellas de CearÃ¡',
      summaryDescription: 'Villa Prabhu es un emprendimiento planeado por Bianchi Urbanismo, enfocado en ofrecer calidad de vida y seguridad en una regiÃ³n privilegiada.',
      about: [
        'Villa Prabhu es un desarrollo planificado por Bianchi Urbanismo, enfocado en ofrecer calidad de vida y seguridad.',
        'Ubicado en una regiÃ³n privilegiada com amplia Ã¡rea verde y recursos hÃ­dricos, el proyecto destaca por su planificaciÃ³n urbana inteligente e integraciÃ³n com la naturaleza.',
        'Lotes Exclusivos: Unidades amplas com Ã¡reas privadas de 242 mÂ² a mÃ¡s de 600 mÂ².',
        'PlanificaciÃ³n de Etapas: Proyecto dividido en fases, com la Etapa 1 ya consolidada y unidades disponibles en la Etapa 2.',
        'Urbanismo de Calidad: Infraestructura pensada para el bienestar, com calles diseÃ±adas como Av. Prabhu e Rua Azalea.',
      ],
      infra: [
        'Financiamiento Directo: Pago fÃ¡cil en hasta 120 cuotas mensuales.',
        'Listo para Invertir: DocumentaciÃ³n y tabla de ventas actualizada para 2026.',
        'UbicaciÃ³n EstratÃ©gica: Cuadras planificadas para garantizar privacidad y fÃ¡cil acceso a las Ã¡reas comunes.',
        'Escenaro Natural: UrbanizaciÃ³n rodeada de agua y vegetaciÃ³n preservada.',
      ],
      facilities: ['Proyecto UrbanÃ­stico', 'Parcelamiento en 120x', 'Ãreas Verdes', 'Listo para Construir'],
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
      priceTag: 'Consultar',
      price: 'Bajo Consulta',
      installments: 'A partir de 120 cuotas',
    },
    {
      id: '01',
      slug: 'villa-condudu-3', category: 'temporada',
      title: 'ESTANCIA',
      image: '/VillaCondutuPaginaInicial/Image_from_Image.png (29).png',
      badge: 'Estancia',
      propertyTitle: 'CASA DE ALTO NIVEL 3 SUITES',
      location: 'FRENTE A LA PLAYA DE PREÃ',
      rating: 5,
      exclusiveText: 'FRENTE A LA PLAYA DE PREÃ',
      summaryDescription: 'Residencias de alta gama listas, com arquitectura contemporÃ¡nea integrada a la naturaleza. Ideales para segunda vivienda y experiencias exclusivas frente al mar.',
      about: [
        'Vila Conduru III â Piscina, barbacoa, terraza y comunidad cerrada de lujo las 24 horas.',
        'Tu Refugio Privado Frente al Mar en PreÃ¡: La experiencia definitiva de lujo rÃºstico.',
        'La Vila Conduru III es ahora tu palco privado para el mejor viento del mundo e eventos exclusivos.',
        '1. UbicaciÃ³n Frente al Mar: OlvÃ­date de traslados. AquÃ­, el jardÃ­n es la playa.',
        '2. Experiencia de Complejo TurÃ­stico: La exclusividad de una vila com las comodidades de un hotel boutique.',
        '3. Arquitectura Respirable (DiseÃ±o BioclimÃ¡tico)',
        '4. Estilo de Vida y Conectividad OrgÃ¡nica: La villa elimina las barreras entre tÃº y el paraÃ­so.',
        '5. Soporte Concierge Terra Ventos: Tu Ãºnica preocupaciÃ³n serÃ¡ navegar.',
      ],
      infra: [
        'Piscina en el condominio',
        '3 habitaciones amplias',
        'Parilla',
        'Frente al mar',
        'Kite-point',
        'Proyecto Patricia Mureta',
        'Estacionamiento',
        'Seguridad 24h'
      ],
      facilities: ['3 Suites', 'Frente al mar', 'Pies en la arena', 'Piscina', 'Cocina completa', 'Aire acondicionado', 'Aseo', 'Estacionamiento', 'Seguridad 24h'],
      gallery: {
        main: '/VillaCondutuPaginaInicial/Final 01 (2).png',
        sideTop: '/VillaCondutuPaginaInicial/FINAL 02 (1).png',
        sideBottom: '/VillaCondutuPaginaInicial/Final 02 (2).png',
        extra: [
          '/VillaCondutuPaginaInicial/FINAL 03 (1).png',
          '/VillaCondutuPaginaInicial/FINAL 08.png',
          '/VillaCondutuPaginaInicial/FINAL 09.png',
          '/VillaCondutuPaginaInicial/FINAL 12.png',
          '/VillaCondutuPaginaInicial/FINAL 13.png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=34.100222,-118.450709&z=15&output=embed',
      priceTag: 'Diario',
      price: 'Bajo Consulta',
      installments: 'consultar disponibilidade',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1613864657831968386?guests=1&adults=1&s=67&unique_share_id=17ad520f-3f88-4bca-a33f-731c6d077710',
    },
    {
      id: '02',
      slug: 'terrenos-bitupita', category: 'venda',
      title: 'VENTA',
      image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
      badge: 'Venta',
      propertyTitle: 'TERRENOS FRENTE AL MAR EN BITUPITÃ',
      location: 'BitupitÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '4.300 mÂ² | 10 Proyectos de Terrenos Exclusivos',
      summaryDescription: 'Terrenos frente al mar en el Ãºltimo pueblo planeado en la Ruta Costa dos Ventos. Oportunidad de inversiÃ³n estratÃ©gica com los mejores vectores de apreciaciÃ³n.',
      about: [
        'Exclusividad, frente al mar y el mÂ² mÃ¡s estratÃ©gico de la Costa Oeste.',
        'Hay lugares que el mercado aÃºn no ha descubierto, pero el viento sÃ­. BitupitÃ¡ es el Ãºltimo refugio intacto en la Ruta Costa dos Ventos.',
        'La Nueva Ruta del Foil: Com vientos constantes durante 6 a 8 meses al aÃ±o y aguas perfectas.',
        'Escasez Real: Un proyecto de solo 10 lotes exclusivos, garantizando baja densidad e privacidad absoluta.',
        'Acceso Directo Frente al Mar: Propiedades com frente al mar libre y acceso directo a la playa.',
        'Seguridad Legal Terra Ventos: DocumentaciÃ³n 100% revisada com matrÃ­cula individualizada.',
      ],
      infra: [
        'UbicaciÃ³n prime y exclusiva',
        'Villa privada com 10 proyectos',
        'Pies en la arena',
        'Ideal para la vela/kite'
      ],
      facilities: ['Proyecto exclusivo', 'Frente al mar', 'Cerca de servicios'],
      gallery: {
        main: '/bitupitaPaginaIndividual/DJI_20251207012123_0102_D.jpg',
        sideTop: '/bitupitaPaginaIndividual/DJI_20251019210638_0111_D.jpg',
        sideBottom: '/bitupitaPaginaIndividual/DJI_20251020010202_0198_D.jpg',
        extra: [
          '/bitupitaPaginaIndividual/DJI_20251019210524_0108_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251020005753_0185_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg',
          '/bitupitaPaginaIndividual/DJI_20251207012338_0119_D.jpg',
          '/bitupitaPaginaIndividual/BITUparaiso.jpg'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-2.88825,-41.268056&z=15&output=embed',
      priceTag: 'Desde',
      price: 'R$ 120 MIL',
      installments: 'Consulte disponibilidad',
    },
    {
      id: '03',
      slug: 'vila-do-ingles', category: 'investimento',
      title: 'INVERSIÃN',
      image: '/viladoinglesPaginaInicial/Final 04 (1).png',
      badge: 'InversiÃ³n',
      propertyTitle: 'VILA DO INGLÃS',
      location: 'PreÃ¡, CearÃ¡, Brasil',
      rating: 5,
      exclusiveText: '2.200 sq.ft | 2 BaÃ±os | 10 Proyectos Exclusivos',
      summaryDescription: 'Desarrollos boutique para inversores com visiÃ³n anticipada. Producto com estudio de vientos aplicado, personalizaciÃ³n arquitectÃ³nica y ubicaciones de alta escasez.',
      about: [
        'La Esencia del Lujo Sostenible: Una mezcla Ãºnica de sostenibilidad moderna y tranquilidad.',
        'Inspirada en un refugio de Nueva York, esta residencia ofrece 2.200 sq.ft completamente alimentada por energÃ­a solar.',
        '1. DiseÃ±o Sostenible: Sistemas inteligentes com paneles solares en el techo.',
        '2. Comodidad Estilo Spa: 2 baÃ±os modernos e inmersivos.',
        '3. Transparencia DinÃ¡mica: Amplias paredes de vidrio del suelo al techo.',
        '4. Privacidad PanorÃ¡mica: Terraza privada en la azotea.',
        '5. ConexiÃ³n Exclusiva: El contraste entre una ubicaciÃ³n premium y paz aislada.',
      ],
      infra: ['Sistema de paneles solares en el techo', 'Paredes de vidrio del suelo al techo', 'Terraza privada en la azotea', '2 BaÃ±os modernos', 'UbicaciÃ³n prime aislada'],
      facilities: ['!Frente al mar', 'Aire acondicionado', '!Lavadora', '!Internet', 'Calentador de agua', 'Refrigerador', 'SofÃ¡', 'Armario'],
      gallery: {
        main: '/viladoinglesPaginaInicial/FINAL 09 (1).png',
        sideTop: '/viladoinglesPaginaInicial/FINAL 01 (3).png',
        sideBottom: '/viladoinglesPaginaInicial/Final 02 (2).png',
        extra: [
          '/viladoinglesPaginaInicial/FINAL 08 (1).png',
          '/viladoinglesPaginaInicial/Final 05 (1).png',
          '/viladoinglesPaginaInicial/Final 06 (1).png',
          '/viladoinglesPaginaInicial/Final 07 (1).png',
          '/viladoinglesPaginaInicial/FINAL 02 (3).png'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-3.4146184,-39.046461&z=15&output=embed',
      priceTag: 'Status',
      price: 'PrÃ³ximamente',
      installments: '',
    },
    {
      id: '05',
      slug: 'casa-matanzas', category: 'temporada',
      title: 'ESTANCIA',
      image: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
      badge: 'Estancia',
      propertyTitle: 'Casa Matanzas com tinaja / vista al mar y bosque',
      location: 'Navidad, O\'Higgins, Chile',
      rating: 5,
      exclusiveText: 'Descubre Matanzas Paradise ð Casa moderna cÃ³modamente equipada para 6 huÃ©spedes, espectaculares vistas panorÃ¡micas al mar y al bosque.',
      summaryDescription: 'Descubre Matanzas Paradise: Casa moderna cÃ³modamente equipada para 6 huÃ©spedes, espectaculares vistas panorÃ¡micas al mar y al bosque. Equipada com tinaja y Wi-Fi Starlink.',
      about: [
        'Descubre Matanzas Paradise: Casa moderna cÃ³modamente equipada para 6 huÃ©spedes.',
        'Espectaculares vistas panorÃ¡micas al mar y al bosque.',
        'Ideal para quienes buscan tranquilidad en uno de los destinos de kitesurf y windsurf mÃ¡s emblemÃ¡ticos de Chile.',
        '1. Fuera de la red: energÃ­a solar, espacio sostenible en armonÃ­a com la naturaleza.',
        '2. Estacionamiento privado en el lugar.',
        '3. UbicaciÃ³n Privilegiada: A solo 7 min de la playa de Matanzas y La Vega de Pupuya.',
        '4. Terraza con tinaja (Jacuzzi privado).',
        '5. Ambiente tranquilo, cerca de restaurantes, supermercados y clubes deportivos.'
      ],
      infra: [
        'Vista al mar',
        'Vista al valle',
        'Cocina completa',
        'Wi-Fi (Starlink)',
        'Estacionamiento gratuito',
        'Tinaja privada',
        'Se permiten mascotas',
        'CÃ¡maras de seguridad exteriores'
      ],
      facilities: ['Vista al mar', 'Vista al valle', 'Cocina completa', 'Wi-Fi', 'Estacionamiento gratuito', 'Tinaja privada', 'Se permiten mascotas', 'CÃ¡maras de seguridad exteriores'],
      gallery: {
        main: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11.jpeg',
        sideTop: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (1).jpeg',
        sideBottom: '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (2).jpeg',
        extra: [
          '/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg',
          '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif',
          '/Matanzas/4d4b9c44-ad67-43ad-8f6b-6497f7b6e7ea.avif',
          '/Matanzas/59c1aa44-cc72-45be-a883-7724e0f27f11.avif',
          '/Matanzas/90d53b04-d0e5-4165-8ddc-2aac9dcfc2fb.avif',
          '/Matanzas/369ef9fe-3cde-4ff2-b972-97dc02848241.avif',
          '/Matanzas/6645f7b5-7850-4a44-8ff9-2f81fa7ef623.avif',
          '/Matanzas/cd0910d3-112f-4ef6-ac70-86906d62bd1c.avif',
          '/Matanzas/f65a0d94-74da-40f4-9cf3-c6a9262e1be6.avif'
        ]
      },
      mapImage: '/mapa.avif',
      mapUrl: 'https://maps.google.com/maps?q=-33.95,-71.86&z=15&output=embed',
      priceTag: 'Diario',
      price: 'Bajo Consulta',
      installments: 'Consultar paquetes',
      reservationUrl: 'https://www.airbnb.com.br/rooms/1495622230762379698?unique_share_id=e222b343-72c6-400c-bec4-afd4286d8719&viralityEntryPoint=1&s=76&source_impression_id=p3_1775581234_P3rzyIdyGvGibmTw'
    },
  ,
    {
      id: '11', slug: 'lote-109-taiba', category: 'venda',
      title: 'VENTA', badge: 'Oportunidad',
      propertyTitle: 'LOTE 109 — TAIBA',
      location: 'Taiba, Ceará, Brasil',
      exclusiveText: '560 m² | 14 x 40m | Escritura | Amurallado | Listo para Construir',
      summaryDescription: 'Terreno de 560 m² en ubicación estratégica entre dos casas ya construidas en Taiba, totalmente amurallado y listo para construir.',
      about: ['Oportunidad única en Taiba: Lote de 560 m² (14 x 40 m) en ubicación privilegiada, estratégicamente situado entre dos casas ya construidas.','Seguridad Jurídica: Inmueble con Escritura, garantizando una transacción sólida y protección patrimonial integral.','Totalmente amurallado y sin necesidad de relleno — un gran diferencial en la región. Terreno 100% listo para construir.','Taiba es uno de los destinos más valorizados del litoral cearense, con vientos constantes ideales para kitesurf y alta valorización inmobiliaria.','Precio muy por debajo del mercado — oportunidad imperdible.'],
      infra: ['Área Total: 560 m²','Dimensiones: 14 x 40 metros','Escritura Pública','Totalmente Amurallado','Listo para Construir (sin relleno)'],
      facilities: ['560 m²','Escritura','Amurallado','Listo para Construir','Ubicación Estratégica'],
      priceTag: '', price: 'R$ 115.000,00', installments: 'Al contado'
    },
    {
      id: '12', slug: 'lote-barramar-lagoa-taiba', category: 'investimento',
      title: 'INVERSIÓN', badge: 'Inversión',
      propertyTitle: 'LOTE BARRAMAR LAGUNA — TAIBA',
      location: 'Taiba, Ceará, Brasil',
      exclusiveText: '800 m² | 20 x 40m | ~300m de la Laguna del Kitesurf',
      summaryDescription: 'Terreno de 800 m² en el Loteamiento Barramar en Taiba, a solo 300 metros de la Laguna del Kitesurf.',
      about: ['Oportunidad de inversión en el Loteamiento Barramar, en Taiba, Ceará: terreno de 800 m² (20 x 40 m) en zona turística de alta valorización.','Ubicación Privilegiada: A solo ~300 metros de la famosa Laguna del Kitesurf de Taiba.','Taiba es reconocida internacionalmente como uno de los mejores destinos de kitesurf del mundo.','El Loteamiento Barramar ofrece terrenos amplios en una región que combina tranquilidad, naturaleza y servicios esenciales.','Ideal para construir casa vacacional, posada o invertir con alto potencial de valorización.'],
      infra: ['Área Total: 800 m²','Dimensiones: 20 x 40 metros','Distancia a la Laguna: ~300 metros','Loteamiento Barramar'],
      facilities: ['800 m²','Cerca de Laguna','Kitesurf Paraíso','Zona Turística'],
      priceTag: '', price: 'R$ 215.000,00', installments: 'Consulte condiciones'
    }],
};


export function getOportunidadesData(lang: string): OportunidadeDetalhe[] {
  const baseLang = lang.split('-')[0];
  const translatedList = oportunidadesDataByLang[baseLang] ?? oportunidadesDataByLang['pt'];

  // Itera sempre sobre a fonte mestre (oportunidadesData) para garantir que
  // toda nova propriedade apareÃ§a automaticamente em todas as seÃ§Ãµes.
  // Para cada item do master, busca a traduÃ§Ã£o correspondente e mescla.
  // Se nÃ£o houver traduÃ§Ã£o, cai no item original em portuguÃªs.
  return oportunidadesData.map(master => {
    const translated = translatedList.find(t => t.id === master.id);
    if (translated) {
      return {
        ...master,
        ...translated,
        // Garante que galeria e videoSources sempre venham do master (fonte Ãºnica de imagens)
        gallery: master.gallery,
        videoSources: master.videoSources,
        documents: translated.documents || master.documents,
        mapImage: master.mapImage,
        mapUrl: master.mapUrl,
        reservationUrl: master.reservationUrl,
      } as OportunidadeDetalhe;
    }
    // Fallback: usa o prÃ³prio master (sem traduÃ§Ã£o)
    return master;
  });
}
