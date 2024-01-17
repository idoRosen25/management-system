import React from 'react';

type TaskContentProps = {
  label?: string;
  value?: string;
  status?: string;
  creator?: string;
  assignee?: string;
  createdAt?: string;
};

const TaskContentItem: React.FC<TaskContentProps> = ({ label, value }) => {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
    </div>
  );
};

const TaskContent: React.FC<TaskContentProps> = ({ status, creator, assignee, createdAt }) => {
  return (
    <div className="border-t border-gray-200">
      <dl>
        <TaskContentItem label="Status" value={status} />
        <TaskContentItem label="Creator" value={creator} />
        <TaskContentItem label="Assignee" value={assignee} />
        <TaskContentItem label="Created At" value={createdAt} />
      </dl>
    </div>
  );
};

export default TaskContent;
