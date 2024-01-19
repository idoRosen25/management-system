import React from 'react';


const CardFooter = ({
  children,

} : { children: React.ReactNode }) => {
  return (
    <div className="px-4 py-4 sm:px-6">
      {children}
    </div>
  );
}

export default CardFooter;
