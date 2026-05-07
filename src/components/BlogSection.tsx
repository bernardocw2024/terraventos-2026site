import React from 'react';
import { useTranslation } from 'react-i18next';
import './BlogSection.css';

interface BlogPost {
  title: string;
  summary: string;
  url: string;
  image: string;
  date: string;
}

const BlogSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0] || 'pt';

  const posts: Record<string, BlogPost[]> = {
    pt: [
      {
        title: "Festival GKC Chega a Flecheiras: Por Que a Costa de Pipa do Ceará É o Próximo Hotspot",
        summary: "A edição 2026 do maior festival de esportes aquáticos de tábua do Brasil retorna à Praia do Guajiru em meados de junho — o sinal econômico mais confiável que temos para a costa de kite do Ceará.",
        url: "https://blog.terraventos.com/p/gkc-festival-is-coming-to-flecheiras",
        image: "/blog/gkc_festival.png",
        date: "7 Mai 2026"
      },
      {
        title: "Tatajuba Kite Real Estate: O Jogo das Lagoas do Ceará em 2026",
        summary: "Tatajuba, a 25 km de Jeri, combina 99% de confiabilidade de vento com preços de terra de fronteira. A realidade jurídica, ecológica e de investimento para compradores de kite em 2026.",
        url: "https://blog.terraventos.com/p/tatajuba-kite-real-estate-cearas",
        image: "/TATAJUBA/Image_from_Image.png (4).png",
        date: "6 Mai 2026"
      },
      {
        title: "Terreno de Marinha Explicado: A linha dos 33 metros",
        summary: "Um guia completo sobre a faixa de terra federal de 33 metros na costa brasileira. Entenda o SPU, foro e laudêmio para investimentos seguros beira-mar.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "26 Abr 2026"
      },
      {
        title: "TikTok, Huawei e a onda de Data Centers no Ceará",
        summary: "O complexo do Pecém garantiu cinco grandes projetos de data centers, incluindo o site hiperescala do TikTok. Investimento de R$ 450B até 2035 redefinindo o mercado.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "25 Abr 2026"
      }
    ],
    en: [
      {
        title: "GKC Festival is Coming to Flecheiras: Why Trairi's Kite Coast Is Ceará's Next Hotspot",
        summary: "The 2026 edition of Brazil's largest water-board sports festival returns to Praia do Guajiru in mid-to-late June — the most reliable economic signal we have for the Ceará kite coast.",
        url: "https://blog.terraventos.com/p/gkc-festival-is-coming-to-flecheiras",
        image: "/blog/gkc_festival.png",
        date: "May 7, 2026"
      },
      {
        title: "Tatajuba Kite Real Estate: Ceará's 2026 Lagoon Play",
        summary: "Tatajuba, 25 km from Jeri, blends 99% wind reliability with frontier land prices. Inside the legal, ecological and investment reality for kite buyers in 2026.",
        url: "https://blog.terraventos.com/p/tatajuba-kite-real-estate-cearas",
        image: "/TATAJUBA/Image_from_Image.png (4).png",
        date: "May 6, 2026"
      },
      {
        title: "Terreno de Marinha Explained: The 33-Meter Federal Line",
        summary: "A comprehensive guide to the 33-meter federal land strip along the Brazilian coast. Understand SPU, foro, and laudêmio for secure beachfront investments.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "Apr 26, 2026"
      },
      {
        title: "TikTok, Huawei, and the Ceará Data Center Wave",
        summary: "Pecém secured five major data center projects, including TikTok's hyperscale site. R$450B investment by 2035 is rapidly repricing real estate.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "Apr 25, 2026"
      }
    ],
    es: [
      {
        title: "El Festival GKC Llega a Flecheiras: Por Qué la Costa Kite de Trairi Es el Próximo Hotspot de Ceará",
        summary: "La edición 2026 del mayor festival de deportes acuáticos de tabla de Brasil regresa a Praia do Guajiru a mediados de junio — la señal económica más confiable para la costa de kite de Ceará.",
        url: "https://blog.terraventos.com/p/gkc-festival-is-coming-to-flecheiras",
        image: "/blog/gkc_festival.png",
        date: "7 May 2026"
      },
      {
        title: "Tatajuba Kite Real Estate: El Juego de las Lagunas de Ceará 2026",
        summary: "Tatajuba, a 25 km de Jeri, combina 99% de confiabilidad de viento con precios de tierra de frontera. La realidad jurídica, ecológica e inversora para compradores de kite en 2026.",
        url: "https://blog.terraventos.com/p/tatajuba-kite-real-estate-cearas",
        image: "/TATAJUBA/Image_from_Image.png (4).png",
        date: "6 May 2026"
      },
      {
        title: "Terreno de Marinha Explicado: La línea federal de 33 metros",
        summary: "Una guía completa sobre la franja de tierra federal de 33 metros en la costa brasileña. Entienda SPU, foro y laudêmio para inversiones seguras.",
        url: "https://blog.terraventos.com/p/terreno-de-marinha-explained-the",
        image: "/blog/marinha.png",
        date: "26 Abr 2026"
      },
      {
        title: "TikTok, Huawei y la ola de Data Centers en Ceará",
        summary: "Pecém aseguró cinco grandes proyectos de centros de datos, incluido el sitio de TikTok. La inversión de R$ 450B para 2035 revaloriza el mercado.",
        url: "https://blog.terraventos.com/p/tiktok-huawei-and-the-ceara-data",
        image: "/blog/datacenter.png",
        date: "25 Abr 2026"
      }
    ]
  };

  const displayPosts = posts[currentLang] || posts.pt;

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <span className="blog-badge">{t('blog.badge', 'Insights & Mercado')}</span>
          <h2 className="blog-title" dangerouslySetInnerHTML={{ __html: t('blog.title', 'ACOMPANHE NOSSA<br />CURADORIA NO BLOG') }}></h2>
        </div>

        <div className="blog-grid">
          {displayPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
            >
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-card-date">{post.date}</div>
              </div>
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-summary">{post.summary}</p>
                <span className="blog-read-more">
                  {t('blog.readMore', 'Leia mais')}
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="blog-footer">
          <a href="https://blog.terraventos.com/" target="_blank" rel="noopener noreferrer" className="blog-all-link">
            {t('blog.viewAll', 'Ver todos os artigos')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

