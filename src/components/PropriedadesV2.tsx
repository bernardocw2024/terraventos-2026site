import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../data/oportunidadesData';
import './ListagemPropriedades.css';

export function resolveProperty(raw, lang) {
  const baseLang = (lang || 'pt').split('-')[0];
  const i18nData = raw.i18n?.[baseLang] || raw.i18n?.pt || {};
  return {
    id: raw.id, slug: raw.slug, category: raw.category, image: raw.image, rating: raw.rating,
    gallery: raw.gallery, mapImage: raw.mapImage, mapUrl: raw.mapUrl,
    videoSources: raw.videoSources || [], videoGalleryCredits: raw.videoGalleryCredits || '',
    documents: i18nData.documents || raw.documents || [],
    reservationUrl: raw.reservationUrl || undefined,
    title: i18nData.title || '', badge: i18nData.badge || '',
    propertyTitle: i18nData.propertyTitle || '', location: i18nData.location || '',
    exclusiveText: i18nData.exclusiveText || '', summaryDescription: i18nData.summaryDescription || '',
    about: i18nData.about || [], infra: i18nData.infra || [], facilities: i18nData.facilities || [],
    priceTag: i18nData.priceTag || '', price: i18nData.price || '',
    installments: i18nData.installments || '',
  };
}

const PropriedadesV2 = ({ onSelect }) => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/properties-data.json').then(r => r.json()).then(d => { setRawData(d); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const items = useMemo(() => rawData.map(raw => resolveProperty(raw, i18n.language)), [rawData, i18n.language]);

  const filteredItems = useMemo(() => items.filter(item => {
    const ms = item.propertyTitle.toLowerCase().includes(searchTerm.toLowerCase()) || item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const mf = selectedFilter === 'all' || item.category === selectedFilter;
    return ms && mf;
  }), [items, searchTerm, selectedFilter]);

  const filterOptions = ['all', 'venda', 'lancamento', 'temporada', 'investimento'];

  const handleSelect = (item) => {
    if (onSelect) onSelect(item);
    else window.dispatchEvent(new CustomEvent('navigate', { detail: \`/propriedade-v2/\${item.slug}\` }));
  };

  if (loading) return (<section className="listing-page" data-reveal-managed="true"><div className="listing-header"><h1 className="listing-title">{t('nav.oportunidades')}</h1><p className="listing-subtitle">{t('oportunidades.badge')}</p></div></section>);

  return (
    <section className="listing-page" data-reveal-managed="true">
      <div className="listing-header">
        <button className="back-to-home" onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: '/' }))} aria-label="Voltar"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
        <h1 className="listing-title">{t('nav.oportunidades')}</h1>
        <p className="listing-subtitle">{t('oportunidades.badge')}</p>
      </div>
      <div className="listing-controls">
        <div className="search-box"><svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg><input type="text" placeholder={t('hero.card.experience').split('\n')[0] || "Buscar..."} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
        <div className="filter-chips">{filterOptions.map(f => (<button key={f} className={\`filter-chip \${selectedFilter === f ? 'active' : ''}\`} onClick={() => setSelectedFilter(f)}>{t(\`categorias.\${f}\`)}</button>))}</div>
      </div>
      <div className="listing-grid">
        {(selectedFilter === 'all' || selectedFilter === 'investimento' || selectedFilter === 'venda') && (
          <a href="/taiba" className="property-card" onClick={e => { e.preventDefault(); window.dispatchEvent(new CustomEvent('navigate', { detail: '/taiba' })); }}>
            <div className="property-card-image" style={{ backgroundImage: 'url("/taiba/Picture.png")' }}><div className="property-badge">Investimento</div></div>
            <div className="property-card-content"><h3 className="property-card-title">Oportunidades Exclusivas em Ta\u00edba</h3><p className="property-card-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Ta\u00edba, Cear\u00e1, Brasil</p>
              <div className="property-card-footer"><div className="property-price"><span className="price-tag">A partir de</span><span className="price-value">R$ 110.000,00</span></div><div className="view-details-btn">Ver Op\u00e7\u00f5es<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div></div>
            </div>
          </a>
        )}
        {filteredItems.length > 0 ? filteredItems.map(item => (
          <a key={item.id} href={\`/propriedade-v2/\${item.slug}\`} className="property-card" onClick={e => { e.preventDefault(); handleSelect(item); }}>
            <div className="property-card-image" style={{ backgroundImage: \`url("\${item.image}")\` }}><div className="property-badge">{item.badge}</div></div>
            <div className="property-card-content">
              <h3 className="property-card-title">{item.propertyTitle}</h3>
              <p className="property-card-location"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>{item.location}</p>
              <div className="property-card-footer">
                <div className="property-price"><span className="price-tag">{item.priceTag}</span><span className="price-value">{item.price}</span></div>
                <div className="view-details-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></div>
              </div>
            </div>
          </a>
        )) : (<div className="no-results"><p>{t('oportunidades.noResults')}</p></div>)}
      </div>
    </section>
  );
};

export default PropriedadesV2;
