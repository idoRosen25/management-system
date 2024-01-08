import z from 'zod';
import { Provider } from '@prisma/client';

export const loginSchema = z.object({
  email: z.string({ required_error: 'Email cannot be empty' }).email(),
  password: z.string({ required_error: 'Password cannot be empty' }).min(6),
});

export const signupSchema = z
  .object({
    fullName: z.string({ required_error: 'Name must not be empty' }).min(2),
    email: z.string({ required_error: 'Email cannot be empty' }).email(),
    password: z.string({ required_error: 'Password cannot be empty' }).min(6),
    validatePassword: z
      .string({ required_error: 'Password cannot be empty' })
      .min(6),
    provider: z.nativeEnum(Provider).optional(),
  })
  .refine((data) => data.password === data.validatePassword, {
    message: 'Passwords are not identical',
    path: ['validatePassword'],
  });
