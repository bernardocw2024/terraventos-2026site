# F3 — Pipeline de geração de criativos

Transforma asset bruto (foto real / clipe do fundador) em variações × formatos × idiomas, com o
**módulo de visualização por IA** (§7) sempre rotulado e ao lado de foto real.

## Política de IA (resumo §7 — inegociável)

- **Padrão: só foto/vídeo real** para imóveis existentes e lifestyle.
- IA **permitida apenas** em (1) render arquitetônico em **terreno vazio** e (2) tours/walkthroughs
  (projeto em terreno vazio, ou movimento de câmera sobre cômodos **reais**).
- Todo asset de IA: **rótulo** ("Projeção 3D / Recreación 3D") + **foto real ao lado** + vínculo ao asset de origem.
- Só `ai_eligible=TRUE` em `properties.csv` (lotes). Casas de luxo = somente real.

## Provedores (interface generation_provider)

- **Runway** — `generate_image` (render a partir de foto de referência), `generate_video` (image-to-video p/ tour).
- **Higgsfield** — `generate_image`, `generate_3d` (imagem→GLB), `dubbing` (VO PT/EN/ES), upscale/reframe.
- Assets preservados como `media_id` no Higgsfield (estáveis) e registrados em `data/generation-log.csv`.

## Estrutura no Google Drive (criada)

```
Terra Ventos · Ad Factory   (1c61SH6oMyFIVdVmBnNQO7SWcCaBSzNL7)
├─ 00_raw          1idaKJolUGY10RnZRorx884OdA6x_gt_6
├─ 10_generated    1aXs3xCS_cSfkYjw8tKG38WCcLpJYccl0
├─ 20_creatives    1VlosLx5jUq5G0hTzq1_egnwUwwJJuGnH
├─ 30_whitelisting 1jvNuKMtU02skwquZ2IZfI9zkyM19WTaz
└─ 90_reports      1Yj7FE6WGp2SIO7YfI7Zwd5KgDNEG6l5n
```

## Primeiro render produzido (C1 · Bitupitá — flagship)

- **Origem:** foto real `/bitupita.JPG` (lote pé na areia, Bitupitá — projeto próprio).
- **Saída:** render Runway `nano-banana-pro` — casa de design no foreground, mesmo enquadramento/luz/horizonte.
- **Higgsfield media_id:** `346c7142-0cf5-45d1-8d25-13efed327b56` (reusável p/ image-to-video do tour).
- **Rótulo:** "Projeção 3D". **Uso:** sempre pareado com a foto real (areia real → projeção).
- ⚠️ **QA visual pendente nesta sessão:** o host de saída (CloudFront) está bloqueado pela egress policy,
  então não consegui baixar/inspecionar os bytes aqui. Abrir a URL em `data/generation-log.csv` para revisar
  antes de usar. Se não ficar bom, regenerar (mesmo ref + prompt) ou trocar o ref por um lote eye-level.

## Próximos passos da F3

1. QA do render → aprovar/regenerar.
2. Salvar o asset aprovado em `10_generated/bitupita-projeto/renders/` (Drive).
3. Variações de formato (9:16 reveal, 1:1, 4:5) + card de tese (Estudo dos Ventos) + card CTA.
4. Render do lote ≥700k de Tatajuba (C3) a partir de foto eye-level.
5. Quando chegar o material do fundador: cortes EN/AR (C2/C4) + dublagem trilíngue.
