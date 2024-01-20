import { axios } from '../../utils/axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Endpoints } from '@/consts';
import { createTaskSchema } from '@/schema/task';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseForm from '../BaseForm';
import ModalWrapper from './ModalWrapper';
import FormInput from '../Input/FormInput';
import { twMerge } from 'tailwind-merge';
import z from 'zod';

type Props = {
  show: boolean;
  onClose: () => void; // Add onClose prop
  taskID: string;
};

type FormData = z.infer<typeof createTaskSchema>;

const EditTaskModal: React.FC<Props> = ({ show, onClose, taskID }) => {
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
      const response = await axios.put(
        Endpoints.TASKS + '/' + taskID,
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
  };

  return (
    <ModalWrapper show={show} onBackdrop={handleClose}>
      <BaseForm
        title="Edit task"
        onSubmit={handleSubmit(onSubmit)}
        submitText="Edit task"
        isSubmitting={isSubmitting}
        disabled={!isDirty || !isValid}
      >
        <FormInput
          title="Title"
          placeholder="Title"
          type="text"
          {...register('title')}
          error={errors?.title?.message}
        />
        <FormInput
          title="Description"
          placeholder="Description"
          type="text"
          customInput={
            <textarea
              className={twMerge(
                'border border-gray-400 rounded-md pl-2 w-[54%]',
                errors.description?.message ? 'border-2 border-red-600' : '',
              )}
              placeholder="Description"
              {...register('description', {
                required: 'Description is required',
              })}
            />
          }
          {...register('description')}
          error={errors?.description?.message}
        />
        <FormInput
          title="Assignee"
          placeholder="Assignee"
          type="text"
          {...register('assigneeEmail')}
          error={errors?.assigneeEmail?.message}
        />
      </BaseForm>
    </ModalWrapper>
  );
};

export default EditTaskModal;
