# F2 — Pixel + Rastreio (atribuição ad → lead)

A fase mais crítica: sem Pixel não há otimização por conversão, retargeting nem lookalike, e hoje
**nenhum lead é atribuído ao anúncio**. Esta fase fecha esse buraco.

## O que já foi implementado no site (este commit)

Camada única de rastreio em **`src/lib/tracking.ts`**, **inerte por padrão** (nenhuma mudança de
comportamento em produção até existir um Pixel configurado — totalmente reversível):

- **Meta Pixel** carregado só se `VITE_META_PIXEL_ID` estiver definido; dispara `PageView`.
- **Captura de UTM + fbclid** da URL → persistidos em `sessionStorage` (sobrevivem à navegação SPA).
- **Eventos**: `Lead` no envio do formulário (`FormularioLuxo`); `Contact` no clique de WhatsApp.
- **`buildWhatsAppUrl()`**: injeta um **código de referência** no texto pré-preenchido do WhatsApp
  (`[ref: <slug-do-imóvel ou utm_content>]`), permitindo mapear a conversa de volta ao criativo exato.
  - Botão global de WhatsApp (`App.tsx`) + CTAs das páginas de imóvel (`PaginaIndividual[V2]`) já usam.

Build verificado: `npm run build` ✅ · `tsc -b` ✅.

## Passos manuais para ativar (faltam credenciais que só você tem)

1. **Criar o Pixel/Dataset** no Meta Events Manager (a Marketing API conectada **não** expõe criação de
   Pixel — só gestão de eventos sobre um Pixel existente). Conta: `act_1631628834217759`,
   business `644652842069333`. Anote o **Pixel ID** (numérico).
2. **Definir as variáveis de ambiente:**
   - **Site (Vercel / `.env` da raiz):** `VITE_META_PIXEL_ID=<pixel_id>` → ativa o Pixel + eventos no site.
   - **Fábrica (`adfactory/.env`):** `META_DATASET_ID=<pixel_id>` e, para CAPI server-side, `META_PIXEL_CAPI_TOKEN`.
   - Atualizar `adfactory/config/config.json` → `meta.dataset_id`.
3. **Me passar o Pixel ID** → eu configuro automaticamente as **regras de evento** via API
   (`ads_pixel_event_create`): `Lead` (envio de form), `Contact` (clique WhatsApp), `ViewContent`
   (página de imóvel), com os parâmetros (`content_name`, `ref`).

## Esquema de UTM (a aplicar em cada criativo na F4)

```
utm_source=meta · utm_medium=paid · utm_campaign=<lote> · utm_content=<creative_id> · utm_term=<lang>
```
O `utm_content` = `creative_id` (ex.: `tatajuba-EN-9x16-reveal-v1`). O mesmo código viaja no texto do
WhatsApp via `buildWhatsAppUrl`, então **clique no site** (Pixel) e **conversa no WhatsApp** (qualificação)
apontam para o mesmo criativo.

## Follow-up (CAPI server-side — opcional, recomendado)

`api/brevo.js` pode disparar o evento `Lead` também via Conversions API (server-side) para resiliência a
bloqueadores/iOS, usando `META_DATASET_ID` + `META_PIXEL_CAPI_TOKEN`. Fica para um próximo incremento da F2.
