import { Task, TaskStatus, User } from '@prisma/client';
import prisma from '../../lib/prismadb';

export const getTasks = async (
  status?: TaskStatus,
): Promise<
  (Task & {
    creator: Partial<User>;
    assignedTo?: Partial<User> | null;
  })[]
> => {
  const tasks = await prisma.task.findMany({
    where: {
      status,
    },
    include: {
      creator: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
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

  return tasks.map((task) => ({
    ...task,
    assignedTo: task.assignedTo?.assignee,
  }));
};
