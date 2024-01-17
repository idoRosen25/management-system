import prisma from "../../lib/prismadb";


export const getTasks = async () => {
    const tasks = await prisma.task.findMany({
      include: {
        assignedTo: {
            select: {
                assignee: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    }
                },
            },
        }
      },
    });
    return tasks.map((task) => ({
        ...task,
        assignedTo: task.assignedTo?.assignee,
    }));
  }
  