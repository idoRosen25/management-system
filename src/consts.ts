export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export enum Routes {
  AUTH = '/auth',
  DASHBOARD = '/dashboard',
  USER = '/user',
  INVITE = '/invite',
  WORKSPACE = '/workspace',
}

export enum Endpoints {
  AUTH = '/auth',
  TASKS = '/tasks',
  WORKSPACE = '/workspace',
}
