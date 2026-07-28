// Blog engine — zero-dependency. Lê artigos .md de src/content/blog, faz o parse
// do frontmatter e renderiza um subconjunto de Markdown para HTML. Editar = criar/
// alterar um arquivo .md (frontmatter + corpo) e commitar. Sem CMS, sem libs.

export interface BlogPost {
  slug: string;
  lang: string;
  title: string;
  summary: string;
  date: string; // ISO (YYYY-MM-DD)
  image?: string;
  author?: string;
  tags: string[];
  html: string;
  readingMin: number;
}

const raws = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inline(s: string): string {
  return esc(s)
    .replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+?)\]\((https?:[^)]+?|\/[^)]*?)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+?)`/g, '<code>$1</code>');
}

function renderMarkdown(md: string): string {
  const lines = md.replace(/\r/g, '').split('\n');
  let html = '';
  let i = 0;
  const N = lines.length;
  let ul = false;
  let ol = false;
  const closeLists = () => {
    if (ul) { html += '</ul>'; ul = false; }
    if (ol) { html += '</ol>'; ol = false; }
  };

  while (i < N) {
    const line = lines[i];

    if (line.startsWith('```')) {
      closeLists();
      i++;
      let code = '';
      while (i < N && !lines[i].startsWith('```')) { code += lines[i] + '\n'; i++; }
      i++;
      html += `<pre><code>${esc(code)}</code></pre>`;
      continue;
    }

    if (line.trim().startsWith('|') && i + 1 < N && /^\s*\|?[\s:-]*-[\s:|-]*\|?\s*$/.test(lines[i + 1])) {
      closeLists();
      const parseRow = (l: string) => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((c) => c.trim());
      const header = parseRow(line);
      i += 2;
      let t = '<table><thead><tr>' + header.map((h) => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>';
      while (i < N && lines[i].trim().startsWith('|')) {
        const cells = parseRow(lines[i]);
        t += '<tr>' + cells.map((c) => `<td>${inline(c)}</td>`).join('') + '</tr>';
        i++;
      }
      t += '</tbody></table>';
      html += t;
      continue;
    }

    if (/^---+\s*$/.test(line)) { closeLists(); html += '<hr>'; i++; continue; }

    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) { closeLists(); const lv = h[1].length; html += `<h${lv}>${inline(h[2])}</h${lv}>`; i++; continue; }

    if (line.startsWith('>')) {
      closeLists();
      let q = '';
      while (i < N && lines[i].startsWith('>')) { q += lines[i].replace(/^>\s?/, '') + ' '; i++; }
      html += `<blockquote>${inline(q.trim())}</blockquote>`;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      if (!ul) { closeLists(); html += '<ul>'; ul = true; }
      html += `<li>${inline(line.replace(/^\s*[-*]\s+/, ''))}</li>`;
      i++;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      if (!ol) { closeLists(); html += '<ol>'; ol = true; }
      html += `<li>${inline(line.replace(/^\s*\d+\.\s+/, ''))}</li>`;
      i++;
      continue;
    }

    if (line.trim() === '') { closeLists(); i++; continue; }

    closeLists();
    html += `<p>${inline(line)}</p>`;
    i++;
  }
  closeLists();
  return html;
}

function parse(raw: string): BlogPost | null {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  const data: Record<string, string> = {};
  for (const l of m[1].split('\n')) {
    const idx = l.indexOf(':');
    if (idx === -1) continue;
    const key = l.slice(0, idx).trim();
    let val = l.slice(idx + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  if (!data.slug || !data.title) return null;
  const body = m[2].trim();
  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug: data.slug,
    lang: (data.lang || 'pt').split('-')[0],
    title: data.title,
    summary: data.summary || '',
    date: data.date || '',
    image: data.image || undefined,
    author: data.author || undefined,
    tags: (data.tags || '').split(',').map((s) => s.trim()).filter(Boolean),
    html: renderMarkdown(body),
    readingMin: Math.max(1, Math.round(words / 200)),
  };
}

const ALL: BlogPost[] = Object.values(raws)
  .map(parse)
  .filter((p): p is BlogPost => p !== null)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

/** Um card por slug, escolhendo o idioma pedido (fallback: pt → primeiro disponível). */
export function getPosts(lang: string): BlogPost[] {
  const base = (lang || 'pt').split('-')[0];
  const bySlug = new Map<string, BlogPost>();
  for (const p of ALL) {
    const cur = bySlug.get(p.slug);
    if (!cur) { bySlug.set(p.slug, p); continue; }
    const score = (x: BlogPost) => (x.lang === base ? 2 : x.lang === 'pt' ? 1 : 0);
    if (score(p) > score(cur)) bySlug.set(p.slug, p);
  }
  return Array.from(bySlug.values()).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, lang: string): BlogPost | undefined {
  const base = (lang || 'pt').split('-')[0];
  const cands = ALL.filter((p) => p.slug === slug);
  if (cands.length === 0) return undefined;
  return (
    cands.find((p) => p.lang === base) ||
    cands.find((p) => p.lang === 'pt') ||
    cands[0]
  );
}
