import Link from 'next/link';
import { Routes } from '../../consts';

const EditTaskButton = ({ taskId }: { taskId: string }) => {
  return <Link href={`${Routes.DASHBOARD}/${taskId}`}>Edit Task</Link>;
};

export default EditTaskButton;
