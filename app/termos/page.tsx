import type { Metadata } from 'next';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Termos de Uso — André Dalsochio',
  description: 'Termos gerais para uso dos aplicativos e serviços de André Dalsochio.',
};

export default function TermsPage() {
  return (
    <InfoPage
      label="INFORMAÇÕES / TERMOS"
      title="Termos de Uso"
      intro="Estes termos apresentam as regras gerais para utilizar os aplicativos e serviços publicados por André Dalsochio."
      updatedAt="7 de setembro de 2026"
    >
      <section>
        <h2>1. Aceitação</h2>
        <p>
          Ao instalar ou utilizar um aplicativo, você declara que leu estes termos e a Política de Privacidade. Se não concordar com alguma condição, não utilize o aplicativo.
        </p>
      </section>

      <section>
        <h2>2. Uso permitido</h2>
        <p>
          Os aplicativos devem ser usados de forma legítima, respeitando as leis aplicáveis e os direitos de outras pessoas. Não é permitido tentar comprometer a segurança, interromper o funcionamento, modificar ou redistribuir o aplicativo sem autorização.
        </p>
      </section>

      <section>
        <h2>3. Conteúdo do usuário</h2>
        <p>
          Quando um aplicativo permite criar ou armazenar conteúdo, você continua responsável por esse conteúdo e deve ter autorização para utilizar as informações inseridas. Não envie dados de terceiros sem base legal ou consentimento quando ele for necessário.
        </p>
      </section>

      <section>
        <h2>4. Disponibilidade e atualizações</h2>
        <p>
          Os aplicativos podem receber atualizações, correções, mudanças de funcionalidade ou ser temporariamente interrompidos para manutenção. Buscamos manter os serviços úteis e seguros, mas não prometemos disponibilidade ininterrupta ou ausência total de erros.
        </p>
      </section>

      <section>
        <h2>5. Serviços de terceiros</h2>
        <p>
          Alguns recursos podem depender de serviços externos, como autenticação, armazenamento, bancos de dados ou compartilhamento. O uso desses serviços também está sujeito aos termos e políticas dos respectivos fornecedores.
        </p>
      </section>

      <section>
        <h2>6. Propriedade intelectual</h2>
        <p>
          O código, a identidade visual, os textos e os elementos dos aplicativos pertencem aos seus respectivos titulares e não podem ser copiados, comercializados ou redistribuídos sem autorização. Os conteúdos inseridos pelo usuário permanecem sob sua responsabilidade, observados os direitos de terceiros.
        </p>
      </section>

      <section>
        <h2>7. Encerramento</h2>
        <p>
          O acesso poderá ser limitado quando houver uso abusivo, violação destes termos ou risco à segurança do serviço. Você pode deixar de usar um aplicativo a qualquer momento e solicitar a exclusão de dados quando aplicável.
        </p>
      </section>

      <section>
        <h2>8. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser encaminhadas para <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a>. Estes termos são uma base geral e podem ser complementados por condições específicas apresentadas dentro de cada aplicativo.
        </p>
      </section>
    </InfoPage>
  );
}
