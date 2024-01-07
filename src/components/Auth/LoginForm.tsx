'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { emailRegex } from '@/consts';
import z from 'zod';
import { loginSchema } from '@/schema/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/Input/FormInput';
import BaseForm from '../BaseForm';
import { useState } from 'react';

type FormData = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    if (!isValid) return;
    console.log('login data: ', data);
    setTimeout(() => setIsSubmitting(false), 1000);
  };
  return (
    <BaseForm
      title="Login"
      onSubmit={handleSubmit(onSubmit)}
      onCancel={() => null}
      submitText="Log in"
      disabled={!isValid && isDirty}
      isSubmitting={isSubmitting}
    >
      <section className="mt-4 flex flex-col gap-4">
        <FormInput
          title="Email"
          type="text"
          placeholder="Email"
          errorMessage={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: emailRegex,
              message: 'Invalid email format',
            },
          })}
        />
        <FormInput
          placeholder="Enter password again"
          title="Password"
          type="password"
          errorMessage={errors.password?.message}
          {...register('password', { required: 'Password is required' })}
        />
      </section>
    </BaseForm>
  );
};

export default LoginForm;
