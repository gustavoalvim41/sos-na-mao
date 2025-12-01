import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq1Props {
  heading?: string;
  items?: FaqItem[];
}

const Faq = ({
  heading = "Perguntas Frequentes",
  items = [
    {
      id: "faq-1",
      question: "Como minhas informações são protegidas?",
      answer:
        "Suas informações só são exibidas com a sua autorização. Apenas os dados essenciais cadastrados por você ficam disponíveis no acesso.",
    },
    {
      id: "faq-2",
      question: "Posso atualizar ou remover minhas informações?",
      answer:
        "Sim. Você pode editar ou excluir seus dados quando quiser, mantendo sempre o controle total sobre suas informações.",
    },
    {
      id: "faq-3",
      question: "O adesivo é resistente?",
      answer:
        "Sim. Ele foi desenvolvido para aguentar o uso diário, mantendo o código sempre legível.",
    },
    {
      id: "faq-4",
      question: "E se o adesivo for danificado?",
      answer:
        "Você pode solicitar um novo adesivo e vinculá-lo novamente ao seu ID sem perder suas informações.",
    },
    {
      id: "faq-5",
      question: "O S.O.S. na Mão é fácil de usar?",
      answer:
        "Sim. Basta ativar o kit, completar seu cadastro e aplicar o adesivo. Em poucos minutos tudo estará pronto para uso.",
    },
  ],
}: Faq1Props) => {
  return (
    <section className="py-16 flex justify-center">
      <div className="container max-w-3xl">
        <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-4xl">
          {heading}
        </h1>
        <Accordion type="single" collapsible>
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-semibold hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
