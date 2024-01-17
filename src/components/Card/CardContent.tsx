import React from 'react';

type CardContentProps = {
  contentItems: { label: string; value: string }[];
};

const CardContent: React.FC<CardContentProps> = ({ contentItems }) => {
  return (
    <div className="border-t border-gray-200">
      <dl>
        {contentItems.map((item, index) => (
          <div key={index} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default CardContent;
