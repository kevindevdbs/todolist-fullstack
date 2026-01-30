"use server";

import prisma from "@/lib/prisma";

export const updateDoneTask = async (
  taskId: number,
  updatedData: { done: boolean },
) => {
  const updateTask = await prisma.tasks.update({
    where: { id: taskId },
    data: updatedData,
  });
  return updateTask;
};

export const updateTaskName = async (
  taskId: number,
  updatedData: { task: string },
) => {
  const updateTask = await prisma.tasks.update({
    where: { id: taskId },
    data: updatedData,
  });
  return updateTask;
};

