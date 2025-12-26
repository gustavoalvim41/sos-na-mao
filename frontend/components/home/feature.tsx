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
        "Socorristas acessam suas informações médicas e contatos de emergência em segundos.",
      icon: <Zap className="size-6" />,
    },
    {
      heading: "Prevenção",
      description:
        "Alergias, condições e medicamentos visíveis na hora certa evitam erros no atendimento.",
      icon: <Lock className="size-6" />,
    },
    {
      heading: "Funciona sempre",
      description:
        "Sem recarga, sem aplicativo, sem depender de bateria ou internet.",
      icon: <ShieldAlert className="size-6" />,
    },
    {
      heading: "Identificação contínua",
      description:
        "Mesmo inconsciente, você continua identificado e com as informações acessíveis.",
      icon: <Package className="size-6" />,
    },
    {
      heading: "Tranquilidade para quem cuida",
      description:
        "Mesmo longe, você sabe que quem precisar terá acesso ao essencial.",
      icon: <UserCheck className="size-6" />,
    },
    {
      heading: "Privacidade protegida",
      description:
        "Apenas informações médicas essenciais são exibidas. Nada além do necessário.",
      icon: <ThumbsUp className="size-6" />,
    },
  ],
  buttonText = "Quero minha pulseira",
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
