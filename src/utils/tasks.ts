import { TaskStatus } from '@prisma/client';
import prisma from '../../lib/prismadb';
import { pauseExecution } from './axios';

export const getTasks = async (status?: TaskStatus) => {
  const tasks = await prisma.task.findMany({
    where: {
      status,
    },
    include: {
      assignedTo: {
        select: {
          assignee: {
            select: {
              id: true,
              fullName: true,
              email: true,
            },
          },
        },
      },
    },
  });

  await pauseExecution(3000);
  return tasks.map((task) => ({
    ...task,
    assignedTo: task.assignedTo?.assignee,
  }));
};
