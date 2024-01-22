import { axios, pauseExecution } from '../../utils/axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Endpoints } from '@/consts';
import { updateTaskSchema } from '@/schema/task';
import { zodResolver } from '@hookform/resolvers/zod';
import BaseForm from '../BaseForm';
import ModalWrapper from './ModalWrapper';
import FormInput from '../Input/FormInput';
import { twMerge } from 'tailwind-merge';
import z from 'zod';
import SelectInput from '../Input/SelectInput';
import { TaskStatus } from '@prisma/client';
import Alert from '../Alerts/Alert';

type Props = {
  show: boolean;
  onClose: () => void; // Add onClose prop
  task: any;
};

type FormData = z.infer<typeof updateTaskSchema>;

const EditTaskModal: React.FC<Props> = ({ show, onClose, task }) => {
  const router = useRouter();
  const [toast, setToast] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm<FormData>({
    resolver: zodResolver(updateTaskSchema),
    defaultValues: {
      title: task?.title,
      description: task?.description,
      assigneeEmail: task?.assignedTo?.assignee.email,
      status: task?.status,
    },
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
      const removeAssignee =
        !!task?.assignedTo?.assignee && !data.assigneeEmail;
      const response = await axios.put(
        Endpoints.TASKS + '/' + task.id,
        JSON.stringify({
          ...data,
          assigneeEmail: removeAssignee ? null : data.assigneeEmail,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (!response.data) {
        throw new Error('Invalid credentials');
      }
      setToast(true);
      await pauseExecution(3000);
      handleClose();
      setIsSubmitting(false);
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
      console.error('Error in create task: ', error);
    }
  };

  return (
    <div>
      <ModalWrapper show={show} onBackdrop={handleClose}>
        <BaseForm
          title="Edit task"
          onSubmit={handleSubmit(onSubmit)}
          submitText="Edit task"
          isSubmitting={isSubmitting}
          disabled={!isDirty || !isValid}
          onCancel={handleClose}
        >
          <FormInput
            title="Title"
            placeholder="Title"
            inputClassName="mb-2"
            type="text"
            defaultValue={task?.title}
            {...register('title')}
            error={errors?.title?.message}
          />
          <FormInput
            title="Description"
            placeholder="Description"
            type="text"
            defaultValue={task?.description}
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
            inputClassName="mb-2"
            type="text"
            defaultValue={task?.assignedTo?.assignee?.email}
            {...register('assigneeEmail')}
            error={errors?.assigneeEmail?.message}
          />
          <div className="px-2">
            <SelectInput
              selectedItemId={watch('status') || task?.status}
              onChange={(value: string) => {
                setValue('status', value as TaskStatus, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
              title="status"
              items={Object.entries(TaskStatus).map(([key, value]) => {
                return { id: key, name: value.replaceAll('_', ' ') };
              })}
            />
          </div>
        </BaseForm>
        {toast && (
          <Alert
            message="Task updated successfully"
            type="success"
            duration={2000}
            isVisible={toast}
          />
        )}
      </ModalWrapper>
    </div>
  );
};

export default EditTaskModal;
