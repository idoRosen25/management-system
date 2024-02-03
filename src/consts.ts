import { Role } from '@prisma/client';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const baseURL = 'http://localhost:3000';

export enum Routes {
  AUTH = '/auth',
  DASHBOARD = '/dashboard',
  USER = '/user',
  INVITE = '/invite',
}

export enum Endpoints {
  AUTH = '/auth',
  TASKS = '/tasks',
}

export const User = {
  email: 'test@test.com',
  password: '123123',
  name: 'test',
  teamName: 'test',
  Role: Role.ADMIN,
};
