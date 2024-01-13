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
          title="Assignee"
          type="text"
          inputClassName={'mb-2'}
          placeholder="Assignee"
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
          inputClassName={'mb-2'}
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
