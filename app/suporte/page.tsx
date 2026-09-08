import type { Metadata } from 'next';
import { ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Suporte — André Dalsochio',
  description: 'Canal de suporte para os aplicativos de André Dalsochio.',
};

const apps = [
  {
    name: 'Padel Score',
    description: 'Registro de partidas, placares e composição dos jogadores por set.',
  },
  {
    name: 'Bar Boss Mobile',
    description: 'Organização de agenda, eventos, atrações e promoções de bares.',
  },
  {
    name: 'Marilia Nutri · MVP',
    description: 'Criação de pedidos comerciais, anexos e compartilhamento via WhatsApp.',
  },
];

export default function SupportPage() {
  return (
    <InfoPage
      label="ATENDIMENTO / SUPORTE"
      title="Vamos resolver juntos"
      intro="Use este canal para relatar problemas, tirar dúvidas ou enviar sugestões sobre um aplicativo."
      updatedAt="7 de setembro de 2026"
    >
      <section className="info-contact-card">
        <Mail size={25} aria-hidden="true" />
        <div>
          <span className="small-label">CANAL PRINCIPAL</span>
          <h2>contato@odalsochio.com</h2>
          <p>Descreva o aplicativo e o que aconteceu. Isso ajuda a investigar mais rapidamente.</p>
          <a className="info-button" href="mailto:contato@odalsochio.com">
            Enviar e-mail <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section>
        <h2>Aplicativos</h2>
        <div className="info-list-cards">
          {apps.map((app) => (
            <div className="info-list-card" key={app.name}>
              <span className="small-label">APP</span>
              <h3>{app.name}</h3>
              <p>{app.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>O que enviar</h2>
        <p>Inclua, se possível:</p>
        <ul>
          <li>nome do aplicativo e versão;</li>
          <li>modelo do dispositivo e versão do sistema;</li>
          <li>passos para reproduzir o problema;</li>
          <li>mensagem de erro ou screenshot sem dados sensíveis; e</li>
          <li>o resultado esperado.</li>
        </ul>
        <p>Não envie senhas, tokens, documentos ou outras informações que não sejam necessárias para o atendimento.</p>
      </section>

      <section>
        <h2>Privacidade</h2>
        <p>
          Para entender como as informações são tratadas, consulte a <Link href="/privacidade">Política de Privacidade</Link>. Solicitações de exclusão podem ser feitas pela página de <Link href="/exclusao-de-dados">exclusão de dados</Link>.
        </p>
      </section>
    </InfoPage>
  );
}
