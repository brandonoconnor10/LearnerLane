
import React, { useEffect, useState } from 'react'
import { fetchData } from '../data/fetchData'

const Home = () => {
  const [introContent, setIntroContent] = useState(null)

  useEffect(() => {
    fetchData('Section', 'Introduction', 'Subsection', 'K53 Explained').then(data => {
      if(data.length > 0){
        setIntroContent( data[0].fields)
      }
    })
  }, [])

  return (
    
    <>
      <div>Welcome to Learner Lane</div>
      {introContent ? (
        <div>
          <h2>{introContent.Subsection}</h2>
          <p>{introContent.Content}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )}
    </>
  )
    
}

export default Home