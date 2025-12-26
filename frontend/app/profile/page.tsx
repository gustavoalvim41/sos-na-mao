import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertCircle, AlertTriangle } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background p-2 sm:p-4 md:p-8">
      <div className="max-w-2xl mx-auto flex flex-col gap-3 sm:gap-4 md:gap-6">
        <Card className="border-primary/50 bg-primary/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-primary text-base sm:text-lg">
              <AlertCircle className="size-5" />
              Socorrista: Leia Isto Primeiro
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              Esta pulseira contém informações médicas essenciais. Use os dados abaixo para prestar socorro e contactar familiares.
            </p>
          </CardContent>
        </Card>

        <Card className="border-orange-500/50 bg-orange-500/5">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-orange-600 dark:text-orange-500 text-base sm:text-lg">
              <AlertTriangle className="size-5" />
              Antes de Prosseguir
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
              <strong>Confirme:</strong> Esta pulseira pertence a <strong>António José Santos, 76 anos, Masculino</strong>.<br />
              Se o portador for diferente, pode ter havido troca de pulseiras.
            </p>
          </CardContent>
        </Card>

        <Card className="relative">
          <CardContent className="pt-3 sm:pt-4 pb-3 sm:pb-4">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <CardTitle className="text-lg sm:text-xl md:text-2xl">
                Identificação do Portador
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
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-foreground text-base sm:text-lg">
              Contatos de Emergência
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 pt-0">
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
          <CardHeader className="pb-2">
            <CardTitle className="text-base sm:text-lg">Informações Médicas Essenciais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 pt-0">
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
              <p className="text-xs sm:text-sm text-muted-foreground">Tem marca-passo. NÃO pode fazer ressonância.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
