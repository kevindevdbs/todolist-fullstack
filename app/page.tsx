'use client'

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { CirclePlus, List, BatteryMedium, Check, Trash, ListCheck, Sigma } from "lucide-react";
import EditTask from "@/components/edit-task";
import CleanTaskCheck from "@/components/clean-task-check";


export default function Home() {

  return (
    <main className="bg-blue-200 w-full h-screen flex justify-center items-center">

      <Card className="w-2xl  p-8">

        <CardHeader className="flex gap-2 p-0">
          <Input placeholder="Adicionar Tarefa"></Input>
          <Button className="cursor-pointer">Cadastrar <CirclePlus /> </Button>
          <Button>Clique</Button>
        </CardHeader>


        <Separator />

        <div className="flex gap-2">
          <Badge variant={"default"}><List /> Todas</Badge>
          <Badge variant={"outline"}><BatteryMedium />Não Finalizadas</Badge>
          <Badge variant={"outline"}><Check />Concluídas</Badge>
        </div>

        <div className="border-b-2">

          <div className=" flex justify-between h-12 border-t-2">
            <div className="bg-green-400 w-1 h-full"></div>
            <p className="flex-1 px-2 flex items-center justify-start h-full text-sm">Estudar React</p>

            <div className="flex items-center gap-3">
              <EditTask />
              <Trash size={18} className="cursor-pointer" />
            </div>

          </div>

        </div>

        <div className="flex justify-between">

          <div className="flex gap-2 items-center ">
            <ListCheck size={18} />
            <p className="text-xs">Tarefas Concluídas (3/3)</p>
          </div>
          <CleanTaskCheck />

        </div>

        <div className="h-2 bg-gray-200 w-full rounded-md">
          <div className="h-full bg-green-500 rounded-md" style={{ width: '50%' }}></div>
        </div>

        <div className="flex justify-end items-center gap-2">
          <Sigma size={16} />
          <p className="text-xs">3 Tarefas no total</p>
        </div>


      </Card>
    </main>
  );
}
