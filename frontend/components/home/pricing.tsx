import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PricingProps {
  heading?: string;
  description?: string;
  price?: string | number;
  priceSuffix?: string;
  features?: string[][];
  buttonText?: string;
}

const defaultFeatures = [
  [
    "Pulseira NFC S.O.S. na Mão",
    "Ativação imediata com ID exclusivo",
    "Edite seus dados sempre que precisar, sem limites"
  ],
  [
    "Suporte prioritário 24/7",
    "Garantia premium de 30 dias",
    "Tecnologia NFC de alta precisão"
  ],
  [
    "Informações médicas sempre à mão",
    "Gerenciamento completo de informações",
    "Acesso instantâneo sem app ou bateria"
  ],
];

const Pricing = ({
  heading = "Sua pulseira de segurança começa aqui",
  description = "Sem mensalidade. Sem assinatura.",
  price = 70,
  priceSuffix = "",
  features = defaultFeatures,
  buttonText = "Comprar Agora",
}: PricingProps) => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-semibold lg:text-6xl">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-md lg:text-xl">
            {description}
          </p>
          <div className="mx-auto flex w-full flex-col rounded-lg border p-6 sm:w-fit sm:min-w-80">
            <div className="flex justify-center">
              <span className="text-lg font-semibold">R$</span>
              <span className="text-6xl font-semibold">{price}</span>
              <span className="text-muted-foreground self-end">
                {priceSuffix}
              </span>
            </div>
            <div className="my-6">
              {features.map((featureGroup, idx) => (
                <div key={idx}>
                  <ul className="flex flex-col gap-3">
                    {featureGroup.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between gap-4 text-sm font-medium"
                      >
                        {feature} <Check className="inline size-4 shrink-0" />
                      </li>
                    ))}
                  </ul>
                  {idx < features.length - 1 && <Separator className="my-6" />}
                </div>
              ))}
            </div>
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing };
