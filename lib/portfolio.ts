/** Edite este arquivo para atualizar seu portfólio. */
export const profile = {
  name: 'André Dalsochio',
  role: 'DESENVOLVEDOR',
  github: 'https://github.com/andredalsochio/',
  linkedin: 'https://www.linkedin.com/in/andre-dalsochio/',
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  repository?: string;
};

/** Projetos públicos: descrições baseadas no GitHub, revisadas em 05/09/2026. */
export const projects: Project[] = [
  {
    "slug": "sistema-de-patota",
    "title": "Sistema de Patota",
    "description": "Frontend de um sistema de patota, desenvolvido com React e TypeScript.",
    "technologies": [
      "React",
      "TypeScript"
    ],
    "repository": "https://github.com/andredalsochio/sistema-de-patota"
  },
  {
    "slug": "patota-api",
    "title": "Patota API",
    "description": "API do sistema de patota, construída com NestJS e TypeScript.",
    "technologies": [
      "NestJS",
      "TypeScript"
    ],
    "repository": "https://github.com/andredalsochio/patota-api"
  },
  {
    "slug": "marilia-mvp",
    "title": "Marilia Nutri · MVP",
    "description": "Aplicativo B2B para criação de pedidos comerciais com persistência local, anexos e compartilhamento via WhatsApp. MVP em Flutter com sincronização simulada.",
    "technologies": [
      "Flutter",
      "Dart",
      "SQLite",
      "Provider"
    ],
    "repository": "https://github.com/andredalsochio/marilia-mvp"
  },
  {
    "slug": "padel-score",
    "title": "Padel Score",
    "description": "Aplicativo Flutter para registrar partidas de padel, placares e composição dos jogadores por set, com persistência no Supabase.",
    "technologies": [
      "Flutter",
      "Dart",
      "Supabase"
    ],
    "repository": "https://github.com/andredalsochio/padel-score"
  },
  {
    "slug": "bar-boss-mobile",
    "title": "Bar Boss Mobile",
    "description": "Aplicativo mobile para organizar a agenda de bares, com cadastro de estabelecimentos, eventos, atrações e promoções.",
    "technologies": [
      "Flutter",
      "Dart",
      "Firebase",
      "Drift"
    ],
    "repository": "https://github.com/andredalsochio/bar-boss-mobile"
  }
];
