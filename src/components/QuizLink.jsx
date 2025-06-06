import React from 'react'
import { Link } from 'react-router-dom'

const QuizLink = ({ section, index }) => {
    
    const isEven = index % 2 === 0;
    const linkPath = `/${section.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}/quiz`;
    
  return (
   <div className='relative flex items-center w-full justify-center mb-6 mt-2'>
    <div className={`absolute h-0.5 bg-cyan z-0 ${
        isEven ? 'left-{calc(50%) right-0' : 'left-0 right-[calc(50%)]'}
    }`}></div>
    <Link to={linkPath} className={`absolute text-cyan text-sm md:text-base font-inter ${
        isEven ? 'right-0 text-right' : 'left-0'
    }`}
    style={{ transform: isEven ? 'translateX(120%)' : 'translateX(-120%)'}}
    >
    Quiz
    </Link>
    
    </div>
  )
}

export default QuizLink