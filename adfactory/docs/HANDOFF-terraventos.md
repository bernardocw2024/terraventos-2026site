# TERRA VENTOS — Handoff Mestre (Fábrica de Anúncios Meta · kite & terrenos)

> **Para que serve este arquivo:** transferir TODO o projeto para uma nova conta do Claude
> (login da empresa). Um Claude novo deve conseguir continuar de onde paramos só lendo isto.
> Data do snapshot: **02/07/2026**. Repo: `bernardocw2024/terraventos-2026site` ·
> branch de trabalho: `claude/meta-ads-factory-prompt-93sa0f` · pasta do sistema: `adfactory/`.

---

## 1. O negócio e o objetivo

**Terra Ventos** (terraventos.com) vende **terrenos frente-mar e imóveis de alto padrão** no litoral
do Ceará, com posicionamento **boutique / advisory** (curadoria, não classificado). Público forte em
**kitesurf/wingfoil** (Preá, Jeri, Bitupitá) e investidores BR/EU/AR.

**Objetivo da fábrica:** sistema majoritariamente automatizado para **criar, testar, matar e escalar**
anúncios pagos no Meta — achar de forma confiável os poucos criativos que convertem, botar verba neles
e matar o resto rápido, respeitando compliance de Habitação (Housing) e a trava factual.

**Tagline travada:** *"Invista com o vento a favor / Invest with the wind at your back."*

---

## 2. Estratégia atualizada

### Posicionamento & foco de inventário
- **Foco:** terrenos **≥ R$700k** + imóveis de **luxo**. O piso de R$700k coincide com o do
  **Golden Visa (RN 36)** → reforça o ICP de residência.
- **Bitupitá = projeto próprio** Terra Ventos (10 lotes, a partir de R$120k) — **exceção declarada**
  à regra dos R$700k; é o **flagship do render 3D** e o **vencedor de CTR (11,87%)**.
- **Qualificam hoje:** Tatajuba 1.000 m² (R$800k), Tatajuba/Guriú 100.000 m² (R$15M), Villa Prabhu
  (sob consulta); casas de luxo: Barrinha (R$6,6M), Preá House (R$2,7M).

### Segmentos (ICPs) & idiomas
- **Quaternário BR** (alta renda SP/RJ/MG) — PT
- **Primário europeu** (kite/wingfoil DE/FR/NL/GB/ES/PT) — EN/PT/ES-ES
- **Terciário Golden Visa** (residência via ativo costeiro) — EN/ES/PT
- **Secundário argentino** (hedge do peso, voseo) — ES-AR
- Regra de roteamento: **idioma do criativo = idioma da resposta** no WhatsApp.

### Verba, geos e definição de "qualificado"
- **Verba de teste:** ~R$100/dia (~R$3k/mês). **CPL-qualificado alvo:** R$150–250 (configurável).
- **Geos 1º lote:** Ibéria (ES/PT), Europa (DE/FR/NL/UK), Argentina (AR), Brasil (SP/RJ/MG).
- **Lead qualificado (gatilho de graduação):** **conversa no WhatsApp dentro do ICP.**

### 🌊 NOVO pilar de conteúdo — Delta do Parnaíba / Rota das Emoções (atualização de estratégia)
Descoberta importante: Bitupitá fica no **extremo oeste do CE, na porta do Delta do Parnaíba**, dentro da
**Rota das Emoções** (Jericoacoara → Delta → Lençóis Maranhenses). Isso (1) **mata a objeção "isolado"**,
(2) **reforça a tese macro** (turismo como demanda) e (3) **abre uma trilha de AWARENESS** rica para o Pixel.
Fatos verificados em `docs/bitupita-delta-fatos.md`; atrativos + fotos em `docs/bitupita-delta-pontos.md`
e no PDF `docs/atrativos-bitupita.pdf`.

---

## 3. Sistemas & arquitetura (o que está no código)

Tudo em **`adfactory/`** (Node 20, ES modules). **Lógica determinística versionada** em `core/`;
**ações externas** via MCP.

```
adfactory/
  cli.mjs               # comandos: check · check-hooks · plan · launch · score · utm
  core/
    compliance.mjs      # checador Housing / copy excludente (§5) — warnings
    factual.mjs         # guardrails factuais HARD-STOP (§8)
    scoring.mjs         # mata-mata: gates, kill/graduate/iterate (§6)
    utm.mjs             # UTM + link de WhatsApp com ref
    launcher.mjs        # lançador Meta (campanha/adset/ad) — dry-run
    plan.mjs            # planejador do lote (unidades/verba/bloqueios)
    config.mjs · csv.mjs
  config/config.example.json   # orçamentos/geos/gates/CPL — copiar p/ config.json (git-ignored)
  data/                 # FONTE DA VERDADE OPERACIONAL (CSVs)
    properties.csv      # inventário elegível
    concepts.csv        # C1–C4 + AWARENESS (+ pilar DELTA ligado ao C1)
    hooks.csv           # 62 hooks trilíngues (PT/EN/ES-ES/ES-AR)
    creatives.csv       # placar: 1 linha por unidade de teste
    copy.csv            # copy pronta (primary/headline/desc/cta) — 20 criativos
    generation-log.csv  # log de todos os assets gerados (render/vídeo) + URLs + media_id
  docs/                 # F0-arquitetura, F2-pixel, F3-geracao, F4-lancador, lote-teste-1,
                        # copy-lote-teste-1, bitupita-delta-fatos, bitupita-delta-pontos,
                        # atrativos-bitupita.pdf, e ESTE handoff
```

**Modelo de dados** (detalhe em `docs/F0-arquitetura.md`): placar humano-legível (hoje em CSV; espelha
o desenho de Google Sheets), assets no Google Drive (`00_raw` → `10_generated` rotulado → `20_creatives`).

---

## 4. GitHub

- **Repo:** `bernardocw2024/terraventos-2026site` (site React 19 + Vite na raiz; fábrica em `adfactory/`).
- **Branch de trabalho:** `claude/meta-ads-factory-prompt-93sa0f` (todo o trabalho da fábrica está aqui).
- **Commits principais (ordem):** F0 arquitetura → F1 dados → F4 core (checkers/scoring/CLI) →
  F3 renders Bitupitá (v1/v2/v3 A/B) → vídeo reveal + 9:16 → copy C2/C3/C4/AWARENESS → pilar Delta →
  guia de pontos + PDF → este handoff.
- ⚠️ **Assinatura de commits:** o ambiente atual não tem chave de assinatura → commits aparecem
  "Unverified" no GitHub (autor/e-mail corretos). Configurar signing na conta nova se quiser "Verified".

---

## 5. Integrações / contas (IDs; segredos ficam no `.env`, NÃO aqui)

| Sistema | Detalhe | Status |
|---|---|---|
| **Meta Ads** | Conta `act_1631628834217759` ("CA - Terra Ventos") · Business `644652842069333` · BRL · pagamento ativo | ✅ ativa via MCP |
| **Página FB** | `644651102069507` (Lead-Gen ToS não aceito — só importa p/ Lead Ads nativo) | ok |
| **Pixel / Dataset** | **NENHUM (0)** | 🔴 **bloqueador nº 1** |
| **WhatsApp** | `wa.me/5585985572807` (+55 85 98557-2807) — CTA principal | ativo |
| **Higgsfield** | plano com **Seedance Unlimited** (vídeo ilimitado) — gera imagem/vídeo/reframe/dublagem | ✅ upgradeado |
| **Runway** | imagem (nano-banana-pro) excelente; **vídeo bateu limite de créditos** | 🟡 créditos p/ vídeo |
| **Google Drive** | estrutura de pastas da fábrica criada | ✅ |
| **Brevo (CRM/e-mail)** | captura de leads na **lista 2** (via `api/brevo.js`); e-mail `info@terraventos.com` | ✅ |
| **Gmail** | previsto p/ resumo semanal (F6) | pendente |
| **Apify** | scraping (concorrentes/Ads Library/moodboard de fotos) | disponível |

> **Segredos:** nenhuma chave/token neste arquivo. Ficam em `adfactory/.env` (git-ignored; ver `.env.example`).
> Na conta nova, reconectar os MCP (Meta Ads, Higgsfield, Runway, Google, Brevo, Gmail, Apify, GitHub).

---

## 6. CRM & atribuição

- **Captura:** site → `api/brevo.js` (lista Brevo **2**) + form GHL (link.msgsndr.com) + EmailJS.
- **Buraco atual:** os `wa.me` **não carregam UTM** para dentro da conversa e **não há Pixel** → atribuição zero.
- **Solução desenhada (F2):** Pixel captura o clique (`Contact`/`Lead` com `utm_content`) + `?text=`
  pré-preenchido com **código curto do criativo** (ex.: `Ref: BIT-PT-01`) → mapeia a conversa ao criativo.
- **UTM padrão:** `utm_source=meta · utm_medium=paid · utm_campaign=<lote> · utm_content=<creative_id> · utm_term=<lang>`
  (gerador pronto: `node cli.mjs utm <creative_id> [url]`).

---

## 7. Conteúdos já produzidos

### Renders 3D (Bitupitá — flagship) — rótulo "Projeção 3D"
- v1 (design) e v2 (rústica-chique na foto real). **v3 = versão boa**: casa **no lote, antes da cerca**,
  em **2 fotos reais** (Opção A/foto 1 e Opção B/foto 2). URLs/media_id em `data/generation-log.csv`.

### Vídeo de reveal (lote vazio → casa surge)
- **16:9** (Seedance, 8s) + **9:16** (reframe) prontos. **1:1** ficou processando (job `947ed184`) — **retomar**.
- Feito por image-to-video (quadro inicial = lote real; quadro final = render v3 A). URLs em `generation-log.csv`.
- ⚠️ URLs de CDN **expiram** — a fonte da verdade é o `generation-log.csv` + a Library do Higgsfield/Drive.

### Biblioteca de copy (só texto + foto real; **0 render nestes**)
- **`data/copy.csv` — 20 criativos** prontos (primary/headline/desc/cta), validados **0 erros/0 avisos**
  no factual+compliance. **`data/hooks.csv` — 62 hooks** PT/EN/ES-ES/ES-AR.
- Cobertura: **C1** (Bitupitá, incl. pilar Delta), **C2** (Why Settle for Europe/Preá House),
  **C3** (Golden Visa/Tatajuba), **C4** (hedge argentino, voseo), **AWARENESS** (lifestyle kite + delta).
- 3 **roteiros de vídeo do fundador** (C2 EN, C4 AR) + lifestyle, prontos p/ gravar — em `docs/copy-lote-teste-1.md`.

### Delta do Parnaíba (novo pilar)
- `docs/bitupita-delta-fatos.md` (fatos + fontes) · `docs/bitupita-delta-pontos.md` (atrativos + links de fotos)
  · `docs/atrativos-bitupita.pdf` (exportável). Atrativos: lagoa do Arrombado, dunas/farol, 5 rios/manguezal,
  Cajueiro da Praia/PI (peixe-boi/Cajueiro Rei — vizinho, com ressalva). A confirmar: Pedras da Miquelina, Lago Verde do Venâncio.

---

## 8. Campanhas — Lote de Teste Nº 1

- **~14–16 unidades** de teste dentro de R$100/dia (ABO perto do piso R$5,14/adset, ou CBO).
- Conceitos: **C1** Bitupitá (~5) · **C2** Europe (~4) · **C3** Lote ≥700k (~4) · **C4** Argentina (~2–3).
- Estáticos/carrossel lançam **já**; unidades de **fundador à câmera** entram após o shoot.
- **Portão de dados:** ≥1.000 impressões **OU** ≥ R$X/unidade antes de decidir (~2–3 dias/unidade).
- Detalhe completo em `docs/lote-teste-1.md`. Lançador em **dry-run**: `node cli.mjs launch`.

---

## 9. Loops (o que faz a fábrica "girar")

### 9.1 Mata-mata de criativos (kill / graduate / iterate)
- **Etapa A (48–72h):** hook/thumbstop rate, hold rate, custo por LP view → mata os piores no portão.
- **Etapa B (sobreviventes):** CPL e **custo por lead qualificado** (WhatsApp/ICP).
- **Graduar** vencedores → escala + enfileirar 5–10 revariações/relocalizações; **iterar** os do meio
  mudando **uma** variável. Amostra pequena = marcar **baixa confiança**. (código: `core/scoring.mjs`, `node cli.mjs score`.)

### 9.2 Loops de paid media (ciclo semanal)
1. **Ideação** → ângulos viram briefs.
2. **Pré-teste sintético** (ver 9.3) antes do spend.
3. **Teste real Meta** (3–5 dias).
4. **Reconciliação** previsão × real → recalibrar.
5. **Escala & variação** dos vencedores (idioma/formato/hook via Higgsfield).
6. **Funil/retargeting** (topo: sonho/vento → meio: ROI/jurídico → fundo: oferta/WhatsApp) — depende do Pixel.

### 9.3 Painel sintético de compradores (a construir — desenho aprovado)
- Personas do Ceará como agentes (investidor SP, europeu kite, argentino, fortalezense, nômade, aposentadoria).
- Cada criativo passa pelo painel → scores (hook/clareza/objeção/CTA) + objeção principal → **soma ao scoring**.
- Calibrar com dado real (Apify + Meta Ads Library + Brevo). Módulo proposto: `personas/*.yaml` + `synthetic_panel.py`
  + colunas `pred_score/real_score/delta` no placar. **Ainda não implementado.**

---

## 10. Compliance & guardrails (regras que a copy DEVE respeitar)

**Factual (HARD-STOP — `core/factual.mjs`):**
- Vento = **6 meses (jun–dez)**; nunca "o ano todo" / "year-round" / "vento constante".
- Bitupitá = **nova fronteira**; **nunca "perto de Jeri"** (~2,5h do aeroporto). Pode citar Rota das Emoções.
- **Sem número de preço** na copy (a menos que marcado `price_from_listing`); usar sensação, não números.
- Asset de IA **sempre rotulado** ("Projeção 3D / Recreación 3D") e ao lado de foto real.
- Só imóvel do terraventos.com. Casas existentes = **só foto real** (IA só p/ terreno vazio e tours).

**Housing (§5 — `core/compliance.mjs`, warnings):** sem "perfeito/ideal para X", sem status familiar/
renda/idade/religião; segmentar por **país/região** (o hook faz o filtro fino); **declarar Categoria
Especial de Habitação** em anúncio de venda.

---

## 11. Baselines comprovados (semear o mata-mata)

| Anúncio | CTR | Obs. |
|---|---|---|
| Bitupitá Terreno — Estático | **11,87%** | vencedor, pouco explorado (semeia C1) |
| Why Settle for Europe | **5,75%** | diferencial cultural (semeia C2) |
| Preá House | **4,49%** | luxo existente |

CPM histórico observado ~R$10–15/1.000 impressões.

---

## 12. Pendências / bloqueadores (fazer na conta nova)

1. 🔴 **Criar o Pixel/Dataset** no `act_1631628834217759` e instalar base + eventos (PageView, ViewContent,
   Lead/Contact) no site + **UTM em todos os `wa.me`** + código de ref no `?text=`. **Sem isto não há otimização.**
2. 🟡 **Aprovar disparo ao vivo** do lançador (hoje só dry-run).
3. 🟡 **1:1 do reveal** (job `947ed184`) + **Marketing Studio** do Higgsfield (caiu na permissão).
4. 🟡 **Shoot próprio** (drone + fundador): lagoa do Arrombado, dunas/farol, 5 rios; fundador EN/AR (C2/C4).
5. 🟡 **Confirmar** Pedras da Miquelina e Lago Verde do Venâncio antes de usar em copy.
6. 🟡 **Implementar o painel sintético** (9.3).
7. ⚙️ Créditos de **vídeo no Runway** (se quiser hero 4K) e **signing de commits** no GitHub.

---

## 13. Roadmap por fases

| Fase | Entrega | Status |
|---|---|---|
| F0 | Descoberta + arquitetura + modelo de dados + decisões | ✅ |
| F1 | Biblioteca + placar (CSVs) seeded | ✅ |
| F2 | **Pixel + rastreio** (código do site pronto; falta criar o Pixel) | 🟡 bloqueador |
| F3 | Pipeline de geração (renders + vídeo reveal + copy) | 🟡 avançado |
| F4 | Lançador Meta + checadores + **dry-run** | 🟡 falta disparo ao vivo |
| F5 | Mensuração + mata-mata automático | ⬜ |
| F6 | Relatório semanal (Gmail) + nutrição (Brevo opt-in) | ⬜ |
| F7 | Multicanal (após o Meta funcionar) | ⬜ |

---

## 14. Como retomar na conta nova (checklist)

1. Clonar o repo e usar o branch `claude/meta-ads-factory-prompt-93sa0f`.
2. **Reconectar os MCP** (Meta Ads, Higgsfield, Runway, Google Drive/Sheets, Brevo, Gmail, Apify, GitHub)
   com o login da empresa; criar `adfactory/.env` a partir do `.env.example`.
3. Ler nesta ordem: **este handoff** → `docs/F0-arquitetura.md` → `docs/lote-teste-1.md` →
   `docs/copy-lote-teste-1.md` → `docs/bitupita-delta-fatos.md`.
4. Rodar `node adfactory/cli.mjs plan` e `... launch` (dry-run) para ver o lote.
5. **Prioridade 1:** criar o Pixel (F2). Depois: subir os estáticos aprovados, gravar o shoot, ligar o mata-mata.

*Tagline: "Invista com o vento a favor / Invest with the wind at your back."*
