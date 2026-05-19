import { useRef, useState, useEffect } from "react";
import "./ProjetosDestaque.css";
import { useTranslation } from "react-i18next";
import { type OportunidadeDetalhe } from "../data/oportunidadesData";
import { getOportunidadesData } from "../data/oportunidadesDataI18n";
import LazyImage from "./LazyImage";

type ProjetosDestaqueProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

const projetos = [
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
    image: "/TATAJUBA/WhatsApp Image 2026-04-23 at 18.35.22.jpeg",
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
    image: "/prea oportunidade/WhatsApp Image 2026-04-21 at 09.32.47.jpeg",
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
    image: "/Prea House/WhatsApp Image 2026-04-20 at 09.12.53.jpeg",
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
    image: "/VILLA_PRABHU/WhatsApp Image 2026-04-01 at 14.58.56 (3).jpeg",
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
    image: "/bitupitaPaginaIndividual/DJI_20251020023318_0221_D.jpg",
    tag: "VENDA",
    location: "Bitupitá, Ceará, Brasil",
    title: "Terrenos em Bitupitá",
    area: "4.300 m²",
    beds: null,
    baths: null,
    price: "A partir de R$ 120 MIL",
    detailIndex: 3,
  },
  {
    id: "03",
    image: "/viladoinglesPaginaInicial/Final 04 (1).png",
    tag: "INVESTIMENTO",
    location: "Preá, Ceará, Brasil",
    title: "Vila do Inglês",
    area: "200 m²",
    beds: null,
    baths: null,
    price: "Em Breve",
    detailIndex: 4,
  },
  {
    id: "05",
    image: "/Matanzas/WhatsApp Image 2026-04-30 at 17.39.11 (3).jpeg",
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
    image: "/VillaCondutuPaginaInicial/FINAL 14.png",
    tag: "TEMPORADA",
    location: "FRENTE À PRAIA DO PREÁ",
    title: "CASA ALTO PADRÃO 3 SUÍTES",
    area: "153 m²",
    beds: 3,
    baths: 3,
    price: "Consulte",
    detailIndex: 2,
  },
];

export default function ProjetosDestaque({ onSelect }: ProjetosDestaqueProps) {
  const { t, i18n } = useTranslation();
  const localizedData = getOportunidadesData(i18n.language);
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
    window.dispatchEvent(
      new CustomEvent("navigate", { detail: "/propriedades" }),
    );
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
            {projetos.map((projeto) => {
              const itemFromData = localizedData.find(
                (d) => d.id === projeto.id,
              );
              if (!itemFromData) return null; // Skip if not found in master data

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
