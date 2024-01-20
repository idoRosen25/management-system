import DeleteTaskButton from '@/components/Button/DeleteTaskButton';
import EditTaskButton from '@/components/Button/EditTaskButton';
import Card from '@/components/Card/Card';
import { getTasks } from '@/utils/tasks';
import TaskCardContent from '../../components/Tasks/TaskCardContent';
import TaskCardFooter from '../../components/Tasks/TaskCardFooter';
import TaskCardHeader from '../../components/Tasks/TaskCardHeader';

export default async function Dashbaord() {
  const tasks = await getTasks();

  return (
    <section>
      {/* Replace with your content */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto p-5">
              <div className="grid grid-cols-3 gap-4">
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
            </div>
          </div>
          {/* /End replace */}
        </div>
      </div>
      {/* /End replace */}
    </section>
  );
}
