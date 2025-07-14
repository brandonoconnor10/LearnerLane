import { Link } from 'react-router-dom';

/**
 * StyledButton is a reusable button component that adapts between:
 * - a clickable <button> (default)
 * - a React Router <Link> when `asLink` is true
 * 
 * It also supports styling variants (`small`, `large`) and custom classes.
 * 
 * @param {string} to - Target path if using as a link
 * @param {boolean} asLink - Whether to render as a <Link> instead of <button>
 * @param {string} variant - Size style ('small' or 'large')
 * @param {string} className - Additional Tailwind utility classes
 * @param {React.ReactNode} children - Button label or inner content
 * @param {object} rest - Any additional props (e.g., onClick, type)
 */

const StyledButton = ({ children, to, asLink = false, variant = 'small', className = '', ...rest }) => {
   // Base Tailwind styling shared across all buttons
  const baseClasses = `bg-gray-dark text-white font-rajdhani rounded-lg border-2 border-cyan
    hover:bg-cyan-light hover:border-cyan-light
    active:bg-cyan-dark active:border-cyan-dark active:scale-95
    transition transform duration-150 ease-in-out cursor-pointer text-center
    ${
      variant === 'large'
        ? 'text-lg md:text-xl py-4 md:py-5 px-8 md:px-10'
        : 'text-lg md:text-xl py-3 md:py-4 px-6 md:px-8'
    } ${className}`;
    
 // Render a <Link> or <button> based on asLink flag
  return asLink ? (
    <Link to={to} className={baseClasses} {...rest}>
      {children}
    </Link>
  ) : (
    <button className={baseClasses} {...rest}>
      {children}
    </button>
  );
};

export default StyledButton;
