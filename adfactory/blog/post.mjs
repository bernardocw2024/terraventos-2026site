#!/usr/bin/env node
// Terra Ventos — publicador do blog (/api/posts).
// Uso:
//   node post.mjs create <arquivo.json>     -> cria post (POST), imprime o id
//   node post.mjs patch <id> <published_at> -> reagenda/edita (PATCH)
//   node post.mjs next-slots <n>            -> lista os próximos n horários (ter/qui 09:00 Fortaleza)
//
// A chave NUNCA fica no código. É lida de:
//   1) process.env.TERRAVENTOS_BLOG_API_KEY  (ideal p/ ambiente/secret)
//   2) adfactory/.env  (git-ignored, fallback local)
//
// Node 20+ (fetch nativo). Sem dependências.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const ENDPOINT = 'https://www.terraventos.com/api/posts';
const HERE = dirname(fileURLToPath(import.meta.url));

function loadKey() {
  if (process.env.TERRAVENTOS_BLOG_API_KEY) return process.env.TERRAVENTOS_BLOG_API_KEY.trim();
  try {
    const env = readFileSync(resolve(HERE, '..', '.env'), 'utf8');
    for (const line of env.split('\n')) {
      const m = line.match(/^\s*TERRAVENTOS_BLOG_API_KEY\s*=\s*(.+?)\s*$/);
      if (m) return m[1].replace(/^["']|["']$/g, '');
    }
  } catch { /* ignore */ }
  throw new Error('TERRAVENTOS_BLOG_API_KEY não encontrada (env ou adfactory/.env).');
}

async function api(method, body) {
  const res = await fetch(ENDPOINT, {
    method,
    headers: { 'content-type': 'application/json', 'x-api-key': loadKey() },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
  }
  return data;
}

// Próximos horários ter/qui 09:00 America/Fortaleza (UTC-03 => 12:00Z), a partir de amanhã.
function nextSlots(n = 8, fromISO = null) {
  const start = fromISO ? new Date(fromISO) : new Date();
  const slots = [];
  const d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
  d.setUTCDate(d.getUTCDate() + 1); // começa amanhã
  while (slots.length < n) {
    const dow = d.getUTCDay(); // 0 dom .. 6 sab
    if (dow === 2 || dow === 4) { // terça ou quinta
      slots.push(`${d.toISOString().slice(0, 10)}T12:00:00Z`); // 09:00 Fortaleza
    }
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return slots;
}

const [cmd, ...args] = process.argv.slice(2);

if (cmd === 'create') {
  const payload = JSON.parse(readFileSync(args[0], 'utf8'));
  const out = await api('POST', payload);
  const id = out?.id || out?.post?.id || out?.data?.id;
  console.log(JSON.stringify({ ok: true, id, slug: payload.slug, published_at: payload.published_at, response: out }, null, 2));
} else if (cmd === 'patch') {
  const [id, published_at] = args;
  const out = await api('PATCH', { id, published_at });
  console.log(JSON.stringify({ ok: true, id, published_at, response: out }, null, 2));
} else if (cmd === 'next-slots') {
  console.log(nextSlots(Number(args[0] || 8), args[1] || null).join('\n'));
} else {
  console.error('uso: node post.mjs create <arquivo.json> | patch <id> <published_at> | next-slots <n>');
  process.exit(1);
}
