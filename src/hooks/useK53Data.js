
import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

export const useK53Data = (section, subsection) => {
  const [data, setData] = useState({ content: '', loading: true, error: null });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const result = await fetchData('Section', `"${section}"`, 'Subsection', `"${subsection}"`, 100);
        console.log('Airtable Response:', result); 
        if (isMounted && result.length > 0) {
          console.log('First record:', result[0]);
          const content = result[0].fields?.Content || result[0].fields?.content || '';
 
          setData({ content, loading: false, error: null });
        } else if (isMounted) {
          setData({ content: '', loading: false, error: `No data found for Section: ${section}, Subsection: ${subsection}` });
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Failed to fetch data for ${section}/${subsection}:`, err.message);
          setData({ content: '', loading: false, error: 'Failed to load data' });
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [section, subsection]);

  return data;
};