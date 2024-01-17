import React from 'react';
import EditTaskButton from '../Button/EditTaskButton';
import DeleteTaskButton from '../Button/DeleteTaskButton';


const CardFooter: React.FC = () => {
  return (
    <div className='flex flex-row justify-between px-4 py-4 sm:px-6'> 
      <EditTaskButton />
      <DeleteTaskButton/>
    </div>
  );
};

export default CardFooter;
