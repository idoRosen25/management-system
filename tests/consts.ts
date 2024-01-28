import { Role } from '@prisma/client';

export const User = {
  email: 'test@test.com',
  password: '123123',
  name: 'test',
  teamName: 'test',
  Role: Role.ADMIN,
};
