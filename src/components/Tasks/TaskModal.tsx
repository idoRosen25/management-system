'use client';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Task } from '@prisma/client';

const DynamicModal = dynamic(() => import('../Modal/EditTaskModal'), {
  ssr: false,
});

type Props = {
  task: Task;
};
export const TaskModal: React.FC<Props> = ({ task }) => {
  const router = useRouter();
  return <DynamicModal show={true} onClose={() => router.back()} task={task} />;
};
