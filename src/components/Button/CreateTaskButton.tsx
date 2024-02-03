'use client';
import CreateTaskModal from '../Modal/CreateTaskModal';
import Button from './Button';
import { useState } from 'react';

const CreateTaskButton = ({ className = '' }: { className?: string }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        className={className}
        text={'Create task'}
        onClick={() => setShowModal(true)}
      />

      <CreateTaskModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
export default CreateTaskButton;
