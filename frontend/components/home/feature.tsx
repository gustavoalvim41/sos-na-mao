import {
  Zap,
  Lock,
  ShieldAlert,
  Package,
  UserCheck,
  ThumbsUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Feature {
  heading: string;
  description: string;
  icon: React.ReactNode;
}

interface Feature43Props {
  title?: string;
  features?: Feature[];
  buttonText?: string;
  buttonUrl?: string;
}

const Feature = ({
  title = "Por que ter um S.O.S. na Mão?",
  features = [
    {
      heading: "Rapidez",
      description:
        "Socorristas acessam informações médicas e contatos de emergência em segundos.",
      icon: <Zap className="size-6" />,
    },
    {
      heading: "Segurança",
      description:
        "Mesmo quando você não está por perto, sabe que as informações certas estarão disponíveis.",
      icon: <Lock className="size-6" />,
    },
    {
      heading: "Prevenção",
      description:
        "Alergias, condições médicas e observações importantes ajudam a evitar erros no atendimento.",
      icon: <ShieldAlert className="size-6" />,
    },
    {
      heading: "Simplicidade",
      description:
        "Funciona sem recarga, sem aplicativos e sem etapas complicadas.",
      icon: <Package className="size-6" />,
    },
    {
      heading: "Identificação contínua",
      description:
        "Mesmo inconsciente, a pessoa continua identificada e assistida corretamente.",
      icon: <UserCheck className="size-6" />,
    },
    {
      heading: "Segurança dos dados",
      description:
        "Somente informações essenciais são exibidas, respeitando a privacidade.",
      icon: <ThumbsUp className="size-6" />,
    },
  ],
  buttonText = "Tenha seu S.O.S. na Mão",
  buttonUrl = "/login",
}: Feature43Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {title && (
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-pretty text-4xl font-medium lg:text-5xl">
              {title}
            </h2>
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-accent mb-5 flex size-16 items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.heading}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        {buttonUrl && (
          <div className="mt-16 flex justify-center">
            <Button size="lg" asChild>
              <Link href={buttonUrl}>{buttonText}</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;
