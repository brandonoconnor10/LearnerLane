import { Link } from 'react-router-dom';

const StyledButton = ({ children, to, asLink = false, variant = 'small', className = '', ...rest }) => {
  const baseClasses = `bg-gray-dark text-white font-rajdhani rounded-lg border-2 border-cyan
    hover:bg-cyan-light hover:border-cyan-light
    active:bg-cyan-dark active:border-cyan-dark active:scale-95
    transition transform duration-150 ease-in-out cursor-pointer text-center
    ${
      variant === 'large'
        ? 'text-lg md:text-xl py-4 md:py-5 px-8 md:px-10'
        : 'text-lg md:text-xl py-3 md:py-4 px-6 md:px-8'
    } ${className}`;

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
