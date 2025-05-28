const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;


export const fetchData = async (filterField = '', filterValue = '',maxRecords = 100) => {
    
    try {
        if(!API_KEY || !BASE_ID){
            throw new Error('Airtable API key or Base ID is missing in .env')
        }

        let url = `https://api.airtable.com/v0/${BASE_ID}/K53_Content?maxRecords=${maxRecords}`

        if(filterField && filterValue){
            url += `&filterByFormula={${filterField}}='${filterValue}'`;
        }

        const response = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            })
        if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        return data.records || [];
        } 
    catch(error){
        console.log('Error fetching data:', error)
        return []    
    }

}
