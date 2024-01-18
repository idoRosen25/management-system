import React from 'react';


const CardContent = ( 
{
  children,

} : { children: React.ReactNode } ) => {
  return (
    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
      {children}
    </div>
  );
}

export default CardContent;
