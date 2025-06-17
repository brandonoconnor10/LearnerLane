import axios from 'axios';
import { getFromCache, saveToCache } from './cache';

const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

const fetchData = async (
  filterField1 = '',
  filterValue1 = '',
  filterField2 = '',
  filterValue2 = '',
  maxRecords = 10, 
  fields = []
) => {
  try {
    if (!API_KEY || !BASE_ID) {
      throw new Error('Airtable API key or Base ID is missing in .env');
    }

    const cacheKey = JSON.stringify({ filterField1, filterValue1, filterField2, filterValue2, maxRecords, fields });
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData; 
    }

    let url = `https://api.airtable.com/v0/${BASE_ID}/K53_Content`;
    let params = { maxRecords };

    if (filterField1 && filterValue1) {
      params.filterByFormula = filterField2 && filterValue2
        ? `AND({${filterField1}}=${filterValue1}, {${filterField2}}=${filterValue2})`
        : `{${filterField1}}=${filterValue1}`;
    }

    if (fields.length > 0) {
      params.fields = fields;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      params,
    });

    const records = response.data.records || [];
    saveToCache(cacheKey, records); 
    return records;
  } catch (error) {
    console.error('Airtable fetch error:', error.message, error.response?.data);
    return [];
  }
};

export { fetchData };
