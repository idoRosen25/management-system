import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export const isAuthenticated = () => {
  const accessToken = cookies().get('access_token');

  if (!accessToken?.value) return false;

  const decodedToken = jwt.decode(accessToken.value);

  if (!decodedToken) return false;

  return (
    new Date().getTime() > new Date((decodedToken as User).lastLogin).getTime()
  );
};

export const getLoggedInUser = () => {
  if (isAuthenticated()) {
    const accessToken = cookies().get('access_token');
    if (!accessToken?.value) return null;
    const decodedToken = jwt.decode(accessToken.value);
    return decodedToken as User;
  }
  return null;
};
