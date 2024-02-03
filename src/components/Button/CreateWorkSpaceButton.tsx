'use client';
import { useState } from 'react';
import Button from './Button';
import CreateWorkSpaceModal from '../Modal/CreateWorkSpaceModal';
import { User } from '@prisma/client';

const CreateWorkSpaceButton = ({
  className = '',
  user,
}: {
  className?: string;
  user: User;
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        className={className}
        text={'+'}
        onClick={() => setShowModal(true)}
        size="xs"
      />
      <CreateWorkSpaceModal
        show={showModal}
        onClose={() => setShowModal(false)}
        user={user}
      />
    </>
  );
};

export default CreateWorkSpaceButton;
