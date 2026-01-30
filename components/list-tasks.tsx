import { Tasks } from "@/generated/prisma/client";

import { Trash } from "lucide-react";
import EditTask from "./edit-task";

interface IListTasksProps {
  listTask: Tasks[];
  handleDone: (id: number, done: boolean) => void;
  handleDeleteTask: (id: number) => void;
  handleGetTasks: () => Promise<void>;
  currentFilter: string;
}

export default function ListTasks({
  listTask,
  handleDone,
  handleDeleteTask,
  handleGetTasks,
  currentFilter,
}: IListTasksProps) {
  // Filtragem baseada no filtro atual
  let filteredTasks = listTask;

  if (currentFilter === "completed") {
    filteredTasks = listTask.filter((task) => task.done);
  } else if (currentFilter === "pending") {
    filteredTasks = listTask.filter((task) => !task.done);
  }

  return (
    <div className="border-b-2">
      {filteredTasks.length === 0 && (
        <p>
          {listTask.length === 0
            ? "Você não possui tarefas cadastradas."
            : "Nenhuma tarefa encontrada para o filtro selecionado."}
        </p>
      )}
      {filteredTasks.map((task) => (
        <div key={task.id} className="flex justify-between h-12 border-t-2">
          <div
            className={`${task.done ? "bg-green-400 w-1 h-full" : "bg-red-400 w-1 h-full"}`}
          ></div>
          <p
            className="flex-1 px-2 flex items-center justify-start h-full text-sm cursor-pointer hover:text-gray-700"
            onClick={() => handleDone(task.id, !task.done)}
          >
            {task.task}
          </p>
          <div className="flex items-center gap-3">
            <EditTask
              task={{ id: task.id, title: task.task }}
              refetchTasks={handleGetTasks}
            />
            <Trash
              size={18}
              className="cursor-pointer"
              onClick={() => handleDeleteTask(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
