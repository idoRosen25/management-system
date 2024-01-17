import React from 'react';
import TaskHeader from './TaskHeader';
import TaskContent from './TaskContent';

type CardProps = {
  title: string;
  description: string;
  contentItems: { label: string; value: string }[];
};

const Card: React.FC<CardProps> = ({ title, description, contentItems }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <TaskHeader title={title} description={description} />
      <TaskContent contentItems={contentItems} />
    </div>
  );
};

export default Card;
