import { TaskStatus } from '@prisma/client';
import { format } from 'date-fns';

type Props = {
  assigneeName?: string;
  description?: string;
  status: TaskStatus;
  creationDate: Date;
};
const TaskCardContent: React.FC<Props> = ({
  assigneeName,
  description,
  status,
  creationDate,
}) => {
  return (
    <div className="flex-col text-center">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-gray-500">Assignee</dt>
        <dd className="mt-1 text-sm text-gray-900">
          {assigneeName || 'Unassigned'}
        </dd>
      </div>
      <div className="sm:col-span-2 mt-2">
        <dt className="text-sm font-medium text-gray-500">Description</dt>
        <dd className="mt-1 text-sm text-gray-900">{description || ''}</dd>
      </div>
      <div className="sm:col-span-1 mt-2">
        <dt className="text-sm font-medium text-gray-500">Status</dt>
        <dd className="mt-1 text-sm text-gray-900">{status}</dd>
      </div>
      <div className="sm:col-span-1 mt-2">
        <dt className="text-sm font-medium text-gray-500">Created At</dt>
        <dd className="mt-1 text-sm text-gray-900">
          {format(creationDate, 'HH:ss dd/MM/yyy')}
        </dd>
      </div>
    </div>
  );
};

export default TaskCardContent;
