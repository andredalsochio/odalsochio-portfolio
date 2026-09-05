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

/** Adicione projetos aqui. A página substitui automaticamente o estado "Em breve".
 * Exemplo (substitua por informações reais):
 * { slug: 'meu-projeto', title: 'Nome do projeto', description: 'O que construí e para quem.',
 *   technologies: ['TypeScript'], url: 'https://seu-projeto.com', repository: 'https://github.com/...' }
 */
export const projects: Project[] = [];
