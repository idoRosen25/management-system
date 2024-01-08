import prisma from '../../../../lib/prismadb';
import bcrypt from 'bcrypt';
import { subMinutes } from 'date-fns';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, provider } = await request.json();

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        provider,
        lastLogin: new Date(),
      },
    });
    // return the user
    return NextResponse.json(user);
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
      },
    });

    if (!user) {
      throw new Error('User does not exist');
    }
    const compare = await bcrypt.compare(password, user.passwordHash);
    if (!compare) {
      throw new Error('Invalid credentials');
    }
    if (user.lastLogin.getTime() < subMinutes(new Date(), 7).getTime()) {
    }
    // return the user
    const { passwordHash, ...userData } = user;

    return NextResponse.json(userData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
