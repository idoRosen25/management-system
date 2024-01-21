import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../../lib/prismadb';


export async function PUT(request: NextRequest, context: { params: NodeJS.Dict<string>  }) {
  const id = context.params.id;
  const { title, description, assigneeEmail } = await request.json();
  const task = await prisma.$transaction(async () => {
    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
      },
    });
    try {
      assigneeEmail &&
        (await prisma.assignedTask.update({
          where: { taskId_assigneeEmail: { taskId: task.id, assigneeEmail } },
          data: {
            assigneeEmail,
            taskId: task.id,
          },
        }));
      return task;
    } catch (error) {
      throw error;
    }
  });
  return NextResponse.json(task);
}

export async function DELETE(request: NextRequest, context: { params: NodeJS.Dict<string> }) {
  try {
    const id = context.params.id;
    await prisma.assignedTask.deleteMany({ where: { taskId: id } });
    await prisma.task.delete({ where: { id } });
    return NextResponse.json('task deleted');
  } catch (error: any) {
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
}

export async function GET(request: NextRequest, context: { params: NodeJS.Dict<string> }) {
  try {
    const id = context.params.id;
    const task = await prisma.task.findUnique({
      where: { id },
      include: { assignedTo: true },
    });
    return NextResponse.json(task);
  } catch (error: any) {
    return NextResponse.json({ error: error?.toString() }, { status: 500 });
  }
}
