import Button from './Button';
import Divider from './Divider';

type Props = {
  children: React.ReactNode;
  title?: string;
  onSubmit: () => void;
  onCancel?: () => void;
  disabled?: boolean;
  submitText?: string;
  isSubmitting?: boolean;
};
const BaseForm = ({
  children,
  title,
  onSubmit,
  onCancel,
  submitText = 'Submit',
  disabled = false,
  isSubmitting = false,
}: Props) => {
  return (
    <>
      <h1 className="text-3xl font-normal text-gray-800 mb-2">{title}</h1>
      <Divider />
      {children}
      <div className="flex gap-4 w-full  h-fit mt-4 justify-end">
        {typeof onCancel === 'function' && (
          <Button
            color="white"
            variant="outline"
            onClick={() => onCancel()}
            text="Cancel"
            size="sm"
          />
        )}
        <Button
          size="sm"
          color="primary"
          variant="contain"
          onClick={() => onSubmit()}
          disabled={disabled}
          text={submitText}
          isLoading={isSubmitting}
        />
      </div>
    </>
  );
};

export default BaseForm;
