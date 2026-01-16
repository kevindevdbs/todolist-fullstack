import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { CirclePlus, List } from "lucide-react";
import { BatteryMedium } from "lucide-react";
import { Check } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-blue-200 w-full h-screen flex justify-center items-center">
      <Card className="w-2xl h-1/3 p-4">
        <CardContent className="flex gap-2">
          <Input placeholder="Adicionar Tarefa"></Input>
          <Button className="cursor-pointer">
            Cadastrar <CirclePlus />
          </Button>
        </CardContent>

        <Separator />

        <div className="flex gap-2">
          <Badge className="">
            <List />
            Todas
          </Badge>
          <Badge>
            <BatteryMedium />
            Não Finalizadas
          </Badge>
          <Badge className="bg-blue-500">
            <Check />
            Concluídas
          </Badge>
        </div>

        <div>
          <div className=" flex justify-between">
            <div className="bg-green-400 w-1.5 h-8"></div>
            <p>Estudar React</p>
            <div className="flex gap-3">
              <SquarePen />
              <Trash/>
            </div>
          </div>
        </div>
      </Card>
    </main>
  );
}
