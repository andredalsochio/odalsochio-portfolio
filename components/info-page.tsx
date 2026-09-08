import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';

type InfoPageProps = {
  label: string;
  title: string;
  intro: string;
  updatedAt: string;
  children: ReactNode;
};

const legalLinks = [
  { href: '/privacidade', label: 'Privacidade' },
  { href: '/termos', label: 'Termos de Uso' },
];

export function InfoPage({ label, title, intro, updatedAt, children }: InfoPageProps) {
  return (
    <div className="info-page">
      <header className="site-header info-header wrap">
        <Link className="wordmark" href="/" aria-label="André Dalsochio, início">
          dalsochio<span>_</span>
        </Link>
        <nav aria-label="Navegação principal">
          <Link href="/#sobre">Sobre</Link>
          <Link className="nav-contact" href="/#contato">
            Contato <ArrowUpRight size={16} />
          </Link>
        </nav>
      </header>

      <main className="info-main wrap">
        <Link className="info-back text-link" href="/">
          ← Voltar para o site
        </Link>
        <div className="info-heading">
          <span className="eyebrow">{label}</span>
          <h1>{title}<i aria-hidden="true">.</i></h1>
          <p className="info-intro">{intro}</p>
          <p className="info-updated">Última atualização: {updatedAt}</p>
        </div>
        <div className="info-layout">
          <aside className="info-aside" aria-label="Links legais">
            <span className="small-label">NESTA PÁGINA</span>
            <nav>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label} <ArrowUpRight size={14} />
                </Link>
              ))}
            </nav>
          </aside>
          <article className="info-article">{children}</article>
        </div>
      </main>

      <footer className="wrap info-footer">
        <Link className="wordmark" href="/">
          dalsochio<span>_</span>
        </Link>
        <div className="footer-identity"><strong>André Fellipe Dalsochio</strong><span>CNPJ 68.974.210/0001-14</span></div>
        <nav className="footer-links" aria-label="Informações legais">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
