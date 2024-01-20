import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  header: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
};

const Card = ({ header, main, footer }: CardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border-2 flex flex-col border-gray-300 h-[20rem] space-between">
      <div className="border-b-2 border-gray-300">{header}</div>
      <div
        className={twMerge(
          footer ? 'border-b-2 border-gray-300' : '',
          'h-full',
        )}
      >
        {main}
      </div>
      <div className="">{footer}</div>
    </div>
  );
};

export default Card;
