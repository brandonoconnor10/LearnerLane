import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

/**
 * useK53Data is a reusable custom hook for fetching K53 learning content
 * from Airtable, filtered by `Section` and `Subsection`.
 * 
 * It handles:
 * - Async data fetching
 * - Loading and error states
 * - Unmounted component safety
 * - Fallback for different Airtable field name cases (Content/content)
 * 
 * @param {string} section - Main category (e.g., 'Rules of The Road')
 * @param {string} subsection - Specific subsection or topic name
 * @returns {{ content: string, loading: boolean, error: string|null }}
 */

const useK53Data = (section, subsection) => {
  // Local state: content (string), loading (boolean), error (string|null)
  const [data, setData] = useState({ content: '', loading: true, error: null });

  useEffect(() => {
    let isMounted = true;// Prevent state updates if component unmounts

    const loadData = async () => {
      try {
        // Fetch from Airtable with two filters: Section + Subsection
        const result = await fetchData('Section', `"${section}"`, 'Subsection', `"${subsection}"`, 100);
        // If component is still mounted and results exist, update state
        if (isMounted && result.length > 0) {
           // Support both 'Content' and 'content' field naming
          const content = result[0].fields?.Content || result[0].fields?.content || '';
          setData({ content, loading: false, error: null });
        } 
        // If no results found
        else if (isMounted) {
          setData({
            content: '',
            loading: false,
            error: `No data found for Section: ${section}, Subsection: ${subsection}`,
          });
        }
      } catch (err) {
         // Handle fetch errors
        if (isMounted) {
          console.error(`Failed to fetch data for ${section}/${subsection}:`, err.message);
          setData({ content: '', loading: false, error: 'Failed to load data' });
        }
      }
    };

    loadData();

    // Cleanup: avoid setting state if component unmounted
    return () => {
      isMounted = false;
    };
  }, [section, subsection]);// Re-run if either prop changes

  return data;
};

export { useK53Data };
