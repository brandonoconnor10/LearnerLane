const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

export const fetchData = async (
  filterField1 = '',
  filterValue1 = '',
  filterField2 = '',
  filterValue2 = '',
  maxRecords = 100
) => {
  try {
    if (!API_KEY || !BASE_ID) {
      throw new Error('Airtable API key or Base ID is missing in .env');
    }

    let url = `https://api.airtable.com/v0/${BASE_ID}/K53_Content?maxRecords=${maxRecords}`;
    let formula = '';

    if (filterField1 && filterValue1) {
      formula += `FIND('${filterValue1}', {${filterField1}}) > 0`;
    }

    if (filterField2 && filterValue2) {
      formula += formula
        ? ` AND FIND('${filterValue2}', {${filterField2}}) > 0`
        : `FIND('${filterValue2}', {${filterField2}}) > 0`;
    }

    if (formula) {
      url += `&filterByFormula=${encodeURIComponent(`(${formula})`)}`;
    }

    console.log('Fetching URL:', url);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
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