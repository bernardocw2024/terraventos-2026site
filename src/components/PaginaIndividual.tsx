import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import { getOportunidadesData } from '../data/oportunidadesDataI18n';
import { buildWhatsAppUrl, trackWhatsAppClick } from '../lib/tracking';

type PaginaIndividualProps = {
  slug?: string;
  item?: OportunidadeDetalhe; // Permite passar o item via props se já tivermos, mas prioriza o slug
};

export default function PaginaIndividual({ slug, item: propItem }: PaginaIndividualProps) {
  const { t, i18n } = useTranslation();
  
  // Resolve o item com base no slug ou no propItem
  const resolvedItem = (() => {
    if (propItem && (!slug || propItem.slug === slug)) return propItem;
    
    // Se não tivermos o item ou se o slug for diferente, buscamos pelo slug
    const currentSlug = slug || window.location.pathname.split('/').pop() || '';
    const localized = getOportunidadesData(i18n.language);
    return localized.find(o => o.slug === currentSlug) || localized[0];
  })();

  const item = resolvedItem;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null);
  const [isAlbumOpen, setIsAlbumOpen] = useState(false);

  // Coleta todas as fotos disponíveis para o álbum
  const allPhotos = [
    item.gallery.main,
    item.gallery.sideTop,
    item.gallery.sideBottom,
    ...(item.gallery.extra || [])
  ];

  // SEO Update
  useEffect(() => {
    if (!item) return;

    const title = `${item.propertyTitle} | Terra Ventos`;
    const description = item.exclusiveText || item.about[0] || '';
    const imageUrl = item.image.startsWith('http') ? item.image : window.location.origin + item.image;
    const url = window.location.href;

    document.title = title;

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', imageUrl, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', imageUrl);

    return () => {
      // Reset to defaults if needed, though App.tsx will likely handle it
      document.body.style.overflow = '';
    };
  }, [item, i18n.language]);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxVideo(null);
    document.body.style.overflow = isAlbumOpen ? 'hidden' : '';
  };

  const openAlbum = () => {
    setIsAlbumOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAlbum = () => {
    setIsAlbumOpen(false);
    document.body.style.overflow = '';
  };

  const openVideo = (src: string) => {
    setLightboxVideo(src);
    document.body.style.overflow = 'hidden';
  };

  return (
    <section className="pagina-individual">
      <div className="pi-main">
        <div className={`pi-gallery ${(!item.gallery.sideTop || !item.gallery.sideBottom) ? 'pi-gallery--single' : ''}`}>
          <span className="pi-pill">{item.badge}</span>
          <img 
            src={item.gallery.main} 
            alt={`Destaque de ${item.propertyTitle}`} 
            className="pi-image-main pi-zoomable" 
            onClick={() => openLightbox(item.gallery.main)}
          />
          {item.gallery.sideTop && (
            <img 
              src={item.gallery.sideTop} 
              alt={`Imagem complementar de ${item.propertyTitle}`} 
              className="pi-image-side-top pi-zoomable" 
              onClick={() => openLightbox(item.gallery.sideTop)}
            />
          )}
          {item.gallery.sideBottom && (
            <img 
              src={item.gallery.sideBottom} 
              alt={`Mapa e dados de ${item.propertyTitle}`} 
              className="pi-image-side-bottom pi-zoomable" 
              onClick={() => openLightbox(item.gallery.sideBottom)}
            />
          )}
        </div>


        {item.gallery.extra && item.gallery.extra.length > 0 && (
          <div className="pi-gallery-secondary">
            {item.gallery.extra.slice(0, 3).map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Galeria ${idx + 4} de ${item.propertyTitle}`} 
                className="pi-image-secondary pi-zoomable" 
                onClick={() => openLightbox(img)}
              />
            ))}
          </div>
        )}

        <h1 className="pi-title reveal-title">{item.propertyTitle}</h1>
        <div className="pi-meta-wrapper">
          <p className="pi-meta">{item.location}</p>
          <button 
            className="pi-share-btn"
            title={t('common.share') || "Compartilhar"}
            onClick={async () => {
              const shareData = {
                title: item.propertyTitle,
                text: `${t('common.shareText')}${item.propertyTitle}`,
                url: window.location.href
              };

              if (navigator.share) {
                try {
                  await navigator.share(shareData);
                } catch (err) {
                  if ((err as Error).name !== 'AbortError') console.error('Error sharing:', err);
                }
              } else {
                try {
                  await navigator.clipboard.writeText(shareData.url);
                  alert(t('common.linkCopied') || 'Link copiado!');
                } catch (err) {
                  console.error('Could not copy text: ', err);
                }
              }
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            {t('common.share') || 'Compartilhar'}
          </button>
        </div>
        <p className="pi-exclusive">{item.exclusiveText}</p>

        {/* ── GALLERY STRIP BUTTON ── */}
        {allPhotos.length > 1 && (
          <button className="pi-gallery-strip" onClick={openAlbum} aria-label="Abrir galeria de fotos">
            <div className="pi-gallery-strip-previews">
              {allPhotos.slice(0, 5).map((src, idx) => (
                <div key={idx} className="pi-gallery-strip-thumb">
                  <img src={src} alt={`Preview ${idx + 1}`} />
                  {idx === 4 && allPhotos.length > 5 && (
                    <div className="pi-gallery-strip-more">
                      <span>+{allPhotos.length - 5}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="pi-gallery-strip-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span className="pi-gallery-strip-label">{t('oportunidades.viewAllPhotos')}</span>
              <span className="pi-gallery-strip-count">{allPhotos.length} fotos</span>
            </div>
          </button>
        )}

        <div className="pi-content-grid">
          <div className="pi-content-main">
            <h2 className="pi-section-title reveal-title">{t('pagina.about')}</h2>
            {item.about.map((paragraph) => (
              <p key={paragraph} className="pi-text">
                {paragraph}
              </p>
            ))}

            <h3 className="pi-section-subtitle">{t('pagina.infra')}</h3>
            <ul className="pi-infra-list">
              {item.infra.map((info) => (
                <li key={info}>
                  <svg 
                    width="22" height="22" viewBox="0 0 24 24" 
                    fill="none" stroke="var(--gold, #C4B096)" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round"
                    className="pi-check-icon"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="6" ry="6"></rect>
                    <path d="M8 12.5l2.5 2.5 5.5-6.5"></path>
                  </svg>
                  <span>{info}</span>
                </li>
              ))}
            </ul>

            <h3 className="pi-section-subtitle">{t('pagina.facilities')}</h3>
            <div className="pi-facilities">
              {item.facilities.map((facilidadeOrig) => {
                const isUnavailable = facilidadeOrig.startsWith('!');
                const facilidade = isUnavailable ? facilidadeOrig.substring(1) : facilidadeOrig;
                const getIcon = (fac: string) => {
                  const l = fac.toLowerCase();
                  if (l.includes('beira') || l.includes('praia')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2M5.6 5.6L4.2 4.2M2 12h2M5.6 18.4l-1.4 1.4M12 22v-2M18.4 18.4l1.4 1.4M22 12h-2M18.4 5.6l1.4-1.4" /><path d="M18 12c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z" /><path d="M22 22c-2.4-1.2-4.8 0-7.2 0s-4.8-1.2-7.2 0-4.8 0-7.6-1.2" /></svg>;
                  if (l.includes('ar-condicionado') || l.includes('ar condicionado')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 12V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 14v1" /><path d="M10 14v1" /><path d="M14 14v1" /><path d="M18 14v1" /></svg>;
                  if (l.includes('lavar')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M4 8h16" /><circle cx="12" cy="14" r="4" /><circle cx="12" cy="14" r="1.5" /></svg>;
                  if (l.includes('internet') || l.includes('wi-fi')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>;
                  if (l.includes('piscina')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" /></svg>;
                  if (l.includes('cozinha')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 13V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" /><path d="M4 13h10" /><path d="M10 16v4" /><path d="M18 3v18" /><path d="M15 13h6" /><circle cx="18" cy="18" r="2" /></svg>;
                  if (l.includes('estacionamento') || l.includes('vaga') || l.includes('parking')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>;
                  if (l.includes('portaria') || l.includes('segurança') || l.includes('security')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
                  if (l.includes('quarto') || l.includes('dormitorio') || l.includes('bedroom')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7V5a2 2 0 012-2h14a2 2 0 012 2v2" /><path d="M3 13h18M3 17h18M3 21h18M21 7v14M3 7v14" /></svg>;
                  if (l.includes('banheiro') || l.includes('lavabo') || l.includes('bath')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 21a2 2 0 0 1-2-2v-1h14v1a2 2 0 0 1-2 2H7z" /><path d="M18 14V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v10" /><path d="M2 14h20" /><path d="M6 20h12" /></svg>;
                  if (l.includes('projeto exclusivo') || l.includes('projeto urbanístico')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15 8.5 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 9 8.5 12 2" /></svg>;
                  if (l.includes('parcelamento') || l.includes('financiamento')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /><path d="M12 14v4" /><path d="M10 16h4" /></svg>;
                  if (l.includes('áreas verdes') || l.includes('natureza')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L4 12H8L4 20H11V24H13V20H20L16 12H20L12 2Z" /></svg>;
                  if (l.includes('pronto para construir')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 20h18L12 4z" /><path d="M7 16h10" /></svg>;
                  if (l.includes('vale')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 18l-6-6 6-6M12 2l-8 18h16L12 2z" /><path d="M12 2l-4 12h8L12 2z" /><path d="M16 18l6-6-6-6" /></svg>;
                  if (l.includes('jacuzzi') || l.includes('hidromassagem')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12s4.5-10 10-10 10 4.5 10 10z" /><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5" /><path d="M12 7v5" /></svg>;
                  if (l.includes('animais') || l.includes('pet')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm16 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM12 22a8 8 0 0 1-8-8c0-3 2-5 5-5s3 1 3 3 0 3 3 3 5-1 5 3-2 4-8 4z" /></svg>;
                  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>;
                };

                return (
                  <span key={facilidadeOrig} className={`pi-facility-chip ${isUnavailable ? 'is-unavailable' : ''}`}>
                    {getIcon(facilidade)}
                    <span className="pi-facility-text">{facilidade}</span>
                  </span>
                );
              })}
            </div>

            {item.videoSources && item.videoSources.length > 0 && (
              <div className="pi-video-gallery-v3">
                <div className="pi-section-header">
                  <h3 className="pi-section-title">{t('pagina.videoGallery') || 'Galeria de Vídeos'}</h3>
                </div>
                
                <div className="pi-video-grid-v3">
                  {item.videoSources.map((src, idx) => {
                    const vimeoId = src.split('/video/')[1]?.split('?')[0];
                    const thumbUrl = vimeoId 
                      ? `https://vumbnail.com/${vimeoId}.jpg` 
                      : item.gallery.main;

                    return (
                      <div 
                        key={idx} 
                        className="pi-video-card-v3"
                        onClick={() => openVideo(src)}
                      >
                        <div className="pi-video-card-thumb">
                          <img src={thumbUrl} alt={`V\u00CDDEO ${idx + 1}`} />
                          <div className="pi-video-card-overlay">
                            <div className="pi-video-play-btn">
                              <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {item.videoGalleryCredits && (
                  <p className="pi-video-credits" style={{ marginTop: '16px', fontSize: '0.9rem', opacity: 0.7 }}>
                    {item.videoGalleryCredits}
                  </p>
                )}
              </div>
            )}

            {item.documents && item.documents.length > 0 && (
              <div className="pi-documents-section">
                <div className="pi-section-header">
                  <h3 className="pi-section-title">{t('pagina.downloadTitle') || 'Baixar Material'}</h3>
                  <p className="pi-section-description">{t('pagina.downloadDesc') || 'Acesse os arquivos oficiais do empreendimento.'}</p>
                </div>
                <div className="pi-documents-grid">
                  {item.documents.map((doc, idx) => (
                    <div key={idx} className="pi-document-card">
                      <div className="pi-document-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                      <div className="pi-document-info">
                        <h4 className="pi-document-label">{doc.label}</h4>
                        <p className="pi-document-legend">{doc.legend}</p>
                      </div>
                      <a 
                        href={doc.url} 
                        className="pi-document-download"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('pagina.viewPdf') || 'Visualizar PDF'}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="pi-content-side">
            <div className="pi-card">
              <span className="pi-card-tag">{item.priceTag}</span>
              <p className="pi-price">{item.price}</p>
              
              <div className="pi-card-divider"></div>

              <div className="pi-avatars-center">
                <img src="/mulher.jpg" alt="Avatar 1" />
                <img src="/pessoa2.avif" alt="Avatar 2" />
                <img src="/pessoa3.avif" alt="Avatar 3" />
              </div>
              <p className="pi-experience-text">
                {t('hero.card.experience').replace('\n', ' ')}
              </p>
              <div className="pi-stars">
                ★★★★★
              </div>
              
              {item.reservationUrl ? (
                <>
                  <p className="pi-contact-text">
                    {t('pagina.reservationNotice') || 'Fa\u00E7a a cota\u00E7\u00E3o direto na plataforma de reserva'}
                  </p>
                  <a 
                    href={item.reservationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="pi-cta pi-cta--airbnb"
                  >
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
                      <path d="M16 3.328c-1.014 0-1.875.781-2.422 2.375-1.578 4.609-3.328 10.375-6.859 13.906a5.776 5.776 0 0 0-1.703 4.094c0 3.25 2.641 5.906 5.906 5.906 1.813 0 2.453-.781 3.422-1.813.438.453 1.156 1.047 1.656 1.047.5 0 1.25-.594 1.656-1.047.969 1.031 1.609 1.813 3.422 1.813 3.266 0 5.906-2.656 5.906-5.906 0-1.547-.625-3-1.703-4.094-3.531-3.531-5.281-9.297-6.859-13.906-.547-1.594-1.406-2.375-2.422-2.375zm0 2.016c.453 0 .906.516 1.25 1.516 1.531 4.469 3.203 10.078 6.547 13.422.844.859 1.344 2.016 1.344 3.25 0 2.141-1.75 3.891-3.891 3.891-1.047 0-1.375-.406-2.141-1.188l-.516-.547-.516.547c-.766.781-1.094 1.188-2.141 1.188l-.016-.016c-1.047 0-1.375-.406-2.141-1.188l-.516-.547-.516.547c-.766.781-1.094 1.188-2.141 1.188-2.141 0-3.891-1.75-3.891-3.891 0-1.234.5-2.391 1.344-3.25 3.344-3.344 5.016-8.953 6.547-13.422.344-1 .797-1.516 1.25-1.516z"/>
                    </svg>
                    {t('pagina.bookAirbnb') || 'Link para o Airbnb'}
                  </a>
                </>
              ) : (
                <>
                  <p className="pi-contact-text">
                    {t('pagina.contact')}
                  </p>
                  <a
                    href={buildWhatsAppUrl({ ref: item.slug })}
                    onClick={() => trackWhatsAppClick(item.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pi-cta"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    {t('pagina.cta')}
                  </a>
                </>
              )}
            </div>
          </aside>
        </div>

        <h3 className="pi-section-subtitle">{t('pagina.location')}</h3>
        <div className="pi-map-wrapper">
          {item.mapUrl ? (
            <iframe
              src={item.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Mapa de localização para ${item.propertyTitle}`}
            />
          ) : (
            <img src={item.mapImage} alt={`Mapa da localizacao de ${item.propertyTitle}`} className="pi-map" />
          )}
        </div>
      </div>

      {(lightboxImage || lightboxVideo) && createPortal(
        <div className="pi-lightbox" onClick={closeLightbox}>
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          {lightboxImage && (
            <img 
              src={lightboxImage} 
              alt="Visualização ampliada" 
              className="pi-lightbox-img" 
              onClick={(e) => e.stopPropagation()} 
            />
          )}

          {lightboxVideo && (
            <div className="pi-lightbox-video-container" onClick={(e) => e.stopPropagation()}>
              <iframe
                src={`${lightboxVideo}${lightboxVideo.includes('?') ? '&' : '?'}title=0&byline=0&portrait=0&badge=0&autoplay=1&dnt=1`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Full Screen Video"
              />
            </div>
          )}
        </div>,
        document.body
      )}

      {isAlbumOpen && createPortal(
        <div className="pi-album-modal">
          <div className="pi-album-header">
            <button className="pi-album-back" onClick={closeAlbum} aria-label="Voltar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <div className="pi-album-info">
              <h3>{item.propertyTitle}</h3>
              <span>{allPhotos.length} fotos</span>
            </div>
          </div>
          
          <div className="pi-album-content">
            <div className="pi-album-grid">
              {allPhotos.map((src, idx) => (
                <div key={idx} className="pi-album-item" onClick={() => openLightbox(src)}>
                  <img src={src} alt={`Foto ${idx + 1}`} loading="lazy" />
                  <div className="pi-album-item-overlay">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      <line x1="11" y1="8" x2="11" y2="14"></line>
                      <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
