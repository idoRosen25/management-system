'use client';
import EditTaskModal from '../Modal/EditTaskModal';
import Button from './Button';
import { useState } from 'react';

const EditTaskButton = ({ taskId }: { taskId: string }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        text={'Edit task'}
        color="primary"
        onClick={() => setShowModal(true)}
      />

      <EditTaskModal
        show={showModal}
        onClose={() => setShowModal(false)}
        taskID={taskId}
      />
    </>
  );
};

export default EditTaskButton;
