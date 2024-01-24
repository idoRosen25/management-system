import { TaskStatus } from '@prisma/client';
import TaskStatusColumn from '../../components/Tasks/TaskStatusColumn';
import { Suspense } from 'react';
import TaskColumnLoader from '../../components/Tasks/TaskColumnLoader';

export default function Dashbaord() {
  return (
    <section>
      <div className="bg-blue-700 bg-opacity-60 py-6">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 bg-transparent">
            {Object.values(TaskStatus).map((status, index) => (
              <Suspense
                key={`suspence_task_status_${status}`}
                fallback={<TaskColumnLoader status={status} />}
              >
                <TaskStatusColumn status={status} />
              </Suspense>
            ))}
          </div>
          {/* /End replace */}
        </div>
      </div>
      {/* /End replace */}
    </section>
  );
}
