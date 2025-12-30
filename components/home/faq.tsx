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
    question: "Como funciona a pulseira S.O.S. na Mão?",
    answer:
      "A pulseira possui um chip NFC integrado. Quando alguém encosta um celular nela, as informações médicas que você cadastrou na plataforma são exibidas instantaneamente — sem necessidade de app, senha ou internet.",
  },
  {
    id: "faq-2",
    question: "Precisa de bateria ou recarga?",
    answer:
      "Não. A tecnologia NFC não depende de bateria, recarga ou conexão com a internet. A pulseira funciona sempre, 24 horas por dia.",
  },
  {
    id: "faq-3",
    question: "Como minhas informações são protegidas?",
    answer:
      "Apenas os dados essenciais que você cadastrar ficam acessíveis através da pulseira. Você tem controle total sobre o que é exibido e pode editar ou remover informações quando quiser.",
  },
  {
    id: "faq-4",
    question: "Posso atualizar minhas informações depois?",
    answer:
      "Sim. Você pode atualizar seus dados médicos, contatos de emergência e outras informações a qualquer momento pela plataforma, de forma ilimitada durante toda a assinatura.",
  },
  {
    id: "faq-5",
    question: "A pulseira é resistente ao uso diário?",
    answer:
      "Sim. A pulseira foi desenvolvida para uso contínuo, resistindo a água, suor e atividades do dia a dia sem perder funcionalidade.",
  },
  {
    id: "faq-6",
    question: "E se a pulseira for danificada ou perdida?",
    answer:
      "Entre em contato com nosso suporte. Você pode solicitar uma nova pulseira e vinculá-la ao mesmo perfil, mantendo todas as suas informações intactas.",
  },
  {
    id: "faq-7",
    question: "Como funciona a assinatura anual?",
    answer:
      "Ao assinar, você recebe sua pulseira e acesso à plataforma por um ano. Durante esse período, pode atualizar suas informações quantas vezes quiser. Na renovação, você garante 50% de desconto.",
  },
  {
    id: "faq-8",
    question: "Qualquer celular consegue ler a pulseira?",
    answer:
      "Sim. A maioria dos smartphones modernos possui leitor NFC. Basta aproximar o celular da pulseira — não precisa desbloquear, abrir app ou ter internet.",
  },
]
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
