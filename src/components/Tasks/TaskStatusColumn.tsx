import { TaskStatus } from '@prisma/client';
import { getTasks, getCurrentWorkspace } from '../../utils/tasks';
import Card from '../Card/Card';
import TaskCard from '../Card/TaskCard';
import { TaskCardData } from '../../types';

async function TaskStatusColumn({ status }: { status: TaskStatus }) {
  const tasks = await getTasks(status);
  const currentWorkspace = await getCurrentWorkspace();

  return (
    <div className="flex flex-col rounded-md border border-gray-400 shadow-sm h-full">
      <div className="py-2 px-4 capitalize w-full text-xl font-medium text-gray-700 text-left bg-indigo-300 bg-opacity-70 rounded-t-md">
        {status.toLowerCase().replaceAll('_', ' ')}
      </div>
      <div className="bg-indigo-600 bg-opacity-75 h-full max-h-full pt-4 rounded-b-md overflow-y-auto no-scrollbar">
        <div className="flex flex-col gap-2 w-11/12 md:w-5/6 mx-auto h-full pb-4">
          {tasks.map((task) =>
            task.workspaceId === currentWorkspace?.id ? (
              <Card key={task.id}>
                <TaskCard task={task as TaskCardData} />
              </Card>
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
export default TaskStatusColumn;
