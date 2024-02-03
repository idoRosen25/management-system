import { Task, TaskStatus, User, Team, Workspace } from '@prisma/client';
import prisma from '../../lib/prismadb';
import { getLoggedInUser } from './auth';

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

export const getTeamById = async () => {
  const userId = getLoggedInUser()?.teamId;
  if (!userId) return null;
  const team = await prisma.team.findUnique({
    where: {
      id: userId,
    },
  });
  return team as Team;
};

export const getCurrentWorkspace = async () => {
  const userId = getLoggedInUser()?.teamId;
  if (!userId) return null;
  const workspace = await prisma.workspace.findFirst({
    where: {
      teamId: userId,
    },
  });
  return workspace as Workspace;
};

export const getAllWorkspaces = async () => {
  const userId = getLoggedInUser()?.teamId;
  if (!userId) return null;
  const workspaces = await prisma.workspace.findMany({
    where: {
      teamId: userId,
    },
  });
  return workspaces;
};
