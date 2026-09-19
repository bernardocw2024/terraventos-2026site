import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getPosts } from '../lib/blog';
import './Blog.css';

interface Props {
  onOpen: (slug: string) => void;
}

const LABELS: Record<string, { title: string; intro: string; read: string }> = {
  pt: { title: 'Blog', intro: 'Guias de investimento, vento e litoral do Ceará.', read: 'min de leitura' },
  en: { title: 'Blog', intro: 'Investment, wind and Ceará coast guides.', read: 'min read' },
  es: { title: 'Blog', intro: 'Guías de inversión, viento y costa de Ceará.', read: 'min de lectura' },
};

export default function BlogList({ onOpen }: Props) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'pt').split('-')[0];
  const L = LABELS[lang] || LABELS.pt;
  const posts = getPosts(lang);

  useEffect(() => {
    document.title = 'Blog | Terra Ventos';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', L.intro);
  }, [L.intro]);

  const fmt = (iso: string) => {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR', {
      day: '2-digit', month: 'short', year: 'numeric',
    });
  };

  return (
    <section className="blog-wrap" id="blog">
      <header className="blog-head">
        <h1 className="blog-title">{L.title}</h1>
        <p className="blog-intro">{L.intro}</p>
      </header>

      <div className="blog-grid">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="blog-card"
            onClick={() => onOpen(p.slug)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') onOpen(p.slug); }}
          >
            {p.image && (
              <div className="blog-card-img">
                <img src={p.image} alt={p.title} loading="lazy" />
              </div>
            )}
            <div className="blog-card-body">
              <div className="blog-meta">
                <span>{fmt(p.date)}</span>
                <span>· {p.readingMin} {L.read}</span>
              </div>
              <h2 className="blog-card-title">{p.title}</h2>
              <p className="blog-card-summary">{p.summary}</p>
              {p.tags.length > 0 && (
                <div className="blog-tags">
                  {p.tags.map((tg) => <span key={tg} className="blog-tag">{tg}</span>)}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
