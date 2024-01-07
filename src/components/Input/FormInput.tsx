import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  title: string;
  type: string;
  inputClassName?: string;
  containerClassName?: string;
  errorMessage?: string;
  [key: string]: unknown;
};
const FormInput = (
  {
    title,
    type,
    containerClassName = '',
    inputClassName = '',
    errorMessage,
    ...props
  }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="text-md font-medium mr-2">{title}:</label>
        <input
          ref={ref}
          className={twMerge(
            inputClassName,
            'border border-gray-400 rounded-md pl-2',
          )}
          type={type}
          {...props}
        />
      </div>
      {!!errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default React.forwardRef(FormInput);
