"use server";

import prisma from "@/lib/prisma";

export const deleteTask = async (taskId: number) => {
  const deletedTask = await prisma.tasks.delete({
    where: { id: taskId },
  });
  return deletedTask;
};
