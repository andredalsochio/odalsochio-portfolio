import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
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
        <nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#empresa">Empresa</a><a className="nav-contact" href="#contato">Contato <ArrowUpRight size={16}/></a></nav>
      </header>
      <main id="conteudo">
        <section className="hero wrap" id="inicio" aria-labelledby="hero-title">
          <div className="eyebrow"><span className="status-dot"/> APRESENTAÇÃO PROFISSIONAL <span className="eyebrow-separator">/</span> {profile.role}</div>
          <h1 id="hero-title">André<br/><span>Dalsochio</span><i aria-hidden="true">.</i></h1>
          <div className="hero-bottom"><p>Ideias, código e o que vem depois.<br/><span>Meu espaço para compartilhar o que construo.</span></p><a className="circle-link" href="#sobre" aria-label="Conhecer André"><ArrowDown size={25}/></a></div>
          <div className="hero-index" aria-hidden="true"><span>01 — APRESENTAÇÃO</span><span>SCROLL PARA EXPLORAR ↓</span></div>
        </section>
        <section className="about wrap" id="sobre" aria-labelledby="about-title"><div><span className="eyebrow">01 / SOBRE</span><h2 id="about-title">Prazer,<br/>André<span>.</span></h2></div><div className="about-copy"><Code2 className="about-symbol" size={35} strokeWidth={1.2}/><p className="about-lead">Sou desenvolvedor.<br/>Este é meu ponto de encontro<br className="desktop-break"/> entre ideias e projetos.</p><p>Sou André Fellipe Dalsochio, desenvolvedor de software e titular da microempresa identificada abaixo. Este site reúne minha apresentação profissional e as informações de contato e identificação do empreendimento.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Minha trajetória no LinkedIn <ArrowUpRight size={18}/></a></div></section>
        <section className="company-section wrap" id="empresa" aria-labelledby="company-title">
          <span className="eyebrow">02 / IDENTIFICAÇÃO EMPRESARIAL</span>
          <h2 id="company-title">O empreendimento<span>.</span></h2>
          <p className="company-intro">Empreendimento individual de André Fellipe Dalsochio, sediado em Blumenau, Santa Catarina, formalizado como Microempreendedor Individual (MEI). Sua atividade registrada é treinamento em informática, com forma de atuação pela internet.</p>
          <dl className="company-details">
            <div><dt>Nome empresarial</dt><dd>68.974.210 ANDRE FELLIPE DALSOCHIO</dd></div>
            <div><dt>CNPJ</dt><dd>68.974.210/0001-14</dd></div>
            <div><dt>Atividade registrada</dt><dd>Treinamento em informática · CNAE 8599-6/03</dd></div>
            <div><dt>Titular</dt><dd>André Fellipe Dalsochio</dd></div>
          </dl>
          <p className="company-intro">Como titular, André é o responsável pelo empreendimento e pelo contato institucional. Sua atuação profissional em desenvolvimento de software é apresentada neste site separadamente da atividade constante no registro da MEI.</p>
        </section>
        <section className="contact wrap" id="contato" aria-labelledby="contact-title"><span className="eyebrow">03 / CONTATO</span><div className="contact-heading"><h2 id="contact-title">Vamos<br/><span>conversar?</span></h2><ArrowUpRight className="contact-arrow" strokeWidth={1} aria-hidden="true"/></div><div className="contact-bottom"><p>Contato profissional: <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a></p><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><ArrowUpRight size={19}/> LinkedIn <ArrowUpRight size={17}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><Code2 size={19}/> GitHub <ArrowUpRight size={17}/></a></div></div></section>
      </main>
      <footer className="wrap"><a className="wordmark" href="#inicio">dalsochio<span>_</span></a><span>André Dalsochio · {new Date().getFullYear()}</span><a href="#inicio">Voltar ao topo ↑</a></footer>
    </>
  );
}
