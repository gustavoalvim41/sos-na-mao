"use client";

import {
  ShieldCheck,
  Lock,
  Move,
  Layers,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <ShieldCheck  className="h-6 w-6" />,
      title: "Durabilidade e Resistência",
      description:
        "Feita para durar, suporta impactos, água e condições adversas sem perder a funcionalidade.",
    },
    {
      icon: <Lock  className="h-6 w-6" />,
      title: "Segurança Confiável",
      description:
        "Equipado com tecnologia que garante que suas informações estejam sempre protegidas.",
    },
    {
      icon: <Move className="h-6 w-6" />,
      title: "Conforto e Ajuste",
      description:
        "Leve, flexível e ajustável, proporciona conforto durante o uso prolongado.",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Materiais de Alta Qualidade",
      description:
        "Produzida com silicone seguro, hipoalergênico e resistente, ideal para uso diário.",
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Tecnologia que Cuida de Você
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              Nossa pulseira combina durabilidade, segurança e conforto, oferecendo um produto confiável para o uso diário.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full p-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
