import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://terraventos.com';

const locales = {
  pt: {
    code: 'pt_BR',
    homeTitle: 'Terra Ventos | Imóveis de Luxo e Investimentos no Ceará',
    homeDesc: 'Curadoria exclusiva de imóveis de alto padrão e oportunidades de investimento no litoral cearense (Preá, Tatajuba, Bitupitá).',
    properties: [
      { slug: 'area-exclusiva-tatajuba-guriu-100000m', title: 'Área Exclusiva em Tatajuba/Guriú - 100.000m²', description: 'Oportunidade única de investimento em frente ao mar entre Guriú e Tatajuba. Área de 10 hectares com documentação regularizada.', image: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0%E2%80%9920%E2%80%9D.jpg' },
      { slug: 'terreno-exclusivo-tatajuba-1000m', title: 'Terreno Exclusivo em Tatajuba — 1.000 m²', description: 'Descubra a joia de Tatajuba: Um terreno de 1.000 m² no coração da vila que é o novo desejo do kitesurf mundial.', image: '/TATAJUBA/WhatsApp%20Image%202026-04-23%20at%2018.35.22.jpeg' },
      { slug: 'terreno-exclusivo-prea-200m-mar', title: 'Terreno Exclusivo Preá — 200m do Mar', description: 'Excelente oportunidade de investimento no Preá. Terreno com 250 m² localizado a apenas 200 metros da praia.', image: '/prea%20oportunidade/WhatsApp%20Image%202026-04-21%20at%2009.32.47.jpeg' },
      { slug: 'prea-house', title: 'Preá House | Luxo e Sofisticação no Preá', description: 'Propriedade luxuosa com 3 suítes, piscina e rooftop terrace. O melhor do design e conforto à beira-mar.', image: '/Prea%20House/WhatsApp%20Image%202026-04-20%20at%2009.12.53.jpeg' },
      { slug: 'villa-prabhu', title: 'Villa Prabhu — Paracuru-CE', description: 'Loteamento exclusivo com lagoa privativa e lazer completo a 100m da praia em Paracuru.', image: '/VILLA_PRABHU/WhatsApp%20Image%202026-04-01%20at%2014.58.56%20(3).jpeg' },
      { slug: 'villa-condudu-3', title: 'Casa Alto Padrão 3 Suítes — Frente Mar Preá', description: 'Vila Conduru III: Luxo rústico à beira-mar com 3 suítes amplas e piscina privativa.', image: '/VillaCondutuPaginaInicial/FINAL%2014.png' },
      { slug: 'terrenos-bitupita', title: 'Terrenos Pé na Areia em Bitupitá', description: 'A próxima fronteira de valorização no Ceará. Lotes exclusivos em uma vila de pescadores intocada.', image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg' },
      { slug: 'vila-do-ingles', title: 'Vila do Inglês | Luxo Sustentável no Preá', description: 'Residência moderna de 200 m² alimentada por energia solar em localização premium.', image: '/viladoinglesPaginaInicial/Final%2004%20(1).png' },
      { slug: 'casa-matanzas', title: 'Casa Matanzas | Vista Mar e Bosque (Chile)', description: 'Descubra Matanzas Paradise: Casa moderna com vistas panorâmicas espetaculares e tinaja privada.', image: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif' }
    ]
  },
  en: {
    code: 'en_US',
    homeTitle: 'Terra Ventos | Luxury Real Estate and Investments in Ceará',
    homeDesc: 'Exclusive curation of high-end properties and investment opportunities on the Ceará coast (Preá, Tatajuba, Bitupitá).',
    properties: [
      { slug: 'area-exclusiva-tatajuba-guriu-100000m', title: 'Exclusive Beachfront Area — 100,000 sqm', description: 'Monumental 10-hectare area strategically located between Tatajuba and Guriú. Direct beachfront access.', image: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0%E2%80%9920%E2%80%9D.jpg' },
      { slug: 'terreno-exclusivo-tatajuba-1000m', title: 'Exclusive Land in Tatajuba — 1,000 sqm', description: 'Discover the jewel of Tatajuba: A 1,000 sqm lot in the heart of the village, the world\'s newest kitesurf destination.', image: '/TATAJUBA/WhatsApp%20Image%202026-04-23%20at%2018.35.22.jpeg' },
      { slug: 'terreno-exclusivo-prea-200m-mar', title: 'Exclusive Preá Land — 200m from Sea', description: 'Excellent investment opportunity in Preá. 250 sqm lot located just 200 meters from the beach.', image: '/prea%20oportunidade/WhatsApp%20Image%202026-04-21%20at%2009.32.47.jpeg' },
      { slug: 'prea-house', title: 'Preá House | Luxury and Sophistication', description: 'Luxury property with 3 suites, pool, and rooftop terrace. The best of design and beachfront comfort.', image: '/Prea%20House/WhatsApp%20Image%202026-04-20%20at%2009.12.53.jpeg' },
      { slug: 'villa-prabhu', title: 'Villa Prabhu — Paracuru, Brazil', description: 'Exclusive gated community with private lagoon and full leisure, 100m from the beach.', image: '/VILLA_PRABHU/WhatsApp%20Image%202026-04-01%20at%2014.58.56%20(3).jpeg' },
      { slug: 'villa-condudu-3', title: 'High-End 3-Suite House — Beachfront Preá', description: 'Vila Conduru III: Rustic luxury by the sea with 3 large suites and private pool.', image: '/VillaCondutuPaginaInicial/FINAL%2014.png' },
      { slug: 'terrenos-bitupita', title: 'Beachfront Land in Bitupitá', description: 'The next appreciation frontier in Ceará. Exclusive lots in an untouched fishing village.', image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg' },
      { slug: 'vila-do-ingles', title: 'Vila do Inglês | Sustainable Luxury in Preá', description: 'Modern 200 sqm residence powered by solar energy in a premium location.', image: '/viladoinglesPaginaInicial/Final%2004%20(1).png' },
      { slug: 'casa-matanzas', title: 'Casa Matanzas | Sea and Forest View (Chile)', description: 'Discover Matanzas Paradise: Modern house with spectacular panoramic views and private hot tub.', image: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif' }
    ]
  },
  es: {
    code: 'es_ES',
    homeTitle: 'Terra Ventos | Inmuebles de Lujo e Inversiones en Ceará',
    homeDesc: 'Curaduría exclusiva de propiedades de alto nivel y oportunidades de inversión en la costa de Ceará (Preá, Tatajuba, Bitupitá).',
    properties: [
      { slug: 'area-exclusiva-tatajuba-guriu-100000m', title: 'Área Exclusiva Frente al Mar — 100.000 m²', description: 'Área monumental de 10 hectáreas ubicada estratégicamente entre Tatajuba y Guriú. Acceso directo a la playa.', image: '/GURIU/VS--TATAJUBAfromTerraVentosonVimeo-0%E2%80%9920%E2%80%9D.jpg' },
      { slug: 'terreno-exclusivo-tatajuba-1000m', title: 'Terreno Exclusivo en Tatajuba — 1.000 m²', description: 'Descubra la joya de Tatajuba: Un terreno de 1.000 m² en el corazón del pueblo, el nuevo deseo del kitesurf mundial.', image: '/TATAJUBA/WhatsApp%20Image%202026-04-23%20at%2018.35.22.jpeg' },
      { slug: 'terreno-exclusivo-prea-200m-mar', title: 'Terreno Exclusivo Preá — 200m del Mar', description: 'Excelente oportunidad de inversión en Preá. Terreno de 250 m² ubicado a solo 200 metros de la playa.', image: '/prea%20oportunidade/WhatsApp%20Image%202026-04-21%20at%2009.32.47.jpeg' },
      { slug: 'prea-house', title: 'Preá House | Lujo y Sofisticación en Preá', description: 'Propiedad de lujo con 3 suites, piscina y terraza en la azotea. Lo mejor del diseño y confort frente al mar.', image: '/Prea%20House/WhatsApp%20Image%202026-04-20%20at%2009.12.53.jpeg' },
      { slug: 'villa-prabhu', title: 'Villa Prabhu — Paracuru, Ceará', description: 'Loteamiento exclusivo con laguna privada y ocio completo a 100m de la playa en Paracuru.', image: '/VILLA_PRABHU/WhatsApp%20Image%202026-04-01%20at%2014.58.56%20(3).jpeg' },
      { slug: 'villa-condudu-3', title: 'Casa de Alto Nivel 3 Suites — Frente Mar Preá', description: 'Vila Conduru III: Lujo rústico frente al mar con 3 amplias suites y piscina privada.', image: '/VillaCondutuPaginaInicial/FINAL%2014.png' },
      { slug: 'terrenos-bitupita', title: 'Terrenos Frente al Mar en Bitupitá', description: 'La próxima frontera de valorización en Ceará. Lotes exclusivos en un pueblo de pescadores virgen.', image: '/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg' },
      { slug: 'vila-do-ingles', title: 'Vila do Inglês | Lujo Sostenible en Preá', description: 'Residencia moderna de 200 m² alimentada por energía solar en ubicación premium.', image: '/viladoinglesPaginaInicial/Final%2004%20(1).png' },
      { slug: 'casa-matanzas', title: 'Casa Matanzas | Vista Mar y Bosque (Chile)', description: 'Descubra Matanzas Paradise: Casa moderna con espectaculares vistas panorámicas y tinaja privada.', image: '/Matanzas/3b77d98c-5cd0-4f51-816a-6e42748720d2.avif' }
    ]
  }
};

const distPath = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distPath, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('ERRO: dist/index.html não encontrado. Execute "npm run build" primeiro.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

function generatePage(targetPath, title, desc, img, url, langCode, langId) {
  let html = template;
  const fullImageUrl = img.startsWith('http') ? img : `${baseUrl}${img}`;
  const displayTitle = title.includes('Terra Ventos') ? title : `${title} | Terra Ventos`;

  // Basico
  html = html.replace(/<html lang=".*?"/g, `<html lang="${langId}" prefix="og: http://ogp.me/ns#"`);
  html = html.replace(/<title>.*?<\/title>/g, `<title>${displayTitle}</title>`);
  html = html.replace(/<meta name="description" content=".*?" ?\/?>/g, `<meta name="description" content="${desc}" />`);
  
  // Open Graph
  html = html.replace(/<meta property="og:title" content=".*?" ?\/?>/g, `<meta property="og:title" content="${displayTitle}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" ?\/?>/g, `<meta property="og:description" content="${desc}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" ?\/?>/g, `<meta property="og:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta property="og:url" content=".*?" ?\/?>/g, `<meta property="og:url" content="${url}" />`);
  html = html.replace(/<meta property="og:site_name" content=".*?" ?\/?>/g, `<meta property="og:site_name" content="Terra Ventos" />`);
  html = html.replace(/<meta property="og:locale" content=".*?" ?\/?>/g, `<meta property="og:locale" content="${langCode}" />`);

  // Twitter
  html = html.replace(/<meta name="twitter:title" content=".*?" ?\/?>/g, `<meta name="twitter:title" content="${displayTitle}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" ?\/?>/g, `<meta name="twitter:description" content="${desc}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" ?\/?>/g, `<meta name="twitter:image" content="${fullImageUrl}" />`);
  html = html.replace(/<meta name="twitter:url" content=".*?" ?\/?>/g, `<meta name="twitter:url" content="${url}" />`);

  // Injetar script para forçar o idioma no React (através do localStorage)
  const langScript = `<script>localStorage.setItem('i18nextLng', '${langId}');</script>`;
  html = html.replace('</head>', `${langScript}\n</head>`);

  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // Injetar H1 e conteúdo básico no root para crawlers que não executam JS
  const staticContent = `
    <div id="root">
      <header>
        <img src="${baseUrl}/logo.avif" alt="Terra Ventos" />
        <nav>
          <a href="${baseUrl}/">Início</a>
          <a href="${baseUrl}/propriedades">Oportunidades</a>
        </nav>
      </header>
      <main>
        <h1>${displayTitle}</h1>
        <p>${desc}</p>
        <img src="${fullImageUrl}" alt="${displayTitle}" />
        
        <section>
          <h2>Sobre a Terra Ventos</h2>
          <p>A Terra Ventos é especialista em curadoria de imóveis de luxo e investimentos exclusivos no litoral do Ceará. Com foco em destinos de alto padrão como Preá, Tatajuba e Bitupitá, oferecemos oportunidades únicas para quem busca sofisticação, conforto e rentabilidade no paraíso do kitesurf.</p>
          <p>Nossa assessoria completa garante segurança jurídica e as melhores taxas de valorização para investidores nacionais e internacionais. Explore nossas casas de design, terrenos pé na areia e projetos exclusivos integrados à natureza.</p>
        </section>

        <section>
          <h2>Destinos em Destaque</h2>
          <ul>
            <li><strong>Preá:</strong> O epicentro do luxo rústico e do kitesurf mundial.</li>
            <li><strong>Tatajuba:</strong> Beleza intocada e valorização acelerada.</li>
            <li><strong>Bitupitá:</strong> A nova fronteira do investimento pé na areia.</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Terra Ventos | Imóveis de Luxo no Ceará</p>
        <p>Contatos: +55 (85) 9 8557-2807 | info@terraventos.com.br</p>
        <p>Endereço: Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE</p>
      </footer>
    </div>
  `;
  
  html = html.replace('<div id="root"></div>', staticContent);

  fs.writeFileSync(targetPath, html);
}

// Gerar Sitemap.xml
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

Object.entries(locales).forEach(([langId, data]) => {
  const langPrefix = langId === 'pt' ? '' : `/${langId}`;
  
  // Home Page
  const homePath = langId === 'pt' ? templatePath : path.resolve(distPath, langId, 'index.html');
  generatePage(homePath, data.homeTitle, data.homeDesc, '/banners/2.png', `${baseUrl}${langPrefix}/`, data.code, langId);
  console.log(`Página Home gerada para: ${langId}`);

  sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/</loc>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/"/>
  </url>`;

  // Propriedades
  data.properties.forEach(prop => {
    const propPath = path.resolve(distPath, langId === 'pt' ? '' : langId, 'propriedade', prop.slug, 'index.html');
    generatePage(propPath, prop.title, prop.description, prop.image, `${baseUrl}${langPrefix}/propriedade/${prop.slug}`, data.code, langId);
    console.log(`Página Propriedade gerada: ${langId} - ${prop.slug}`);

    sitemap += `
  <url>
    <loc>${baseUrl}${langPrefix}/propriedade/${prop.slug}</loc>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/propriedade/${prop.slug}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/propriedade/${prop.slug}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/es/propriedade/${prop.slug}"/>
  </url>`;
  });
});

sitemap += `\n</urlset>`;
fs.writeFileSync(path.resolve(distPath, 'sitemap.xml'), sitemap);
console.log('Sitemap.xml gerado com sucesso.');

console.log('Finalizado: Todas as páginas individuais e localizadas foram criadas.');
