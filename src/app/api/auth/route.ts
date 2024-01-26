import prisma from '../../../../lib/prismadb';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { setCookie } from '../../../utils/cookie';
import { createUserInvitePath } from '../invite/utils';
export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, provider, role, teamId } =
      await request.json();

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        provider,
        lastLogin: new Date(),
        role,
        teamId,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        passwordHash: true,
        lastLogin: true,
        teamId: true,
        role: true,
      },
    });

    const { passwordHash: _password, ...userData } = user;

    const token = jwt.sign(
      userData,
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      { expiresIn: '7d' },
    );

    setCookie('access_token', token);

    return NextResponse.json(userData);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function GET(request: NextRequest) {
  const params = new URL(request.url).searchParams;
  try {
    const { email, password } = {
      email: params.get('email'),
      password: params.get('password'),
    };

    if (
      !(email && !Array.isArray(email) && password && !Array.isArray(password))
    ) {
      throw new Error('Email and password are required');
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        passwordHash: true,
        lastLogin: true,
        teamId: true,
        role: true,
      },
    });

    if (!user) {
      const invite = await prisma.invite.findFirst({
        where: {
          email,
        },
      });
      if (!invite) {
        // Currently navigate to admin team creation page.
        // TODO: remove after desicion on uninvited users.
        // Add error message for not invited or invitation information on login page

        // throw new Error('User does not exist and wasnt invited');
        return NextResponse.json(
          {
            message: 'Failed to find invitation for user',
          },
          { status: 404 },
        );
      }
      return NextResponse.json(
        {
          url: `${request.nextUrl.origin}${await createUserInvitePath(invite.teamId, invite.email, invite.role)}`,
        },
        { status: 202 },
      );
    }

    if (!user?.teamId) {
      return NextResponse.json(
        {
          url: `${request.nextUrl.origin}${await createUserInvitePath(undefined, user.email, user.role)}`,
        },
        { status: 202 },
      );
    }
    const compare = await bcrypt.compare(password, user.passwordHash);
    if (!compare) {
      throw new Error('Invalid credentials');
    }

    const newLastLogin = new Date();

    const lastLoginUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        lastLogin: newLastLogin,
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        passwordHash: true,
        lastLogin: true,
        teamId: true,
        role: true,
      },
    });

    // return the user
    const { passwordHash, ...userData } = lastLoginUser;

    const token = jwt.sign(
      userData,
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      { expiresIn: '7d' },
    );
    // return the user
    setCookie('access_token', token);

    return NextResponse.json(userData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
