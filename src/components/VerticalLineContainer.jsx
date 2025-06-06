import React from 'react';

const VerticalLineContainer = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col items-center relative w-full ${className}`}>
      <div className="absolute w-1 bg-cyan top-[-10px] bottom-[-10px] left-1/2 transform -translate-x-1/2 z-0"></div>
      {children}
    </div>
  );
};

export default VerticalLineContainer;