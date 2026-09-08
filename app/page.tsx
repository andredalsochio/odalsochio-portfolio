import { ArrowDown, ArrowUpRight, Code2, FolderCode } from 'lucide-react';
import Link from 'next/link';
import { profile, projects } from '@/lib/portfolio';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header wrap">
        <a href="#inicio" className="wordmark" aria-label="André Dalsochio, início">dalsochio<span>_</span></a>
        <nav aria-label="Navegação principal"><a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a className="nav-contact" href="#contato">Contato <ArrowUpRight size={16}/></a></nav>
      </header>
      <main id="conteudo">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot"/> PORTFÓLIO PESSOAL <span className="eyebrow-separator">/</span> {profile.role}</div>
          <h1 id="hero-title">André<br/><span>Dalsochio</span><i aria-hidden="true">.</i></h1>
          <div className="hero-bottom"><p>Ideias, código e o que vem depois.<br/><span>Meu espaço para compartilhar o que construo.</span></p><a className="circle-link" href="#projetos" aria-label="Ir para projetos"><ArrowDown size={25}/></a></div>
          <div className="hero-index" aria-hidden="true"><span>01 — APRESENTAÇÃO</span><span>SCROLL PARA EXPLORAR ↓</span></div>
        </section>
        <section className="projects-section" id="projetos" aria-labelledby="projects-title"><div className="wrap">
          <div className="section-top"><div><span className="eyebrow">01 / PROJETOS</span><h2 id="projects-title">Do código<br/>para o mundo<span>.</span></h2></div><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">Explorar GitHub <ArrowUpRight size={18}/></a></div>
          {projects.length > 0 ? <div className="project-list">{projects.map((project,index)=><article className="project-row" key={project.slug}><div className="project-number">{String(index+1).padStart(2,'0')}</div><div><h3>{project.title}</h3><p>{project.description}</p><ul className="tags" aria-label="Tecnologias">{project.technologies.map(tech=><li key={tech}>{tech}</li>)}</ul><div className="project-links">{project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Ver projeto <ArrowUpRight size={18}/></a>}{project.repository && <a className="text-link" href={project.repository} target="_blank" rel="noopener noreferrer">Código <Code2 size={18}/></a>}</div></div></article>)}</div> : <div className="projects-empty"><div className="empty-icon"><FolderCode size={34} strokeWidth={1.3}/></div><div><span className="small-label">EM BREVE</span><h3>Os próximos projetos começam aqui.</h3><p>Uma seleção de trabalhos está a caminho.<br/>Enquanto isso, meu código está no GitHub.</p></div><a href={profile.github} className="empty-link" target="_blank" rel="noopener noreferrer" aria-label="Visitar GitHub de André Dalsochio"><ArrowUpRight size={30}/></a></div>}
        </div></section>
        <section className="about wrap" id="sobre" aria-labelledby="about-title"><div><span className="eyebrow">02 / SOBRE</span><h2 id="about-title">Prazer,<br/>André<span>.</span></h2></div><div className="about-copy"><Code2 className="about-symbol" size={35} strokeWidth={1.2}/><p className="about-lead">Sou desenvolvedor.<br/>Este é meu ponto de encontro<br className="desktop-break"/> entre ideias e projetos.</p><p>Reúno por aqui os trabalhos que quero compartilhar e os caminhos que vou explorando com código.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Minha trajetória no LinkedIn <ArrowUpRight size={18}/></a></div></section>
        <section className="contact wrap" id="contato" aria-labelledby="contact-title"><span className="eyebrow">03 / CONTATO</span><div className="contact-heading"><h2 id="contact-title">Vamos<br/><span>conversar?</span></h2><ArrowUpRight className="contact-arrow" strokeWidth={1} aria-hidden="true"/></div><div className="contact-bottom"><p>Uma ideia, um projeto ou uma boa troca.</p><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={19}/> LinkedIn <ArrowUpRight size={17}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Code2 size={19}/> GitHub <ArrowUpRight size={17}/></a></div></div></section>
      </main>
      <footer className="wrap"><a className="wordmark" href="#inicio">dalsochio<span>_</span></a><nav className="footer-links" aria-label="Informações legais"><Link href="/privacidade">Privacidade</Link><Link href="/suporte">Suporte</Link><Link href="/termos">Termos</Link><Link href="/exclusao-de-dados">Exclusão de dados</Link></nav><span>André Dalsochio · {new Date().getFullYear()}</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </>
  );
}
