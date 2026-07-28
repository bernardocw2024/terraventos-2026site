# Camada de dados (F1) — biblioteca + placar

Fonte da verdade versionada da fábrica. O `core/` lê estes arquivos; humanos editam quando preciso.
Espelho legível no Google Sheets é opcional (sincronização fica para quando houver conector de Sheets;
o conector atual é só Google **Drive**). Estrutura de assets brutos/renderizados mora no Drive (ver F0).

| Arquivo | Papel |
|---|---|
| `properties.csv` | Inventário elegível: lotes ≥ R$700k + imóveis de luxo + Bitupitá (projeto próprio). `in_focus` filtra o que entra nos lotes; `ai_eligible` marca quem pode receber render IA (só lotes). |
| `hooks.csv` | Banco de hooks trilíngue (PT-BR/EN/ES-ES/ES-AR). `hook_id` agrupa as traduções de um mesmo hook. |
| `concepts.csv` | Os conceitos do lote e como expandem (segmento, geos, idiomas, render, hooks). |
| `creatives.csv` | **Placar** — uma linha por unidade de teste. Preenchido pela geração (F3) e pela mensuração (F5). |

## Convenções

- `creative_id` / `utm_content`: `[concept]-[lang]-[format]-[opening]-v[n]` (ex.: `tatajuba-EN-9x16-reveal-v1`).
- `status`: draft → ready → in_review → live → (killed | graduated | iterating).
- Preços em BRL inteiros (sem separador). Vazio = sob consulta.
- `tier`: `lote_700k+` · `casa_luxo` · `projeto_proprio` (Bitupitá, exceção declarada).

## Guardrails ao usar

- **Sem preço** em criativo a menos que venha de ficha real do site (`price_only_from_live_listing`).
- **Render IA só para `ai_eligible=TRUE`** (lotes), sempre rotulado e ao lado de foto real.
- Casas de luxo (`ai_eligible=FALSE`) = somente foto/vídeo real.
