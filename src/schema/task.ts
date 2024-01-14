import { TaskStatus } from '@prisma/client';
import z from 'zod';

export const createTaskSchema = z.object({
  title: z.string({ required_error: 'Title cannot be empty' }).min(5).max(1000),
  description: z
    .string({ required_error: 'Description cannot be empty' })
    .min(2)
    .max(4000),
  status: z.nativeEnum(TaskStatus).optional(),
  creatorEmail: z.string({ required_error: 'Email cannot be empty' }).email(),
  dueDate: z
    .date()
    .min(new Date(), { message: 'Due date cannot be in the past' })
    .optional(),
});
