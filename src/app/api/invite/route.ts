import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';
import { Role } from '@prisma/client';
import { createUserInvitePath, streamToString } from './utils';

type TeamData = {
  email?: string;
  name?: string;
  teamId?: string;
  role?: Role;
};

export async function POST(request: NextRequest) {
  try {
    const { email, name, teamId, role }: TeamData = (
      await streamToString(request.body)
    )
      ?.split('&')
      .reduce((acc, slug) => {
        const [key, value] = slug.split('=');
        return {
          ...acc,
          // spaces are passed with + instead so need to manually replace if exist
          [key]: decodeURIComponent(value.replaceAll('+', ' ')),
        };
      }, {});

    if (teamId) {
      const redirectPath = await createUserInvitePath(
        teamId,
        email,
        role || Role.USER,
      );
      return NextResponse.redirect(`${request.nextUrl.origin}${redirectPath}`);
    }

    if (email && name) {
      const team = await prisma.team.create({
        data: {
          name,
        },
      });
      const user = await prisma.user.findFirst({
        where: {
          email,
        },
        select: {
          email: true,
        },
      });
      const redirectPath = await createUserInvitePath(
        team.id,
        user?.email || email,
        role || Role.ADMIN,
      );
      return NextResponse.redirect(`${request.nextUrl.origin}${redirectPath}`);
    }

    return NextResponse.redirect(`${request.nextUrl.origin}/invite`);
  } catch (error) {
    console.error('Error in request.json: ', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/invite`);
  }
}