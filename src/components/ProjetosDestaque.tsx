import { useRef, useState, useEffect } from "react";
import "./ProjetosDestaque.css";
import { useTranslation } from "react-i18next";
import { type OportunidadeDetalhe } from "../data/oportunidadesData";
import { getOportunidadesData } from "../data/oportunidadesDataI18n";
import LazyImage from "./LazyImage";
import { useTransitionNavigate } from "../router/useTransitionNavigate";

type ProjetosDestaqueProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

const projetos = [
  {
    id: "casa-alto-padrao-prea-4-suites-simi",
    image: "/imoveis/casa-alto-padrao-prea-4-suites-simi-01-fachada-jardim.webp",
    tag: "VENDA",
    location: "Praia do Preá - CE",
    title: "CASA ALTO PADRÃO 4 SUÍTES — PRAIA DO PREÁ",
    area: "1.800 m²",
    beds: 4,
    baths: null,
    price: "R$ 4.500.000,00",
    detailIndex: 0,
    pinned: true,
  },
  {
    id: "casa-3-quartos-piscina-cavalo-bravo-prea",
    image: "/imoveis/casa-3-quartos-piscina-cavalo-bravo-prea-01-fachada-piscina.webp",
    tag: "VENDA",
    location: "Cavalo Bravo, Preá - CE",
    title: "CASA COM PISCINA EM CAVALO BRAVO — PREÁ",
    area: "1.300 m²",
    beds: 3,
    baths: null,
    price: "R$ 1.700.000,00",
    detailIndex: 0,
    pinned: true,
  },
  {
    id: "chale-divino-tatajuba",
    image: "/imoveis/chale-divino-tatajuba-01.webp",
    tag: "VENDA",
    location: "Vila Tatajuba, Camocim - CE",
    title: "CHALÉ DIVINO — TATAJUBA",
    area: "431,63 m²",
    beds: 1,
    baths: 1,
    price: "R$ 1.800.000,00",
    detailIndex: 0,
  },
  {
    id: "casa-alto-padrao-taiba-vista-mar",
    image: "/imoveis/casa-alto-padrao-taiba-vista-mar-23.webp",
    tag: "VENDA",
    location: "Taíba, Ceará",
    title: "CASA ALTO PADRÃO EM GRANITO — TAÍBA",
    area: null,
    beds: 6,
    baths: 6,
    price: "R$ 3.500.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-nova-taiba-1920m2",
    image: "/imoveis/terreno-nova-taiba-1920m2-06.webp",
    tag: "VENDA",
    location: "Loteamento Nova Taíba, Taíba - CE",
    title: "TERRENO EM NOVA TAÍBA — 1.920 M² COM CASA",
    area: "1.920 m²",
    beds: null,
    baths: null,
    price: "R$ 1.300.000,00",
    detailIndex: 0,
  },
  {
    id: "casa-duplex-pe-na-areia-taiba",
    image: "/imoveis/casa-duplex-pe-na-areia-taiba-04.webp",
    tag: "VENDA",
    location: "Taíba, Ceará",
    title: "CASA DUPLEX PÉ NA AREIA — TAÍBA",
    area: "1.280 m²",
    beds: 3,
    baths: null,
    price: "R$ 1.200.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-morro-do-chapeu-taiba-832m2",
    image: "/imoveis/terreno-morro-do-chapeu-taiba-832m2-02.webp",
    tag: "VENDA",
    location: "Morro do Chapéu, Taíba - CE",
    title: "TERRENO NO MORRO DO CHAPÉU — TAÍBA, 832 M²",
    area: "832 m²",
    beds: null,
    baths: null,
    price: "R$ 700.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-taiba-2560m2",
    image: "/imoveis/terreno-taiba-2560m2-02.webp",
    tag: "VENDA",
    location: "Taíba, Ceará",
    title: "TERRENO EM TAÍBA — 2.560 M²",
    area: "2.560 m²",
    beds: null,
    baths: null,
    price: "R$ 2.200.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-vila-sao-francisco-tatajuba",
    image: "/imoveis/terreno-vila-sao-francisco-tatajuba-01.webp",
    tag: "VENDA",
    location: "Vila São Francisco, ao lado de Tatajuba - CE",
    title: "TERRENO VILA SÃO FRANCISCO — TATAJUBA",
    area: "2.000 m²",
    beds: null,
    baths: null,
    price: "R$ 1.100.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-tatajuba-5405m2",
    image: "/imoveis/terreno-tatajuba-camocim-5405m2-01.webp",
    tag: "VENDA",
    location: "Vila de Tatajuba, Camocim - CE",
    title: "TERRENO EM TATAJUBA – 5.405 M²",
    area: "5.405 m²",
    beds: null,
    baths: null,
    price: "R$ 1.700.000,00",
    detailIndex: 0,
  },
  {
    id: "lotes-tatajuba-5-lotes",
    image: "/imoveis/lotes-tatajuba-camocim-01.webp",
    tag: "VENDA",
    location: "Vila de Tatajuba, Camocim - CE",
    title: "LOTES EM TATAJUBA — CAMOCIM, CE",
    area: "400 a 604 m²",
    beds: null,
    baths: null,
    price: "R$ 330.000,00",
    detailIndex: 0,
  },
  {
    id: "parque-nacional-1-carlos",
    image: "/imoveis/terreno-parque-nacional-3044m-carlos-01.webp",
    tag: "VENDA",
    location: "Parque Nacional, Preá - CE",
    title: "TERRENO EXCLUSIVO PARQUE NACIONAL",
    area: "3.044 m²",
    beds: null,
    baths: null,
    price: "R$ 2.000.000,00",
    detailIndex: 0,
  },
  {
    id: "prado-farol",
    image: "/imoveis/terreno-praia-do-farol-01.webp",
    tag: "VENDA",
    location: "Farol do Itapajé - Itarema, CE",
    title: "Terreno Praia do Farol",
    area: "8.600 m²",
    beds: null,
    baths: null,
    price: "R$ 4.000.000,00",
    detailIndex: 0,
  },
  {
    id: "terreno-barrinha",
    image: "/imoveis/terreno-barrinha-1753m-01.webp",
    tag: "VENDA",
    location: "Sítio Barrinha, Acaraú - CE",
    title: "Terreno Barrinha Pé na Areia",
    area: "1.753 m²",
    beds: null,
    baths: null,
    price: "R$ 1.800.000,00",
    detailIndex: 0,
  },
  /* {
    id: "15",
    image: "/imoveis/lotes-exclusivos-taiba-01.webp",
    tag: "VENDA",
    location: "Taíba, Ceará",
    title: "Lotes Exclusivos Taíba",
    area: "2.800 m²",
    beds: null,
    baths: null,
    price: "R$ 1.300.000,00",
    detailIndex: 0,
  },
 */
  {
    id: "14",
    image: "/imoveis/terreno-serrote-jericoacoara-01.webp",
    tag: "VENDA",
    location: "Jericoacoara, Ceará",
    title: "Terreno Serrote Jericoacoara",
    area: "200 m²",
    beds: null,
    baths: null,
    price: "R$ 1.200.000",
    detailIndex: 0,
  },
  {
    id: "vila-aysu-jericoacoara",
    image: "/imoveis/vila-aysu-jericoacoara-01.webp",
    tag: "VENDA",
    location: "Jericoacoara, Ceará",
    title: "Vila Aysú",
    area: "280 m²",
    beds: 4,
    baths: 4,
    price: "R$ 2.700.000",
    detailIndex: 0,
  },
  {
    id: "13",
    image: "/imoveis/mansao-praia-do-prea-93.webp",
    tag: "VENDA",
    location: "Praia do Preá, Ceará, Brasil",
    title: "CASA ALTO PADRÃO NA PRAIA DO PREÁ",
    area: "565 m²",
    beds: 4,
    baths: 5,
    price: "R$ 4.000.000,00",
    detailIndex: 0,
  },
  {
    id: "10",
    image: "/imoveis/casa-alto-padrao-praia-barrinha-01.webp",
    tag: "VENDA",
    location: "Barrinha - Acaraú, CE",
    title: "Casa de Alto Padrão na Praia da Barrinha",
    area: "400 m²",
    beds: 4,
    baths: 5,
    price: "R$ 6.600.000,00",
    detailIndex: 0,
  },
  {
    id: "09",
    image: "https://vumbnail.com/1186057204.jpg",
    tag: "VENDA",
    location: "Tatajuba / Guriú, Brasil",
    title: "Área Exclusiva Pé na Areia",
    area: "100.000 m²",
    beds: null,
    baths: null,
    price: "R$ 15 MILHÕES",
    detailIndex: 0,
  },
  {
    id: "08",
    image: "/imoveis/terreno-exclusivo-tatajuba-1000m-homepage-01.webp",
    tag: "VENDA",
    location: "Tatajuba, Ceará, Brasil",
    title: "Terreno Exclusivo Tatajuba",
    area: "1.000 m²",
    beds: null,
    baths: null,
    price: "R$ 800.000",
    detailIndex: 0,
  },
  {
    id: "07",
    image: "/imoveis/terreno-exclusivo-prea-200m-mar-01.webp",
    tag: "VENDA",
    location: "Preá, Ceará, Brasil",
    title: "Terreno Exclusivo Preá",
    area: "250 m²",
    beds: null,
    baths: null,
    price: "R$ 400.000",
    detailIndex: 0,
  },
  {
    id: "06",
    image: "/imoveis/prea-house-homepage-01.webp",
    tag: "VENDA",
    location: "Preá, Ceará, Brasil",
    title: "Preá House",
    area: "745 m²",
    beds: 3,
    baths: 3,
    price: "Conferir",
    detailIndex: 1,
  },
  {
    id: "04",
    image: "/imoveis/villa-prabhu-homepage-01.webp",
    tag: "LANÇAMENTO",
    location: "Paracuru, Ceará, Brasil",
    title: "Villa Prabhu — Paracuru-CE",
    area: "242 m² a 600 m²",
    beds: null,
    baths: null,
    price: "Conferir",
    detailIndex: 1,
  },
  {
    id: "02",
    image: "/imoveis/terrenos-bitupita-01.webp",
    tag: "VENDA",
    location: "Bitupitá, Ceará, Brasil",
    title: "Terrenos em Bitupitá",
    area: "4.300 m²",
    beds: null,
    baths: null,
    price: "A partir de R$ 150 MIL",
    detailIndex: 3,
  },
  {
    id: "03",
    image: "/imoveis/vila-do-ingles-23-piscina-palmeiras.webp",
    tag: "TEMPORADA",
    location: "Preá, Ceará, Brasil",
    title: "Vila do Inglês",
    area: "2.000 m²",
    beds: 3,
    baths: 3,
    price: "SOB CONSULTA",
    detailIndex: 4,
  },
  {
    id: "05",
    image: "/imoveis/casa-matanzas-01.webp",
    tag: "TEMPORADA",
    location: "Navidad, Chile",
    title: "Casa Matanzas",
    area: "N/A",
    beds: 3,
    baths: 2,
    price: "Conferir",
    detailIndex: 5,
  },
  {
    id: "01",
    image: "/imoveis/villa-conduru-3-01-sala-cozinha-integrada.webp",
    tag: "ALUGUEL DE TEMPORADA",
    location: "A PASSOS DA PRAIA DO PREÁ",
    title: "CASA ALTO PADRÃO 3 QUARTOS",
    area: "153 m²",
    beds: 3,
    baths: 3,
    price: "Consulte",
    detailIndex: 2,
  },
];

// `pinned: true` fixa o card na primeira posição do carrossel, antes das propriedades
// auto-detectadas abaixo.
// IDs já com card "curado" manualmente (imagem/beds/baths/area customizados) no array `projetos` acima.
// Card fixo de Taíba desligado; voltar para true para reexibir.
const SHOW_TAIBA_CARD = false;

const projetosCuradosIds = new Set(projetos.map((p) => p.id));

export default function ProjetosDestaque({ onSelect }: ProjetosDestaqueProps) {
  const { t, i18n } = useTranslation();
  const transitionNavigate = useTransitionNavigate();
  const localizedData = getOportunidadesData(i18n.language).filter(item => !item.unlisted && !item.hideFromDestaque);
  // Qualquer propriedade nova cadastrada em oportunidadesData.ts que ainda não tenha
  // um card curado aqui aparece automaticamente, em primeiro lugar. Como novas
  // propriedades são inseridas no topo de `oportunidadesData` (fonte mestre), a ordem
  // de `localizedData` já reflete "mais recente primeiro" — não precisa mexer neste
  // arquivo a cada novo imóvel. Marcar `hideFromDestaque: true` no imóvel tira ele
  // desse carrossel sem tirá-lo do resto do site.
  const autoNewItems = localizedData.filter((item) => !projetosCuradosIds.has(item.id));
  const renderProjetoCurado = (projeto: (typeof projetos)[number]) => {
    const itemFromData = localizedData.find((d) => d.id === projeto.id);
    if (!itemFromData) return null;
    return (
      <a
        key={projeto.id}
        href={`/propriedade/${itemFromData.slug}`}
        className="pd-card"
        onClick={(e) => {
          e.preventDefault();
          onSelect(itemFromData as OportunidadeDetalhe);
        }}
      >
        <div className="pd-image-wrapper">
          <LazyImage src={projeto.image} alt={itemFromData.propertyTitle || projeto.title} className="pd-image" />
          <div className="pd-tag">{itemFromData.badge || projeto.tag}</div>
        </div>
        <div className="pd-content">
          <div className="pd-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{itemFromData.location || projeto.location}</span>
          </div>
          <h3 className="pd-card-title">{itemFromData.propertyTitle || projeto.title}</h3>
          <div className="pd-amenities">
            {projeto.beds && (
              <div className="pd-amenity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                  <path d="M3 13h18" />
                </svg>
                {projeto.beds}
              </div>
            )}
            {projeto.baths && (
              <div className="pd-amenity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                </svg>
                {projeto.baths}
              </div>
            )}
            {projeto.area && (
              <div className="pd-amenity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
                </svg>
                {projeto.area}
              </div>
            )}
          </div>
          <div className="pd-price">{itemFromData.price || projeto.price}</div>
        </div>
      </a>
    );
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount =
        direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleSeeAll = () => {
    transitionNavigate("/propriedades");
  };

  return (
    <section id="projetos" className="pd-section">
      <div className="pd-container">
        <div className="pd-header-row">
          <div className="pd-header-content">
            <div className="pd-badge reveal-badge">{t("projetos.badge")}</div>
            <h2
              className="pd-title reveal-heading"
              dangerouslySetInnerHTML={{ __html: t("projetos.title") }}
            ></h2>
          </div>

          <div className="pd-nav-controls">
            <button
              className={`pd-nav-btn ${!canScrollLeft ? "disabled" : ""}`}
              onClick={() => scroll("left")}
              aria-label="Anterior"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M15 18l-6-6 6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={`pd-nav-btn ${!canScrollRight ? "disabled" : ""}`}
              onClick={() => scroll("right")}
              aria-label="Pr\u00F3ximo"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M9 18l6-6-6-6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="pd-slider-viewport"
          ref={scrollRef}
          onScroll={checkScroll}
        >
          <div className="pd-slider-track">
            {/* FIXADAS (`pinned: true`) — antes até das auto-detectadas */}
            {projetos.filter((p) => p.pinned).map(renderProjetoCurado)}

            {/* NOVAS PROPRIEDADES (auto-detectadas, sem card curado ainda) */}
            {autoNewItems.map((itemFromData) => (
              <a
                key={itemFromData.id}
                href={`/propriedade/${itemFromData.slug}`}
                className="pd-card"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(itemFromData);
                }}
              >
                <div className="pd-image-wrapper">
                  <LazyImage
                    src={itemFromData.gallery.main}
                    alt={itemFromData.propertyTitle}
                    className="pd-image"
                  />
                  <div className="pd-tag">{itemFromData.badge}</div>
                </div>
                <div className="pd-content">
                  <div className="pd-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>{itemFromData.location}</span>
                  </div>
                  <h3 className="pd-card-title">{itemFromData.propertyTitle}</h3>
                  <div className="pd-amenities">
                    {itemFromData.facilities?.slice(0, 3).map((f) => (
                      <div className="pd-amenity" key={f}>{f}</div>
                    ))}
                  </div>
                  <div className="pd-price">
                    {itemFromData.priceTag ? `${itemFromData.priceTag} ${itemFromData.price}` : itemFromData.price}
                  </div>
                </div>
              </a>
            ))}

            {/* PRIMEIRAS PROPRIEDADES (terrenos novos em destaque) */}
            {projetos.slice(0, 8).filter((p) => !p.pinned).map(renderProjetoCurado)}

            {/* OPÇÃO DE TAÍBA (CARD FIXO) — fora do ar a pedido (02/10/2026) */}
            {SHOW_TAIBA_CARD && (
            <a
              href="/taiba"
              className="pd-card"
              onClick={(e) => {
                e.preventDefault();
                transitionNavigate('/taiba');
              }}
            >
              <div className="pd-image-wrapper">
                <LazyImage src="/imoveis/lote-barramar-lagoa-taiba-03.webp" alt="Oportunidades em Taíba" className="pd-image" />
                <div className="pd-tag">INVESTIMENTO</div>
              </div>
              <div className="pd-content">
                <div className="pd-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Taíba, Ceará, Brasil</span>
                </div>
                <h3 className="pd-card-title">Oportunidades Exclusivas em Taíba</h3>
                <div className="pd-amenities">
                  <div className="pd-amenity">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
                    </svg>
                    A partir de 560 m²
                  </div>
                </div>
                <div className="pd-price">
                  <span style={{ fontSize: "0.6em", display: "block", fontWeight: 400, opacity: 0.8, marginBottom: "2px", lineHeight: 1, textTransform: "lowercase", letterSpacing: "0.5px" }}>
                    a partir de
                  </span>
                  R$ 110.000,00
                </div>
              </div>
            </a>
            )}

            {/* RESTANTE DOS PROJETOS */}
            {projetos.slice(8).map((projeto) => {
              const itemFromData = localizedData.find(
                (d) => d.id === projeto.id,
              );
              if (!itemFromData) return null;

              return (
                <a
                  key={projeto.id}
                  href={`/propriedade/${itemFromData.slug}`}
                  className="pd-card"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect(itemFromData);
                  }}
                >
                  <div className="pd-image-wrapper">
                    <LazyImage
                      src={projeto.image}
                      alt={itemFromData.propertyTitle}
                      className="pd-image"
                    />
                    <div className="pd-tag">{itemFromData.badge}</div>
                  </div>

                  <div className="pd-content">
                    <div className="pd-location">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      <span>{projeto.location}</span>
                    </div>

                    <h3 className="pd-card-title">
                      {itemFromData.propertyTitle}
                    </h3>

                    <div className="pd-amenities">
                      {projeto.beds && (
                        <div className="pd-amenity">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" />
                          </svg>
                          {projeto.beds}
                        </div>
                      )}
                      {projeto.baths && (
                        <div className="pd-amenity">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                            <circle cx="10" cy="9" r="2" />
                            <path d="M4 12h14" />
                            <path d="M14 9h4" />
                          </svg>
                          {projeto.baths}
                        </div>
                      )}
                      {projeto.area && (
                        <div className="pd-amenity">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M8 3v18M16 3v18M3 8h18M3 16h18" />
                          </svg>
                          {projeto.area}
                        </div>
                      )}
                    </div>

                    <div className="pd-price">
                      {(() => {
                        const p = itemFromData.price;
                        const pTag = itemFromData.priceTag;
                        // Se price está vazio mas priceTag tem valor, exibe só o priceTag
                        if (!p && !pTag) return null;
                        if (!p) return pTag;

                        // Combinamos o priceTag com o preço
                        const fullPrice = pTag ? `${pTag} ${p}` : p;

                        if (
                          fullPrice.toLowerCase().startsWith("a partir de ")
                        ) {
                          return (
                            <>
                              <span
                                style={{
                                  fontSize: "0.6em",
                                  display: "block",
                                  fontWeight: 400,
                                  opacity: 0.8,
                                  marginBottom: "2px",
                                  lineHeight: 1,
                                  textTransform: "lowercase",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                a partir de
                              </span>
                              {fullPrice.substring(12)}
                            </>
                          );
                        }
                        if (fullPrice.toLowerCase().startsWith("desde ")) {
                          return (
                            <>
                              <span
                                style={{
                                  fontSize: "0.6em",
                                  display: "block",
                                  fontWeight: 400,
                                  opacity: 0.8,
                                  marginBottom: "2px",
                                  lineHeight: 1,
                                  textTransform: "lowercase",
                                  letterSpacing: "0.5px",
                                }}
                              >
                                desde
                              </span>
                              {fullPrice.substring(6)}
                            </>
                          );
                        }
                        return fullPrice;
                      })()}
                    </div>
                    <button
                      className="pd-share-btn"
                      title={t("common.share") || "Compartilhar"}
                      onClick={async (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const shareData = {
                          title: itemFromData.propertyTitle,
                          text: `${t("common.shareText")}${itemFromData.propertyTitle}`,
                          url: `${window.location.origin}/propriedade/${itemFromData.slug}`,
                        };

                        if (navigator.share) {
                          try {
                            await navigator.share(shareData);
                          } catch (err) {
                            if ((err as Error).name !== "AbortError")
                              console.error("Error sharing:", err);
                          }
                        } else {
                          try {
                            await navigator.clipboard.writeText(shareData.url);
                            alert(t("common.linkCopied") || "Link copiado!");
                          } catch (err) {
                            console.error("Could not copy text: ", err);
                          }
                        }
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </button>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <div className="pd-progress-track">
          <div
            className="pd-progress-fill"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="pd-see-all-container">
          <button className="pd-see-all-btn" onClick={handleSeeAll}>
            {t("nav.oportunidades")}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
