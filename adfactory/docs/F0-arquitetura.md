# F0 — Arquitetura da Fábrica de Anúncios (Terra Ventos)

Documento de arquitetura. **Sem código de produção ainda** (conforme §9 do Prompt Mestre). Define
stack, modelo de dados, estrutura de pastas, convenções e o roadmap executável das fases seguintes.

---

## 1. IDs e ativos confirmados (descoberta read-only)

```
Meta Ad Account ...... act_1631628834217759  ("CA - Terra Ventos")
Business ............. 644652842069333        (Terra Ventos)
Moeda ................ BRL   · min/adset/dia = R$5,14 (514 centavos)
Página ............... 644651102069507        (Lead-Gen ToS = NÃO aceito)
Pixel / Dataset ...... NENHUM  ← bloqueador nº 1 (F2)
WhatsApp ............. wa.me/5585985572807  (+55 85 98557-2807)
Site ................. terraventos.com — React 19 + Vite (Vercel), api/ serverless (Node)
Lead capture hoje .... api/brevo.js (lista Brevo 2) + form GHL (link.msgsndr.com) + EmailJS
```

**Baselines comprovados na conta (semear o mata-mata):**

| Anúncio | CTR | Impressões | Observação |
|---|---|---|---|
| AN-01 Terreno de Bitupitá — Estático | **11,87%** | 2.587 | vencedor, pouco explorado |
| AN-04 Why settle for Europe | **5,75%** | 957 | diferencial cultural |
| AN-01 Preá House | **4,49%** | 2.471 | imóvel de luxo existente |

---

## 2. Stack técnico

- **Runtime:** Node 20 (mesma do site → uma só toolchain). Projeto isolado em `adfactory/`.
- **Config:** `config/*.json` (orçamentos, geos, gates, idiomas, CPL) + `.env` (segredos). **Nada fixo no código.**
- **Camadas (a construir nas próximas fases):**
  ```
  adfactory/
    config/            # config.example.json → config.json (git-ignored)
    core/              # LÓGICA DETERMINÍSTICA (testável, sem segredos)
      compliance/      #   checador Housing + copy excludente (§5)
      factual/         #   guardrails de fato — hard stop (§8)
      scoring/         #   mata-mata: gates, kill/graduate/iterate (§6)
      utm/             #   construtor de UTM + naming convention
      dryrun/          #   planejador "o que seria lançado" antes de gastar
    providers/         # ADAPTADORES de integração (interface estável)
      meta/            #   Marketing API (campanha/adset/ad/insights)
      generation/      #   generation_provider → Runway + Higgsfield
      drive/  sheets/  brevo/  gmail/
    cli/               # comandos: plan · launch --dry-run · score · report
    docs/              # esta pasta
  ```
- **Modelo de operação (curto → longo prazo):** lógica de `core/` roda standalone; as ações externas
  são executadas via **MCP (Claude Code)** agora e migram para **tokens de system-user + GitHub Actions
  cron** quando quiserem o loop de mensuração 100% agendado.

---

## 3. Modelo de dados

### 3.1 Google Sheets — "Terra Ventos · Ad Factory" (placar legível por humanos)

A planilha é a **fonte da verdade operacional**: o sistema lê e escreve; humanos editam quando preciso.

**Aba `properties`** (inventário elegível, filtrado pelo foco ≥R$700k + luxo)

| campo | exemplo |
|---|---|
| property_ref | `tatajuba-1000m` |
| nome | Terreno Exclusivo Tatajuba 1.000 m² |
| tipo | `lote` \| `casa` \| `pousada` |
| land_only | TRUE/FALSE (elegível a render IA?) |
| location | Tatajuba, CE |
| price_brl | 800000 |
| tier | `lote_700k+` \| `casa_luxo` \| `projeto_proprio` (Bitupitá) |
| site_url | https://terraventos.com/... |
| real_photos | link Drive `00_raw/properties/<ref>/` |
| in_focus | TRUE/FALSE |

**Aba `concepts`** — conceito, pilar, segmento, geos, idiomas, render_3d (sim/não/condicional).

**Aba `hooks`** — hook_id, segmento, idioma (PT-BR/EN/ES-ES/ES-AR), texto, origem (banco), usado_em.

**Aba `creatives`** (biblioteca + placar — uma linha por **unidade de teste**)

| grupo | campos |
|---|---|
| identidade | creative_id, concept_id, hook_id, language, format (9:16/1:1/4:5/static/carousel/video), opening_variant, property_ref |
| origem | source_asset (Drive), ai_used, ai_label, whitelisting_consent |
| Meta | meta_ad_id, adset_id, campaign_id, utm_content, status (draft/ready/in_review/live/killed/graduated/iterating) |
| Etapa A | impressions, hook_rate, hold_rate, ctr, cost_per_lp_view, gate_passed |
| Etapa B | cpl, qual_leads, cost_per_qual_lead, lead_to_call_rate |
| decisão | decision, decided_at, confidence (low p/ amostra pequena), notes |

**Aba `decisions_log`** — trilha datada de cada kill/graduate/iterate (auditável, reversível).

### 3.2 Google Drive — estrutura de pastas (fonte da verdade dos assets)

```
Terra Ventos · Ad Factory/
  00_raw/                         # bruto: fundador, lifestyle, kite/wingfoil, imóveis
    founder/   lifestyle/   properties/<property_ref>/
  10_generated/                   # IA — SEMPRE rotulado "Projeção 3D / Recreación 3D"
    <property_ref>/{renders,tours,3d_glb}/
  20_creatives/                   # unidades finais por formato e idioma
    <concept_id>/<creative_id>/{9x16,1x1,4x5}/
  30_whitelisting/                # clipes de criador + consentimento datado
  90_reports/                     # resumos semanais, exports
```

Cada asset de IA em `10_generated/` é **vinculado à foto real de origem** (rastreio §7) e nasce rotulado.

---

## 4. Convenções de nomenclatura e atribuição (resolve o "buraco" do WhatsApp)

**Nome do anúncio / creative_id:** `[concept]-[lang]-[format]-[opening]-v[n]`
→ ex.: `bitupita-PT-9x16-reveal-v1`, `tatajuba-EN-1x1-split-v2`

**UTM no destino (LP):** `utm_source=meta · utm_medium=paid · utm_campaign=<lote> · utm_content=<creative_id> · utm_term=<lang>`

**WhatsApp (o elo que hoje some):** o `wa.me` não carrega UTM para dentro da conversa. Solução:
1. O **clique** é capturado pelo Pixel (evento `Contact`/`Lead` com `utm_content`) — F2.
2. O `?text=` pré-preenchido carrega um **código curto do criativo** (ex.: `Ref: BIT-PT-01`), então a
   conversa é mapeada de volta ao criativo exato — base do "custo por lead qualificado".
3. Follow-up **no idioma do lead** (regra de roteamento §1.1): idioma do criativo → idioma da resposta.

---

## 5. Compliance e guardrails (embutidos, não acoplados)

- **Declarar Categoria Especial de Habitação (Housing)** em todo anúncio de venda. Sem age/gênero/CEP/
  interesse detalhado; segmentar por **país/região** + **o hook faz o filtro fino**.
- **Checador de copy** (pré-lançamento): sinaliza linguagem excludente/atributo pessoal ("perfeito para
  expatriados ricos", "ideal para…") → exige frasing neutro.
- **Guardrails factuais (hard stop §8):** vento = 6 meses (jun–dez); Bitupitá = nova fronteira, nunca
  "perto de Jeri"; sem preço fora de ficha real; sem imagem de IA fora das exceções §7 (e sempre rotulada);
  só imóvel do terraventos.com.
- **Trilha de lifestyle/awareness** (sem sinais de "à venda") para topo de funil → retargeting (após Pixel).
- **Não pressupor** que Special Ad Audiences/lookalikes existam em 2026 — verificar ao vivo, degradar com elegância.

---

## 6. Política de visualização por IA (§7 — resumo operacional)

IA **permitida só em dois casos**, sempre rotulada + ao lado de foto real:
1. **Render arquitetônico em terreno vazio** (foto real do lote → casa proposta no mesmo enquadramento; +GLB 3D opcional).
2. **Tours/walkthroughs** (projeto em terreno vazio; ou movimento de câmera sobre cômodos **reais** de casa existente).

Pipeline: foto do lote → Higgsfield/Runway (imagem) → estático; `generate_3d` → GLB; image-to-video → tour;
dublagem PT/EN/ES. **Bitupitá** (projeto próprio, lote só de terra) é o caso de uso flagship.

---

## 7. Pontuação — mata-mata (§6, tudo configurável)

- **Etapa A (48–72h, verba pequena e igual):** hook/thumbstop rate, hold rate, custo por LP view.
  **Portão de dados:** ≥1.000 impressões **OU** ≥ R$X/unidade antes de qualquer decisão.
- **Etapa B (sobreviventes):** CPL e **custo por lead qualificado** (= conversa no WhatsApp dentro do ICP).
- **Decisões:** matar piores ao bater o portão → **graduar** melhores p/ escala + enfileirar 5–10
  revariações/relocalizações → **iterar** os do meio com mudança de **uma** variável.
- Amostra pequena = marcar **baixa confiança** (a conta opera em baixo volume, alto valor).

Observação de verba: CPM histórico observado ~R$10–15 → ~R$10–15 por 1.000 impressões. Com R$100/dia e
piso de R$5,14/adset, o 1º lote roda **~14–16 unidades** próximas do piso (ABO) ou menos com mais verba/unidade.

---

## 8. Roadmap executável (próximas fases)

1. **F1 — Biblioteca + placar:** criar a planilha (3.1) e as pastas no Drive (3.2); semear `properties`
   com o inventário ≥R$700k + luxo e `hooks` com o banco trilíngue. Entrada manual habilitada.
2. **F2 — Pixel + rastreio (CRÍTICO):** criar dataset/Pixel no `act_1631628834217759`; instalar base +
   eventos (PageView, ViewContent, Lead/Contact) no `index.html`/router; UTM em **todos** os `wa.me`;
   código de referência no `?text=`; (opcional) CAPI server-side via `api/`. Sem isto, não há otimização.
3. **F3 — Pipeline de geração:** bruto → variações/formatos/localização; módulo de render IA (Bitupitá primeiro).
4. **F4 — Lançador + compliance:** campanhas Housing programáticas, checadores, tetos, **dry-run** obrigatório.
5. **F5 — Mensuração + mata-mata:** puxar insights, pontuar, matar/graduar/iterar, enfileirar revariações.
6. **F6 — Relatório + nutrição:** dashboard + resumo semanal (Gmail); leads → drip Brevo (opt-in, info@terraventos.com).

Ver **`lote-teste-1.md`** para o 1º lote concreto mapeado às decisões da F0.
