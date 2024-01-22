import { TaskStatus } from '@prisma/client';
import TaskStatusColumn from '../../components/Tasks/TaskStatusColumn';
import { Suspense } from 'react';
import TaskColumnLoader from '../../components/Tasks/TaskColumnLoader';

export default function Dashbaord() {
  return (
    <section>
      <div className="bg-white py-6">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full text-2xl font-extralight text-gray-900 text-center gap-6 grid grid-cols-3 mb-3 underline">
            {Object.values(TaskStatus).map((status, index) => (
              <div key={`task_status_${status}`}>
                {status.replaceAll('_', ' ')}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
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
