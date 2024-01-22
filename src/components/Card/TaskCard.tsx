import { Task } from '@prisma/client';
import Link from 'next/link';
import { Routes } from '../../consts';

type Props = {
  task: Task;
};
const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <>
      <section className="flex flex-col justify-center antialiased text-gray-600 p-4">
        <div className="">
          {/* <!-- Card --> */}
          <div className="max-w-2xl mx-auto bg-indigo-600 shadow-lg rounded-lg">
            <div className="px-6 py-5">
              <div className="flex items-start">
                {/* <!-- Card content --> */}
                <div className="flex-grow truncate">
                  {/* <!-- Card header --> */}
                  <div className="w-full sm:flex justify-between items-center">
                    {/* <!-- Title --> */}
                    <h2 className="text-lg leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                      {task.title}
                    </h2>
                    <Link
                      className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                      href={`http://localhost:3000/task/${task.id}`}
                    >
                      <span className="block font-bold">
                        <span className="sr-only">Read more</span>
                        {'- >'}
                      </span>
                    </Link>
                  </div>
                  {/* <!-- Card body --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskCard;
