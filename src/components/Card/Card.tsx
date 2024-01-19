import React from 'react';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

type CardProps = {
  header: boolean;
  headerContent?: () => JSX.Element;
  main: () => JSX.Element;
  footer: boolean;
  footerContent?: () => JSX.Element;
};

const Card = ( 
{
  header,
  headerContent,
  main,
  footer,
  footerContent,

} : CardProps ) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      {header ? <CardHeader>{headerContent && headerContent()}</CardHeader> : null}
      <CardContent>{main()}</CardContent>
      {footer ? <CardFooter>{footerContent && footerContent()}</CardFooter> : null}
    </div>
  );
}

export default Card;
