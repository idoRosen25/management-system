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
import { Endpoints, Routes } from '@/consts';
import { useRouter } from 'next/navigation';

type Props = {
  show: boolean;
  onClose: () => void;
};

type FormData = z.infer<typeof createTaskSchema>;
const CreateTaskModal: React.FC<Props> = ({ show, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(createTaskSchema),
  });

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isValid) return;
    setIsSubmitting(true);

    try {
      const response = await axios.post(Endpoints.TASKS, {
        params: {
          ...data,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.data) {
        throw new Error('Invalid credentials');
      }

      router.replace(Routes.DASHBOARD, { scroll: true });
    } catch (error) {
      console.error('Error in create task: ', error);
    }
  };

  return (
    <ModalWrapper show={show} onBackdrop={onClose}>
      <BaseForm
        title="Create Task"
        onCancel={onClose}
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
          errorMessage={errors.userEmail?.message}
          {...register('userEmail', {
            required: 'Email is required',
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
          placeholder="Description"
          isInline={false}
          errorMessage={errors.description?.message}
          {...register('description', {
            required: 'Description Name is required',
          })}
        />
        <FormInput
          title="Due Date"
          type="date"
          inputClassName={'mb-2'}
          placeholder="Due Date"
          isInline={false}
          errorMessage={errors.dueDate?.message}
          {...register('dueDate', {
            required: 'Due Date is required',
            validate: (value) => {
              if (!value) return true;
              const today = new Date();
              const dueDate = new Date(value);
              return dueDate > today || 'Due Date must be in the future';
            },
          })}
        />
      </BaseForm>
    </ModalWrapper>
  );
};

export default CreateTaskModal;
