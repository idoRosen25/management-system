import ModalWrapper from './ModalWrapper';
import BaseForm from '../BaseForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import FormInput from '../Input/FormInput';
import { emailRegex } from '../../consts';
import { createTaskSchema } from '@/schema/task';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { axios } from '../../utils/axios';
import { Endpoints } from '@/consts';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/navigation';

type Props = {
  show: boolean;
  onClose: () => void;
};

type FormData = z.infer<typeof createTaskSchema>;
const CreateTaskModal: React.FC<Props> = ({ show, onClose }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(createTaskSchema),
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
        Endpoints.TASKS,
        JSON.stringify({ ...data }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.data) {
        throw new Error('Invalid credentials');
      }

      handleClose();
      router.refresh();
    } catch (error) {
      console.error('Error in create task: ', error);
    }
    setTimeout(() => setIsSubmitting(false), 500);
  };

  return (
    <ModalWrapper show={show} onBackdrop={handleClose}>
      <BaseForm
        title="Create Task"
        onCancel={handleClose}
        btnSize="md"
        submitText="Create"
        onSubmit={handleSubmit(onSubmit)}
        disabled={!isValid && isDirty}
        isSubmitting={isSubmitting}
      >
        <FormInput
          title="Title"
          type="text"
          inputClassName={'mb-2'}
          placeholder="Title"
          isInline={false}
          errorMessage={errors.title?.message}
          {...register('title', {
            required: 'Title is required',
          })}
        />
        <FormInput
          title="Assignee"
          type="text"
          inputClassName={'mb-2'}
          placeholder="Assignee email"
          isInline={false}
          errorMessage={errors.assigneeEmail?.message}
          {...register('assigneeEmail', {
            pattern: {
              value: emailRegex,
              message: 'Invalid email format',
            },
          })}
        />
        <FormInput
          title="Description"
          type="text"
          inputClassName={'mb-2 h-20'}
          isInline={false}
          errorMessage={errors.description?.message}
          customInput={
            <textarea
              className={twMerge(
                'border border-gray-400 rounded-md pl-2 w-[90%]',
                errors.description?.message ? 'border-2 border-red-600' : '',
              )}
              placeholder="Description"
              {...register('description', {
                required: 'Description is required',
              })}
            />
          }
        />
      </BaseForm>
    </ModalWrapper>
  );
};

export default CreateTaskModal;
