import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

export const useQuizData = (section, subsection) => {
  const [data, setData] = useState({ content: '', options: [], answer: '', loading: true, error: null });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const result = await fetchData(
          'Section',
          `"${section}"`,
          'Subsection',
          `"${subsection}"`,
          100,
          ['Content', 'Options', 'Answer'] // Explicitly request these fields
        );
        if (isMounted && result.length > 0) {
          const record = result[0];
          const content = record.fields?.Content || '';
          const options = record.fields?.Options?.split('|') || [];
          const answer = record.fields?.Answer || '';
          setData({ content, options, answer, loading: false, error: null });
        } else if (isMounted) {
          setData({ content: '', options: [], answer: '', loading: false, error: `No data found for Section: ${section}, Subsection: ${subsection}` });
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Failed to fetch quiz data for ${section}/${subsection}:`, err.message);
          setData({ content: '', options: [], answer: '', loading: false, error: 'Failed to load quiz data' });
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