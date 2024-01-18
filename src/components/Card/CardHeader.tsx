import React from 'react';

type CardHeaderProps = {
  title: string;
  description: string;
};

const CardHeader = ({ title, description }: CardHeaderProps) => {
  return (
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default CardHeader;
