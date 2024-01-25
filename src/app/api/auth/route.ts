import prisma from '../../../../lib/prismadb';
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { setCookie } from '../../../utils/cookie';

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
      throw new Error('User does not exist');
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
