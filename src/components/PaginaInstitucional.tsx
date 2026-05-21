import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './PaginaInstitucional.css';

type PaginaInstitucionalProps = {
  pageType: 'quem-somos' | 'termos-e-condicoes' | 'politica-de-privacidade' | 'contato';
  onBack: () => void;
};

const KEY_MAPPING = {
  'quem-somos': 'quemSomos',
  'termos-e-condicoes': 'termos',
  'politica-de-privacidade': 'privacidade',
  'contato': 'contato'
};

export default function PaginaInstitucional({ pageType, onBack }: PaginaInstitucionalProps) {
  const { t, i18n } = useTranslation();
  const translationKey = KEY_MAPPING[pageType];

  // Dynamic SEO Title & Meta update
  useEffect(() => {
    const pageTitle = t(`institucional.${translationKey}.title`);
    const pageDesc = t(`institucional.${translationKey}.subtitle`);
    const title = `${pageTitle} | Terra Ventos`;
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

    updateMeta('description', pageDesc);
    updateMeta('og:title', title, true);
    updateMeta('og:description', pageDesc, true);
    updateMeta('og:url', url, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', pageDesc);
  }, [pageType, translationKey, t, i18n.language]);

  return (
    <div className="pagina-institucional">
      <button 
        className="inst-back-button"
        onClick={onBack}
        aria-label={t('pagina.back') || "Voltar"}
      >
        <svg 
          width="18" 
          height="18" 
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
        <span>{t('pagina.back') || 'Voltar'}</span>
      </button>

      <div className="inst-header">
        <span className="inst-pill">{t(`institucional.${translationKey}.title`)}</span>
        <h1 className="inst-title">{t(`institucional.${translationKey}.title`)}</h1>
        <p className="inst-subtitle">{t(`institucional.${translationKey}.subtitle`)}</p>
      </div>

      {pageType === 'contato' ? (
        <div className="inst-contato-container">
          <div className="inst-contato-info-card">
            <div className="inst-info-grid">
              <div className="inst-info-item">
                <span className="inst-info-label">{t('institucional.contato.razaoSocial')}</span>
                <span className="inst-info-value">TERRAVENTOS EMPREENDIMENTOS E PARTICIPACOES LTDA</span>
              </div>
              
              <div className="inst-info-item">
                <span className="inst-info-label">{t('institucional.contato.cnpj')}</span>
                <span className="inst-info-value">60.726.249/0001-00</span>
              </div>

              <div className="inst-info-item">
                <span className="inst-info-label">{t('institucional.contato.telefone')}</span>
                <span className="inst-info-value">
                  <a href="tel:+551147156779" className="inst-link">(11) 4715-6779</a>
                  <span className="inst-tag-corporate">Corporativo</span>
                  <br />
                  <a href="tel:+5585985572807" className="inst-link">+55 (85) 9 8557-2807</a>
                  <span className="inst-tag-curator">Curadoria & WhatsApp</span>
                </span>
              </div>

              <div className="inst-info-item">
                <span className="inst-info-label">{t('institucional.contato.email')}</span>
                <span className="inst-info-value">
                  <a href="mailto:info@terraventos.com.br" className="inst-link">info@terraventos.com.br</a>
                </span>
              </div>
            </div>

            <div className="inst-info-item inst-info-address-full">
              <span className="inst-info-label">{t('institucional.contato.endereco')}</span>
              <div className="inst-addresses-row">
                <div className="inst-address-box">
                  <strong>Fortaleza (Sede):</strong><br />
                  Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, CEP: 60115-191
                </div>
                <div className="inst-address-box">
                  <strong>Preá (Escritório):</strong><br />
                  Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, CEP: 62595-000
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="inst-text-content">
          <p>{t(`institucional.${translationKey}.p1`)}</p>
          <p>{t(`institucional.${translationKey}.p2`)}</p>
          <p>{t(`institucional.${translationKey}.p3`)}</p>
          <p>{t(`institucional.${translationKey}.p4`)}</p>
        </div>
      )}
    </div>
  );
}
