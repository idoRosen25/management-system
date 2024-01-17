import React from 'react';
import TaskHeader from './TaskHeader';
import TaskContent from './TaskContent';

type CardProps = {
  title: string;
  description: string;
  status: string;
  creator: string;
  assignee: string;
  createdAt: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  status,
  creator,
  assignee,
  createdAt,
}) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <TaskHeader title={title} description={description} />
      <TaskContent status={status} creator={creator} assignee={assignee} createdAt={createdAt} />
    </div>
  );
};

export default Card;
