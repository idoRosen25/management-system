import { ButtonSize } from '../types';
import Button from './Button/Button';
import Divider from './Divider';

type Props = {
  children: React.ReactNode;
  title?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  disabled?: boolean;
  submitText?: string;
  isSubmitting?: boolean;
  btnSize?: ButtonSize;
};
const BaseForm = ({
  children,
  title = '',
  onSubmit,
  onCancel,
  submitText = 'Submit',
  disabled = false,
  isSubmitting = false,
  btnSize = 'sm',
}: Props) => {
  return (
    <div className="flex flex-col h-full">
      {title && (
        <>
          <h1 className="text-3xl font-normal text-gray-800 mb-2">{title}</h1>
          <Divider />
        </>
      )}
      <div className="h-fully my-4">{children}</div>
      <Divider />
      <div className="flex gap-4 w-full  h-fit mt-4 justify-end">
        {typeof onCancel === 'function' && (
          <Button
            color="white"
            variant="outline"
            onClick={() => onCancel()}
            text="Cancel"
            size={btnSize}
          />
        )}
        {typeof onSubmit === 'function' && (
          <Button
            size={btnSize}
            color="primary"
            variant="contain"
            onClick={() => onSubmit()}
            disabled={disabled}
            text={submitText}
            isLoading={isSubmitting}
          />
        )}
      </div>
    </div>
  );
};

export default BaseForm;
