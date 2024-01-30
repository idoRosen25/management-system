import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../../lib/prismadb';
import { Role } from '@prisma/client';
import { createUserInvitePath, streamToString } from './utils';
import { SendInviteEmail } from '../../../api/email';

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

    const user = await prisma.user.findFirst({
      where: { email },
      select: {
        fullName: true,
        email: true,
      },
    });
    if (teamId && email) {
      const redirectPath = await createUserInvitePath(
        teamId,
        email,
        role || Role.USER,
      );

      const inviteResponse = await SendInviteEmail(
        user?.fullName || '',
        user?.email || email,
        `${request.nextUrl.origin}${redirectPath}`,
        'You are invite to OctoManage',
      );
      const { data, error } = inviteResponse || {};
      if (!data || error) {
        throw new Error(error?.toString() || '');
      }

      return NextResponse.redirect(
        `${request.nextUrl.origin}/invite/${data?.id}`,
      );
    }

    if (email && name) {
      const team = await prisma.team.create({
        data: {
          name,
        },
      });
      const redirectPath = await createUserInvitePath(
        team.id,
        user?.email || email,
        role || Role.ADMIN,
      );
      const inviteResponse = await SendInviteEmail(
        user?.fullName || '',
        user?.email || email,
        `${request.nextUrl.origin}${redirectPath}`,
        'You are invite to OctoManage',
      );
      const { data, error } = inviteResponse || {};
      if (!data || error) {
        throw new Error(error?.toString() || '');
      }

      return NextResponse.redirect(
        `${request.nextUrl.origin}/invite/${data?.id}`,
      );
    }

    return NextResponse.redirect(`${request.nextUrl.origin}/invite`);
  } catch (error) {
    console.error('Error in request.json: ', error);
    return NextResponse.redirect(`${request.nextUrl.origin}/invite`);
  }
}
