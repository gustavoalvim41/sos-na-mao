import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertCircle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-4 md:gap-6">
        {/* Informação para Socorrista */}
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <AlertCircle className="size-6" />
              Atenção - Socorrista
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              As informações abaixo são essenciais para o atendimento de emergência e para o contato com familiares do portador.
            </p>
          </CardContent>
        </Card>

        <Card className="relative">
          
          <CardContent className="pt-6">
            <div className="flex flex-col items-center gap-4">
              <CardTitle className="text-2xl">
                Informações Pessoais
              </CardTitle>
              
              <Avatar className="size-32">
                <AvatarImage src="/foto-idoso.jpg" alt="António" />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-red-500 to-primary text-white">
                  A
                </AvatarFallback>
              </Avatar>

              <div className="w-full space-y-2 text-center">
                <p className="text-lg">
                  <span className="font-semibold">Nome:</span>{" "}
                  <span className="text-muted-foreground">António José Santos</span>
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Data de Nascimento:</span>{" "}
                  <span className="text-muted-foreground">15/03/1948 (76 anos)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              Contatos de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between bg-foreground/5 rounded-lg p-4">
              <div>
                <p className="font-semibold">Filha - Maria Santos</p>
                <p className="text-sm text-muted-foreground">+55 11 98765-4321</p>
              </div>
              <Button size="default" className="gap-2">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>
            <div className="flex items-center justify-between bg-foreground/5 rounded-lg p-4">
              <div>
                <p className="font-semibold">Filho - João Santos</p>
                <p className="text-sm text-muted-foreground">+55 11 98765-1234</p>
              </div>
              <Button size="default" className="gap-2">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>

            <div className="flex items-center justify-between bg-foreground/5 rounded-lg p-4">
              <div>
                <p className="font-semibold">Neto - Pedro Santos</p>
                <p className="text-sm text-muted-foreground">+55 11 97654-3210</p>
              </div>
              <Button size="default" className="gap-2">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Informações Médicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-foreground/5 rounded-lg p-4">
              <p className="font-semibold mb-1">Tipo Sanguíneo:</p>
              <p className="text-sm text-muted-foreground">O+</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-4">
              <p className="font-semibold mb-1">Problemas de Saúde:</p>
              <p className="text-sm text-muted-foreground">Hipertensão, Diabetes Tipo 2, Arritmia Cardíaca</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-4">
              <p className="font-semibold mb-1">Alergias:</p>
              <p className="text-sm text-muted-foreground">Penicilina</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-4">
              <p className="font-semibold mb-1">Medicamentos em Uso:</p>
              <p className="text-sm text-muted-foreground">Enalapril 20mg (manhã), Metformina 850mg (2x/dia), Varfarina 5mg (noite)</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-4">
              <p className="font-semibold mb-1">Observações:</p>
              <p className="text-sm text-muted-foreground">Porta-marca-passos implantado. Em caso de emergência cardíaca, contactar imediatamente o 192 (SAMU). Não pode fazer ressonância magnética.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
