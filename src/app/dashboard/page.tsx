import Card from '@/components/Card/Card';
import { getTasks } from '@/utils/tasks';

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
                    header={true}
                    headerContent={() => (
                      <div className="flex flex-row justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {task.title}
                        </h3>
                      </div>
                    )}
                    main={() => (
                      <>
                      <div className='flex-col text-center'>
                      <div key={task.id} className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Assignee</dt>
                      <dd className="mt-1 text-sm text-gray-900">{task.assignedTo?.fullName}</dd>
                      </div>
                      <div className="sm:col-span-2 mt-2">
                      <dt className="text-sm font-medium text-gray-500">Description</dt>
                      <dd className="mt-1 text-sm text-gray-900">{task.description}</dd>
                      </div>
                      <div className="sm:col-span-1 mt-2">
                      <dt className="text-sm font-medium text-gray-500">Status</dt>
                      <dd className="mt-1 text-sm text-gray-900">{task.status}</dd>
                      </div>
                      <div className="sm:col-span-1 mt-2">
                      <dt className="text-sm font-medium text-gray-500">Created At</dt>
                      <dd className="mt-1 text-sm text-gray-900">{task.createdAt.toLocaleString("he")}</dd>
                      </div>
                      </div>
                      </>

                    )}
                    footer={true}
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
