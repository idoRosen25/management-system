import { TaskStatus } from '@prisma/client';
import { getTasks } from '../../utils/tasks';
import Card from '../Card/Card';
import TaskCardHeader from './TaskCardHeader';
import TaskCardContent from './TaskCardContent';
import TaskCardFooter from './TaskCardFooter';

async function TaskStatusColumn({ status }: { status: TaskStatus }) {
  const tasks = await getTasks(status);

  return (
    <div className="grid grid-cols-2 grid-rows-auto border-2 border-gray-200 p-4 gap-4 flex-col bg-gray-200 rounded-md">
      {tasks.map((task) => (
        <Card
          key={task.id}
          header={<TaskCardHeader title={task.title} />}
          main={
            <TaskCardContent
              assigneeName={task.assignedTo?.fullName}
              description={task.description}
              status={task.status}
              creationDate={task.createdAt}
            />
          }
          footer={<TaskCardFooter id={task.id} />}
        />
      ))}
    </div>
  );
}
export default TaskStatusColumn;
