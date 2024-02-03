import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';

export async function POST(request: NextRequest) {
  try {
    const { name, user } = await request.json();

    const workspace = await prisma.workspace.create({
      data: {
        name,
        teamId: user?.teamId,
        tasks: {
          create: {
            title: 'Welcome to your workspace!',
            description:
              'This is your first task. You can create more tasks and assign them to your team members.',
            creator: {
              connect: {
                id: user?.id,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(workspace);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error === null || error === void 0 ? void 0 : error.toString(),
      },
      {
        status: 500,
      },
    );
  }
}
