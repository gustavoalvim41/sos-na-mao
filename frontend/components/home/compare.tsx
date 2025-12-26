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
          Por que escolher o S.O.S. na Mão?
        </h2>
        <p className="text-muted-foreground mb-8 text-center">
          Veja as diferenças entre uma solução profissional e pulseiras genéricas.
        </p>
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3"></TableHead>
                <TableHead className="bg-muted w-1/3 px-6 py-4 text-center font-semibold">
                  S.O.S. na Mão
                </TableHead>
                <TableHead className="w-1/3 px-6 py-4 text-center font-semibold">
                  Pulseiras Genéricas
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Acesso às informações</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">Instantâneo via NFC</TableCell>
                <TableCell className="px-6 py-4 text-center">Limitado ou inexistente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Atualização dos dados</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">Online e ilimitada</TableCell>
                <TableCell className="px-6 py-4 text-center">Difícil ou não disponível</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Funciona sem app</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">✓ Sim</TableCell>
                <TableCell className="px-6 py-4 text-center">✗ Não</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Funciona sem bateria</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">✓ Sim</TableCell>
                <TableCell className="px-6 py-4 text-center">Variável</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Privacidade controlada</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">Somente dados essenciais</TableCell>
                <TableCell className="px-6 py-4 text-center">Sem controle</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Suporte técnico</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">Disponível</TableCell>
                <TableCell className="px-6 py-4 text-center">Ausente</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4 font-medium">Durabilidade</TableCell>
                <TableCell className="bg-muted px-6 py-4 text-center">Alta qualidade</TableCell>
                <TableCell className="px-6 py-4 text-center">Variável</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { Compare };