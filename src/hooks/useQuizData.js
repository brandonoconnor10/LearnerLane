import { useState, useEffect } from 'react';
import { fetchData } from '../data/fetchData';

/**
 * useQuizData is a reusable React hook that fetches quiz questions 
 * from the Airtable database, based on the provided Section and Subsection.
 * 
 * It handles:
 * - Data fetching
 * - Parsing multiple-choice options
 * - Loading and error state
 * - Cleanup to avoid memory leaks on unmounted components
 * 
 * @param {string} section - The quiz category (e.g., "Rules of The Road")
 * @param {string} subsection - The subtopic under the section
 * @returns {{ questions: Array, loading: boolean, error: string|null }}
 */

const useQuizData = (section, subsection) => {
   // Local state: questions list, loading flag, error message
  const [data, setData] = useState({ questions: [], loading: true, error: null });

  useEffect(() => {
    let isMounted = true;// Guard to prevent state updates if component is unmounted

    const loadData = async () => {
      try {
          // Fetch quiz records with specific fields from Airtable
        const result = await fetchData(
          'Section',
          `"${section}"`,
          'Subsection',
          `"${subsection}"`,
          100,
          ['Content', 'Options', 'Answer']// Limit to necessary quiz fields
        );
          // If data is received and component is still mounted
        if (isMounted && result.length > 0) {
          const questions = result.map(record => ({
            content: record.fields?.Content || '',
            // Split options string by periods and clean up whitespace
            options: record.fields?.Options?.split('.').map(opt => opt.trim()).filter(opt => opt) || [],
            answer: record.fields?.Answer || ''
          }));
          setData({ questions, loading: false, error: null });
        } 
        // Handle case where no data is returned
        else if (isMounted) {
          setData({ questions: [], loading: false, error: `No data found for Section: ${section}, Subsection: ${subsection}` });
        }
      } catch (err) {
        // Handle fetch errors gracefully
        if (isMounted) {
          console.error(`Failed to fetch quiz data for ${section}/${subsection}:`, err.message);
          setData({ questions: [], loading: false, error: 'Failed to load quiz data' });
        }
      }
    };

    loadData();
// Cleanup function to prevent state update if component unmounts
    return () => {
      isMounted = false;
    };
  }, [section, subsection]);// Re-run when either section or subsection changes

  return data;
};

export { useQuizData };
