import React from 'react';
import Title from './Title';
import Footer from './Footer';

const PageLayout = ({ subtitle, children, contentClassName = 'items-center justify-center' }) => {
  return (
    <div className="min-h-screen bg-navy-dark text-white flex flex-col items-center justify-start p-4">
      <div className="w-full text-center">
        <Title />
        {subtitle && subtitle}
      </div>
      <div className={`flex-1 flex flex-col w-full ${contentClassName}`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;