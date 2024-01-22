import { Task } from '@prisma/client';
import { TaskModal } from '../../../../components/Tasks/TaskModal';
import useGetTaskById from '../../../../hooks/tasks/useGetTaskById';

type Props = {
  params: { id: string };
};
export default async function Page({ params }: Props) {
  const { id } = params;
  const task = await useGetTaskById(id);
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-10 flex justify-center items-center">
      <div className="border border-black rounded-lg m-auto w-max flex justify-center items-center">
        <TaskModal task={task as Task} />
      </div>
    </div>
  );
}
