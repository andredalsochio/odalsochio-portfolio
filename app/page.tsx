import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { profile } from '@/lib/portfolio';
import { ParticleField } from '@/components/particle-field';
import './motion.css';

export default function Home() {
  return (
    <>
      <ParticleField />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header wrap">
        <a href="#inicio" className="wordmark" aria-label="André Dalsochio, início">dalsochio<span>_</span></a>
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a className="nav-contact" href="#contato">Contato <ArrowUpRight size={16}/></a></nav>
      </header>
      <main id="conteudo">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot"/> APRESENTAÇÃO PROFISSIONAL <span className="eyebrow-separator">/</span> {profile.role}</div>
          <h1 id="hero-title">André<br/><span>Dalsochio</span><i aria-hidden="true">.</i></h1>
          <div className="hero-bottom"><p>Ideias, código e o que vem depois.<br/><span>Meu espaço para compartilhar o que construo.</span></p><a className="circle-link" href="#sobre" aria-label="Conhecer André"><ArrowDown size={25}/></a></div>
          <div className="hero-index" aria-hidden="true"><span>01 — APRESENTAÇÃO</span><span>SCROLL PARA EXPLORAR ↓</span></div>
        </section>
        <section className="about wrap" id="sobre" aria-labelledby="about-title"><div><span className="eyebrow">01 / SOBRE</span><h2 id="about-title">Prazer,<br/>André<span>.</span></h2></div><div className="about-copy"><Code2 className="about-symbol" size={35} strokeWidth={1.2}/><p className="about-lead">Sou desenvolvedor.<br/>Este é meu ponto de encontro<br className="desktop-break"/> entre ideias e projetos.</p><p>Sou André Fellipe Dalsochio, desenvolvedor de software e responsável por este espaço profissional. Aqui compartilho ideias, projetos e formas de entrar em contato comigo.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Minha trajetória no LinkedIn <ArrowUpRight size={18}/></a></div></section>
        <section className="contact wrap" id="contato" aria-labelledby="contact-title"><span className="eyebrow">02 / CONTATO</span><div className="contact-heading"><h2 id="contact-title">Vamos<br/><span>conversar?</span></h2><ArrowUpRight className="contact-arrow" strokeWidth={1} aria-hidden="true"/></div><div className="contact-bottom"><p>Contato profissional: <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a></p><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={19}/> LinkedIn <ArrowUpRight size={17}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Code2 size={19}/> GitHub <ArrowUpRight size={17}/></a></div></div></section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#inicio">dalsochio<span>_</span></a>
        <div className="footer-identity"><strong>André Fellipe Dalsochio</strong><span>Responsável pelo empreendimento · CNPJ 68.974.210/0001-14</span></div>
        <nav className="footer-links" aria-label="Informações legais"><Link href="/termos">Termos de Uso</Link><Link href="/privacidade">Privacidade</Link><a href="#inicio">Voltar ao topo ↑</a></nav>
      </footer>
    </>
  );
}
