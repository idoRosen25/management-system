import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prismadb';

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } },
) {
  const { id } = context.params;
  const { title, description, assigneeEmail, status } = await request.json();
  const task = await prisma.$transaction(async () => {
    try {
      const task = await prisma.task.findUnique({
        where: { id },
        include: { assignedTo: true },
      });
      if (!task) throw new Error('Task not found');
      await prisma.task.update({
        where: { id },
        data: {
          title,
          description,
          status
        },
      });
      if (assigneeEmail === null && task.assignedTo?.assigneeEmail) {
        await prisma.assignedTask.delete({
          where: {
            taskId_assigneeEmail: {
              taskId: task.id,
              assigneeEmail: task.assignedTo?.assigneeEmail,
            },
          },
        });
      } else if (
        assigneeEmail &&
        assigneeEmail !== task.assignedTo?.assigneeEmail
      ) {
        await prisma.assignedTask.upsert({
          where: { taskId: id },
          create: {
            assigneeEmail,
            taskId: task.id,
          },
          update: {
            assigneeEmail,
          },
        });
      }

      return task;
    } catch (error) {
      throw error;
    }
  });
  return NextResponse.json(task);
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } },
) {
  try {
    const { id } = context.params;
    await prisma.$transaction([
      prisma.assignedTask.deleteMany({ where: { taskId: id } }),
      prisma.task.delete({ where: { id } }),
    ]);
    return NextResponse.json('task deleted');
  } catch (error: any) {
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  context: { params: { id: string } },
) {
  try {
    const { id } = context.params;
    const task = await prisma.task.findUnique({
      where: { id },
      include: { assignedTo: true },
    });
    return NextResponse.json(task);
  } catch (error: any) {
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
}
