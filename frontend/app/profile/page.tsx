import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertCircle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-6">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary text-base sm:text-lg">
              <AlertCircle className="size-5" />
              Atenção - Socorrista
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm leading-relaxed">
              As informações abaixo são essenciais para o atendimento de emergência e para o contato com familiares do portador.
            </p>
          </CardContent>
        </Card>

        <Card className="relative">
          <CardContent className="pt-4 sm:pt-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Informações Pessoais
              </CardTitle>
              <Avatar className="size-24 sm:size-28 md:size-32">
                <AvatarImage src="/foto-idoso.jpg" alt="António" />
                <AvatarFallback className="text-3xl sm:text-4xl font-bold bg-gradient-to-br from-red-500 to-primary text-white">
                  A
                </AvatarFallback>
              </Avatar>
              <div className="w-full space-y-1.5 sm:space-y-2 text-center px-2">
                <p className="text-sm sm:text-base md:text-lg">
                  <span className="font-semibold">Nome:</span>{" "}
                  <span className="text-muted-foreground">António José Santos</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg">
                  <span className="font-semibold">Data de Nasc.:</span>{" "}
                  <span className="text-muted-foreground">15/03/1948 (76 anos)</span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg">
              Contatos de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-foreground/5 rounded-lg p-3 sm:p-4">
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Filha - Maria Santos</p>
                <p className="text-xs sm:text-sm text-muted-foreground">+55 11 98765-4321</p>
              </div>
              <Button size="sm" className="gap-2 w-full sm:w-auto">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-foreground/5 rounded-lg p-3 sm:p-4">
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Filho - João Santos</p>
                <p className="text-xs sm:text-sm text-muted-foreground">+55 11 98765-1234</p>
              </div>
              <Button size="sm" className="gap-2 w-full sm:w-auto">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-foreground/5 rounded-lg p-3 sm:p-4">
              <div className="flex-1">
                <p className="font-semibold text-sm sm:text-base">Neto - Pedro Santos</p>
                <p className="text-xs sm:text-sm text-muted-foreground">+55 11 97654-3210</p>
              </div>
              <Button size="sm" className="gap-2 w-full sm:w-auto">
                <Phone className="size-4" />
                Ligar
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg">Informações Médicas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4">
            <div className="bg-foreground/5 rounded-lg p-3 sm:p-4">
              <p className="font-semibold mb-1 text-sm sm:text-base">Tipo Sanguíneo:</p>
              <p className="text-xs sm:text-sm text-muted-foreground">O+</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-3 sm:p-4">
              <p className="font-semibold mb-1 text-sm sm:text-base">Problemas de Saúde:</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Hipertensão, Diabetes Tipo 2, Arritmia Cardíaca</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-3 sm:p-4">
              <p className="font-semibold mb-1 text-sm sm:text-base">Alergias:</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Penicilina</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-3 sm:p-4">
              <p className="font-semibold mb-1 text-sm sm:text-base">Medicamentos em Uso:</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Enalapril 20mg (manhã), Metformina 850mg (2x/dia), Varfarina 5mg (noite)</p>
            </div>

            <div className="bg-foreground/5 rounded-lg p-3 sm:p-4">
              <p className="font-semibold mb-1 text-sm sm:text-base">Observações:</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Porta-marca-passos implantado. Em caso de emergência cardíaca, contactar imediatamente o 192 (SAMU). Não pode fazer ressonância magnética.</p>
            </div>
          </CardContent>
        </Card>
        {/* Sobre o Sistema */}
        <Card className="border-muted">
          <CardHeader className="pb-3">
            <CardTitle className="text-base sm:text-lg">Sobre o S.O.S. na Mão</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Sistema de identificação médica via pulseira NFC. Informações cadastradas 
              pelo usuário em plataforma segura e criptografada (LGPD).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
