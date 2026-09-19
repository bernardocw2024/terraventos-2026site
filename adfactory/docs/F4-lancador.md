# F4 — Lançador Meta (dry-run pronto)

Monta os payloads de **campanha → ad sets → ads** que seriam enviados à Marketing API, com compliance
e tetos embutidos. **Não faz chamada de API** até o disparo ao vivo ser liberado (Pixel + aprovação).

## Como rodar

```bash
cd adfactory
node cli.mjs launch     # imprime o dry-run completo, nada é enviado
```

## O que ele garante (fail-safe)

- **Categoria Especial de Habitação (Housing)** declarada na campanha.
- **Sem segmentação demográfica fina** — só país/região; o hook faz o filtro. `genders` = todos, idade 18–65.
- **Geos** do `config.geos` (DE/FR/NL/GB/ES/PT/AR/BR); **EG excluído** (MENA marcado p/ excluir na API).
- **Tetos de verba**: ABO com ~R$6,50/unidade, total ≤ R$100/dia (sinaliza se passar do teto).
- **Guardrail factual**: unidade que viola §8 é **excluída** do lançamento (não entra no plano).
- **Status PAUSED** em tudo na criação — ativar é decisão humana.
- **UTM por criativo** no destino + **link de WhatsApp com ref** no fallback.

## Estado atual (dry-run verificado)

Campanha `TV | lote-teste-1 | Housing` · OUTCOME_TRAFFIC · 15 ad sets · R$97,50/dia (dentro do teto).
Round 1 otimiza tráfego/cliques (triagem por hook/CTR, pois ainda não há Pixel).

## Para o disparo ao vivo (faltam 2 coisas)

1. **Pixel (F2)** criado → trocar `config.launch.objective` para `OUTCOME_LEADS` otimizando `Lead`/`Contact`.
2. **Ferramentas Meta aprovadas** na sessão → o lançador ao vivo chamará
   `ads_create_campaign` → `ads_create_ad_set` → `ads_create_creative` → `ads_create_ad`
   com exatamente os payloads do dry-run. Resolver na API: region keys dos estados BR e exclusão MENA.
