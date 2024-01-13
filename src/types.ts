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
