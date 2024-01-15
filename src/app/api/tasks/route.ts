import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';

export async function POST(request: NextRequest) {
  try {
    const { title, description, creatorEmail } = await request.json();
    const task = await prisma.task.create({
      data: {
        title,
        description,
        creatorEmail,
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

export async function GET(request: NextRequest) {
  try {
    const tasks = await prisma.task.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        creatorEmail: true,
      },
    });
    return NextResponse.json(tasks);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
