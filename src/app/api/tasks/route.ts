import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';
import { getLoggedInUser } from '../../../utils/auth';

export async function POST(request: NextRequest) {
  try {
    const { title, description, assigneeEmail } = await request.json();
    const creatorEmail = getLoggedInUser()?.email;
    if (!creatorEmail) throw new Error('No reporter email found');

    const task = await prisma.$transaction(async () => {
      const task = await prisma.task.create({
        data: {
          title,
          description,
          creatorEmail,
        },
      });
      assigneeEmail &&
        (await prisma.assignedTask.create({
          data: {
            assigneeEmail,
            taskId: task.id,
          },
        }));
      return task;
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function GET(request: NextRequest) {
  try {
    const tasks = await prisma.task.findMany({});
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
