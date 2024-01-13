import ModalWrapper from './ModalWrapper';
import BaseForm from '../BaseForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormInput from '../Input/FormInput';
import { emailRegex } from '../../consts';

type Props = {
  show: boolean;
  onClose: () => void;
};

const CreateTaskModal: React.FC<Props> = ({ show, onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!isValid) return;

    try {
    } catch (error) {
      console.error('Error in create task: ', error);
    }
  };

  return (
    <ModalWrapper show={show} onBackdrop={onClose}>
      <BaseForm title="Create Task" onCancel={onClose} btnSize="md">
        {/* TODO: refactor inputs for task creation fields fields */}
        <FormInput
          title="Owner"
          type="text"
          placeholder="Email"
          isInline={false}
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
          title="Description"
          type="text"
          placeholder="Description"
          isInline={false}
          errorMessage={errors.taskName?.message}
          {...register('taskName', {
            required: 'Task Name is required',
          })}
        />
        <FormInput
          title="Due Date"
          type="date"
          placeholder="Due Date"
          isInline={false}
          errorMessage={errors.dueDate?.message}
          {...register('dueDate', {
            required: 'Due Date is required',
          })}
        />
      </BaseForm>
    </ModalWrapper>
  );
};

export default CreateTaskModal;
