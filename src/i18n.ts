import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          common: {
            share: "Compartilhar",
            linkCopied: "Link copiado!",
            shareText: "Confira esta propriedade na Terra Ventos: "
          },
          seo: {
            intro: "A Terra Ventos é uma curadoria exclusiva de imóveis de alto padrão no litoral do Ceará. Atuamos nas regiões de Preá, Tatajuba e Bitupitá, oferecendo oportunidades únicas de investimento em terrenos, casas de praia e projetos de ecoturismo de luxo. Com vento constante, infraestrutura em crescimento e valorização comprovada, o Ceará é hoje um dos destinos mais promissores para investidores do Brasil e do exterior."
          },
          nav: {
            inicio: "Início",
            oportunidades: "Oportunidades",
            projetos: "Projetos",
            estudo: "Estudo dos Ventos",
            regioes: "Regiões",
            contato: "Entrar em contato"
          },
          hero: {
            cta: "Conhecer Projetos",
            tags: [
              "Lançamento Terra Ventos",
              "Oportunidade Pé na Areia",
              "Lugar de Evento",
              "Investimentos no litoral do Ceará"
            ],
            titles: [
              "ESTUDO<br />DOS VENTOS",
              "INVISTA EM<br />BITUPITÁ, CEARÁ",
              "DESCUBRA<br />A CASA TERRA<br />VENTOS NO PREÁ",
              "INVISTA COM O<br />VENTO A FAVOR."
            ],
            subtitles: [
              "Turismo Esportivo & Investimento<br />Imobiliário no litoral oeste do Ceará",
              "Projetos terreno exclusivos <b>beira-mar</b><br />com valorização estimada em 20% ao ano.",
              "Viva momentos exclusivos à beira-mar no maior spot<br />de kitesurf e wingfoil do Ceará.",
              "Terrenos, casas e projetos exclusivos com segurança<br />jurídica, valorização real e assessoria completa."
            ],
            card: {
              experience: "10+ anos de experiência\nimobiliária no Ceará"
            },
            saberMais: "Quero saber mais"
          },
          oportunidades: {
            badge: "Oportunidades exclusivas",
            title1: "ENCONTRE SEU PRÓXIMO",
            title2: "IMÓVEL NO LITORAL DO CEARÁ",
            title: "VENDA, INVESTIMENTOS E LUGARES DE EVENTOS NO CEARA",
            viewAllPhotos: "Ver todas as fotos",
            noResults: "Nenhuma propriedade encontrada."
          },
          categorias: {
            all: "Todas",
            venda: "Venda",
            lancamento: "Lançamento",
            temporada: "Temporada",
            investimento: "Investimento"
          },
          projetos: {
            badge: "Portfólio de Propriedades",
            title: "EXPLORE NOSSOS<br />PROJETOS EXCLUSIVOS"
          },
          condudu: {
            badge: "Exclusividade",
            title: "CASA ALTO PADRÃO 3 SUÍTES<br />FRENTE À PRAIA DO PREÁ",
            subtitle: "Vila Conduru III — Piscina, churrasqueira, varanda e condomínio de luxo 24 horas.",
            tags: ["Piscina", "3 quartos", "Beira-mar", "Projeto Patricia Mureta"],
            priceNote: "consultar disponibilidade",
            cta: "RESERVAR"
          },
          cidades: {
            badge: "Litoral Cearense",
            title: "CIDADES ONDE<br />ESTAMOS PRESENTES",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Infraestrutura completa e proximidade estratégica com Fortaleza. Um mercado maduro, com liquidez imediata e fluxo constante de turistas internacionais o ano todo." },
              "2": { title: "Tatajuba, Ceará", desc: "Conexão profunda com a natureza e ventos lendários. Um destino exclusivo que atrai o público high-end em busca de privacidade e experiências autênticas à beira-mar." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "O paraíso das águas paradas e o destino técnico por excelência. Combinação única de ventos constantes com uma lagoa extensa, ideal for performance e hospitalidade." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "Um dos metros quadrados mais desejados do Ceará. Vila charmosa com gastronomia de alto padrão e uma baía segura, perfeita para o turismo de charme e esportes de vento." },
              "5": { title: "Preá, Ceará", desc: "Epicentro do kitesurf global com infraestrutura consolidada e demanda internacional constante." },
              "6": { title: "Flecheiras, Ceará", desc: "Infraestrutura de luxo consolidada e demanda internacional recorde. Onde o estilo de vida cosmopolita encontra a melhor janela de vento do planeta." },
              "7": { title: "Bitupitá, Ceará", desc: "Pé na areia intocado e o segredo mais bem guardado da Rota das Emoções. Oportunidade early stage com alto potencial de valorização e águas perfeitas para o kite e wingfoil." }
            }
          },
          estudo: {
            badge: "Estudo dos Ventos",
            title: "ESTUDO<br />DOS VENTOS",
            desc: "Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <strong>Mergulhe em dados e análise potencial do Litoral Cearense.</strong>",
            stats: {
              "1": "Cidades analisadas", "2": "de ventos constante", "3": "de valorização ao ano", "4": "técnico e ambiental"
            },
            cta: "Ver o estudo completo",
            videoInfo: ["Fundador e CEO Terra Ventos", "Estudo dos Ventos - clique para assistir", "Reproduzir vídeo"],
            watchFull: "Assista o vídeo completo"
          },
          mapa: {
            title: "ESTUDO DOS VENTOS PELO LITORAL DE CEARA",
            activateInstructions: "Clique para interagir com o mapa",
            deactivate: "Travar mapa para scroll"
          },
          assessoria: {
            badge: "Diferenciais da Terra Ventos",
            title: "ASSESSORIA COMPLETA<br/>DO INICIO AO FIM",
            items: {
              "1": { title: "Curadoria Early Stage", text: "Identificação de ativos com alto potencial de valorização antes da exposição ao mercado aberto." },
              "2": { title: "Networking", text: "Acesso a uma rede seleta de investidores e atletas dos esportes de vento." },
              "3": { title: "Atendimento Concierge", text: "Assessoria personalizada em todas as etapas, garantindo uma jornada de investimento fluida e sofisticada." },
              "4": { title: "Valorização Real", text: "Histórico comprovado de rentabilidade nas regiões com maior crescimento do litoral cearense." },
              "5": { title: "Segurança Jurídica", text: "Due diligence rigoroso e auditoria fundiária para garantir a proteção integral do patrimônio." },
              "6": { title: "Suporte Global Multilíngue", text: "Atendimento especializado em Português, Inglês e Espanhol." }
            }
          },
          depoimentos: {
            badge: "Depoimentos",
            title: "VOZES DA<br />COMUNIDADE",
            subtitle: "Mais do que investidores, somos um ecossistema de visionários, atletas e entusiastas do litoral que escolheram o Ceará como o seu próximo marco de vida e patrimônio.",
            roles: ["Investidor Internacional", "Empresario e Kitesurfista", "Proprietaria de Casa de Veraneio", "Advogada e Investidora", "Designer e Kitesurfista", "CTO de Tech e Kitesurfista"],
            quotes: [
              "\"O que me atraiu na Terra Ventos foi a capacidade de antecipação. Eles não me ofereceram apenas um terreno, mas um posicionamento estratégico em Bitupitá antes da valorização explodir. A segurança jurídica e o suporte bilíngue foram fundamentais para eu investir com tranquilidade, mesmo morando fora.\"",
              "\"Como praticante de wingfoil, eu buscava um lugar onde o vento fosse constante e a comunidade vibrante. Na Terra Ventos, encontrei uma curadoria que entendeu o que um velejador precisa. O Estudo dos Ventos aplicado ao meu lote garantiu que minha casa fosse integrada à natureza e perfeita para o esporte.\"",
              "\"A assessoria concierge da Terra Ventos é o que realmente diferencia a marca. Eles cuidaram de tudo, do due diligence jurídico à conexão com os melhores arquitetos locais. Sentir que você faz parte de uma comunidade que preserva a essência rústica do Ceará, mas com um padrão internacional, é impagável.\"",
              "\"Como advogada, a minha prioridade sempre foi a segurança documental. No litoral, a informalidade assusta, mas a Terra Ventos entregou um due diligence impecável. Investi em uma propriedade na Praia dos Monteiros com a certeza de que estava a construir um patrimônio sólido e regularizado para a minha família. É uma tranquilidade que não tem preço.\"",
              "\"O que me conquistou foi o Estudo dos Ventos. Como designer, valorizo projetos que respeitam o meio ambiente. Ver como a Terra Ventos utiliza a ciência do clima para orientar a implantação das casas, garantindo frescor natural e luz perfeita, é fascinante. Não é apenas um terreno, é a base para uma arquitetura de alto padrão que conversa com a natureza.\"",
              "\"Sou movido por dados, e a Terra Ventos fala minha língua. O Estudo dos Ventos não é marketing — é ciência aplicada ao investimento imobiliário, com análise de vetores climáticos, escassez locacional e potencial de valorização. Como CTO, reconheço quando um tim domina o que faz. Investi no Ceará porque os números eram irrefutáveis.\""
            ]
          },
          form: {
            badge: "Receba as novidades",
            title: "VENTO SOPRA PRIMEIRO PARA<br />QUEM ESTA CONECTADO.",
            subtitle: "Junte-se à nossa lista prioritária e receba curadoria de terrenos early stage, dados de valorização do litoral cearense e oportunidades que não chegam ao mercado aberto.",
            fields: { first: "Nome", last: "Sobrenome", email: "E-mail", phone: "Telefone" },
            message: "Como podemos ajudar?",
            submit: "Enviar Mensagem",
            success: "Mensagem recebida com sucesso! Em breve, um de nossos especialistas entrará em contato.",
            errors: {
              first: "Por favor, informe seu nome.",
              last: "Por favor, informe seu sobrenome.",
              email: "Por favor, informe um e-mail válido.",
              phone: "Por favor, informe seu telefone.",
              message: "Por favor, escreva sua mensagem."
            }
          },
          footer: { rights: "© Copyright 2026. Todos os direitos reservados." },
          blog: {
            badge: "Insights & Mercado",
            title: "ACOMPANHE NOSSA<br />CURADORIA NO BLOG",
            readMore: "Leia mais",
            viewAll: "Ver todos os artigos"
          },
          pagina: {
            back: "Voltar",
            about: "Sobre a propriedade",
            infra: "Infra-estrutura",
            facilities: "Facilidades",
            contact: "Fale com um de nossos consultores",
            cta: "Entrar em contato",
            location: "Localização",
            videoGallery: "Galeria de Vídeos",
            downloadTitle: "Baixar Material",
            downloadDesc: "Acesse os arquivos oficiais do empreendimento.",
            viewPdf: "Visualizar PDF",
            reservationNotice: "Faça a cotação direto na plataforma de reserva",
            bookAirbnb: "Link para o Airbnb",
            whatsapp: "Fale conosco"
          }
        }
      },
      en: {
        translation: {
          common: {
            share: "Share",
            linkCopied: "Link copied!",
            shareText: "Check out this property on Terra Ventos: "
          },
          seo: {
            intro: "Terra Ventos is an exclusive curation of high-end properties on the coast of Ceará. We operate in the regions of Preá, Tatajuba, and Bitupitá, offering unique investment opportunities in land, beach houses, and luxury ecotourism projects. With constant wind, growing infrastructure, and proven appreciation, Ceará is today one of the most promising destinations for investors from Brazil and abroad."
          },
          nav: { inicio: "Home", oportunidades: "Opportunities", projetos: "Projects", estudo: "Wind Study", regioes: "Regions", contato: "Contact Us" },
          hero: {
            cta: "View Projects",
            tags: ["Terra Ventos Launch", "Beachfront Opportunity", "Event Venue", "Investments on the coast of Ceará"],
            titles: ["WIND<br />STUDY", "INVEST IN<br />BITUPITÁ, CEARÁ", "DISCOVER<br />CASA TERRA<br />VENTOS IN PREÁ", "INVEST WITH THE<br />WIND IN YOUR FAVOR."],
            subtitles: ["Sports Tourism & Real Estate<br />Investment on Ceará's west coast", "Exclusive <b>beachfront</b> land projects<br />with estimated 20% per year appreciation.", "Experience beachfront excellence at the biggest<br />kitesurf & wingfoil spot in Ceará.", "Land, houses, and exclusive projects with legal<br />security, real appreciation, and full advisory."],
            card: { experience: "10+ years of real estate\nexperience in Ceará" },
            saberMais: "Learn more"
          },
          oportunidades: {
            badge: "Exclusive Opportunities",
            title1: "FIND YOUR NEXT",
            title2: "PROPERTY ON CEARÁ'S COAST",
            title: "FOR SALE, INVESTMENTS AND EVENT VENUES IN CEARÁ",
            viewAllPhotos: "View all photos",
            noResults: "No properties found."
          },
          categorias: {
            all: "All",
            venda: "For Sale",
            lancamento: "Launch",
            temporada: "Stay",
            investimento: "Investment"
          },
          projetos: {
            badge: "Property Portfolio",
            title: "EXPLORE OUR<br />EXCLUSIVE PROJECTS"
          },
          condudu: {
            badge: "Exclusive",
            title: "HIGH-END HOUSE 3 SUITES<br />BEACHFRONT IN PREÁ",
            subtitle: "Vila Conduru III — Pool, BBQ area, balcony, and luxury 24-hour gated community.",
            tags: ["Pool", "3 Bedrooms", "Beachfront", "Patricia Mureta Project"],
            priceNote: "consult availability",
            cta: "BOOK NOW"
          },
          cidades: {
            badge: "Ceará Coast",
            title: "CITIES WHERE<br />WE ARE PRESENT",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Complete infrastructure and strategic proximity to Fortaleza. A mature market, with immediate liquidity and a constant flow of international tourists all year round." },
              "2": { title: "Tatajuba, Ceará", desc: "Deep connection with nature and legendary winds. An exclusive destination that attracts a high-end public looking for privacy and authentic beachfront experiences." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "The paradise of flat waters and the technical destination par excellence. A unique combination of constant winds with an extensive lagoon, ideal for performance and hospitality." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "One of the most desired square meters in Ceará. Charming village with high-end gastronomy and a safe bay, perfect for charm tourism and wind sports." },
              "5": { title: "Preá, Ceará", desc: "Epicenter of global kitesurfing with consolidated infrastructure and constant international demand." },
              "6": { title: "Flecheiras, Ceará", desc: "Consolidated luxury infrastructure and record international demand. Where the cosmopolitan lifestyle meets the best wind window on the planet." },
              "7": { title: "Bitupitá, Ceará", desc: "Untouched beachfront and the best-kept secret of the Route of Emotions. Early stage opportunity with high appreciation potential and perfect waters for kite and wingfoil." }
            }
          },
          estudo: {
            badge: "Wind Study",
            title: "WIND<br />STUDY",
            desc: "Terra Ventos presents: Which locations grow most in value, where is least explored and with the greatest potential. <strong>Dive into data and potential analysis of the Ceará Coast.</strong>",
            stats: { "1": "Analyzed cities", "2": "months of constant wind", "3": "yearly appreciation", "4": "technical environmental areas" },
            cta: "View full study",
            videoInfo: ["Founder and CEO Terra Ventos", "Wind Study - click to watch", "Play video"],
            watchFull: "Watch full video"
          },
          mapa: {
            title: "WIND STUDY BY THE CEARA COAST",
            activateInstructions: "Click to interact with the map",
            deactivate: "Lock map for scroll"
          },
          assessoria: {
            badge: "Terra Ventos Differentials",
            title: "COMPLETE ADVISORY<br/>FROM START TO FINISH",
            items: {
              "1": { title: "Early Stage Curation", text: "Identification of assets with high appreciation potential before exposure to the open market." },
              "2": { title: "Networking", text: "Access to a select network of investors and wind sports athletes." },
              "3": { title: "Concierge Service", text: "Personalized advice at all stages, ensuring a smooth and sophisticated investment journey." },
              "4": { title: "Real Appreciation", text: "Proven track record of profitability in the regions with the highest growth on the Ceará coast." },
              "5": { title: "Legal Security", text: "Rigorous due diligence and land auditing to ensure full protection of assets." },
              "6": { title: "Global Multilingual Support", text: "Specialized service in Portuguese, English, and Spanish." }
            }
          },
          depoimentos: {
            badge: "Testimonials",
            title: "VOICES OF THE<br />COMMUNITY",
            subtitle: "More than investors, we are an ecosystem of visionaries, athletes, and coastal enthusiasts who have chosen Ceará as their next life and wealth milestone.",
            roles: ["International Investor", "Businessman and Kitesurfer", "Vacation Home Owner", "Lawyer and Investor", "Designer and Kitesurfer", "Tech CTO and Kitesurfer"],
            quotes: [
              "\"What attracted me to Terra Ventos was the anticipation capability. They didn't just offer me land, but a strategic positioning in Bitupitá before the appreciation exploded. Legal security and bilingual support were fundamental for me to invest with peace of mind, even living abroad.\"",
              "\"As a wingfoil practitioner, I was looking for a place where the wind was constant and the community vibrant. At Terra Ventos, I found a curation that understood what a sailor needs. The Wind Study applied to my lot ensured my house was integrated with nature and perfect for the sport.\"",
              "\" Terra Ventos' concierge advisory is what really sets the brand apart. They took care of everything, from legal due diligence to connecting with the best local architects. Feeling part of a community that preserves the rustic essence of Ceará, but with an international standard, is priceless.\"",
              "\"As a lawyer, my priority has always been document security. On the coast, informality is frightening, but Terra Ventos delivered an impeccable due diligence. I invested in a property in Praia dos Monteiros with the certainty that I was building a solid and regularized patrimony for my family. It's an invaluable peace of mind.\"",
              "\"What conquered me was the Wind Study. As a designer, I value projects that respect the environment. Seeing how Terra Ventos uses climate science to guide the implementation of houses, ensuring natural freshness and perfect light, is fascinating. It's not just a plot, it's the basis for a high-end architecture that converses with nature.\"",
              "\"I'm driven by data, and Terra Ventos speaks my language. The Wind Study isn't marketing — it's applied science for real estate investment, with analysis of climate vectors, locational scarcity, and appreciation potential. As a CTO, I know when a team truly masters what they do. I invested in Ceará because the numbers were undeniable.\""
            ]
          },
          form: {
            badge: "Receive News",
            title: "THE WIND BLOWS FIRST FOR<br />THOSE WHO ARE CONNECTED.",
            subtitle: "Join our priority list and receive early-stage land curation, appreciation data from the Ceará coast, and opportunities that don't reach the open market.",
            fields: { first: "First Name", last: "Last Name", email: "Email", phone: "Phone" },
            message: "How can we help you?",
            submit: "Send Message",
            success: "Message received successfully! One of our experts will contact you shortly.",
            errors: {
              first: "Please enter your first name.",
              last: "Please enter your last name.",
              email: "Please enter a valid email address.",
              phone: "Please enter your phone number.",
              message: "Please write your message."
            }
          },
          footer: { rights: "© Copyright 2026. All Rights Reserved." },
          blog: {
            badge: "Insights & Market",
            title: "FOLLOW OUR<br />CURATION ON THE BLOG",
            readMore: "Read more",
            viewAll: "View all articles"
          },
          pagina: {
            back: "Back",
            about: "About the property",
            infra: "Infrastructure",
            facilities: "Facilities",
            contact: "Talk to one of our consultants",
            cta: "Contact Us",
            location: "Location",
            videoGallery: "Video Gallery",
            downloadTitle: "Download Material",
            downloadDesc: "Access the official project files.",
            viewPdf: "View PDF",
            reservationNotice: "Make the quote directly on the booking platform",
            bookAirbnb: "Link to Airbnb",
            whatsapp: "Chat with us"
          }
        }
      },
      es: {
        translation: {
          common: {
            share: "Compartir",
            linkCopied: "¡Enlace copiado!",
            shareText: "Mira esta propiedad en Terra Ventos: "
          },
          seo: {
            intro: "Terra Ventos es una curaduría exclusiva de propiedades de alto nivel en la costa de Ceará. Operamos en las regiones de Preá, Tatajuba y Bitupitá, ofreciendo oportunidades únicas de inversión en terrenos, casas de playa y proyectos de ecoturismo de lujo. Con viento constante, infraestructura en crecimiento y valorización comprobada, Ceará es hoy uno de los destinos más prometedores para inversores de Brasil y del exterior."
          },
          nav: { inicio: "Inicio", oportunidades: "Oportunidades", projetos: "Proyectos", estudo: "Estudio de los Vientos", regioes: "Regiones", contato: "Contáctenos" },
          hero: {
            cta: "Ver Proyectos",
            tags: ["Lanzamiento Terra Ventos", "Oportunidad Frente al Mar", "Lugar de Eventos", "Inversiones en la costa de Ceará"],
            titles: [
              "ESTUDIO DE<br />LOS VIENTOS",
              "INVIERTA EN<br />BITUPITÁ, CEARÁ",
              "DESCUBRA<br />LA CASA TERRA<br />VENTOS EN PREÁ",
              "INVIERTA CON EL<br />VIENTO A FAVOR."
            ],
            subtitles: [
              "Turismo Deportivo e Inversión<br />Inmobiliaria en la costa oeste de Ceará",
              "Proyectos exclusivos de terrenos <b>frente al mar</b><br />con apreciación estimada al 20% anual.",
              "Viva momentos exclusivos en el mayor punto de<br />kitesurf y wingfoil de Ceará.",
              "Terrenos, casas y proyectos exclusivos con seguridad<br />jurídica, apreciación real y asesoría completa."
            ],
            card: { experience: "10+ años de experiencia\nen Ceará" },
            saberMais: "Quiero saber más"
          },
          oportunidades: {
            badge: "Oportunidades exclusivas",
            title1: "ENCUENTRA TU PRÓXIMA",
            title2: "PROPIEDAD EN LA COSTA DE CEARÁ",
            title: "VENTA, INVERSIONES Y LUGARES DE EVENTOS IN EL LITORAL DE CEARA",
            viewAllPhotos: "Ver todas las fotos",
            noResults: "No se encontraron propiedades."
          },
          categorias: {
            all: "Todas",
            venda: "Venta",
            lancamento: "Lanzamiento",
            temporada: "Estancia",
            investimento: "Inversión"
          },
          projetos: {
            badge: "Portafolio de Propiedades",
            title: "EXPLORA NUESTROS<br />PROYECTOS EXCLUSIVOS"
          },
          condudu: {
            badge: "Exclusivo",
            title: "CASA DE ALTO ESTÁNDAR 3 SUITES<br />FRENTE A LA PLAYA DE PREÁ",
            subtitle: "Vila Conduru III — Piscina, parrilla, balcón y condominio de lujo 24 horas.",
            tags: ["Piscina", "3 Habitaciones", "Frente al mar", "Proyecto Patricia Mureta"],
            priceNote: "consultar disponibilidade",
            cta: "RESERVAR"
          },
          cidades: {
            badge: "Costa Cearense",
            title: "CIUDADES DONDE<br />ESTAMOS PRESENTES",
            cards: {
              "1": { title: "Cumbuco, Ceará", desc: "Infraestructura completa e proximidad estratégica con Fortaleza. Un mercado maduro, con liquidez inmediata y un flujo constante de turistas internacionales durante todo el año." },
              "2": { title: "Tatajuba, Ceará", desc: "Profunda conexión con la naturaleza y vientos legendarios. Un destino exclusivo que atrae a un público de alto nivel que busca privacidad y experiencias auténticas junto al mar." },
              "3": { title: "Ilha do Guajirú, Ceará", desc: "El paraíso de las aguas planas y el destino técnico por excelencia. Una combinación única de vientos constantes con una extensa laguna, ideal para el rendimiento y la hospitalidad." },
              "4": { title: "Icaraizinho de Amontada, Ceará", desc: "Uno de los metros cuadrados mais deseados de Ceará. Encantador pueblo con gastronomía de alta gama y una bahía segura, perfecto para turismo con encanto y deportes de viento." },
              "5": { title: "Preá, Ceará", desc: "Epicentro del kitesurf global con infraestructura consolidada y demanda internacional constante." },
              "6": { title: "Flecheiras, Ceará", desc: "Infraestructura de lujo consolidada y demanda internacional récord. Donde el estilo de vida cosmopolita se encuentra con la mejor ventana de viento del planeta." },
              "7": { title: "Bitupitá, Ceará", desc: "Frente al mar virgen y el secreto mejor guardado de la Ruta de las Emociones. Oportunidad en etapa temprana con alto potencial de apreciación y aguas perfectas para el kite y wingfoil." }
            }
          },
          estudo: {
            badge: "Estudio de Vientos",
            title: "ESTUDIO<br />DE VIENTOS",
            desc: "Terra Ventos presenta: Qué ubicaciones crecen más en valor, dónde está menos explorado y con mayor potencial. <strong>Sumérgete en los datos y análisis de potencial de la Costa Ceará.</strong>",
            stats: { "1": "Ciudades analizadas", "2": "meses de viento constante", "3": "apreciación anual", "4": "áreas técnicas y ambientales" },
            cta: "Ver estudio completo",
            videoInfo: ["Fundador e CEO Terra Ventos", "Estudio de Vientos - clic para ver", "Reproducir vídeo"],
            watchFull: "Ver el vídeo completo"
          },
          mapa: {
            title: "ESTUDIO DE LOS VIENTOS POR EL LITORAL DE CEARA",
            activateInstructions: "Haz clic para interactuar com o mapa",
            deactivate: "Bloquear mapa para scroll"
          },
          assessoria: {
            badge: "Diferenciales de Terra Ventos",
            title: "ASESORÍA COMPLETA<br/>DE PRINCIPIO A FIN",
            items: {
              "1": { title: "Curaduría Temprana", text: "Identificación de activos con alto potencial de apreciación antes de la exposición al mercado abierto." },
              "2": { title: "Networking", text: "Acceso a una selecta red de inversores y atletas de deportes de viento." },
              "3": { title: "Atención Concierge", text: "Asesoramiento personalizado en todas las etapas, garantizando un viaje de inversión fluido y sofisticado." },
              "4": { title: "Apreciación Real", text: "Historial comprobado de rentabilidad en las regiones de mayor crecimiento en la costa de Ceará." },
              "5": { title: "Seguridad Legal", text: "Debida diligencia rigurosa y auditoría de tierras para garantizar la protección total de los activos." },
              "6": { title: "Soporte Global Multilingüe", text: "Servicio especializado en portugués, inglés y español." }
            }
          },
          depoimentos: {
            badge: "Testimonios",
            title: "VOCES DE LA<br />COMMUNIDAD",
            subtitle: "Más que inversores, somos un ecosistema de visionarios, atletas y entusiastas costeros que han elegido Ceará como su próximo hito de vida y riqueza.",
            roles: ["Inversor Internacional", "Propietario de Negocio y Kitesurfista", "Propietaria de Casa de Vacaciones", "Abogada e Inversora", "Diseñadora y Kitesurfista", "CTO Técnico y Kitesurfista"],
            quotes: [
              "\"Lo que me atrajo de Terra Ventos fue su capacidad de anticipación. No solo me ofrecieron un terreno, sino un posicionamiento estratégico en Bitupitá antes de que explotara la apreciación. La seguridad legal y el soporte bilingüe fueron fundamentales para que pudiera invertir con tranquilidad, incluso viviendo en el extranjero.\"",
              "\"Como practicante de wingfoil, buscaba un lugar donde el viento fuera constante y la comunidad vibrante. En Terra Ventos, encontró una curaduría que entendió lo que necesita un navegante. El Estudio de Vientos aplicado a mi lote aseguró que mi casa estuviera integrada a la naturaleza y perfecta para el deporte.\"",
              "\"La asesoría concierge de Terra Ventos es lo que realmente diferencia a la marca. Se encargaron de todo, desde la debida diligencia legal hasta conectarme con los mejores arquitectos locales. Sentir que eres parte de una comunidad que conserva la esencia rústica de Ceará, mas con un estándar internacional, no tiene precio.\"",
              "\"Como abogada, mi prioridad siempre ha sido la seguridad de los documentos. En la costa, la informalidad asusta, mas Terra Ventos entregó un proceso impecable. Invertí en una propiedad en la Praia dos Monteiros con la certeza de que estaba construyendo un patrimonio sólido y regularizado para mi familia. Es una tranquilidad invaluable.\"",
              "\"Lo que me conquistó fue el Estudio de Vientos. Como diseñadora, valoro proyectos que respetan el medio ambiente. Ver cómo Terra Ventos utiliza la ciencia del clima para guiar la implementación de casas, garantizando frescura natural y luz perfecta, es fascinante. No es solo una parcela, es la base para una arquitectura de alta gama que dialoga con la naturaleza.\"",
              "\"Me mueven los datos, y Terra Ventos habla mi idioma. El Estudio de Vientos no es marketing — es ciencia aplicada a la inversión inmobiliaria, con análisis de vectores climáticos, escasez locacional y potencial de apreciación. Como CTO, reconheço quando um tim domina o que faz. Investi no Ceará porque los números eran irrefutáveis.\""
            ]
          },
          form: {
            badge: "Recibe Novedades",
            title: "EL VIENTO SOPLA PRIMERO PARA<br />LOS QUE ESTÁN CONECTADOS.",
            subtitle: "Únase a nuestra lista de prioridad y reciba curaduría de tierras temprano, datos de apreciación de la costa de Ceará y oportunidades que no llegan al mercado abierto.",
            fields: { first: "Nombre", last: "Apellido", email: "Correo", phone: "Teléfono" },
            message: "¿En qué te podemos ayudar?",
            submit: "Enviar Mensaje",
            success: "¡Mensaje recibido con éxito! En breve uno de nuestros expertos se pondrá en contacto contigo.",
            errors: {
              first: "Por favor, ingrese su nombre.",
              last: "Por favor, ingrese su apellido.",
              email: "Por favor, ingrese un correo electrónico válido.",
              phone: "Por favor, ingrese su teléfono.",
              message: "Por favor, escriba su mensaje."
            }
          },
          footer: { rights: "© Copyright 2026. Todos os direitos reservados." },
          blog: {
            badge: "Insights y Mercado",
            title: "SIGA NUESTRA<br />CURADURÍA EN EL BLOG",
            readMore: "Leer más",
            viewAll: "Ver todos los artículos"
          },
          pagina: {
            back: "Volver",
            about: "Sobre la propiedad",
            infra: "Infraestructura",
            facilities: "Instalaciones",
            contact: "Hable con uno de nuestros consultores",
            cta: "Contáctenos",
            location: "Ubicación",
            videoGallery: "Galería de Videos",
            downloadTitle: "Descargar Material",
            downloadDesc: "Acceda a los archivos oficiales del proyecto.",
            viewPdf: "Ver PDF",
            reservationNotice: "Realice la cotización directamente en la plataforma de reservas",
            bookAirbnb: "Link al Airbnb",
            whatsapp: "Hable con nosotros"
          }
        }
      }
    },
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
