import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Compare = () => {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-semibold">
          Comparativo
        </h2>
        <p className="text-muted-foreground mb-8 text-center">
          Descubra como nosso produto se diferencia das pulseiras genéricas.
        </p>
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="bg-muted px-6 py-4 font-semibold">
                  S.O.S. na Mão
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold">
                  Pulseiras Genéricas
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              <TableRow>
                <TableCell className="px-6 py-4">Acesso a informações médicas</TableCell>
                <TableCell className="bg-muted px-6 py-4">Instantâneo via NFC</TableCell>
                <TableCell className="px-6 py-4">Limitado ou inexistente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Atualização dos dados</TableCell>
                <TableCell className="bg-muted px-6 py-4">Online e ilimitada</TableCell>
                <TableCell className="px-6 py-4">Difícil ou não disponível</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Segurança e privacidade</TableCell>
                <TableCell className="bg-muted px-6 py-4">Somente dados essenciais</TableCell>
                <TableCell className="px-6 py-4">Sem controle sobre informações</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Funciona sem app</TableCell>
                <TableCell className="bg-muted px-6 py-4">Sim</TableCell>
                <TableCell className="px-6 py-4">Na maioria, não</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Suporte</TableCell>
                <TableCell className="bg-muted px-6 py-4">24/7</TableCell>
                <TableCell className="px-6 py-4">Normalmente ausente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Durabilidade</TableCell>
                <TableCell className="bg-muted px-6 py-4">Alta</TableCell>
                <TableCell className="px-6 py-4">Variável</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Confiança em emergências</TableCell>
                <TableCell className="bg-muted px-6 py-4">Testada e confiável</TableCell>
                <TableCell className="px-6 py-4">Não testada</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { Compare };
