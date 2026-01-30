'use server';

import prisma from "@/lib/prisma";

export const addTaskToDb = async (tarefa: string) => {

    try {
        if(!tarefa) return;

        const newTask = await prisma.tasks.create({
            data: {
                task: tarefa,
                done: false,
            },
        });

        if(!newTask) return;

        return newTask;


    } catch (error) {
        console.error("Error ao adicionar tarefa:", error);
        return;
    }

}