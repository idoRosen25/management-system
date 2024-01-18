import React from 'react';

type CardContentProps = {
  contentItems: { label: string; value: string }[];
};

const CardContent = ({ contentItems }: CardContentProps) => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        {contentItems.map((item) => (
          <div key={item.label} className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
            <dd className="mt-1 text-sm text-gray-900">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CardContent;
