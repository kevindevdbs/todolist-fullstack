import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { Tasks } from "@/generated/prisma/client";
import { deleteTask } from "@/app/actions/delete-tasks";
import { toast } from "sonner";

interface CleanTaskCheckProps {
  listTasks: Tasks[];
  handleGetTasks: () => Promise<void>;
}

export default function CleanTaskCheck({
  listTasks,
  handleGetTasks,
}: CleanTaskCheckProps) {
  const handleCleanTasks = async () => {
    await Promise.all(
      listTasks?.filter((task) => task.done).map((task) => deleteTask(task.id)),
    );
    toast.warning("Atividades Deletadas com Sucesso");
    handleGetTasks();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-xs h-7">
          <Trash size={18} className="cursor-pointer" />
          Limpar tarefas concluídas
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {listTasks.filter((task) => task.done).length === 0
              ? "Nenhuma tarefa concluída para excluir."
              : `Tem certeza que deseja excluir ${listTasks.filter((task) => task.done).length} itens?`}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleCleanTasks}>
            Continuar
          </AlertDialogAction>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
