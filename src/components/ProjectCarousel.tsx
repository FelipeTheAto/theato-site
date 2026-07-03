import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, type Project } from '../data/projects';

function StatusBadge({ label, theme }: { label: string; theme: 'colorful' | 'dark' }) {
  const base = 'inline-block px-3 py-1 text-xs font-display font-bold uppercase tracking-widest rounded-full';
  const variant = theme === 'colorful'
    ? 'bg-brand-red text-white'
    : 'bg-white/10 text-white/80 border border-white/20';

  return <span className={`${base} ${variant}`}>{label}</span>;
}

function ProjectCard({ project }: { project: Project }) {
  const isColorful = project.theme === 'colorful';
  const hasImage = !!project.imageUrl;

  return (
    <div
      className={`flex-none w-[300px] sm:w-[340px] md:w-[360px] h-[460px] md:h-[480px] rounded-2xl overflow-hidden relative flex flex-col justify-end p-8 text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 ${
        !hasImage && isColorful
          ? 'bg-gradient-to-br from-brand-red via-red-600 to-orange-500'
          : 'bg-[#1a1a1a]'
      }`}
      style={hasImage ? { backgroundImage: `url(${project.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center top' } : undefined}
    >
      {hasImage && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      )}

      {/* Status badge */}
      <div className="absolute top-6 left-6 z-10">
        <StatusBadge label={project.statusLabel} theme={project.theme} />
      </div>

      {/* Year */}
      <div className="absolute top-6 right-6 z-10">
        <span className={`font-display font-bold text-sm ${isColorful || hasImage ? 'text-white/80' : 'text-white/40'}`}>
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className={`font-display text-sm uppercase tracking-widest mb-2 ${isColorful || hasImage ? 'text-white/80' : 'text-white/40'}`}>
          {project.subtitle}
        </p>
        <h3 className="font-display font-black text-2xl md:text-3xl uppercase leading-tight mb-3">
          {project.title}
        </h3>
        {project.description && (
          <p className={`font-body text-sm leading-relaxed mb-6 ${isColorful || hasImage ? 'text-white/90' : 'text-white/50'}`}>
            {project.description}
          </p>
        )}
        {project.externalUrl && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-red font-display font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white/90 active:scale-[0.98] transition-all duration-300"
          >
            Ver mais
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6 pl-6 md:pl-12 lg:pl-24 pr-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* Navigation arrows — desktop only */}
      <div className="hidden md:flex items-center gap-3 mt-8 pl-12 lg:pl-24">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className="w-12 h-12 rounded-full border-2 border-brand-black/20 flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className="w-12 h-12 rounded-full border-2 border-brand-black/20 flex items-center justify-center hover:border-brand-red hover:text-brand-red transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Próximo"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
