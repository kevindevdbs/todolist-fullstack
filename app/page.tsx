"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  CirclePlus,
  List,
  BatteryMedium,
  Check,
  Trash,
  ListCheck,
  Sigma,
  Loader2,
} from "lucide-react";
import EditTask from "@/components/edit-task";
import CleanTaskCheck from "@/components/clean-task-check";
import { useEffect, useState } from "react";
import { Tasks } from "@/generated/prisma/client";
import { getTasksFromDb } from "./actions/get-tasks";
import { addTaskToDb } from "./actions/add-tasks";
import { deleteTask } from "./actions/delete-tasks";
import { toast } from "sonner";
import { updateDoneTask } from "./actions/update.tasks";
import ListTasks from "@/components/list-tasks";

export default function Home() {
  const [listTask, setListTask] = useState<Tasks[]>([]);
  const [task, setTask] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasksFromDb();
      setListTask(tasks);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const trimmedTask = task.trim();
      if (!trimmedTask) {
        toast.error("A tarefa não pode ser vazia ou só espaços.");
        return;
      }
      // Verifica se já existe uma tarefa igual (case insensitive)
      const exists = listTask.some(
        (t) => t.task.trim().toLowerCase() === trimmedTask.toLowerCase(),
      );
      if (exists) {
        toast.error("Já existe uma tarefa igual cadastrada.");
        return;
      }
      setLoading(true);
      await addTaskToDb(trimmedTask);
      toast.success("Atividade Adicionada com Sucesso");
      setTask("");
      await handleGetTasks();
    } catch (error) {
      toast.error("Erro ao adicionar tarefa.");
      console.error("Erro ao adicionar tarefa:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      setLoading(true);
      await deleteTask(taskId);
      toast.warning("Atividade Deletada com Sucesso");
      await handleGetTasks();
    } catch (error) {
      toast.error("Erro ao excluir tarefa.");
      console.error("Erro ao excluir tarefa:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDone = async (id: number, done: boolean) => {
    try {
      await updateDoneTask(id, { done });
      await handleGetTasks();
    } catch (error) {
      toast.error("Erro ao atualizar tarefa.");
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  return (
    <main className="bg-blue-200 min-h-screen w-full flex justify-center items-start md:items-center py-6 px-2">
      <Card className="w-full max-w-[350px] rounded-2xl p-4 md:p-8 shadow-xl border border-gray-200 bg-white/90 backdrop-blur-md">
        <CardHeader className="flex gap-2 p-0">
          <Input
            onChange={(e) => setTask(e.target.value)}
            placeholder="Adicionar Tarefa"
            value={task}
          ></Input>
          <Button
            className="cursor-pointer"
            onClick={handleAddTask}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={18} />
                Cadastrando...
              </>
            ) : (
              <>
                Cadastrar <CirclePlus />
              </>
            )}
          </Button>
        </CardHeader>

        <Separator />

        <div className="flex gap-1 md:gap-2 flex-wrap mt-2 mb-2">
          <Badge
            className="cursor-pointer"
            variant={`${currentFilter === "all" ? "default" : "outline"}`}
            onClick={() => setCurrentFilter("all")}
          >
            <List /> Todas
          </Badge>
          <Badge
            className="cursor-pointer"
            variant={`${currentFilter === "pending" ? "default" : "outline"}`}
            onClick={() => setCurrentFilter("pending")}
          >
            <BatteryMedium />
            Não Finalizadas
          </Badge>
          <Badge
            className="cursor-pointer"
            variant={`${currentFilter === "completed" ? "default" : "outline"}`}
            onClick={() => setCurrentFilter("completed")}
          >
            <Check />
            Concluídas
          </Badge>
        </div>

        <ListTasks
          listTask={listTask}
          handleDone={handleDone}
          handleDeleteTask={handleDeleteTask}
          handleGetTasks={handleGetTasks}
          currentFilter={currentFilter}
        />

        <div className="flex flex-col md:flex-row justify-between gap-2 mt-4 mb-2">
          <div className="flex gap-2 items-center ">
            <ListCheck size={18} />
            <p className="text-xs">
              Tarefas Concluídas ({listTask.filter((task) => task.done).length}/
              {listTask.length})
            </p>
          </div>
          <CleanTaskCheck
            listTasks={listTask}
            handleGetTasks={handleGetTasks}
          />
        </div>

        <div className="h-2 bg-gray-200 w-full rounded-md mb-2">
          <div
            className="h-full bg-green-500 rounded-md transition-all duration-300"
            style={{
              width:
                listTask.length === 0
                  ? "0%"
                  : `${(listTask.filter((task) => task.done).length / listTask.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="flex justify-end items-center gap-2 mt-2">
          <Sigma size={16} />
          <p className="text-xs">{listTask.length} Tarefas no total</p>
        </div>
      </Card>
    </main>
  );
}
