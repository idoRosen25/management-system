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

export enum EmailSendType {
  INVITE = 'invite',
  RESET_PASSWORD = 'reset_password',
}

export type InviteEmailProps = {
  fullName: string;
  inviteLink: string;
};

export interface CreateEmailResponseSuccess {
  /** The ID of the newly created email. */
  id: string;
}
export interface CreateEmailResponse {
  data: CreateEmailResponseSuccess | null;
  error: ResendErrorResponse | null;
}

declare const RESEND_ERROR_CODES_BY_KEY: {
  readonly missing_required_field: 422;
  readonly invalid_access: 422;
  readonly invalid_parameter: 422;
  readonly invalid_region: 422;
  readonly rate_limit_exceeded: 429;
  readonly missing_api_key: 401;
  readonly invalid_api_Key: 403;
  readonly invalid_from_address: 403;
  readonly validation_error: 403;
  readonly not_found: 404;
  readonly method_not_allowed: 405;
  readonly application_error: 500;
  readonly internal_server_error: 500;
};
type RESEND_ERROR_CODE_KEY = keyof typeof RESEND_ERROR_CODES_BY_KEY;
export interface ResendErrorResponse {
  message: string;
  name: RESEND_ERROR_CODE_KEY;
}
