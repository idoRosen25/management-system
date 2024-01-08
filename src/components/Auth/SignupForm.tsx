'use client';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Routes, emailRegex } from '@/consts';
import z from 'zod';
import { signupSchema } from '@/schema/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInput from '@/components/Input/FormInput';
import BaseForm from '../BaseForm';
import { axios } from '../../utils/axios';
import { Provider } from '@prisma/client';
import { useRouter } from 'next/navigation';

type FormData = z.infer<typeof signupSchema>;
const SignupForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isValid) return;

    try {
      const response = await axios.post(
        Routes.AUTH,
        JSON.stringify({ ...data, provider: data.provider || Provider.EMAIL }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.data) {
        throw new Error();
      }

      router.push(Routes.DASHBOARD);
    } catch (error) {
      console.error('Error in signup: ', error);
    }
  };
  return (
    <BaseForm
      title="Sign Up"
      onSubmit={handleSubmit(onSubmit)}
      onCancel={() => null}
      submitText="Register"
      disabled={!isValid && isDirty}
    >
      <section className="mt-4 flex flex-col gap-4">
        <FormInput
          title="Full name"
          type="text"
          placeholder="Full name"
          errorMessage={errors.fullName?.message}
          {...register('fullName', {
            required: 'Please enter your full name',
          })}
        />

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
          title="Password"
          type="password"
          placeholder="Password"
          errorMessage={errors.password?.message}
          {...register('password', { required: 'Password is required' })}
        />
        <FormInput
          title="Validate Password"
          type="password"
          placeholder="Enter password again"
          errorMessage={errors.validatePassword?.message}
          {...register('validatePassword', {
            required: 'Please enter the password again',
          })}
        />
      </section>
    </BaseForm>
  );
};

export default SignupForm;
