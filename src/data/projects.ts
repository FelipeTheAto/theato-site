export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  status: 'em-cartaz' | 'em-producao' | 'em-breve';
  statusLabel: string;
  year: string;
  description: string;
  externalUrl?: string;
  imageUrl?: string;
  theme: 'colorful' | 'dark';
}

export const projects: Project[] = [
  {
    slug: 'lebre-no-pais-do-cha',
    title: 'Lebre no País do Chá',
    subtitle: 'Monólogo Teatral',
    status: 'em-cartaz',
    statusLabel: 'EM CARTAZ',
    year: '2026',
    description: 'Saúde mental, dependência emocional e amizades tóxicas — da terapia para os palcos.',
    externalUrl: 'https://lebrenopaisdocha.theato.com.br',
    imageUrl: '/images/lebre-banner.jpg',
    theme: 'colorful',
  },
  {
    slug: 'proximo-universo',
    title: 'Próximo universo em construção',
    subtitle: 'Em concepção',
    status: 'em-breve',
    statusLabel: 'EM BREVE',
    year: '',
    description: 'Todo universo da TheAto começa em silêncio. Esse já começou.',
    theme: 'dark',
  },
];
