import React from 'react';

type TaskContentItemProps = {
  label: string;
  value: string;
};

const TaskContentItem: React.FC<TaskContentItemProps> = ({ label, value }) => {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
    </div>
  );
};

type TaskContentProps = {
  contentItems: { label: string; value: string }[];
};

const TaskContent: React.FC<TaskContentProps> = ({ contentItems }) => {
  return (
    <div className="border-t border-gray-200">
      <dl>
        {contentItems.map((item, index) => (
          <TaskContentItem key={index} label={item.label} value={item.value} />
        ))}
      </dl>
    </div>
  );
};

export default TaskContent;
