import React, { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';

/* ─── Types ────────────────────────────────────────────────────── */

interface PropertyI18n {
  title: string;
  badge: string;
  propertyTitle: string;
  location: string;
  exclusiveText: string;
  summaryDescription: string;
  about: string[];
  infra: string[];
  facilities: string[];
  priceTag: string;
  price: string;
  installments: string;
  documents?: { label: string; url: string; legend: string }[] | null;
}

interface PropertyData {
  id: string;
  slug: string;
  category: string;
  rating: number;
  image: string;
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
    extra: string[];
  };
  mapImage: string;
  mapUrl: string;
  videoSources: string[];
  videoGalleryCredits: string | null;
  documents: { label: string; url: string; legend: string }[];
  reservationUrl: string | null;
  i18n: {
    pt: PropertyI18n;
    en: PropertyI18n;
    es: PropertyI18n;
    [key: string]: PropertyI18n;
  };
}

interface ResolvedProperty {
  id: string;
  slug: string;
  category: string;
  rating: number;
  image: string;
  gallery: {
    main: string;
    sideTop: string;
    sideBottom: string;
    extra: string[];
  };
  mapImage: string;
  mapUrl: string;
  videoSources: string[];
  videoGalleryCredits: string | null;
  documents: { label: string; url: string; legend: string }[];
  reservationUrl: string | null;
  title: string;
  badge: string;
  propertyTitle: string;
  location: string;
  exclusiveText: string;
  summaryDescription: string;
  about: string[];
  infra: string[];
  facilities: string[];
  priceTag: string;
  price: string;
  installments: string;
}

/* ─── Resolve helper ───────────────────────────────────────────── */

function resolveProperty(property: PropertyData, lang: string): ResolvedProperty {
  const baseLang = lang.split('-')[0];
  const langData = property.i18n[baseLang] || property.i18n.pt;
  return {
    id: property.id,
    slug: property.slug,
    category: property.category,
    rating: property.rating,
    image: property.image,
    gallery: property.gallery,
    mapImage: property.mapImage,
    mapUrl: property.mapUrl,
    videoSources: property.videoSources || [],
    videoGalleryCredits: property.videoGalleryCredits,
    documents: langData.documents || property.documents || [],
    reservationUrl: property.reservationUrl,
    title: langData.title,
    badge: langData.badge,
    propertyTitle: langData.propertyTitle,
    location: langData.location,
    exclusiveText: langData.exclusiveText,
    summaryDescription: langData.summaryDescription,
    about: langData.about,
    infra: langData.infra,
    facilities: langData.facilities,
    priceTag: langData.priceTag,
    price: langData.price,
    installments: langData.installments,
  };
}

/* ─── Facility icon mapping ────────────────────────────────────── */

function getIcon(name: string): React.ReactNode {
  const n = name.toLowerCase();

  if (n.includes('piscina') || n.includes('pool'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
        <path d="M2 16c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
        <path d="M8 16V4a2 2 0 0 1 4 0v1" />
        <path d="M16 16V8a2 2 0 0 1 4 0v1" />
      </svg>
    );

  if (n.includes('churrasqueira') || n.includes('bbq') || n.includes('barbecue') || n.includes('grill') || n.includes('parrilla'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M12 3v3" />
        <path d="M8 3v3" />
        <path d="M16 3v3" />
        <path d="M4 12a8 8 0 0 0 16 0" />
        <path d="M8 20l-2 2" />
        <path d="M16 20l2 2" />
      </svg>
    );

  if (n.includes('estacionamento') || n.includes('garagem') || n.includes('parking') || n.includes('garage') || n.includes('estacionamiento'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </svg>
    );

  if (n.includes('wifi') || n.includes('wi-fi') || n.includes('internet'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 13a10 10 0 0 1 14 0" />
        <path d="M8.5 16.5a5 5 0 0 1 7 0" />
        <path d="M2 9.5a15 15 0 0 1 20 0" />
        <circle cx="12" cy="20" r="1" />
      </svg>
    );

  if (n.includes('ar condicionado') || n.includes('ar-condicionado') || n.includes('air conditioning') || n.includes('climatización') || n.includes('a/c'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v10" />
        <path d="M18.5 7.5L12 12 5.5 7.5" />
        <path d="M2 17h20" />
        <path d="M6 21l2-4" />
        <path d="M18 21l-2-4" />
        <path d="M12 17v4" />
      </svg>
    );

  if (n.includes('cozinha') || n.includes('kitchen') || n.includes('cocina'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    );

  if (n.includes('quarto') || n.includes('suite') || n.includes('suíte') || n.includes('bedroom') || n.includes('dormitorio') || n.includes('habitación'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M2 20h20" />
        <path d="M2 16h20" />
      </svg>
    );

  if (n.includes('banheiro') || n.includes('bathroom') || n.includes('baño'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z" />
        <path d="M6 12V5a2 2 0 0 1 2-2h1" />
        <path d="M7 20v2" />
        <path d="M17 20v2" />
      </svg>
    );

  if (n.includes('jardim') || n.includes('garden') || n.includes('jardín') || n.includes('área verde') || n.includes('green area'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-7" />
        <path d="M7 15a5 5 0 0 1 5-5 5 5 0 0 1 5 5" />
        <path d="M5 10a7 7 0 0 1 7-7 7 7 0 0 1 7 7" />
      </svg>
    );

  if (n.includes('segurança') || n.includes('seguridad') || n.includes('security') || n.includes('portaria') || n.includes('vigilancia'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );

  if (n.includes('varanda') || n.includes('terraço') || n.includes('sacada') || n.includes('balcony') || n.includes('terrace') || n.includes('terraza') || n.includes('balcón'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 14h20" />
        <path d="M7 4v16" />
        <path d="M12 4v16" />
        <path d="M17 4v16" />
      </svg>
    );

  if (n.includes('lavanderia') || n.includes('laundry') || n.includes('lavadero'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="13" r="5" />
        <circle cx="12" cy="13" r="2" />
        <path d="M7 7h.01" />
        <path d="M10 7h.01" />
      </svg>
    );

  if (n.includes('sauna'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2s2 2 2 5-2 5-2 5" />
        <path d="M12 2s2 2 2 5-2 5-2 5" />
        <path d="M16 2s2 2 2 5-2 5-2 5" />
        <rect x="3" y="14" width="18" height="8" rx="2" />
      </svg>
    );

  if (n.includes('academia') || n.includes('gym') || n.includes('fitness') || n.includes('gimnasio'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 6.5L17.5 17.5" />
        <path d="M3 10l2-2 2 2" />
        <path d="M17 14l2 2 2-2" />
        <path d="M3 14l2 2 2-2" />
        <path d="M17 10l2-2 2 2" />
      </svg>
    );

  if (n.includes('vista') || n.includes('view'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );

  if (n.includes('praia') || n.includes('beach') || n.includes('playa') || n.includes('mar') || n.includes('beira-mar') || n.includes('beachfront'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.7 7.7a7.5 7.5 0 1 0-11.4 0" />
        <path d="M12 2v5" />
        <path d="M2 21l3-3 3 3 3-3 3 3 3-3 3 3" />
        <path d="M12 7l-5 14" />
        <path d="M12 7l5 14" />
      </svg>
    );

  if (n.includes('área gourmet') || n.includes('gourmet') || n.includes('espaço gourmet'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    );

  if (n.includes('pet') || n.includes('animal') || n.includes('mascota'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="4" cy="8" r="2" />
        <path d="M12 18c-4 0-6-2-6-6 0-2 2-4 6-4s6 2 6 4c0 4-2 6-6 6z" />
      </svg>
    );

  if (n.includes('elevador') || n.includes('elevator') || n.includes('ascensor'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 3v18" />
        <path d="M7 9l-2-2 2-2" />
        <path d="M17 15l2 2-2 2" />
      </svg>
    );

  if (n.includes('salão') || n.includes('salão de festas') || n.includes('party') || n.includes('salón') || n.includes('eventos') || n.includes('event'))
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.8 11.3L2 22l10.7-3.8" />
        <path d="M4 3h.01" />
        <path d="M22 8h.01" />
        <path d="M15 2h.01" />
        <path d="M22 20h.01" />
        <path d="M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
        <path d="M22 13l-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
        <path d="M11 2l.33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.91 9 5.52 9 6.23V7" />
      </svg>
    );

  // Default icon
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l2 2" />
    </svg>
  );
}

/* ─── Component ────────────────────────────────────────────────── */

const PaginaIndividualV2: React.FC = () => {
  const { t, i18n } = useTranslation();

  /* ── State ── */
  const [property, setProperty] = useState<ResolvedProperty | null>(null);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [albumOpen, setAlbumOpen] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(0);
  const [videoLightbox, setVideoLightbox] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const [rawData, setRawData] = useState<PropertyData | null>(null);

  /* ── Extract slug from URL ── */
  const slug = window.location.pathname.replace(/^\/propriedade-v2\//, '').replace(/\/$/, '');

  /* ── Fetch data ── */
  useEffect(() => {
    fetch('/properties-data.json')
      .then((res) => res.json())
      .then((data: { properties: PropertyData[] }) => {
        const found = data.properties.find((p) => p.slug === slug);
        if (found) {
          setRawData(found);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading property data:', err);
        setLoading(false);
      });
  }, [slug]);

  /* ── Resolve on language change ── */
  useEffect(() => {
    if (rawData) {
      setProperty(resolveProperty(rawData, i18n.language));
    }
  }, [rawData, i18n.language]);

  /* ── SEO meta tags ── */
  useEffect(() => {
    if (!property) return;
    document.title = `${property.propertyTitle} | Terra Ventos`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', property.summaryDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', property.propertyTitle);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', property.summaryDescription);
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', `${window.location.origin}${property.image}`);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `${window.location.origin}/propriedade-v2/${property.slug}`);
  }, [property]);

  /* ── All gallery images ── */
  const allImages = property
    ? [
        property.gallery.main,
        property.gallery.sideTop,
        property.gallery.sideBottom,
        ...property.gallery.extra,
      ]
    : [];

  /* ── Album navigation ── */
  const albumPrev = useCallback(() => {
    setAlbumIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
  }, [allImages.length]);

  const albumNext = useCallback(() => {
    setAlbumIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
  }, [allImages.length]);

  /* ── Keyboard navigation ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (videoLightbox) setVideoLightbox(null);
        else if (albumOpen) setAlbumOpen(false);
        else if (lightbox) setLightbox(null);
      }
      if (albumOpen) {
        if (e.key === 'ArrowLeft') albumPrev();
        if (e.key === 'ArrowRight') albumNext();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [albumOpen, lightbox, videoLightbox, albumPrev, albumNext]);

  /* ── Share handler ── */
  const handleShare = async () => {
    if (!property) return;
    const shareData = {
      title: property.propertyTitle,
      text: `${t('common.shareText')}${property.propertyTitle}`,
      url: `${window.location.origin}/propriedade-v2/${property.slug}`,
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
  };

  /* ── Loading state ── */
  if (loading) {
    return (
      <section className="pagina-individual" style={{ minHeight: '100vh', background: '#ffffff' }}>
        <div className="pi-main">
          <div className="pi-gallery" style={{ opacity: 0.3 }}>
            <div className="pi-image-main" style={{ background: '#e5e7eb' }} />
          </div>
        </div>
      </section>
    );
  }

  /* ── Not found ── */
  if (!property) {
    return (
      <section className="pagina-individual">
        <div className="pi-main">
          <p style={{ padding: '4rem 2rem', textAlign: 'center', fontSize: '1.2rem' }}>
            {t('oportunidades.noResults') || 'Propriedade não encontrada.'}
          </p>
        </div>
      </section>
    );
  }

  /* ── Render ── */
  return (
    <section className="pagina-individual">
      <div className="pi-main">
        {/* ── Gallery ── */}
        <div className="pi-gallery">
          <span className="pi-pill">{property.badge}</span>
          <div
            className="pi-image-main"
            style={{ backgroundImage: `url("${property.gallery.main}")` }}
            onClick={() => setLightbox(property.gallery.main)}
          />
          <div
            className="pi-image-side-top"
            style={{ backgroundImage: `url("${property.gallery.sideTop}")` }}
            onClick={() => setLightbox(property.gallery.sideTop)}
          />
          <div
            className="pi-image-side-bottom"
            style={{ backgroundImage: `url("${property.gallery.sideBottom}")` }}
            onClick={() => setLightbox(property.gallery.sideBottom)}
          />
        </div>

        {/* ── Secondary gallery (first 3 extras) ── */}
        {property.gallery.extra.length > 0 && (
          <div className="pi-gallery-secondary">
            {property.gallery.extra.slice(0, 3).map((img, idx) => (
              <div
                key={idx}
                className="pi-secondary-image"
                style={{ backgroundImage: `url("${img}")` }}
                onClick={() => setLightbox(img)}
              />
            ))}
          </div>
        )}

        {/* ── Title & Meta ── */}
        <div className="pi-title-row">
          <div>
            <h1 className="pi-property-title">{property.propertyTitle}</h1>
            <p className="pi-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              {property.location}
            </p>
          </div>
          <button className="pi-share-btn" onClick={handleShare} title={t('common.share') || 'Compartilhar'}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>

        {/* ── Exclusive text ── */}
        {property.exclusiveText && (
          <p className="pi-exclusive-text">{property.exclusiveText}</p>
        )}

        {/* ── Gallery strip button ── */}
        {allImages.length > 3 && (
          <button
            className="pi-gallery-strip"
            onClick={() => {
              setAlbumIndex(0);
              setAlbumOpen(true);
            }}
          >
            {allImages.slice(0, 5).map((img, idx) => (
              <div
                key={idx}
                className="pi-strip-thumb"
                style={{ backgroundImage: `url("${img}")` }}
              />
            ))}
            <span className="pi-strip-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              {t('property.viewAll') || 'Ver todas'} ({allImages.length})
            </span>
          </button>
        )}

        {/* ── Content Grid ── */}
        <div className="pi-content-grid">
          <div className="pi-content-main">
            {/* About */}
            {property.about.length > 0 && (
              <div className="pi-section">
                <h2 className="pi-section-title">{t('property.about') || 'Sobre'}</h2>
                {property.about.map((paragraph, idx) => (
                  <p key={idx} className="pi-text">{paragraph}</p>
                ))}
              </div>
            )}

            {/* Infra */}
            {property.infra.length > 0 && (
              <div className="pi-section">
                <h2 className="pi-section-title">{t('property.infrastructure') || 'Infraestrutura'}</h2>
                <ul className="pi-infra-list">
                  {property.infra.map((item, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Facilities */}
            {property.facilities.length > 0 && (
              <div className="pi-section">
                <h2 className="pi-section-title">{t('property.facilities') || 'Facilidades'}</h2>
                <div className="pi-facilities">
                  {property.facilities.map((facility, idx) => (
                    <div key={idx} className="pi-facility-chip">
                      {getIcon(facility)}
                      <span>{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Gallery */}
            {property.videoSources.length > 0 && (
              <div className="pi-section">
                <h2 className="pi-section-title">{t('property.videos') || 'Vídeos'}</h2>
                <div className="pi-video-gallery">
                  {property.videoSources.map((src, idx) => (
                    <div
                      key={idx}
                      className="pi-video-thumb"
                      onClick={() => setVideoLightbox(src)}
                    >
                      <div className="pi-video-play">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                      <video src={src} muted preload="metadata" />
                    </div>
                  ))}
                </div>
                {property.videoGalleryCredits && (
                  <p className="pi-video-credits">{property.videoGalleryCredits}</p>
                )}
              </div>
            )}

            {/* Documents */}
            {property.documents.length > 0 && (
              <div className="pi-section">
                <h2 className="pi-section-title">{t('property.documents') || 'Documentos'}</h2>
                <div className="pi-documents">
                  {property.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      className="pi-document-card"
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      <div className="pi-document-info">
                        <span className="pi-document-label">{doc.label}</span>
                        {doc.legend && <span className="pi-document-legend">{doc.legend}</span>}
                      </div>
                      <svg className="pi-document-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="pi-content-side">
            <div className="pi-card">
              {property.priceTag && (
                <span className="pi-card-price-tag">{property.priceTag}</span>
              )}
              <span className="pi-card-price">{property.price}</span>
              {property.installments && (
                <span className="pi-card-installments">{property.installments}</span>
              )}
              <div className="pi-card-divider"></div>
              <div className="pi-card-avatars">
                <img src="/mulher.jpg" alt="" className="pi-avatar" />
                <img src="/pessoa2.avif" alt="" className="pi-avatar" />
                <img src="/pessoa3.avif" alt="" className="pi-avatar" />
              </div>
              <p className="pi-card-experience">
                {t('hero.card.experience') || 'Experiência personalizada em cada detalhe'}
              </p>
              <div className="pi-card-stars">
                {Array.from({ length: property.rating }, (_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              {property.reservationUrl ? (
                <a
                  href={property.reservationUrl}
                  className="pi-card-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {t('property.reserve') || 'Reservar'}
                </a>
              ) : (
                <a
                  href="https://wa.me/5585985572807"
                  className="pi-card-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t('property.whatsapp') || 'Falar no WhatsApp'}
                </a>
              )}
            </div>
          </aside>
        </div>

        {/* ── Map ── */}
        {property.mapImage && (
          <div className="pi-section pi-map-section">
            <h2 className="pi-section-title">{t('property.location') || 'Localização'}</h2>
            <a
              href={property.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pi-map-link"
            >
              <img
                src={property.mapImage}
                alt={`${t('property.mapOf') || 'Mapa de'} ${property.propertyTitle}`}
                className="pi-map-image"
              />
              <div className="pi-map-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                  <line x1="8" y1="2" x2="8" y2="18"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>
                {t('property.openMap') || 'Abrir no mapa'}
              </div>
            </a>
          </div>
        )}
      </div>

      {/* ── Lightbox (single image) ── */}
      {lightbox &&
        createPortal(
          <div className="pi-lightbox" onClick={() => setLightbox(null)}>
            <button className="pi-lightbox-close" onClick={() => setLightbox(null)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={lightbox}
              alt=""
              className="pi-lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}

      {/* ── Album Modal ── */}
      {albumOpen &&
        createPortal(
          <div
            className="pi-album-modal"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const diff = e.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(diff) > 50) {
                if (diff > 0) albumPrev();
                else albumNext();
              }
              touchStartX.current = null;
            }}
          >
            <div className="pi-album-header">
              <span className="pi-album-counter">
                {albumIndex + 1} / {allImages.length}
              </span>
              <button className="pi-album-close" onClick={() => setAlbumOpen(false)}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="pi-album-body" onClick={() => setAlbumOpen(false)}>
              <button className="pi-album-nav pi-album-prev" onClick={(e) => { e.stopPropagation(); albumPrev(); }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <img
                src={allImages[albumIndex]}
                alt={`${property.propertyTitle} - ${albumIndex + 1}`}
                className="pi-album-img"
                onClick={(e) => e.stopPropagation()}
              />
              <button className="pi-album-nav pi-album-next" onClick={(e) => { e.stopPropagation(); albumNext(); }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            <div className="pi-album-thumbs">
              {allImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`pi-album-thumb ${idx === albumIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url("${img}")` }}
                  onClick={() => setAlbumIndex(idx)}
                />
              ))}
            </div>
          </div>,
          document.body
        )}

      {/* ── Video Lightbox ── */}
      {videoLightbox &&
        createPortal(
          <div className="pi-lightbox" onClick={() => setVideoLightbox(null)}>
            <button className="pi-lightbox-close" onClick={() => setVideoLightbox(null)}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <video
              src={videoLightbox}
              controls
              autoPlay
              className="pi-lightbox-video"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </section>
  );
};

export default PaginaIndividualV2;
