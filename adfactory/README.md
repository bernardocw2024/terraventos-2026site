# Terra Ventos · Fábrica de Anúncios (Meta Ads)

Sistema majoritariamente automatizado para **criar, testar, gerenciar e escalar** anúncios pagos
da Terra Ventos (terraventos.com), construído sobre a *Estratégia Q3 2026* e o **Prompt Mestre v2**.

Objetivo central: **encontrar de forma confiável os poucos criativos que convertem, direcionar verba
para eles, matar o resto rápido** — respeitando o posicionamento *advisory* boutique e a compliance de
Habitação (Housing) do Meta em cada etapa.

> Esta pasta é a **fonte da verdade de código + especificação** da fábrica. Os assets brutos e
> renderizados moram no Google Drive; a biblioteca de criativos + placar moram no Google Sheets
> (ver `docs/F0-arquitetura.md`).

---

## Estado atual (F0 — descoberta concluída)

| Item | Situação verificada |
|---|---|
| Conta de anúncios | `act_1631628834217759` — "CA - Terra Ventos", business `644652842069333`, BRL, **pagamento ativo**, API/MCP habilitada ✅ |
| Página | `644651102069507` (Lead-Gen ToS **não** aceito — só importa se usarmos Lead Ads nativo) |
| **Pixel / Dataset** | **NENHUM (0).** Bloqueador nº 1 — sem rastreio de conversão, retargeting ou lookalike hoje |
| Baselines comprovados | Bitupitá Estático **11,87% CTR** · "Why Settle for Europe" **5,75%** · Preá House **4,49%** |
| Site / leads | React 19 + Vite (Vercel) · `api/brevo.js` (lista Brevo 2) + form GHL + `wa.me/5585985572807` |
| Atribuição hoje | **Zero.** Nenhum link de WhatsApp carrega UTM; sem Pixel não há evento de conversão |

## Decisões do operador (travadas na F0)

- **Verba de teste:** ~R$100/dia (~R$3k/mês). CPL-qualificado alvo padrão: **R$150–250** (configurável).
- **Geos do 1º lote:** Ibéria (ES, PT) · Europa (DE, FR, NL, UK) · Argentina (AR) · Brasil (SP/RJ/MG).
- **Produção:** **misto** — estáticos/carrossel já + shoot do fundador em paralelo.
- **Lead "qualificado" (gatilho de graduação):** **conversa no WhatsApp dentro do ICP**.
- **Foco de inventário:** **terrenos ≥ R$700k + imóveis de luxo** (posicionamento premium). O piso de
  R$700k coincide com o do **Golden Visa (RN 36)** → reforça o ICP terciário e a narrativa de residência.
  - **Bitupitá = projeto próprio Terra Ventos** (10 lotes, a partir de R$120k) — **categoria à parte**,
    flagship do render 3D e o vencedor de 11,87% CTR. É a exceção declarada à regra dos R$700k.
  - **Qualificam hoje:** lotes — Tatajuba 1.000 m² (R$800k), Tatajuba/Guriú 100.000 m² (R$15M),
    Villa Prabhu/Paracuru (sob consulta); casas de luxo — Barrinha (R$6,6M), Preá House (R$2,7M).
  - **Fora do foco agora:** Preá 250 m² (R$400k), Lote 109 Taiba (< R$700k), temporada/aluguel, Chile.

---

## Roadmap por fases

| Fase | Entrega | Status |
|---|---|---|
| **F0** | Descoberta + arquitetura + modelo de dados + estrutura de pastas + decisões | ✅ este commit |
| **F1** | Biblioteca + placar (CSVs em `data/`) seeded com inventário + hooks + conceitos | ✅ |
| **F2** | **Pixel + rastreio** — código do site pronto (inerte até configurar o Pixel ID) | 🟡 site ✅ · falta criar Pixel |
| **F3** | Pipeline de geração — Drive criado, 1º render de Bitupitá produzido (QA pendente) | 🟡 em andamento |
| **F4** | Lançador Meta + checadores compliance/factual + dry-run | 🟡 dry-run ✅ (`launch`) · falta disparo ao vivo (Pixel+aprovação) |
| **F5** | Mensuração + mata-mata (matar/graduar/iterar automático) | |
| **F6** | Relatório + nutrição (resumo semanal Gmail; drip Brevo opt-in) | |
| **F7** | Multicanal (só depois que o Meta funcionar) | |

## Modelo de operação

As integrações (Meta Ads, Runway, Higgsfield, Google Drive, Google Sheets, Brevo, Gmail) estão
conectadas como **MCP** e hoje são operáveis diretamente pelo Claude Code. A estratégia:

1. **Lógica determinística em código versionado** aqui (`core/`): compliance, guardrails factuais,
   pontuação do mata-mata, construtor de UTM, planejador de dry-run. Testável, auditável, reversível.
2. **Execução das ações externas** (criar campanha, gerar render, escrever no Sheets) via MCP no curto
   prazo, com caminho claro para **tokens de system-user + GitHub Actions cron** quando quiserem
   autonomia total e agendada.

Nada de orçamento/público/limite fixo no código → tudo em `config/`. Nenhum segredo no código → `.env`.

## Próximos passos

Leia **`docs/F0-arquitetura.md`** (arquitetura completa) e **`docs/lote-teste-1.md`** (o 1º lote
mapeado às decisões acima). Ao aprovar, sigo para **F1 (biblioteca + placar)** e **F2 (Pixel)** em paralelo.
