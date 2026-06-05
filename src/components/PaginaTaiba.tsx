import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import './PaginaIndividual.css';

const getTaibaData = (lang: string) => {
  const isEs = lang.startsWith('es');
  const isEn = lang.startsWith('en');

  return [
    {
      id: 't01',
      propertyTitle: isEs ? 'LOTE 109 - EL MEJOR COSTO/BENEFICIO' : isEn ? 'LOT 109 - BEST COST/BENEFIT' : 'LOTE 109 - O MELHOR CUSTO/BENEFÍCIO',
      location: isEn ? 'Taiba, Ceara, Brazil' : 'Taíba, Ceará, Brasil',
      badge: isEs ? 'Oportunidad' : isEn ? 'Opportunity' : 'Oportunidade',
      exclusiveText: isEs ? '560 m² | 14x40m | MATRÍCULA | Totalmente Amurallado' : isEn ? '560 m² | 14x40m | MATRÍCULA | Fully Walled' : '560 m² | 14x40m | MATRÍCULA | Totalmente Murado',
      priceTag: isEs ? 'Desde' : isEn ? 'Starting at' : 'A partir de',
      price: 'R$ 110.000,00',
      about: isEs ? [
        'Excelente oportunidad en Taíba con el mejor costo/beneficio de la región.',
        'Ubicación estratégica entre dos casas ya construidas.',
        'Terreno totalmente amurallado, no necesita relleno (gran diferencial), listo para construir.',
        'Excelente opción para vivienda o una pequeña posada.'
      ] : isEn ? [
        'Excellent opportunity in Taíba with the best cost/benefit in the region.',
        'Strategic location between two already built houses.',
        'Fully walled land, no landfill needed (great differential), ready to build.',
        'Excellent option for housing or a small inn.'
      ] : [
        'Excelente oportunidade na Taíba com o melhor custo/benefício da região.',
        'Localização estratégica entre duas casas já construídas.',
        'Terreno totalmente murado, não precisa de aterro (grande diferencial), pronto para construir.',
        'Excelente opção para moradia ou uma pequena pousada.'
      ],
      infra: isEs ? [
        'Área Total: 560 m²',
        'Medidas: 14 x 40 m',
        'Documentación: MATRÍCULA',
        'Totalmente amurallado',
        'Listo para construir (sin necesidad de relleno)'
      ] : isEn ? [
        'Total Area: 560 m²',
        'Measurements: 14 x 40 m',
        'Documentation: MATRÍCULA',
        'Fully walled',
        'Ready to build (no landfill needed)'
      ] : [
        'Área Total: 560 m²',
        'Medidas: 14 x 40 m',
        'Documentação: MATRÍCULA',
        'Totalmente murado',
        'Pronto para construir (sem necessidade de aterro)'
      ],
      facilities: isEs ? ['560 m²', 'MATRÍCULA', 'Listo para Construir', 'Totalmente Amurallado'] : isEn ? ['560 m²', 'MATRÍCULA', 'Ready to Build', 'Fully Walled'] : ['560 m²', 'MATRÍCULA', 'Pronto para Construir', 'Totalmente Murado'],
      gallery: {
        main: '/taiba/lote109_img-000.jpg',
        sideTop: '/taiba/lote109_img-001.jpg',
        sideBottom: null
      }
    },
    {
      id: 't02',
      propertyTitle: isEs ? 'LOTEAMIENTO BARRAMAR - 720 m²' : isEn ? 'BARRAMAR SUBDIVISION - 720 m²' : 'LOTEAMENTO BARRAMAR - 720 m²',
      location: isEn ? 'Taiba, Ceara, Brazil' : 'Taíba, Ceará, Brasil',
      badge: isEs ? 'Vista al Mar' : isEn ? 'Ocean View' : 'Vista Mar',
      exclusiveText: isEs ? '720 m² | 20x36m | VISTA MAR | MATRÍCULA' : isEn ? '720 m² | 20x36m | VISTA MAR | MATRÍCULA' : '720 m² | 20x36m | VISTA MAR | MATRÍCULA',
      priceTag: isEs ? 'Desde' : isEn ? 'Starting at' : 'A partir de',
      price: 'R$ 165.000,00',
      about: isEs ? [
        'Oportunidad de inversión en el Loteamiento Barramar, en Taíba.',
        'Terreno con 720 m², medidas de 20x36 metros, ubicado en la 2ª cuadra.',
        'Destacado por la impresionante VISTA AL MAR y proximidad con la Laguna del Kitesurf.',
        'Documentación completa con Escritura (MATRÍCULA).'
      ] : isEn ? [
        'Investment opportunity in the Barramar Subdivision, in Taíba.',
        'Land with 720 m², measurements of 20x36 meters, located on the 2nd block.',
        'Highlight for the stunning OCEAN VIEW and proximity to the Kitesurf Lagoon.',
        'Complete documentation with Deed (MATRÍCULA).'
      ] : [
        'Oportunidade de investimento no Loteamento Barramar, em Taíba.',
        'Terreno com 720 m², medidas de 20x36 metros, localizado na 2ª quadra.',
        'Destaque para a VISTA MAR deslumbrante e proximidade com a Lagoa do Kitesurf.',
        'Documentação completa com Escritura (MATRÍCULA).'
      ],
      infra: isEs ? [
        'Área Total: 720 m²',
        'Medidas: 20 x 36 m',
        'Ubicación: 2ª cuadra',
        'VISTA MAR',
        'Documentación: MATRÍCULA'
      ] : isEn ? [
        'Total Area: 720 m²',
        'Measurements: 20 x 36 m',
        'Location: 2nd block',
        'VISTA MAR',
        'Documentation: MATRÍCULA'
      ] : [
        'Área Total: 720 m²',
        'Medidas: 20 x 36 m',
        'Localização: 2ª quadra',
        'VISTA MAR',
        'Documentação: MATRÍCULA'
      ],
      facilities: isEs ? ['720 m²', 'VISTA MAR', 'MATRÍCULA', 'Loteamiento Barramar'] : isEn ? ['720 m²', 'VISTA MAR', 'MATRÍCULA', 'Barramar Subdivision'] : ['720 m²', 'VISTA MAR', 'MATRÍCULA', 'Loteamento Barramar'],
      mapLink: 'https://maps.app.goo.gl/afLskbzZK68TQ97g9',
      mapUrl: 'https://maps.google.com/maps?q=-3.480756,-38.928636&z=16&output=embed',
      gallery: {
        main: '/taiba/barramar720_img-000.jpg',
        sideTop: '/taiba/barramar720_img-001.jpg',
        sideBottom: null
      }
    },
    {
      id: 't03',
      propertyTitle: isEs ? 'LOTEAMIENTO BARRAMAR - 800 m²' : isEn ? 'BARRAMAR SUBDIVISION - 800 m²' : 'LOTEAMENTO BARRAMAR - 800 m²',
      location: isEn ? 'Taiba, Ceara, Brazil' : 'Taíba, Ceará, Brasil',
      badge: isEs ? 'Inversión' : isEn ? 'Investment' : 'Investimento',
      exclusiveText: isEs ? '800 m² | 20x40m | MATRÍCULA | Zona Turística' : isEn ? '800 m² | 20x40m | MATRÍCULA | Tourist Zone' : '800 m² | 20x40m | MATRÍCULA | Zona Turística',
      priceTag: isEs ? 'Desde' : isEn ? 'Starting at' : 'A partir de',
      price: 'R$ 214.500,00',
      about: isEs ? [
        'Terreno en zona turística de alta valorización en Taíba.',
        'Aproximadamente a 300 metros de la Laguna de Kitesurf - destino internacional.',
        'Lote con 800 m², medidas de 20x40 metros.',
        'Documentación con Escritura (MATRÍCULA), sin muro.'
      ] : isEn ? [
        'Land in a tourist zone of high appreciation in Taíba.',
        'Approximately 300 meters from the Kitesurf Lagoon - an international destination.',
        'Lot with 800 m², measurements of 20x40 meters.',
        'Documentation with Deed (MATRÍCULA), no wall.'
      ] : [
        'Terreno em zona turística de alta valorização na Taíba.',
        'Aproximadamente 300 metros da Lagoa do Kitesurf - destino internacional.',
        'Lote com 800 m², medidas de 20x40 metros.',
        'Documentação com Escritura (MATRÍCULA), sem muro.'
      ],
      infra: isEs ? [
        'Área Total: 800 m²',
        'Medidas: 20 x 40 m',
        'Sin muro',
        'Documentación: MATRÍCULA',
        '~300 metros de la Laguna de Kitesurf'
      ] : isEn ? [
        'Total Area: 800 m²',
        'Measurements: 20 x 40 m',
        'No wall',
        'Documentation: MATRÍCULA',
        '~300 meters from Kitesurf Lagoon'
      ] : [
        'Área Total: 800 m²',
        'Medidas: 20 x 40 m',
        'Sem muro',
        'Documentação: MATRÍCULA',
        '~300 metros da Lagoa do Kitesurf'
      ],
      facilities: isEs ? ['800 m²', 'MATRÍCULA', 'Loteamiento Barramar', 'Cerca de Laguna'] : isEn ? ['800 m²', 'MATRÍCULA', 'Barramar Subdivision', 'Near Lagoon'] : ['800 m²', 'MATRÍCULA', 'Loteamento Barramar', 'Perto da Lagoa'],
      mapLink: 'https://google.com/maps/place/-3.476286,-38.931827',
      mapUrl: 'https://maps.google.com/maps?q=-3.476286,-38.931827&z=16&output=embed',
      gallery: {
        main: '/taiba/Picture.png',
        sideTop: null,
        sideBottom: null
      }
    }
  ];
};

export default function PaginaTaiba() {
  const { t, i18n } = useTranslation();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const taibaLotes = getTaibaData(i18n.language);
  const [selectedLoteId, setSelectedLoteId] = useState(taibaLotes[0].id);

  const selectedLote = taibaLotes.find(l => l.id === selectedLoteId) || taibaLotes[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const title = 'Oportunidades Exclusivas em Taíba | Terra Ventos';
    const description = 'Terrenos selecionados com alto potencial de valorização e segurança jurídica na Taíba. Opções com MATRÍCULA e VISTA MAR.';
    const imageUrl = window.location.origin + '/taiba/Picture.png';
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
  }, [i18n.language]);

  const openLightbox = (src: string) => {
    setLightboxImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  };

  const getIcon = (fac: string) => {
    const l = fac.toLowerCase();
    if (l.includes('mar') || l.includes('praia')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v2M5.6 5.6L4.2 4.2M2 12h2M5.6 18.4l-1.4 1.4M12 22v-2M18.4 18.4l1.4 1.4M22 12h-2M18.4 5.6l1.4-1.4" /><path d="M18 12c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6 6 2.7 6 6z" /><path d="M22 22c-2.4-1.2-4.8 0-7.2 0s-4.8-1.2-7.2 0-4.8 0-7.6-1.2" /></svg>;
    if (l.includes('matrícula')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
    if (l.includes('murado')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>;
    if (l.includes('lagoa')) return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12s4.5-10 10-10 10 4.5 10 10z" /><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5" /></svg>;
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" /></svg>;
  };

  const openWhatsApp = (title: string) => {
    const message = `Olá, tenho interesse no terreno em Taíba: ${title}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5585985572807?text=${encoded}`, '_blank');
  };

  const mainImage = '/taiba/Picture.png';

  return (
    <section className="pagina-individual" style={{ paddingTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button 
          className="pi-back-button"
          onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: '/' }))}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Voltar para o Início
        </button>

        <button 
          className="pi-share-btn"
          title={t('common.share') || "Compartilhar"}
          style={{ marginBottom: '16px' }}
          onClick={async () => {
            const shareData = {
              title: 'Oportunidades Exclusivas em Taíba | Terra Ventos',
              text: 'Confira estes terrenos exclusivos com alto potencial de valorização na Taíba!',
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

      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '0 24px' }}>
        <h1 className="pi-title" style={{ fontSize: '36px', fontWeight: 600 }}>{t('nav.oportunidades') || 'Oportunidades Exclusivas'} {t('pagina.location') ? 'em Taíba' : 'em Taíba'}</h1>
        <p className="pi-meta" style={{ fontSize: '16px', marginTop: '8px' }}>
          {i18n.language.startsWith('es') 
            ? 'Terrenos seleccionados con alto potencial de valorización y seguridad jurídica.' 
            : i18n.language.startsWith('en') 
              ? 'Selected lands with high appreciation potential and legal security.' 
              : 'Terrenos selecionados com alto potencial de valorização e segurança jurídica.'}
        </p>
      </div>

      <div className="pi-main" style={{ marginBottom: '80px' }}>
        
        {/* IMAGEM UNIFICADA ÚNICA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', width: '100%' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '400px', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#f9f9f9', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <span className="pi-pill" style={{ color: '#C4B096', top: '16px', left: '16px' }}>
              {i18n.language.startsWith('es') ? 'Inversión Taíba' : i18n.language.startsWith('en') ? 'Taiba Investment' : 'Investimento Taíba'}
            </span>
            <img 
              src={mainImage} 
              alt="Área dos Lotes na Taíba" 
              className="pi-zoomable" 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onClick={() => openLightbox(mainImage)}
            />
          </div>
        </div>

        <div className="pi-content-grid">
          <div className="pi-content-main">

            {/* SELETOR DE LOTES */}
            <div style={{ marginBottom: '40px' }}>
              <h3 className="pi-section-title" style={{ marginBottom: '16px' }}>
                {i18n.language.startsWith('es') ? 'Elige tu opción:' : i18n.language.startsWith('en') ? 'Choose your option:' : 'Escolha a sua opção:'}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {taibaLotes.map(lote => {
                  const isSelected = selectedLoteId === lote.id;
                  return (
                    <div 
                      key={lote.id}
                      onClick={() => setSelectedLoteId(lote.id)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '12px',
                        border: `2px solid ${isSelected ? '#C4B096' : '#e5e5e5'}`,
                        backgroundColor: isSelected ? 'rgba(196, 176, 150, 0.05)' : '#fff',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', color: isSelected ? '#111' : '#555' }}>
                          {lote.propertyTitle}
                        </h4>
                        <span style={{ fontSize: '13px', color: '#888' }}>{lote.exclusiveText}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontWeight: '600', color: isSelected ? '#111' : '#555' }}>
                          {lote.price}
                        </span>
                        <div style={{ 
                          width: '20px', 
                          height: '20px', 
                          borderRadius: '50%', 
                          border: `2px solid ${isSelected ? '#C4B096' : '#ccc'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {isSelected && <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#C4B096' }} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* INFORMAÇÕES DO LOTE SELECIONADO */}
            <div style={{ animation: 'fadeIn 0.3s ease' }}>
              <h2 className="pi-title reveal-title" style={{ marginTop: '0', marginBottom: '8px', fontSize: '24px' }}>
                {i18n.language.startsWith('es') ? 'Detalles:' : i18n.language.startsWith('en') ? 'Details:' : 'Detalhes:'} {selectedLote.propertyTitle}
              </h2>

              {selectedLote.mapLink && (
                <a 
                  href={selectedLote.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C4B096', fontWeight: '600', marginBottom: '24px', fontSize: '14px', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {i18n.language.startsWith('es') ? 'Ver en el Mapa' : i18n.language.startsWith('en') ? 'View on Map' : 'Ver no Mapa'}
                </a>
              )}

              <h3 className="pi-section-title reveal-title" style={{ marginTop: selectedLote.mapLink ? '8px' : '32px' }}>{t('pagina.about') || 'Sobre a propriedade'}</h3>
              {selectedLote.about.map((paragraph) => (
                <p key={paragraph} className="pi-text">
                  {paragraph}
                </p>
              ))}

              <h4 className="pi-section-subtitle">{t('pagina.infra') || 'Infraestrutura'}</h4>
              <ul className="pi-infra-list">
                {selectedLote.infra.map((info) => (
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
                    <span style={{ fontWeight: info.includes('MATRÍCULA') || info.includes('VISTA MAR') ? '700' : '400', color: info.includes('MATRÍCULA') || info.includes('VISTA MAR') ? '#333' : 'inherit' }}>
                      {info}
                    </span>
                  </li>
                ))}
              </ul>

              <h4 className="pi-section-subtitle">{t('pagina.facilities') || 'Facilidades'}</h4>
              <div className="pi-facilities">
                {selectedLote.facilities.map((facilidade) => (
                  <span key={facilidade} className="pi-facility-chip" style={{ 
                    borderColor: facilidade === 'MATRÍCULA' || facilidade === 'VISTA MAR' ? '#C4B096' : '#e5e5e5',
                    backgroundColor: facilidade === 'MATRÍCULA' || facilidade === 'VISTA MAR' ? 'rgba(196, 176, 150, 0.1)' : '#f9f9f9'
                  }}>
                    {getIcon(facilidade)}
                    <span className="pi-facility-text" style={{ fontWeight: facilidade === 'MATRÍCULA' || facilidade === 'VISTA MAR' ? '700' : '500' }}>
                      {facilidade}
                    </span>
                  </span>
                ))}
              </div>

              {selectedLote.mapUrl && (
                <div style={{ marginTop: '48px' }}>
                  <h3 className="pi-section-subtitle">{t('pagina.location') || 'Localização'}</h3>
                  <div className="pi-map-wrapper">
                    <iframe
                      src={selectedLote.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: '400px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Mapa de localização para ${selectedLote.propertyTitle}`}
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          <aside className="pi-content-side">
            <div className="pi-card" style={{ transition: 'all 0.3s ease' }}>
              <span className="pi-card-tag">{selectedLote.priceTag}</span>
              <p className="pi-price" style={{ transition: 'color 0.3s ease' }}>{selectedLote.price}</p>
              <p style={{ margin: '-24px 0 24px 0', fontSize: '13px', color: '#888', fontWeight: 500 }}>
                {selectedLote.propertyTitle}
              </p>
              
              <div className="pi-card-divider"></div>

              <div className="pi-avatars-center">
                <img src="/mulher.jpg" alt="Atendimento 1" />
                <img src="/pessoa2.avif" alt="Atendimento 2" />
              </div>
              <p className="pi-experience-text">
                {i18n.language.startsWith('es') ? 'Habla directamente con nuestro equipo especializado.' : i18n.language.startsWith('en') ? 'Speak directly with our specialized team.' : 'Fale diretamente com nossa equipe especializada.'}
              </p>
              <div className="pi-stars">
                ★★★★★
              </div>
              
              <button 
                onClick={() => openWhatsApp(selectedLote.propertyTitle)}
                className="pi-cta"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                {t('pagina.cta') || 'Tenho Interesse'}
              </button>
            </div>
          </aside>
        </div>
      </div>

      {lightboxImage && createPortal(
        <div className="pi-lightbox" onClick={closeLightbox}>
          <button className="pi-lightbox-close" onClick={closeLightbox} aria-label="Fechar galeria">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <img 
            src={lightboxImage} 
            alt="Visualização ampliada" 
            className="pi-lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>,
        document.body
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
