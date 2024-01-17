import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  type: string;
  inputClassName?: string;
  containerClassName?: string;
  errorMessage?: string;
  isInline?: boolean;
  customInput?: ReactNode;
  [key: string]: unknown;
};
const FormInput = (
  {
    title,
    type,
    containerClassName = '',
    inputClassName = '',
    errorMessage,
    isInline = true,
    customInput,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div
      className={twMerge(
        'flex px-2 mb-4',
        isInline ? 'justify-between' : 'flex-col',
      )}
    >
      <label className="text-md font-medium mr-2 mb-1">{title}:</label>
      {customInput ? (
        customInput
      ) : (
        <input
          ref={ref}
          multiple
          className={twMerge(
            inputClassName,
            !isInline ? 'w-[90%]' : '',
            'border border-gray-400 rounded-md pl-2',
            errorMessage ? 'border-2 border-red-600' : '',
          )}
          type={type}
          {...props}
        />
      )}
      {!!errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default React.forwardRef(FormInput);
