'use client';
import Button from './Button';

const CreateTaskButton = ({ className = '' }: { className?: string }) => {
  return (
    <Button
      className={className}
      text={'Create task'}
      onClick={() => alert('task form open')}
    />
  );
};
export default CreateTaskButton;
