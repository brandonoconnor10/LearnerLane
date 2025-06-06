import React from 'react'
import { Link } from 'react-router-dom'

const StyledButton = ({ children, to, asLink=false, ...props }) => {
    const baseClasses = 'bg-gray-dark text-white font-rajdhani text-lg md: text-xl py-3 md:py-4 px-6 md:px-8 rounded-lg border-2 border-cyan hover:bg-cyan-light hover:border-cyan-light transition-colors duration-200 cursor-pointer text-center'
  return asLink ? (
    <Link to={to} className={baseClasses} {...props}>
        {children}
    </Link>
  ) : (
    <button className={baseClasses} {...props}>
        {children}
    </button>
  )
}

export default StyledButton