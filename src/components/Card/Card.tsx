import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

type CardProps = {
  header: { title: string; description: string };
  content: { contentItems: { label: string; value: string }[] };
};

const Card: React.FC<CardProps> = ({ header, content }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <CardHeader {...header} />
      <CardContent {...content} />
      <CardFooter />
    </div>
  );
};

export default Card;
