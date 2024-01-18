import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

type CardProps = {
  title: string;
  description: string;
  content: { label: string; value: string }[];
  footer?: boolean;
};

const Card = ( 
{
  title,
  description,
  content,
  footer,
  ...props

} : CardProps ) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <CardHeader title={title} description={description} />
      <CardContent contentItems={content} />
      {footer && <CardFooter footer={footer} />}
    </div>
  );
}

export default Card;
