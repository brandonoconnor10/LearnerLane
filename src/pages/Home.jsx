import React, { useEffect, useState } from 'react'
import { fetchData } from '../data/fetchData'

const Home = () => {
  const [introContent, setIntroContent] = useState(null)

  useEffect(() => {
    fetchData('Section', 'Introduction', 'Subsection', 'K53 Explained').then(data => {
      if(data.length > 0){
        setIntroContent( data[0].fields)
      } else {
        console.log('No matching data found: ', data)
      }
    })
  }, [])

  return (
    <>
      <div>Welcome to Learner Lane</div>
      {introContent ? (
        <div>
          <h2>{introContent.subsection}</h2>
          <p>{introContent.content}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )}
    </>
  )
    
}

export default Home