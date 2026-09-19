# Blog loop — Terra Ventos (2x/semana)

Automação de publicação no blog do site (`terraventos.com/blog`) via API, com
posts **trilíngues** (PT/EN/ES) e **auto-publicação agendada**.

## Cadência
**2x por semana — terça e quinta, 09:00 America/Fortaleza (= 12:00Z).**
Os horários saem de `post.mjs next-slots`.

## Como funciona (modelo de agendamento)
A API aceita `published: false` + `published_at` no futuro e **publica sozinha**
naquela data — não precisa cron ao vivo pra "apertar publicar". O loop só precisa
**manter a fila cheia** agendando os próximos artigos.

1. Pega o próximo tema `pending` em `queue.json`.
2. Gera o artigo trilingue (PT/EN/ES) como um `posts/AAAA-MM-DD-slug.json`.
3. Roda o check factual/compliance (ver Guardrails).
4. Agenda no próximo slot livre: `node post.mjs create posts/<arquivo>.json`.
5. Marca o tema como `scheduled` na `queue.json` e guarda o `id` retornado.

## Arquivos
- `post.mjs` — CLI de publicação (POST/PATCH + helper de horários). Sem segredo dentro.
- `queue.json` — fila de temas (pilares de SEO) + status.
- `posts/*.json` — payloads dos artigos (registro versionado do que foi publicado).

## Uso
```bash
node post.mjs next-slots 6                       # próximos horários ter/qui 09:00
node post.mjs create posts/2026-08-04-....json   # cria/agenda um post -> imprime o id
node post.mjs patch <id> 2026-08-11T12:00:00Z    # reagenda/edita um post existente
```

## Segredo (chave de escrita)
A chave da API **nunca** entra no repo. É lida de:
1. `process.env.TERRAVENTOS_BLOG_API_KEY` (ideal — configurar como secret do ambiente), ou
2. `adfactory/.env` (git-ignored) como fallback local.

## Guardrails (a copy DEVE respeitar — ver `../core/factual.mjs`)
- Vento = **jun–dez**; nunca "o ano todo" / "year-round" / **"vento constante"**.
- Bitupitá = **nova fronteira**; **nunca "perto de Jeri"**. Pode citar Rota das Emoções.
- **Sem preço** na copy. Sem promessa de retorno/valorização garantida.
- Asset de IA sempre rotulado e ao lado de foto real; casas existentes = só foto real.

## Pré-requisito de rede (ambiente remoto)
O ambiente do Claude Code na web só acessa hosts na **allowlist de egress**. Para
publicar, `www.terraventos.com` precisa estar liberado nas configurações de rede do
ambiente. Sem isso, o `create` retorna `403 Host not in allowlist`.
Docs: https://code.claude.com/docs/en/claude-code-on-the-web

## Imagem de capa
Opcional via `cover_image_url` (+ `cover_image_credit_name`/`_url`). Enquanto os posts
ficam `published:false` até a data agendada, dá pra revisar e escolher a capa no painel
`/admin` ("Sugerir fotos (Unsplash)") antes de irem ao ar.
