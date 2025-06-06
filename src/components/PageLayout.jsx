import React from 'react'
import Title from '../components/Title'
import Footer from '../components/Footer'

const PageLayout = ({ subtitle, children }) => {
  return (
    <div className='min-h-screen bg-navy-dark text-white flex flex-col items-center justify-start p-4'>
        <div className="w-full text center">
            <Title/>
            {subtitle && subtitle}
        </div>
        <div className="flex-1 flex items-center justify-center w-full">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default PageLayout