import { TaskStatus } from '@prisma/client';
import { getTasks } from '../../utils/tasks';
import Card from '../Card/Card';
import TaskCard from '../Card/TaskCard';
import { TaskCardData } from '../../types';

async function TaskStatusColumn({ status }: { status: TaskStatus }) {
  const tasks = await getTasks(status);

  return (
    <div className="flex flex-col p-2 gap-y-2 rounded-md">
      {tasks.map((task) => (
        <Card key={task.id}>
          <TaskCard task={task as TaskCardData} />
        </Card>
      ))}
    </div>
  );
}
export default TaskStatusColumn;
