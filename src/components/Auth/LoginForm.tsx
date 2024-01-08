'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Routes, emailRegex } from '@/consts';
import z from 'zod';
import { loginSchema } from '@/schema/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/Input/FormInput';
import BaseForm from '../BaseForm';
import { useState } from 'react';
import { axios } from '../../utils/axios';
import { Provider } from '@prisma/client';
import { useRouter } from 'next/navigation';

type FormData = z.infer<typeof loginSchema>;
const LoginForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isValid) return;
    setIsSubmitting(true);

    try {
      const response = await axios.get(Routes.AUTH, {
        params: {
          ...data,
          provider: Provider.EMAIL,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data) {
        throw new Error('Invalid credentials');
      }

      router.push(Routes.DASHBOARD);
    } catch (error) {
      console.error('Error in login: ', error);
    }
    setTimeout(() => setIsSubmitting(false), 500);
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
