import { useState } from "react";
import "./VillaCondudu.css";
import { useTranslation } from "react-i18next";
import type { OportunidadeDetalhe } from "../data/oportunidadesData";
import { getOportunidadesData } from "../data/oportunidadesDataI18n";
import LazyImage from "./LazyImage";

type VillaConduduProps = {
  onSelect: (item: OportunidadeDetalhe) => void;
};

export default function VillaCondudu({ onSelect }: VillaConduduProps) {
  const { t, i18n } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const tags = t("condudu.tags", { returnObjects: true }) as string[];
  const conduduLocalized =
    getOportunidadesData(i18n.language).find((o) => o.id === "01") ||
    getOportunidadesData(i18n.language)[0];

  const sliderImages = [
    "/VillaCondutuPaginaInicial/Final 01 (2).png",
    "/VillaCondutuPaginaInicial/FINAL 02 (1).png",
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  return (
    <section id="villa-condudu" className="condudu-section">
      <div className="condudu-container">
        <div className="condudu-media">
          <span className="condudu-pill">{t("condudu.badge")}</span>
          <div className="condudu-image-wrapper">
            {sliderImages.map((src, idx) => (
              <LazyImage
                key={src}
                src={src}
                alt={`Vila Conduru III - Imagem ${idx + 1}`}
                className={`condudu-image ${idx === activeSlide ? "active" : ""}`}
              />
            ))}

            <div className="condudu-slider-nav">
              <button
                className="condudu-slider-arrow prev"
                onClick={handlePrev}
                aria-label="Anterior"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                className="condudu-slider-arrow next"
                onClick={handleNext}
                aria-label="Próximo"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>

            <div className="condudu-slider-dots">
              {sliderImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`condudu-dot ${idx === activeSlide ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(idx);
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="condudu-content">
          <h2
            className="condudu-title reveal-heading"
            dangerouslySetInnerHTML={{ __html: t("condudu.title") }}
          ></h2>

          <p className="condudu-subtitle reveal-subtext">
            {t("condudu.subtitle")}
          </p>

          <div
            className="condudu-tags reveal-subtext"
            style={{ transitionDelay: "0.45s" }}
          >
            {tags.map((tag: string, i: number) => (
              <span key={i} className="condudu-tag">
                {tag}
              </span>
            ))}
          </div>

          <div
            className="condudu-price-line reveal-subtext"
            style={{ transitionDelay: "0.5s" }}
          >
            <span className="condudu-price">
              {conduduLocalized.priceTag} {conduduLocalized.price}
            </span>
            <span className="condudu-price-note">{t("condudu.priceNote")}</span>
          </div>

          <a
            href={`/propriedade/${conduduLocalized.slug}`}
            className="condudu-cta reveal-cta"
            onClick={(e) => {
              e.preventDefault();
              onSelect(conduduLocalized);
            }}
          >
            {t("condudu.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
