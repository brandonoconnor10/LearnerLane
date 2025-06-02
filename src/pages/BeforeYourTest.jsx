import React, { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

const BeforeYourTest = () => {
  const [introContent, setIntroContent] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchData('Section', 'Introduction', 'Subsection', 'Before Your Test')
    .then(data => {
      console.log('Data received in Home: ' , data)
      if(data.length > 0){
        setIntroContent( data[0].fields)
        console.log('Setting introContent: ', data[0].fields)
      } else {
        setError('No matching data found.')
        console.log('No matching data found: ', data)
      }
    })
    .catch(err => {
      setError(`Failed to fetch data: ${err.message}`)
      console.log('Error caught: ', err.message)
    })
  }, [])

  return (
    
      <div key = {error || introContent ? 'loaded' : 'loading'} 
      className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4'>

        {/* Header */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-2'>Learner Lane</h1>
          <h2 className='text-2xl font-semibold text-grey-400'>Before Your Test</h2>
        </div>

        {/* Content or Error/Loading */}
        {error && <p className='text-red-400 mt-4'> {error}</p>}
        {introContent && (
        <div className='mt-6 w-full max-w-md'>
          <div className='bg-gray-800 p-4 border-2 border-cyan-500 rounded-lg text-center'>
            <p className='text-gray-300'>{introContent.Content}</p>
          </div>
          <div className='mt-4 flex justify-center'>
            <button className='bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded'>Take Quiz</button>
          </div>
        </div>
        )}
        {!error && !introContent && <p className='mt-4'>Loading...</p>}
        <footer className='mt-8 text-sm text-gray-500'>© 2025 Learner Lane. All right reserved.</footer>
    </div>
  );
}

export default BeforeYourTest;