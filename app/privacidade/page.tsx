import type { Metadata } from 'next';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Política de Privacidade — André Dalsochio',
  description: 'Política de privacidade do site profissional de André Dalsochio.',
};

export default function PrivacyPage() {
  return (
    <InfoPage
      label="INFORMAÇÕES / PRIVACIDADE"
      title="Política de Privacidade"
      intro="Esta política explica, em linguagem simples, como informações podem ser tratadas durante a navegação e o contato por este site."
      updatedAt="7 de setembro de 2026"
    >
      <section>
        <h2>1. Escopo</h2>
        <p>
          Esta política se aplica a este site profissional e aos contatos iniciados por seus canais. Ela não substitui avisos específicos que possam acompanhar futuros produtos, aplicativos ou serviços; quando necessário, esses avisos indicarão como cada produto trata informações.
        </p>
      </section>

      <section>
        <h2>2. Informações recebidas</h2>
        <p>
          A navegação pode gerar informações técnicas essenciais para entregar a página, como endereço IP, data e hora, navegador e registros de segurança do serviço de hospedagem. Quando você escreve para o e-mail de contato, também recebemos as informações que decidir incluir na mensagem, como nome, endereço de e-mail e o conteúdo da solicitação.
        </p>
      </section>

      <section>
        <h2>3. Finalidades</h2>
        <p>As informações podem ser utilizadas para:</p>
        <ul>
          <li>disponibilizar, proteger e melhorar o funcionamento do site;</li>
          <li>responder mensagens, pedidos de contato e solicitações relacionadas ao conteúdo; e</li>
          <li>cumprir obrigações legais ou atender solicitações legítimas de autoridades.</li>
        </ul>
        <p>Não vendemos informações pessoais.</p>
      </section>

      <section>
        <h2>4. Compartilhamento</h2>
        <p>
          Informações podem ser processadas por fornecedores necessários à hospedagem, segurança, entrega de e-mail ou funcionamento técnico do site, sempre conforme a finalidade aplicável. Links para serviços como GitHub e LinkedIn levam a ambientes de terceiros, que possuem suas próprias políticas de privacidade.
        </p>
      </section>

      <section>
        <h2>5. Retenção e segurança</h2>
        <p>
          As mensagens e registros são mantidos pelo período necessário para responder, proteger o site, cumprir obrigações legais ou resolver uma solicitação. São adotadas medidas razoáveis de segurança, mas nenhum serviço conectado à internet oferece garantia absoluta contra incidentes.
        </p>
      </section>

      <section>
        <h2>6. Seus direitos</h2>
        <p>
          Nos limites da legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, anonimização ou eliminação de informações pessoais, além de esclarecimentos sobre seu uso. Para exercer um direito ou tirar dúvidas, escreva para <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a>. Podemos pedir informações adicionais para confirmar a identidade e proteger os dados.
        </p>
      </section>

      <section>
        <h2>7. Atualizações</h2>
        <p>
          Esta política pode ser atualizada para refletir mudanças no site, nos fornecedores ou na legislação. A data no topo indica a versão mais recente.
        </p>
      </section>
    </InfoPage>
  );
}
