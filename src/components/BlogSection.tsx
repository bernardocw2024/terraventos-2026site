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
        title: "Guia de Investimento em Jericoacoara: Invista em Jeri",
        summary: "A Fraport está modernizando o aeroporto, as regras do parque nacional limitam a oferta e os ventos alísios sopram de 20 a 35 nós por metade do ano. Seu playbook 2026 para comprar beira-mar na capital do kite do Brasil.",
        url: "https://blog.terraventos.com/p/jericoacoara-property-guide-invest",
        image: "/blog/jericoacoara.png",
        date: "18 Mai 2026"
      },
      {
        title: "Guia de Investimento Kite no Preá 2026: Compre Beira-Mar no Brasil",
        summary: "O Preá, Ceará, oferece vento de 25 nós, terrenos beira-mar a US$9,25/m² e rendimentos de aluguel projetados de 12 a 16%. O playbook 2026 para kitesurfistas comprando terrenos no Brasil.",
        url: "https://blog.terraventos.com/p/prea-kite-investment-guide-2026-buy",
        image: "/blog/prea.png",
        date: "18 Mai 2026"
      },
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
        image: "/blog/tatajuba.png",
        date: "6 Mai 2026"
      }
    ],
    en: [
      {
        title: "Jericoacoara Property Guide: Invest in Jeri",
        summary: "Fraport is upgrading the airport, national-park rules cap supply, and trade winds blow 20-35 knots half the year. Your 2026 playbook for buying beachfront in Brazil's kite capital.",
        url: "https://blog.terraventos.com/p/jericoacoara-property-guide-invest",
        image: "/blog/jericoacoara.png",
        date: "May 18, 2026"
      },
      {
        title: "Preá Kite Investment Guide 2026: Buy Beachfront Brazil",
        summary: "Preá, Ceará delivers 25-knot wind, US$9.25/m² beachfront plots, and 12-16% projected rental yields. The 2026 playbook for kitesurfers buying land in Brazil.",
        url: "https://blog.terraventos.com/p/prea-kite-investment-guide-2026-buy",
        image: "/blog/prea.png",
        date: "May 18, 2026"
      },
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
        image: "/blog/tatajuba.png",
        date: "May 6, 2026"
      }
    ],
    es: [
      {
        title: "Guía de Inversión en Jericoacoara: Invierte en Jeri",
        summary: "Fraport está modernizando el aeropuerto, las reglas del parque nacional limitan la oferta y los vientos alisios soplan de 20 a 35 nudos por la mitad del año. Tu playbook 2026 para comprar frente al mar en la capital del kite de Brasil.",
        url: "https://blog.terraventos.com/p/jericoacoara-property-guide-invest",
        image: "/blog/jericoacoara.png",
        date: "18 May 2026"
      },
      {
        title: "Guía de Inversión Kite en Preá 2026: Compra Frente al Mar en Brasil",
        summary: "Preá, Ceará ofrece viento de 25 nudos, terrenos frente al mar a US$9,25/m² y rendimientos de alquiler proyectados del 12 al 16%. El playbook 2026 para kitesurfistas que compran terrenos en Brasil.",
        url: "https://blog.terraventos.com/p/prea-kite-investment-guide-2026-buy",
        image: "/blog/prea.png",
        date: "18 May 2026"
      },
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
        image: "/blog/tatajuba.png",
        date: "6 May 2026"
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

