import React, { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

const Home = () => {
  const [introContent, setIntroContent] = useState(null);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    fetchData('Section', 'Introduction', 'Subsection', 'K53 Explained')
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
    
      <div key = {error || introContent ? 'loaded' : 'loading'}>
        <h1>Welcome to Learner Lane</h1>
        {error && <p> {error}</p>}
        {introContent && (
          <div>
            <h2>{introContent.Subsection}</h2>
            <p>{introContent.Content}</p>
          </div>
        )}
        {!error && !introContent && <p>Loading...</p>}
    </div>
  );
}

export default Home;