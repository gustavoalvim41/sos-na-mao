import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import rider from "@/public/rider.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[calc(100dvh-72px)] flex items-center md:h-auto">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline">
            ⛑️ Sua Vida em Primeiro Lugar
            <ArrowUpRight className="ml-2 size-4" />
          </Badge>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Suas informações médicas ao alcance de qualquer celular.
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            O S.O.S. na Mão mostra suas informações médicas com um toque de celular. Sem senha, sem app, sem complicação.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button asChild className="w-full sm:w-auto">
              <Link href="/login">Quero minha pulseira</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/profile">
                Saiba mais
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src={rider}
          alt="rider"
          className="w-full h-max-96 md:h-[calc(90vh-72px)] object-contain hidden md:block"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
