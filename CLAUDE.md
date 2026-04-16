# Site Institucional — TheAto Produções

## O que é
Site-manifesto da TheAto Produções. Não é um portfólio convencional de produtora — é uma declaração de propósito que comunica por que a TheAto existe e o que pretende construir. Funciona pra público geral, financiadores e parceiros ao mesmo tempo.

## Stack
- **Astro** + **Tailwind CSS** (site estático, zero JS exceto o carousel)
- **React island** apenas pro carousel de projetos (embla-carousel)
- **Deploy:** GitHub Pages + Hostinger (mesmo setup da LP do Lebre)
- **Domínio:** theato.com.br (já registrado)

## Como rodar
```bash
cd site
node ./node_modules/astro/astro.js dev --port 4321
```
O `npx astro dev` pode falhar por causa dos caracteres especiais no path. Usar o comando acima.

## Estrutura
```
site/
├── src/
│   ├── layouts/BaseLayout.astro      — layout base (meta, fonts, OG, fade-in observer)
│   ├── components/
│   │   ├── Header.astro              — nav sticky com blur, hamburger mobile
│   │   ├── ManifestoHero.astro       — hero full-viewport, tipografia pura
│   │   ├── ManifestoBody.astro       — 4 blocos de manifesto (PLACEHOLDER)
│   │   ├── Philosophy.astro          — 3 blocos (terceiro em aberto)
│   │   ├── ProjectCarousel.tsx       — React island, embla-carousel
│   │   ├── ProjectsSection.astro     — wrapper do carousel
│   │   ├── Founders.astro            — Felipe + Luiza (fotos placeholder)
│   │   ├── ContactCTA.astro          — fundo preto, contatos diretos
│   │   └── Footer.astro              — copyright
│   ├── pages/index.astro             — single-page, todas as seções
│   ├── styles/global.css             — Tailwind + custom (fade-in, scrollbar)
│   └── data/projects.ts              — array de projetos (editar aqui pra add projetos)
├── public/images/                    — assets visuais (vazios por enquanto)
├── tailwind.config.mjs               — tokens da marca
└── astro.config.mjs                  — config Astro
```

## Arquitetura do site
Single-page com navegação por âncoras. Scroll contínuo, ritmo de manifesto:

1. **Header** (#) — sticky, blur após scroll, MANIFESTO · PROJETOS · QUEM SOMOS · CONTATO
2. **ManifestoHero** (#manifesto) — "TODO PROJETO TEM UM PROPÓSITO"
3. **ManifestoBody** — 4 parágrafos do manifesto
4. **Philosophy** — 3 blocos (terceiro a definir)
5. **ProjectsSection** (#projetos) — carousel horizontal com cards
6. **Founders** (#quem-somos) — Felipe + Luiza
7. **ContactCTA** (#contato) — "VAMOS CONVERSAR"
8. **Footer** — copyright

## Decisões importantes
- **LPs separadas** — cada projeto mantém sua própria LP. O site institucional não absorve a LP do Lebre.
- **Sem menção a Cascavel** — a TheAto não quer se limitar geograficamente. O terceiro bloco da Philosophy foi esvaziado por isso.
- **Manutenção via Claude Code** — Felipe atualiza com ajuda do Claude.
- **Plataforma/CRM é fase 2** — o site institucional não inclui reserva de ingressos nem captura de leads por enquanto.
- **Sem analytics na v1** — adicionar Plausible/Umami depois se quiser.

## Cards de projeto
- Dados em `src/data/projects.ts`. Adicionar projeto = adicionar item no array.
- Card do Lebre: `theme: 'colorful'` (gradiente vermelho/laranja). Precisa de banner real.
- Cards futuros: `theme: 'dark'` (fundo preto, texto branco).
- **Formato dos banners:** a definir com Felipe (mencionou algo como 5:4). Felipe vai enviar os assets.

## O que NÃO fazer
- Não usar visual corporativo genérico
- Não adicionar formulário de contato (desnecessário pro porte atual)
- Não referenciar Cascavel como localização fixa
- Não usar Framer Motion ou animation libraries — CSS transitions + IntersectionObserver bastam
