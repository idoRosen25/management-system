import React from 'react';
import Button from '../Button/Button';

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

const TaskContent: React.FC<TaskContentProps> = ({ contentItems }) => (
  <div className="border-t border-gray-200">
    <dl>
      {contentItems.map((item, index) => (
        <TaskContentItem key={index} label={item.label} value={item.value} />
      ))}
    </dl>
    {/* // add button here */}
    <div className={
      "flex flex-row justify-between px-4 py-4 sm:px-6"
    }>
    <Button text="Edit" variant="outline" color="primary" onClick={null} />
    <Button text="Delete" variant="outline" color="primary" onClick={null} />
    </div>
  </div>
);

export default TaskContent;
