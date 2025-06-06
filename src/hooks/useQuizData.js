import { useState, useEffect } from 'react';
   import { fetchData } from '../data/fetchData';

   export const useQuizData = (section, subsection) => {
     const [data, setData] = useState({ questions: [], loading: true, error: null });

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
             ['Content', 'Options', 'Answer']
           );
           if (isMounted && result.length > 0) {
             const questions = result.map(record => ({
               content: record.fields?.Content || '',
               options: record.fields?.Options?.split('.').map(opt => opt.trim()).filter(opt => opt) || [],
               answer: record.fields?.Answer || ''
             }));
             setData({ questions, loading: false, error: null });
           } else if (isMounted) {
             setData({ questions: [], loading: false, error: `No data found for Section: ${section}, Subsection: ${subsection}` });
           }
         } catch (err) {
           if (isMounted) {
             console.error(`Failed to fetch quiz data for ${section}/${subsection}:`, err.message);
             setData({ questions: [], loading: false, error: 'Failed to load quiz data' });
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