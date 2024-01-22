import { useCallback } from 'react';
import { axios, pauseExecution } from '../../utils/axios';

const useGetTaskById = (taskId?: string) => {
  const getTaskById = useCallback(async (id: string) => {
    await pauseExecution(5000);
    try {
      return await prisma?.task.findFirstOrThrow({
        where: {
          id,
        },
        include: {
          assignedTo: {
            select: {
              assignee: {
                select: {
                  id: true,
                  email: true,
                  fullName: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      console.error(`Failed to fetch task by id: ${id}`, error);
      return null;
    }
  }, []);

  return taskId ? getTaskById(taskId) : null;
};
export default useGetTaskById;
