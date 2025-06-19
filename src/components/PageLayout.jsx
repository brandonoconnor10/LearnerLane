import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Footer from './Footer';

const PageLayout = ({ subtitle, children, contentClassName = 'items-center justify-center' }) => {
  useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <div
      className="bg-navy-dark text-white flex flex-col items-center justify-start p-4"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <div className="w-full text-center">
        <Link to="/">
          <Title />
        </Link>
        {subtitle && subtitle}
      </div>

      <div className={`flex-grow flex flex-col w-full ${contentClassName}`}>
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;
