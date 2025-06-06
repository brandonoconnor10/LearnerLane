import React from 'react'

const VerticalLineContainer = ({ children }) => {
  return (
    <div className='flex flex-col items-center relative w-full max-w-md'>
        <div className="absolute w-1 bg-cyan top-[-10px] left-1/2 transform -translate-x-1/2 z-0"></div>
        {children}
    </div>
  )
}

export default VerticalLineContainer