import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ListagemPropriedades.css';

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

const ListagemPropriedadesV2: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [rawProperties, setRawProperties] = useState<PropertyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/properties-data.json')
      .then((res) => res.json())
      .then((data: { properties: PropertyData[] }) => {
        setRawProperties(data.properties);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading properties data:', err);
        setLoading(false);
      });
  }, []);

  const items = useMemo(() => {
    return rawProperties.map((p) => resolveProperty(p, i18n.language));
  }, [rawProperties, i18n.language]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = selectedFilter === 'all' || item.category === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, selectedFilter]);

  const filterOptions = ['all', 'venda', 'lancamento', 'temporada', 'investimento'];

  if (loading) {
    return (
      <section className="listing-page" data-reveal-managed="true" style={{ minHeight: '100vh', background: '#ffffff' }}>
        <div className="listing-header">
          <h1 className="listing-title">{t('nav.oportunidades')}</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="listing-page" data-reveal-managed="true">
      <div className="listing-header">
        <button
          className="back-to-home"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: '/' }))}
          aria-label="Voltar para o início"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <h1 className="listing-title">{t('nav.oportunidades')}</h1>
        <p className="listing-subtitle">{t('oportunidades.badge')}</p>
      </div>

      <div className="listing-controls">
        <div className="search-box">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder={t('hero.card.experience').split('\n')[0] || "Buscar propriedade..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-chips">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              className={`filter-chip ${selectedFilter === filter ? 'active' : ''}`}
              onClick={() => setSelectedFilter(filter)}
            >
              {t(`categorias.${filter}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="listing-grid">
        {/* TAIBA CARD - FIXED AT TOP */}
        {(selectedFilter === 'all' || selectedFilter === 'investimento' || selectedFilter === 'venda') && (
          <a
            href="/taiba"
            className="property-card"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('navigate', { detail: '/taiba' }));
            }}
          >
            <div className="property-card-image" style={{ backgroundImage: `url("/taiba/Picture.png")` }}>
              <div className="property-badge">Investimento</div>
            </div>
            <div className="property-card-content">
              <h3 className="property-card-title">Oportunidades Exclusivas em Taíba</h3>
              <p className="property-card-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Taíba, Ceará, Brasil
              </p>
              <div className="property-card-footer">
                <div className="property-price">
                  <span className="price-tag">A partir de</span>
                  <span className="price-value">R$ 110.000,00</span>
                </div>
                <div className="view-details-btn">
                  Ver Opções
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        )}

        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <a
              key={item.id}
              href={`/propriedade-v2/${item.slug}`}
              className="property-card"
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('navigate', { detail: `/propriedade-v2/${item.slug}` }));
              }}
            >
              <div className="property-card-image" style={{ backgroundImage: `url("${item.image}")` }}>
                <div className="property-badge">{item.badge}</div>
              </div>
              <div className="property-card-content">
                <h3 className="property-card-title">{item.propertyTitle}</h3>
                <p className="property-card-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {item.location}
                </p>
                <div className="property-card-footer">
                  <div className="property-price">
                    <span className="price-tag">{item.priceTag}</span>
                    <span className="price-value">{item.price}</span>
                  </div>
                  <div className="view-details-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                  <button
                    className="share-property-btn"
                    title={t('common.share') || "Compartilhar"}
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const shareData = {
                        title: item.propertyTitle,
                        text: `${t('common.shareText')}${item.propertyTitle}`,
                        url: `${window.location.origin}/propriedade-v2/${item.slug}`
                      };
                      if (navigator.share) {
                        try { await navigator.share(shareData); } catch (err) { if ((err as Error).name !== 'AbortError') console.error('Error sharing:', err); }
                      } else {
                        try { await navigator.clipboard.writeText(shareData.url); alert(t('common.linkCopied') || 'Link copiado!'); } catch (err) { console.error('Could not copy text: ', err); }
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
                  </button>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="no-results">
            <p>{t('oportunidades.noResults')}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ListagemPropriedadesV2;
