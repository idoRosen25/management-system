import { getTasks } from "@/utils/tasks";

export default async function Dashbaord() {

  const tasks = await getTasks();
  console.log(tasks);

  return (
    <section>
      {/* Replace with your content */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* /End replace */}
        </div>
      </div>
      {/* /End replace */}
    </section>
  );
}
