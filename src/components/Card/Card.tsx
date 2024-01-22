import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg border-2 flex flex-col border-gray-300 space-between">
      {children}
    </div>
  );
};

export default Card;
