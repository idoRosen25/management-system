import { Role } from '@prisma/client';
import prisma from '../../../../lib/prismadb';
import { setCookie } from '../../../utils/cookie';
import jwt from 'jsonwebtoken';
import { Routes } from '../../../consts';

export const createUserInvitePath = async (
  teamId?: string,
  email?: string,
  role?: Role,
) => {
  let params = '';
  if (email) {
    params = `email=${email}`;
  }
  if (teamId) {
    params = `${params}&teamId=${teamId}`;
  }
  if (role) {
    params = `${params}&role=${role}`;
  }

  setCookie(
    'access_token',
    jwt.sign(
      { lastLogin: new Date(), role },
      process.env.NEXT_PUBLIC_JWT_SECRET as string,
      { expiresIn: '7d' },
    ),
  );
  return `${Routes.INVITE}${params.length ? `?${params}` : ''}`;
};

// use function for body data when using SSR form elements
export async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}
