# Plano do Site — Status de Execução

> Última atualização: 2026-04-16

---

## Fase 1: Site funcional — CONCLUÍDA
- [x] Scaffold Astro + Tailwind + config de marca
- [x] BaseLayout com meta tags, OG, fonts (Google Fonts por enquanto)
- [x] Header sticky com blur e menu mobile
- [x] ManifestoHero (hero full-viewport)
- [x] ManifestoBody (4 blocos placeholder)
- [x] Philosophy (3 blocos, terceiro em aberto)
- [x] ProjectCarousel (React island com embla-carousel, 1 card colorido + 4 escuros)
- [x] Founders (placeholder pra fotos)
- [x] ContactCTA + Footer
- [x] Dev server testado e funcionando (http://localhost:4321)

---

## Fase 2: Conteúdo real — EM ANDAMENTO

### Próximo passo imediato: ENTREVISTA DO MANIFESTO
O manifesto precisa ser escrito do zero. Na próxima sessão, retomar a entrevista com Felipe. Perguntas preparadas:

1. **Por que a TheAto existe?** O que faltava no mundo que fez essa produtora precisar existir?
2. **O que te incomoda no jeito que cultura/teatro é feito hoje?**
3. **Qual é a diferença entre a TheAto e uma produtora que "só produz espetáculo"?**
4. **Uma frase que resumisse tudo pra alguém que nunca ouviu falar da TheAto?**
5. **Daqui a 5 anos, o que a TheAto é?**

Com as respostas, produzir:
- [ ] Frase-abertura do hero (ManifestoHero.astro)
- [ ] Texto do manifesto (ManifestoBody.astro — 3-5 parágrafos)
- [ ] Terceiro bloco da Philosophy (Philosophy.astro — substituir o placeholder)

### Outros itens da Fase 2
- [ ] Definir formato padrão dos banners de projeto (Felipe mencionou 5:4, confirmar)
- [ ] Receber banner digital do Lebre no País do Chá
- [ ] Atualizar card do Lebre com banner real no carousel
- [ ] Escrever bios definitivas dos fundadores
- [ ] Providenciar fotos de retrato (Felipe + Luiza)
- [ ] OG image pra compartilhamento social (1200×630)
- [ ] Favicon derivado do logo
- [ ] SEO: meta description final, JSON-LD (Organization schema), sitemap
- [ ] Deploy no GitHub Pages + configurar domínio na Hostinger

---

## Fase 3: Polimento — PENDENTE
- [ ] Scroll horizontal automático no carousel (Felipe vai enviar referências visuais)
- [ ] Animações sutis de scroll (fade-in-up via CSS + IntersectionObserver — já tem a base no global.css)
- [ ] Analytics (Plausible/Umami)
- [ ] Self-host das fonts Montserrat (trocar Google Fonts por woff2 local)
- [ ] Blog/diário de processo (Astro content collections — se fizer sentido)

---

## Notas soltas
- O `npx astro dev` falha por causa dos caracteres especiais no path. Usar `node ./node_modules/astro/astro.js dev --port 4321`.
- A referência de Cascavel foi removida do terceiro bloco da Philosophy. A TheAto não quer se limitar geograficamente.
- O conteúdo atual do ManifestoHero e ManifestoBody é placeholder funcional. O layout e a tipografia estão prontos, só falta o texto real.
