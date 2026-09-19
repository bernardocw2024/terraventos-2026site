# Blog automation — handoff técnico (Terra Ventos)

**De:** automação de conteúdo (Claude Code) · **Para:** dev do site
**Objetivo:** publicar no blog **2x/semana** (ter/qui 09:00 Fortaleza), posts trilíngues (PT/EN/ES), agendados.
**Status:** integração construída e validada localmente; **1 bloqueio de rede** (abaixo).

---

## 1. Como estamos usando a API

- **Endpoint:** `POST https://www.terraventos.com/api/posts`
- **Auth:** header `x-api-key: <chave de escrita que você emitiu>` (guardada como secret; **não** vai em repo/doc).
- **Agendamento:** enviamos `published: false` + `published_at` no futuro e contamos com a **auto-publicação** na data. Assim não dependemos de um worker rodando 24/7 — só mantemos a fila agendada.
- **Slots:** terça e quinta, 09:00 America/Fortaleza = **12:00Z** (UTC-3).

Payload que enviamos (campos usados):

```json
{
  "slug": "delta-do-parnaiba-o-lado-desconhecido-do-litoral-do-ceara",
  "published": false,
  "published_at": "2026-08-04T12:00:00Z",
  "title_pt": "…", "excerpt_pt": "…", "content_pt": "<markdown>",
  "title_en": "…", "excerpt_en": "…", "content_en": "<markdown>",
  "title_es": "…", "excerpt_es": "…", "content_es": "<markdown>"
}
```

Edição/reagendamento: `PATCH /api/posts` com `{ "id": "<id>", "published_at": "…" }`.

---

## 2. 🚧 Bloqueio atual (ação de infra, provavelmente NÃO sua)

O `POST` de teste retornou, **do lado do ambiente de automação** (proxy de egress do Claude Code na web):

```
403 Forbidden: Host not in allowlist: www.terraventos.com
```

Isso **não** é erro da sua API — é o **allowlist de rede do ambiente** que roda a automação, que precisa liberar `www.terraventos.com`. É uma config nas *network/egress settings* do ambiente (lado Terra Ventos/infra), não no código do site. Estamos resolvendo esse lado.

**O que precisamos confirmar com você** (para não haver um 2º bloqueio depois de liberar o egress):

1. **A API restringe por IP/origem/CORS?** Se sim, os requests virão dos IPs de saída do ambiente de automação — podemos te passar a lista pra allowlisting no seu lado. Se a auth é só por `x-api-key`, ignore.
2. **Existe endpoint de leitura** (`GET /api/posts` ou `/api/posts/:id`) pra confirmarmos que um post foi criado/agendado? Ajuda na verificação idempotente.
3. **Slug duplicado:** retorna erro (409?) ou faz upsert? Como devemos tratar re-tentativas?
4. **Rate limits** (req/min) que devamos respeitar no agendamento em lote?
5. **`published_at`:** confirma que aceita ISO-8601 em UTC (`Z`) e que o cron de publicação roda no fuso esperado? Qual a granularidade (minuto? hora?).
6. **Imagem de capa:** `cover_image_url` aceita URL externa arbitrária ou precisa ser upload/host próprio? A sugestão Unsplash do painel é server-side (salva crédito) — dá pra acionar via API também?
7. **Staging:** existe endpoint/flag de teste pra validarmos sem criar registros em produção?

---

## 3. O que já está pronto do nosso lado

- CLI de publicação (`adfactory/blog/post.mjs`): `create` / `patch` / `next-slots`. Chave lida de env/`.env` (nunca no repo).
- Fila de 10 temas de SEO (`queue.json`) + 1º artigo trilíngue pronto e validado (`posts/2026-08-04-delta-do-parnaiba.json`).
- Guardrails de copy aplicados (trava factual: vento jun–dez, sem preço, sem "perto de Jeri", etc.).

**Assim que (a) o egress liberar `www.terraventos.com` e (b) você confirmar os pontos acima**, agendamos o lote das próximas semanas e ligamos o reabastecimento automático.

*Contato: info@terraventos.com · WhatsApp +55 85 98557-2807*
