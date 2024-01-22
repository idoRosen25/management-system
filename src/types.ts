import { TaskStatus, User } from '@prisma/client';

export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  password: string;
  validatePassword: string;
};

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColor = 'primary' | 'danger' | 'secondary' | 'white';
export type ButtonVariant = 'contain' | 'outline' | 'text';

export type TaskCardData = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  creatorEmail: string;
  creator: User;
  assignedTo?: User;
};
