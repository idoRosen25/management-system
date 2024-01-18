import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

type CardProps = {
  title: string;
  description: string;
  content: { label: string; value: string }[];
  footer?: boolean;
  footerContent?: () => JSX.Element;
};

const Card = ( 
{
  title,
  description,
  content,
  footer,
  footerContent,
  ...props // only for now. not used.

} : CardProps ) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <CardHeader title={title} description={description} />
      <CardContent contentItems={content} />
      {footer ? <CardFooter /> : footerContent && footerContent()}
    </div>
  );
}

export default Card;
