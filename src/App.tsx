import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Oportunidades from "./components/Oportunidades";
import ProjetosDestaque from "./components/ProjetosDestaque";
import VillaCondudu from "./components/VillaCondudu";
import Cidades from "./components/Cidades";
import EstudoVentos from "./components/EstudoVentos";
import Mapa from "./components/Mapa";
import Assessoria from "./components/Assessoria";
import Depoimentos from "./components/Depoimentos";
import FormularioLuxo from "./components/FormularioLuxo";
import Footer from "./components/Footer";
import PaginaIndividual from "./components/PaginaIndividual";
import VentoAfavor from "./components/VentoAfavor";
import PaginaInstitucional from "./components/PaginaInstitucional";
import {
  oportunidadesData,
  type OportunidadeDetalhe,
} from "./data/oportunidadesData";
import { getOportunidadesData } from "./data/oportunidadesDataI18n";
import ListagemPropriedades from "./components/ListagemPropriedades";
import BlogSection from "./components/BlogSection";
import LazyImage from "./components/LazyImage";
import PaginaTaiba from "./components/PaginaTaiba";
import PropriedadesV2 from "./components/PropriedadesV2";
import PaginaIndividualV2 from "./components/PaginaIndividualV2";

function App() {
  const { t, i18n } = useTranslation();
  const [currentPath, setCurrentPath] = useState(() =>
    window.location.pathname.toLowerCase(),
  );
  const [selectedOpportunity, setSelectedOpportunity] =
    useState<OportunidadeDetalhe>(() => {
      const path = window.location.pathname.toLowerCase();
      const cleanPath = path.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";
      if (cleanPath.startsWith("/propriedade/")) {
        let slug = cleanPath
          .replace("/propriedade/", "")
          .split("?")[0]
          .split("#")[0];
        if (slug.endsWith("/")) slug = slug.slice(0, -1);
        const found = oportunidadesData.find((o) => o.slug === slug);
        if (found) {
          const lang = (i18n.language || "pt").split("-")[0];
          const localized = getOportunidadesData(lang);
          return localized.find((d) => d.id === found.id) || found;
        }
      }
      return oportunidadesData[0];
    });
  const cleanPath = currentPath.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";
  const isPaginaIndividual = cleanPath.startsWith("/propriedade/") || cleanPath.startsWith("/propriedade-v2/");
  const isVentoAfavor = cleanPath === "/ventoafavor";
  const [transitionClass, setTransitionClass] = useState<
    "page-enter" | "page-exit"
  >("page-enter");
  const [previousPath, setPreviousPath] = useState<string>("/");
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const isSwitchingRef = useRef(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    "/banners/2.png",
    "/banners/3.png",
    "/banners/4.png",
    "/banners/5.png",
  ] as const;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Anti-FOUC: marca o root como pronto assim que o React monta e os estilos estão aplicados
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      // rAF garante que o browser já pintou o primeiro frame com os estilos corretos
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.add("app-ready");
        });
      });
    }
  }, []);

  const handleLanguageChangeDirectly = (newLang: string) => {
    i18n.changeLanguage(newLang);
    // Update the displayed individual page data when language switches
    const localized = getOportunidadesData(newLang);
    const match = localized.find((d) => d.id === selectedOpportunity.id);
    if (match) setSelectedOpportunity(match);
  };

  const runTransitionTo = (nextPath: string, pushHistory = true) => {
    if (isSwitchingRef.current) return;

    isSwitchingRef.current = true;
    setTransitionClass("page-exit");

    window.setTimeout(() => {
      if (
        pushHistory &&
        window.location.pathname.toLowerCase() !== nextPath.toLowerCase()
      ) {
        window.history.pushState({}, "", nextPath);
      }

      const normalizedPath = nextPath.toLowerCase();
      setCurrentPath(normalizedPath);

      const cleanNormalized = normalizedPath.replace(/^\/(en|es)/, "").replace(/\/$/, "") || "/";
      if (cleanNormalized.startsWith("/propriedade/")) {
        let slug = cleanNormalized
          .replace("/propriedade/", "")
          .split("?")[0]
          .split("#")[0];
        if (slug.endsWith("/")) slug = slug.slice(0, -1);
        const baseItem = oportunidadesData.find((o) => o.slug === slug);
        if (baseItem) {
          const localized = getOportunidadesData(i18n.language);
          const localizedItem =
            localized.find((d) => d.id === baseItem.id) || baseItem;
          setSelectedOpportunity(localizedItem);
        }
      }

      window.scrollTo({ top: 0, behavior: "auto" });
      setTransitionClass("page-enter");

      window.setTimeout(() => {
        isSwitchingRef.current = false;
      }, 620);
    }, 280);
  };

  useEffect(() => {
    const handlePopState = () => {
      runTransitionTo(window.location.pathname, false);
    };

    const handleNavigate = (e: any) => {
      runTransitionTo(e.detail);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("navigate", handleNavigate);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("navigate", handleNavigate);
    };
  }, [i18n.language]); // Re-subscribe if language changes to ensure correct data finding

  const scrollToSection = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (!section) return;

    const headerOffset = 96;
    const rect = section.getBoundingClientRect();
    const targetY = rect.top + window.scrollY - headerOffset;

    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(".main-content section"),
    ).filter(
      (section) =>
        !section.classList.contains("hero") &&
        !section.classList.contains("pagina-individual") &&
        section.dataset.revealManaged !== "true",
    );

    const resolveRevealType = (section: HTMLElement) => {
      if (section.classList.contains("beach-banner")) return "soft-zoom";
      if (section.id === "oportunidades") return "slide-left";
      if (section.id === "projetos") return "slide-right";
      if (section.id === "regioes") return "lift";
      if (section.id === "propriedades") return "soft-zoom";
      if (section.id === "estudo") return "slide-left";
      if (section.id === "mapa") return "soft-zoom";
      if (section.id === "assessoria") return "lift";
      if (section.id === "depoimentos") return "slide-right";
      if (section.id === "contato") return "soft-zoom";
      return "lift";
    };

    sections.forEach((section, index) => {
      section.classList.add("is-reveal");
      section.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * 55, 280)}ms`,
      );
      section.dataset.reveal = resolveRevealType(section);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      sections.forEach((section) => {
        section.classList.remove("is-reveal", "is-visible");
        section.style.removeProperty("--reveal-delay");
        delete section.dataset.reveal;
      });
    };
  }, [currentPath]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 12000);
    return () => window.clearInterval(intervalId);
  }, []);

  // Global SEO Reset for non-individual pages
  useEffect(() => {
    if (isPaginaIndividual) return;

    // Skip global reset for institutional pages as they manage their own SEO
    const isInstitutional = [
      "/quem-somos",
      "/termos-e-condicoes",
      "/politica-de-privacidade",
      "/contato",
      "/ventoafavor"
    ].includes(cleanPath);
    if (isInstitutional) return;

    const title = "Terra Ventos | Imóveis de Luxo e Investimentos no Ceará";
    const description =
      "Curadoria exclusiva de imóveis de alto padrão e oportunidades de investimento no litoral cearense (Preá, Tatajuba, Bitupitá).";
    const imageUrl = `${window.location.origin}/banners/2.png`;
    const url = window.location.origin + currentPath;

    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    updateMeta("description", description);
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:image", imageUrl, true);
    updateMeta("og:url", url, true);
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);
    updateMeta("twitter:image", imageUrl);
  }, [currentPath, cleanPath, isPaginaIndividual, t]);

  // Hreflang tags for SEO — indicam versões em outros idiomas
  useEffect(() => {
    const baseUrl = window.location.origin;
    const path = currentPath;


    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());

    const languages = ["pt-BR", "en", "es"];
    languages.forEach((lang) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${baseUrl}${path}`;
      document.head.appendChild(link);
    });

    // x-default
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${baseUrl}${path}`;
    document.head.appendChild(xDefault);

    // ✅ Canônica — sempre atualiza o href, nunca cria duplicada
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${path}`;
  }, [currentPath, i18n.language]);

  const handleSelectOpportunity = (item: OportunidadeDetalhe) => {
    setPreviousPath(currentPath); // save where we came from
    runTransitionTo(`/propriedade/${item.slug}`);
  };

  // Rota /ventoafavor — fullscreen sem header/footer, com botão de retorno flutuante
  if (isVentoAfavor) {
    return <VentoAfavor onBack={() => runTransitionTo("/")} />;
  }

  return (
    <div className="app-container">
      <header className="header">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {isPaginaIndividual && (
            <button
              className="header-back-button"
              onClick={() => runTransitionTo(previousPath || "/")}
              aria-label={t("pagina.back") || "Voltar"}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
          )}
          <a href="/" className="brand">
            <LazyImage
              src="/logo.avif"
              alt="Terra Ventos"
              className="brand-logo"
              priority
            />
          </a>
        </div>

        <nav className="nav-links">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              runTransitionTo("/");
            }}
          >
            {t("nav.inicio")}
          </a>
          <a
            href="/propriedades"
            onClick={(e) => {
              e.preventDefault();
              runTransitionTo("/propriedades");
            }}
          >
            {t("nav.oportunidades")}
          </a>
          <a
            href="#projetos"
            onClick={(e) => {
              e.preventDefault();
              if (cleanPath === "/") {
                scrollToSection("projetos");
              } else {
                runTransitionTo("/");
                window.setTimeout(() => scrollToSection("projetos"), 950);
              }
            }}
          >
            {t("nav.projetos")}
          </a>
          <a
            href="#estudo"
            onClick={(e) => {
              e.preventDefault();
              if (!isPaginaIndividual) {
                scrollToSection("estudo");
              } else {
                runTransitionTo("/");
                window.setTimeout(() => scrollToSection("estudo"), 950);
              }
            }}
          >
            {t("nav.estudo")}
          </a>
          <a
            href="#regioes"
            onClick={(e) => {
              e.preventDefault();
              if (!isPaginaIndividual) {
                scrollToSection("regioes");
              } else {
                runTransitionTo("/");
                window.setTimeout(() => scrollToSection("regioes"), 950);
              }
            }}
          >
            {t("nav.regioes")}
          </a>
          <a
            href="/ventoafavor"
            className="nav-comunidade-link"
            onClick={(e) => {
              e.preventDefault();
              runTransitionTo("/ventoafavor");
            }}
          >
            {t("nav.comunidade")}
          </a>
          <a
            href="https://www.instagram.com/terraventos/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Terra Ventos"
          >
            <svg
              className="nav-instagram-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3zm10.25 1.5a1.25 1.25 0 0 0-1.25 1.25c0 .69.56 1.25 1.25 1.25.69 0 1.25-.56 1.25-1.25 0-.69-.56-1.25-1.25-1.25zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
              />
            </svg>
          </a>
        </nav>

        {/* Language selector — outside nav so it stays visible on mobile */}
        <div className="language-selector-wrapper" ref={langRef}>
          <button
            className="language-selector-trigger"
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Selecionar idioma"
          >
            {(i18n.language || "pt").split("-")[0] === "pt" && (
              <img
                src="https://flagcdn.com/w20/br.png"
                alt="BR"
                className="lang-flag"
              />
            )}
            {(i18n.language || "pt").split("-")[0] === "en" && (
              <img
                src="https://flagcdn.com/w20/us.png"
                alt="US"
                className="lang-flag"
              />
            )}
            {(i18n.language || "pt").split("-")[0] === "es" && (
              <img
                src="https://flagcdn.com/w20/es.png"
                alt="ES"
                className="lang-flag"
              />
            )}
            <span className="lang-label">
              {(i18n.language || "pt").split("-")[0].toUpperCase()}
            </span>
            <svg
              className={`lang-arrow ${isLangOpen ? "open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>

          {isLangOpen && (
            <div className="language-dropdown">
              <button
                onClick={() => {
                  i18n.changeLanguage("pt");
                  handleLanguageChangeDirectly("pt");
                  setIsLangOpen(false);
                }}
              >
                <img src="https://flagcdn.com/w20/br.png" alt="PT" />{" "}
                <span>Português</span>
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("en");
                  handleLanguageChangeDirectly("en");
                  setIsLangOpen(false);
                }}
              >
                <img src="https://flagcdn.com/w20/us.png" alt="EN" />{" "}
                <span>English</span>
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("es");
                  handleLanguageChangeDirectly("es");
                  setIsLangOpen(false);
                }}
              >
                <img src="https://flagcdn.com/w20/es.png" alt="ES" />{" "}
                <span>Español</span>
              </button>
            </div>
          )}
        </div>

        <button
          className="header-contact-button"
          type="button"
          onClick={() => {
            if (!isPaginaIndividual) {
              scrollToSection("contato");
            } else {
              runTransitionTo("/");
              window.setTimeout(() => scrollToSection("contato"), 950);
            }
          }}
        >
          <span className="contact-dot"></span>
          {t("nav.contato")}
          <svg
            className="contact-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </button>
      </header>

      <main className="main-content">
        <div className={`page-shell ${transitionClass}`}>
          {/* SEO H1 - Visually hidden but accessible to crawlers */}
          <h1 className="sr-only">
            Terra Ventos | Imóveis de Luxo e Investimentos no Ceará
          </h1>
          {cleanPath.startsWith("/propriedade-v2/") ? (
            <PaginaIndividualV2 slug={cleanPath.replace("/propriedade-v2/", "").split("?")[0].split("#")[0].replace(/\/$/, "")} />
          ) : isPaginaIndividual ? (
            <PaginaIndividual item={selectedOpportunity} />
          ) : cleanPath === "/propriedades" ? (
            <div id="propriedades">
              <ListagemPropriedades
                items={getOportunidadesData(i18n.language)}
                onSelect={handleSelectOpportunity}
              />
            </div>) : cleanPath === "/propriedades-v2" ? (
            <div id="propriedades-v2">
              <PropriedadesV2 />
            </div>
          ) : cleanPath === "/taiba" ? (
            <div id="taiba">
              <PaginaTaiba />
            </div>
          ) : ["/quem-somos", "/termos-e-condicoes", "/politica-de-privacidade", "/contato"].includes(cleanPath) ? (
            <PaginaInstitucional
              pageType={cleanPath.substring(1) as any}
              onBack={() => runTransitionTo(previousPath || "/")}
            />
          ) : (
            <>
              <div className="hero-background">
                <section className="hero" id="inicio">
                  <div className="hero-slides" aria-hidden="true">
                    {heroSlides.map((src, index) => {
                      const isActive = index === heroSlideIndex;
                      return (
                        <div
                          key={src}
                          className={`hero-slide ${isActive ? "is-active" : ""}`}
                          style={{ backgroundImage: `url('${src}')` }}
                        />
                      );
                    })}
                  </div>
                  <div className="hero-overlay" aria-hidden="true" />

                  {/* Manual toggles for hero slides */}
                  <div className="hero-nav-arrows">
                    <button
                      className="hero-nav-arrow prev"
                      onClick={() =>
                        setHeroSlideIndex(
                          (prev) =>
                            (prev - 1 + heroSlides.length) % heroSlides.length,
                        )
                      }
                      aria-label="Anterior"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>
                    <button
                      className="hero-nav-arrow next"
                      onClick={() =>
                        setHeroSlideIndex(
                          (prev) => (prev + 1) % heroSlides.length,
                        )
                      }
                      aria-label="Próximo"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>

                  <div className="hero-text-container">
                    {[0, 1, 2, 3].map((index) => {
                      const titles = t("hero.titles", {
                        returnObjects: true,
                      }) as string[];
                      const subtitles = t("hero.subtitles", {
                        returnObjects: true,
                      }) as string[];
                      const tags = t("hero.tags", {
                        returnObjects: true,
                      }) as string[];
                      const isActive = heroSlideIndex === index;

                      return (
                        <div
                          key={index}
                          className={`hero-content-group ${isActive ? "is-active" : ""}`}
                        >
                          <div className="hero-tag">{tags[index]}</div>
                          <h2
                            className="hero-title"
                            dangerouslySetInnerHTML={{ __html: titles[index] }}
                          />
                          <p
                            className="hero-subtitle"
                            dangerouslySetInnerHTML={{
                              __html: subtitles[index],
                            }}
                          />

                          {/* Slide-specific CTA: only one button now, using the secondary (glass) style */}
                          <div className="hero-cta-wrapper">
                            <button
                              className="cta-button secondary"
                              type="button"
                              onClick={() => {
                                if (index === 1) {
                                  const bitupita = oportunidadesData.find(
                                    (o) => o.id === "02",
                                  );
                                  if (bitupita)
                                    handleSelectOpportunity(bitupita);
                                } else if (index === 0) {
                                  scrollToSection("estudo");
                                } else if (index === 2) {
                                  scrollToSection("regioes");
                                } else {
                                  if (!isPaginaIndividual) {
                                    scrollToSection("contato");
                                  } else {
                                    runTransitionTo("/");
                                    window.setTimeout(
                                      () => scrollToSection("contato"),
                                      950,
                                    );
                                  }
                                }
                              }}
                            >
                              {(() => {
                                if (index === 0) return t("estudo.cta");
                                if (index === 1) {
                                  const found = getOportunidadesData(
                                    i18n.language,
                                  ).find((o) => o.id === "02");
                                  return found ? found.badge : "Venda";
                                }
                                if (index === 2) return t("nav.regioes");
                                return t("hero.saberMais");
                              })()}
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="floating-card">
                    <div className="avatars">
                      <img src="/mulher.jpg" alt="Avatar 1" />
                      <img src="/pessoa2.avif" alt="Avatar 2" />
                      <img src="/pessoa3.avif" alt="Avatar 3" />
                    </div>
                    <div className="card-info">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: t("hero.card.experience").replace(
                            "\n",
                            "<br />",
                          ),
                        }}
                      ></p>
                      <div className="stars">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* SEO: Conteúdo descritivo visível para buscadores e leitores */}
              <section className="seo-intro-content">
                <div className="seo-intro-container">
                  <p>
                    {t("seo.intro")}
                  </p>
                </div>
              </section>

              <Oportunidades onSelect={handleSelectOpportunity} />

              <section className="beach-banner"></section>

              <ProjetosDestaque onSelect={handleSelectOpportunity} />

              <VillaCondudu onSelect={handleSelectOpportunity} />

              <Cidades />

              <EstudoVentos />
              <BlogSection />

              <Mapa />

              <Assessoria />

              <section className="beach-banner beach-banner--dji"></section>
              <Depoimentos />
              <FormularioLuxo />
            </>
          )}
          <Footer />
        </div>
      </main>
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/5585985572807"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fixed-button"
        aria-label={t("pagina.whatsapp") || "Fale conosco pelo WhatsApp"}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.072.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span>{t("pagina.whatsapp") || "Fale conosco"}</span>
      </a>
    </div>
  );
}

export default App;
