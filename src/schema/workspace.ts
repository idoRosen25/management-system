import z from 'zod';

export const createWorkspaceSchema = z.object({
  name: z.string({ required_error: 'Name cannot be empty' }).min(2).max(100),
});
