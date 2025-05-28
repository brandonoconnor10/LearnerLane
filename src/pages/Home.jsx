import React, { useEffect, useState } from 'react';
import { fetchData } from '../data/fetchData';

const Home = () => {
  const [introContent, setIntroContent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData('Section', 'Introduction', 'Subsection', 'K53 Explained')
      .then(data => {
        if (data.length > 0) {
          setIntroContent(data[0].fields);
        } else {
          console.log('No matching data found: ', data);
        }
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        setError('Failed to load content. Please try again later.');
      });
  }, []);

  return (
    <>
      <div>Welcome to Learner Lane</div>
      {error ? (
        <p>{error}</p>
      ) : introContent ? (
        <div>
          <h2>{introContent.Subsection}</h2>
          <p>{introContent.Content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Home;