import { Task, User } from '@prisma/client';
import Link from 'next/link';
import { Routes } from '../../consts';
import { format } from 'date-fns';

type Props = {
  task: Task & { creator: User };
};
const TaskCard: React.FC<Props> = ({ task }) => {
  if (!task) {
    return null;
  }

  return (
    <div className="text-xs grid grid-rows-2 grid-cols-2 transition-all duration-500 bg-white border border-indigo-600 rounded-lg shadow hover:shadow-xl p-4 text-center">
      <h5 className="row-start-1 row-end-2 col-span-2 mb-1 font-bold text-lg xl:text-xl truncate">
        {task.title}
      </h5>
      <div className="row-start-2 row-end-2 col-start-1 col-span-2 flex flex-col gap-y-1 mb-1">
        <p className=" text-gray-400">
          {format(task.createdAt, 'HH:mm dd/MM/yyy')}
        </p>
        <p className="text-gray-400">Reporter: {task.creator.fullName}</p>
      </div>
      <Link
        href={`${Routes.DASHBOARD}/${task.id}`}
        className="row-start-2 row-end-2 col-start-2 col-end-2 hidden xl:flex justify-self-end self-end h-fit w-fit text-indigo-600 font-bold text-xs border border-indigo-600 rounded-full py-0.5 px-1 cursor-pointer"
      >
        <span className="flex items-center jusity-center">{'→'}</span>
      </Link>
    </div>
  );
};

export default TaskCard;
