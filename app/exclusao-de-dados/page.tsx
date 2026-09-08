import type { Metadata } from 'next';
import { ArrowUpRight, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Exclusão de Dados — André Dalsochio',
  description: 'Solicite a exclusão de uma conta ou de dados associados aos aplicativos de André Dalsochio.',
};

export default function DataDeletionPage() {
  const subject = encodeURIComponent('Solicitação de exclusão de conta e dados');
  const body = encodeURIComponent('Aplicativo:\nE-mail associado à conta:\nDescrição da solicitação:');

  return (
    <InfoPage
      label="PRIVACIDADE / CONTROLE DE DADOS"
      title="Exclusão de dados"
      intro="Se um aplicativo tiver uma conta ou dados associados ao seu uso, você pode solicitar a exclusão por este canal."
      updatedAt="7 de setembro de 2026"
    >
      <section className="info-contact-card info-contact-card-accent">
        <Trash2 size={25} aria-hidden="true" />
        <div>
          <span className="small-label">SOLICITAÇÃO</span>
          <h2>Peça a exclusão por e-mail</h2>
          <p>Use o botão abaixo e informe qual aplicativo e qual e-mail estão associados à solicitação.</p>
          <a className="info-button" href={`mailto:contato@odalsochio.com?subject=${subject}&body=${body}`}>
            Solicitar exclusão <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section>
        <h2>Como funciona</h2>
        <ol>
          <li>Envie a solicitação usando um e-mail que ajude a confirmar a titularidade da conta.</li>
          <li>Informe o nome do aplicativo, o e-mail da conta e, se necessário, os dados que deseja excluir.</li>
          <li>Responderemos para confirmar o pedido e informar eventuais etapas adicionais.</li>
          <li>Após a confirmação, excluiremos os dados que não precisem ser mantidos por obrigação legal ou para prevenção de fraude.</li>
        </ol>
      </section>

      <section>
        <h2>Importante</h2>
        <p>
          A exclusão de dados não necessariamente cancela cobranças, assinaturas ou contas mantidas diretamente pela Apple, Google ou outro serviço de terceiros. Esses serviços devem ser gerenciados nas respectivas plataformas.
        </p>
        <p>
          Quando o aplicativo oferecer uma opção de exclusão dentro dele, essa deve ser a forma preferencial de iniciar o processo. Esta página funciona como canal web de solicitação e suporte.
        </p>
      </section>

      <section>
        <h2>Privacidade</h2>
        <p>
          Para saber mais sobre tratamento, retenção e compartilhamento de informações, consulte a <Link href="/privacidade">Política de Privacidade</Link>.
        </p>
      </section>
    </InfoPage>
  );
}
