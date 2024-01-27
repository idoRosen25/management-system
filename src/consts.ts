import { Resend as EmailSender } from 'resend';

export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const SenderString = process.env.VERCEL_EMAIL_SENDER as string;

const apiKey = process.env.VERCEL_EMAIL_API_KEY;

export const Resend = new EmailSender('' + apiKey);

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
