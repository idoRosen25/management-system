'use client';
import ModalWrapper from './ModalWrapper';
import BaseForm from '../BaseForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import FormInput from '../Input/FormInput';
import { createWorkspaceSchema } from '@/schema/workspace';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { axios, pauseExecution } from '../../utils/axios';
import { Endpoints } from '@/consts';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { User } from '@prisma/client';

type Props = {
  show: boolean;
  onClose: () => void;
  user: User;
};

type FormData = z.infer<typeof createWorkspaceSchema>;
const CreateWorkSpaceModal: React.FC<Props> = ({ show, onClose, user }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(createWorkspaceSchema),
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isValid) return;
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        Endpoints.WORKSPACE,
        JSON.stringify({ ...data, user: user }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.data) {
        throw new Error('Invalid credentials');
      }
      toast.success('Workspace created successfully');
      await pauseExecution(3000);
      handleClose();
      router.refresh();
    } catch (error) {
      console.error('Error in create workspace: ', error);
      toast.error('Error creating workspace');
    }
    setTimeout(() => setIsSubmitting(false), 500);
  };

  return (
    <ModalWrapper show={show} onBackdrop={handleClose}>
      <BaseForm
        title="Create Workspace"
        onCancel={handleClose}
        btnSize="md"
        submitText="Create"
        onSubmit={handleSubmit(onSubmit)}
        disabled={!isValid && isDirty}
        isSubmitting={isSubmitting}
      >
        <FormInput
          title="name"
          type="text"
          inputClassName={'mb-2'}
          placeholder="name"
          isInline={false}
          errorMessage={errors.name?.message}
          {...register('name', {
            required: 'Title is required',
          })}
        />
      </BaseForm>
    </ModalWrapper>
  );
};

export default CreateWorkSpaceModal;
