'use client';
import React from 'react';
import EditTaskButton from '../Button/EditTaskButton';
import DeleteTaskButton from '../Button/DeleteTaskButton';


type CardFooterProps = {
  footer: boolean;
};

const CardFooter = ({ footer }: CardFooterProps) => {
  return (
    <div className="flex flex-row justify-between px-4 py-4 sm:px-6">
      <EditTaskButton />
      <DeleteTaskButton />
    </div>
  );
};


export default CardFooter;
