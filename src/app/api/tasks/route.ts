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
      try{        
        assigneeEmail &&
          (await prisma.assignedTask.create({
            data: {
              assigneeEmail,
              taskId: task.id,
            },
          }));
        return task;
      }catch(error){
        task.id && await prisma.task.delete({where:{id:task.id}});
        throw error;
      }
    });
    return NextResponse.json(task);
  } catch (error: any) {
    return NextResponse.json({ error: error?.toString() }, { status: error?.code === "P2003" ? 404 : 500 });
  }
}