import { TaskStatus } from '@prisma/client';
import { getTasks } from '../../utils/tasks';
import Card from '../Card/Card';
import TaskCard from '../Card/TaskCard';

async function TaskStatusColumn({ status }: { status: TaskStatus }) {
  const tasks = await getTasks(status);

  return (
    <div className="flex flex-col border-2 border-gray-200 p-4 gap-4 bg-gray-200 rounded-md">
      {tasks.map((task) => (
        <Card
          key={task.id}
          // header={<TaskCardHeader title={task.title} />}
          // main={
          //   <TaskCardContent
          //     assigneeName={task.assignedTo?.fullName}
          //     description={task.description}
          //     status={task.status}
          //     creationDate={task.createdAt}
          //   />
          // }
          // footer={<TaskCardFooter id={task.id} />}
        >
          <TaskCard task={task} />
        </Card>
      ))}
    </div>
  );
}
export default TaskStatusColumn;
