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
    externalUrl: 'https://parallela.art.br/evento/lebre/',
    imageUrl: '/images/lebre-banner.jpg',
    theme: 'colorful',
  },
  {
    slug: 'projeto-2',
    title: 'Novo Projeto',
    subtitle: 'Em desenvolvimento',
    status: 'em-producao',
    statusLabel: 'EM PRODUÇÃO',
    year: '2026',
    description: '',
    theme: 'dark',
  },
  {
    slug: 'projeto-3',
    title: 'Novo Projeto',
    subtitle: 'Em desenvolvimento',
    status: 'em-producao',
    statusLabel: 'EM PRODUÇÃO',
    year: '2027',
    description: '',
    theme: 'dark',
  },
  {
    slug: 'projeto-4',
    title: 'Novo Projeto',
    subtitle: 'Em concepção',
    status: 'em-breve',
    statusLabel: 'EM BREVE',
    year: '2027',
    description: '',
    theme: 'dark',
  },
  {
    slug: 'projeto-5',
    title: 'Novo Projeto',
    subtitle: 'Em concepção',
    status: 'em-breve',
    statusLabel: 'EM BREVE',
    year: '2027',
    description: '',
    theme: 'dark',
  },
];
