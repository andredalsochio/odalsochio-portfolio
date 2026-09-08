import type { Metadata } from 'next';
import { InfoPage } from '@/components/info-page';

export const metadata: Metadata = {
  title: 'Termos de Uso — André Dalsochio',
  description: 'Termos de uso do site profissional de André Dalsochio.',
};

export default function TermsPage() {
  return (
    <InfoPage
      label="INFORMAÇÕES / TERMOS"
      title="Termos de Uso"
      intro="Estas condições explicam as regras gerais para navegar e utilizar o site profissional de André Dalsochio."
      updatedAt="7 de setembro de 2026"
    >
      <section>
        <h2>1. Sobre este site</h2>
        <p>
          Este é um site institucional e profissional, criado para apresentar a trajetória, os projetos e os canais de contato de André Fellipe Dalsochio. O conteúdo é informativo e pode ser atualizado sem aviso prévio.
        </p>
      </section>

      <section>
        <h2>2. Uso permitido</h2>
        <p>
          Você pode acessar e consultar o conteúdo para fins pessoais ou profissionais legítimos. Não é permitido tentar comprometer a segurança, interromper o funcionamento, copiar de forma sistemática ou utilizar o site para finalidade ilegal, abusiva ou que viole direitos de terceiros.
        </p>
      </section>

      <section>
        <h2>3. Propriedade intelectual</h2>
        <p>
          Os textos, a identidade visual, o código e os demais elementos apresentados neste site pertencem aos seus respectivos titulares. O acesso ao site não transfere direitos de propriedade intelectual. Projetos de terceiros, marcas e links externos permanecem sujeitos aos direitos e condições de seus próprios titulares.
        </p>
      </section>

      <section>
        <h2>4. Links externos</h2>
        <p>
          O site pode apontar para páginas externas, como GitHub e LinkedIn. Esses destinos possuem políticas próprias e não são controlados por este site. A inclusão de um link não representa endosso integral do conteúdo ou disponibilidade do serviço externo.
        </p>
      </section>

      <section>
        <h2>5. Disponibilidade</h2>
        <p>
          São adotadas medidas razoáveis para manter o site disponível e correto, mas não há garantia de funcionamento ininterrupto, ausência total de erros ou permanência de qualquer conteúdo específico. O acesso pode ser interrompido para manutenção, segurança ou atualização.
        </p>
      </section>

      <section>
        <h2>6. Contato</h2>
        <p>
          Dúvidas sobre estes termos podem ser encaminhadas para <a href="mailto:contato@odalsochio.com">contato@odalsochio.com</a>. Estes termos são regidos pela legislação brasileira, sem prejuízo das regras obrigatórias aplicáveis ao consumidor.
        </p>
      </section>
    </InfoPage>
  );
}
