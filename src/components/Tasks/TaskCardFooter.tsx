import DeleteTaskButton from '../Button/DeleteTaskButton';
import EditTaskButton from '../Button/EditTaskButton';

const TaskCardFooter = ({ id }: { id: string }) => {
  return (
    <div className="flex flex-row justify-between">
      <EditTaskButton taskId={id} />
      <DeleteTaskButton taskId={id} />
    </div>
  );
};

export default TaskCardFooter;
