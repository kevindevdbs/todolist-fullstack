import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SquarePen } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import { updateTaskName } from "@/app/actions/update.tasks";
import { toast } from "sonner";



interface EditTaskProps {
  task: {
    id: number;
    title: string;
  }
  refetchTasks: () => Promise<void>;
}


export default function EditTask({ task, refetchTasks}: EditTaskProps) {
  const [editTask, setEditTask] = useState<string>("");

  const handleClick = async () => {
    await updateTaskName( task.id, { task: editTask });
    toast.success("Atividade Editada com Sucesso");
    refetchTasks()
  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <SquarePen size={18} className="cursor-pointer" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Editar tarefa</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Input
                defaultValue={task.title}
                onChange={(e) => setEditTask(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                onClick={() => {handleClick()}}
              >
                Editar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
