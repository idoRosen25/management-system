import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const DynamicModal = dynamic(() => import('../Modal/CreateTaskModal'), {
  ssr: false,
});

export const TaskModal = () => {
  const router = useRouter();
  return <DynamicModal show={true} onClose={() => router.back()} />;
};
