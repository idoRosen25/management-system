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
    <div className="flex flex-col">
      <div
        className={twMerge(
          'flex px-2',
          isInline ? 'justify-between' : 'flex-col gap-2',
        )}
      >
        <label className="text-md font-medium mr-2">{title}:</label>
        {customInput ? (
          customInput
        ) : (
          <input
            ref={ref}
            className={twMerge(
              inputClassName,
              !isInline ? 'w-[90%]' : '',
              'border border-gray-400 rounded-md pl-2',
            )}
            type={type}
            {...props}
          />
        )}
      </div>
      {!!errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default React.forwardRef(FormInput);
