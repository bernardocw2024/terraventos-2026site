import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getPost } from '../lib/blog';
import './Blog.css';

interface Props {
  slug: string;
  onBack: () => void;
}

const LABELS: Record<string, { back: string; notFound: string; read: string }> = {
  pt: { back: '← Voltar ao blog', notFound: 'Artigo não encontrado.', read: 'min de leitura' },
  en: { back: '← Back to blog', notFound: 'Article not found.', read: 'min read' },
  es: { back: '← Volver al blog', notFound: 'Artículo no encontrado.', read: 'min de lectura' },
};

export default function BlogPost({ slug, onBack }: Props) {
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'pt').split('-')[0];
  const L = LABELS[lang] || LABELS.pt;
  const post = getPost(slug, lang);

  useEffect(() => {
    if (!post) return;
    const prevTitle = document.title;
    document.title = `${post.title} | Terra Ventos`;
    const desc = document.querySelector('meta[name="description"]');
    const prevDesc = desc?.getAttribute('content') || '';
    if (desc && post.summary) desc.setAttribute('content', post.summary);

    const origin = window.location.origin;
    const url = `${origin}/blog/${post.slug}`;
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.id = 'blog-article-jsonld';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.summary,
      datePublished: post.date,
      inLanguage: post.lang,
      image: post.image ? `${origin}${post.image}` : undefined,
      author: { '@type': 'Organization', name: post.author || 'Terra Ventos' },
      publisher: { '@type': 'Organization', name: 'Terra Ventos' },
      mainEntityOfPage: url,
    });
    document.head.appendChild(ld);

    return () => {
      document.title = prevTitle;
      if (desc) desc.setAttribute('content', prevDesc);
      document.getElementById('blog-article-jsonld')?.remove();
    };
  }, [post]);

  const fmt = (iso: string) => {
    if (!iso) return '';
    const d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR', {
      day: '2-digit', month: 'long', year: 'numeric',
    });
  };

  if (!post) {
    return (
      <section className="blog-wrap">
        <button className="blog-back" onClick={onBack}>{L.back}</button>
        <p className="blog-intro">{L.notFound}</p>
      </section>
    );
  }

  return (
    <article className="blog-wrap blog-article">
      <button className="blog-back" onClick={onBack}>{L.back}</button>
      <header className="blog-post-head">
        <div className="blog-meta">
          <span>{fmt(post.date)}</span>
          <span>· {post.readingMin} {L.read}</span>
        </div>
        <h1 className="blog-title">{post.title}</h1>
        {post.summary && <p className="blog-lead">{post.summary}</p>}
      </header>
      {post.image && (
        <div className="blog-hero-img">
          <img src={post.image} alt={post.title} />
        </div>
      )}
      <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
