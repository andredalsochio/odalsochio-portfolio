import type { Metadata } from 'next';
import Link from 'next/link';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Política de Privacidade — André Dalsochio',
  description: 'Como os aplicativos e serviços de André Dalsochio tratam informações pessoais.',
};

export default function PrivacyPage() {
  return (
    <InfoPage
      label="INFORMAÇÕES / PRIVACIDADE"
      title="Política de Privacidade"
      intro="Esta página explica, em linguagem simples, como informações podem ser tratadas nos aplicativos e serviços publicados por André Dalsochio."
      updatedAt="7 de setembro de 2026"
    >
      <section>
        <h2>Visão geral</h2>
        <p>
          A privacidade dos usuários é importante. Cada aplicativo pode tratar informações diferentes, de acordo com as funcionalidades que oferece. As informações concretas sobre cada aplicativo devem ser lidas junto com os avisos exibidos durante o uso e as declarações apresentadas nas lojas.
        </p>
      </section>

      <section>
        <h2>Aplicativos abrangidos</h2>
        <p>Esta política é a base para os projetos publicados por André Dalsochio, incluindo:</p>
        <ul>
          <li>Padel Score;</li>
          <li>Bar Boss Mobile;</li>
          <li>Marilia Nutri · MVP;</li>
          <li>outros aplicativos identificados pelo nome do responsável ou por uma política específica.</li>
        </ul>
      </section>

      <section>
        <h2>Informações que podem ser tratadas</h2>
        <ul>
          <li><strong>Informações fornecidas pelo usuário:</strong> nome, e-mail, conteúdo inserido e dados necessários para usar uma funcionalidade.</li>
          <li><strong>Dados técnicos:</strong> modelo do dispositivo, sistema operacional, versão do aplicativo, idioma e informações de diagnóstico.</li>
          <li><strong>Dados de uso:</strong> telas acessadas, recursos utilizados e eventos necessários para corrigir falhas e melhorar a experiência, quando essa medição estiver habilitada.</li>
          <li><strong>Comunicações de suporte:</strong> informações enviadas voluntariamente quando o usuário entra em contato.</li>
        </ul>
        <p>
          Um aplicativo que funciona somente localmente pode tratar os dados apenas no dispositivo. Quando houver sincronização, autenticação, armazenamento remoto ou outro serviço conectado, os dados e a finalidade serão descritos na página do aplicativo e nos avisos exibidos durante o uso.
        </p>
      </section>

      <section>
        <h2>Finalidades</h2>
        <p>As informações podem ser utilizadas para:</p>
        <ul>
          <li>fornecer e manter as funcionalidades do aplicativo;</li>
          <li>salvar preferências, partidas, pedidos ou outros conteúdos criados pelo usuário;</li>
          <li>proteger o serviço, investigar falhas e prevenir uso indevido;</li>
          <li>responder solicitações de suporte; e</li>
          <li>cumprir obrigações legais aplicáveis.</li>
        </ul>
        <p>Não vendemos informações pessoais.</p>
      </section>

      <section>
        <h2>Serviços de terceiros</h2>
        <p>
          Alguns aplicativos podem utilizar serviços de terceiros para autenticação, banco de dados, armazenamento, distribuição, diagnóstico ou compartilhamento. Esses serviços somente devem ser habilitados quando necessários ao aplicativo e serão considerados nas declarações de privacidade da Apple e do Google Play. Exemplos de tecnologias presentes nos projetos são Supabase, Firebase e armazenamento local no dispositivo.
        </p>
      </section>

      <section>
        <h2>Retenção e segurança</h2>
        <p>
          Mantemos as informações pelo período necessário para fornecer a funcionalidade, atender uma obrigação legal ou resolver uma solicitação. Adotamos medidas razoáveis para proteger os dados, mas nenhum serviço conectado à internet pode garantir segurança absoluta.
        </p>
      </section>

      <section>
        <h2>Seus direitos</h2>
        <p>
          Dependendo do aplicativo e da legislação aplicável, você pode solicitar acesso, correção, esclarecimento ou exclusão dos dados associados ao seu uso. Consulte a página de <Link href="/exclusao-de-dados">exclusão de dados</Link> para iniciar uma solicitação.
        </p>
      </section>

      <section>
        <h2>Crianças</h2>
        <p>
          Os aplicativos não são direcionados intencionalmente a crianças sem as salvaguardas e declarações necessárias. Se você acredita que uma criança forneceu informações pessoais de forma inadequada, entre em contato para que possamos avaliar a situação.
        </p>
      </section>

      <section>
        <h2>Contato</h2>
        <p>
          Para dúvidas sobre privacidade, escreva para <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a>.
        </p>
      </section>
    </InfoPage>
  );
}
