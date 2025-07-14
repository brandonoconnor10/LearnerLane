import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Footer from './Footer';

/**
 * PageLayout is a reusable layout wrapper component that:
 * - Provides a full-height page structure
 * - Adds a responsive height fix using CSS custom property (--vh)
 * - Includes a title header (clickable to go home), dynamic subtitle, main content, and footer
 * 
 * @param {string} subtitle - Optional subtitle content (React node)
 * @param {React.ReactNode} children - The main page content
 * @param {string} contentClassName - Optional Tailwind classes to customize layout behavior
 */

const PageLayout = ({ subtitle, children, contentClassName = 'items-center justify-center' }) => {
  // useEffect hook to set --vh custom property for consistent mobile viewport height
  useEffect(() => {
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();// Initial call

    // Recalculate on window resize
    window.addEventListener('resize', setVh);
    // Cleanup on unmount
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
