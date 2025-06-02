import axios from 'axios'

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

export const fetchData = async (filterField1 = '', filterValue1 = '', filterField2 = '', filterValue2 = '', maxRecords = 100) => {
    
    try {
        if(!API_KEY || !BASE_ID){
            throw new Error('Airtable API key or Base ID is missing in .env')
        }

        let url = `https://api.airtable.com/v0/${BASE_ID}/K53_Content`;
        let params = { maxRecords }

        if(filterField1 && filterValue1){
          let formula = `{${filterField1}}='${filterValue1}'`;
          if(filterField2 && filterValue2){
            formula = `AND({${filterField1}}='${filterValue1}', {${filterField2}}='${filterValue2}')`;
          }
          params.filterByFormula = formula;
          console.log('Generated formula: ', formula)
        }

        console.log('Fetching URL: ', url)
        console.log('Fetching params: ', params)

        const response = await axios(url, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
                params,
            })

        console.log('Full Response: ', response.data)
        console.log('Fetched Data: ', response.data.records)    
        
        return response.data.records || [];
        } 
    catch(error){
        console.log('Error fetching Airtable data:', error.message, error.response?.data)
        return []    
    }

};