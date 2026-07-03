# Plano do Site — Status de Execução

> Última atualização: 2026-07-03

---

## Fase 1: Site funcional — CONCLUÍDA
Estrutura completa em Astro + Tailwind + React island (embla-carousel). Deploy: GitHub Pages (`FelipeTheAto/theato-site`) + DNS na Hostinger → theato.com.br.

## Fase 2: Conteúdo real — CONCLUÍDA (2026-07-03)
- [x] Entrevista do manifesto realizada (5 perguntas)
- [x] Manifesto reescrito (hero, 4 blocos + fecho assinado, Philosophy completa)
- [x] Contrato de escrita do site criado em `marca/modo-manifesto-site.md` (repo privado) — toda edição de texto passa por ele
- [x] Bloco de números (99,7/100 PNAB, estreia 17/04/2026, em circulação)
- [x] Carousel enxuto: a Lebre (link pro site próprio) + 1 teaser
- [x] Banner da Lebre no card (comprimido)
- [x] Logo real no header/footer, favicon, OG image 1200×630
- [x] SEO: JSON-LD Organization, meta description sem Cascavel, sitemap
- [x] Acento cursivo (Caveat): assinatura do manifesto + "cada um, um universo"
- [x] Grain overlay, fade-in com blur, hover nos cards, prefers-reduced-motion

## Fase 3: Pendências (dependem de material do Felipe)
- [ ] Retratos de Felipe e Luiza → plugar em `Founders.astro` (hoje: iniciais em beige)
- [ ] Número de público da temporada da Lebre → atualizar `Stats.astro` quando a circulação fechar
- [ ] Scroll horizontal automático no carousel (Felipe vai enviar referências visuais)
- [ ] Self-host das fonts (Montserrat + Caveat woff2 locais)
- [ ] Analytics (Plausible/Umami) — se quiser
- [ ] Imagens abstratas on-brand pro manifesto (geração com aprovação; prompts ou Canva)

---

## Notas operacionais
- `npx astro dev` falha por causa dos caracteres especiais no path. Usar `node ./node_modules/astro/astro.js dev --port 4321`.
- Deploy: commit no repo principal → `git subtree split --prefix=site -b site-deploy` → `git push https://github.com/FelipeTheAto/theato-site.git site-deploy:main` → GitHub Actions builda e publica.
- O `.gitignore` da RAIZ ignora `*.png` — assets do site devem ser `.jpg`, `.webp`, `.ico` ou `.svg`.
- Regra de texto: a peça é **a Lebre** (feminino). Ver `marca/modo-manifesto-site.md` pras demais regras.
