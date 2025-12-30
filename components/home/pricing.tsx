"use client";

import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PricingPlan {
  name: string;
  badge: string;
  monthlyPrice: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

interface Pricing4Props {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
  className?: string;
}

const Pricing = ({
  title = "Planos",
  description = "Assinatura anual com pagamento parcelado em até 12x.",
  plans = [
    {
      name: "Individual",
      badge: "Individual",
      monthlyPrice: "12x R$ 19,90",
      features: [
        "1 Pulseira pronta para uso",
        "Atualização ilimitada dos dados",
        "Acesso rápido em emergências",
        "Suporte 24/7"
      ],
      buttonText: "Escolher",
    },
    {
      name: "Casal",
      badge: "Casal",
      monthlyPrice: "12x R$ 39,90",
      features: [
        "2 Pulseiras prontas para uso",
        "Atualização ilimitada dos dados",
        "Acesso rápido em emergências",
        "Suporte 24/7"
      ],
      buttonText: "Escolher",
      isPopular: true
    },
    {
      name: "Família",
      badge: "Família",
      monthlyPrice: "12x R$ 59,70",
      features: [
        "3 Pulseiras prontas para uso",
        "Atualização ilimitada dos dados",
        "Acesso rápido em emergências",
        "Suporte 24/7"
      ],
      buttonText: "Escolher",
    },
  ],
  className = "",
}: Pricing4Props) => {
  return (
    <section className={`py-32 ${className}`}>
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
            {title}
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground max-w-3xl lg:text-xl">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex w-full flex-col rounded-lg border p-6 text-left ${
                  plan.isPopular ? "border-border border-primary" : ""
                }`}
              >
                <Badge className="mb-8 block w-fit uppercase">
                  {plan.badge}
                </Badge>
                <span className="text-4xl font-medium">
                  {plan.monthlyPrice}
                </span>
                <Separator className="my-6" />
                <div className="flex h-full flex-col justify-between gap-20">
                  <ul className="text-muted-foreground space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <Check className="size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{plan.buttonText}</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
