const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

export const fetchData = async (
  filterField1 = '',
  filterValue1 = '',
  filterField2 = '',
  filterValue2 = '',
  maxRecords = 100,
  fields = []
) => {
  try {
    if (!API_KEY || !BASE_ID) {
      throw new Error('Airtable API key or Base ID is missing in .env');
    }

    let formula = '';
    if (filterField1 && filterValue1) {
      formula += `FIND('${filterValue1}', {${filterField1}}) > 0`;
    }
    if (filterField2 && filterValue2) {
      formula += formula
        ? ` AND FIND('${filterValue2}', {${filterField2}}) > 0`
        : `FIND('${filterValue2}', {${filterField2}}) > 0`;
    }

    const requestBody = {
      maxRecords,
      fields,
    };

    if (formula) {
      requestBody.filterByFormula = formula;
    }

    console.log('Request Body:', requestBody);

    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/K53_Content/listRecords`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('Fetched data:', data);
    return data.records || [];
  } catch (error) {
    console.error('Error fetching Airtable data:', error);
    return [];
  }
};