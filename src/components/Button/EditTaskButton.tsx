import Link from 'next/link';
import { FE_URL, Routes } from '../../consts';

const EditTaskButton = ({ taskId }: { taskId: string }) => {
  return <Link href={`${FE_URL}${Routes.DASHBOARD}/${taskId}`}>Edit Task</Link>;
};

export default EditTaskButton;
