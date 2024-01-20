'use client';
import Button from './Button';

const EditTaskButton = ({ taskId }: { taskId: string }) => {
  const onEditTaskClick = () => {};
  return (
    <>
      <Button
        text={'Edit task'}
        color="primary"
        onClick={() => console.log('Edit task button clicked')}
      />
    </>
  );
};

export default EditTaskButton;
