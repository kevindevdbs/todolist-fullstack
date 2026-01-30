'use server';

import prisma from "@/lib/prisma";

export const getTasksFromDb = async () => {
    const tasks = await prisma.tasks.findMany();
    return tasks;
}