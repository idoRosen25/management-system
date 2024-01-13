import ModalWrapper from './ModalWrapper';
import BaseForm from '../BaseForm';
import { useForm } from 'react-hook-form';
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
  return (
    <ModalWrapper show={show} onBackdrop={onClose}>
      <BaseForm title="Create Task" onCancel={onClose} btnSize="md">
        {/* TODO: refactor inputs for task creation fields fields */}
        <FormInput
          title="Email"
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
      </BaseForm>
    </ModalWrapper>
  );
};

export default CreateTaskModal;
