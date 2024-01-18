import Card from "@/components/Card/Card";
import { getTasks } from "@/utils/tasks"

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
                {
                  tasks.map((task) => (
                    <Card
                      key={task.id}
                      title={task.title}
                      description={task.description}
                      content={[
                        { label: 'Status', value: task.status },
                        { label: 'Assigned To', value: task.assignedTo?.fullName ?? 'Not Assigned' },
                        { label: 'Created', value: task.createdAt.getDate() + '/' + task.createdAt.getMonth() + '/' + task.createdAt.getFullYear() },
                      ]}
                      footer={true}
                    />
                  ))
                }
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
