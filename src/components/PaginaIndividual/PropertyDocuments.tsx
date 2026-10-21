import { useTranslation } from 'react-i18next';
import type { OportunidadeDetalhe } from '../../data/oportunidadesData';

type Props = {
  documents: NonNullable<OportunidadeDetalhe['documents']>;
};

export default function PropertyDocuments({ documents }: Props) {
  const { t } = useTranslation();

  return (
    <div className="pi-documents-section">
      <div className="pi-section-header">
        <h3 className="pi-section-title">{t('pagina.downloadTitle') || 'Baixar Material'}</h3>
        <p className="pi-section-description">{t('pagina.downloadDesc') || 'Acesse os arquivos oficiais do empreendimento.'}</p>
      </div>
      <div className="pi-documents-grid">
        {documents.map((doc, idx) => {
          // PDF abre no navegador; link externo abre em nova aba; outros formatos (ex: .kml) baixam direto.
          const isPdf = /\.pdf$/i.test(doc.url);
          const isExternal = /^https?:\/\//i.test(doc.url);
          return (
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
              download={isPdf || isExternal ? undefined : ''}
            >
              {isExternal ? (t('pagina.openLink') || 'Abrir link') : isPdf ? (t('pagina.viewPdf') || 'Visualizar PDF') : (t('pagina.downloadFile') || 'Baixar arquivo')}
            </a>
          </div>
          );
        })}
      </div>
    </div>
  );
}
