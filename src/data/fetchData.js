import axios from 'axios';
import { getFromCache, saveToCache } from './cache';

// Airtable API credentials (stored in .env)
const API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;

/**
 * fetchData - Retrieves records from the Airtable K53_Content table.
 * 
 * Supports:
 * - Up to 2 optional filters (field + value)
 * - Optional max record limit
 * - Optional selected fields
 * - Uses caching to avoid repeated API calls
 * 
 * @param {string} filterField1 - First field to filter by (optional)
 * @param {string} filterValue1 - Value for the first filter
 * @param {string} filterField2 - Second field to filter by (optional)
 * @param {string} filterValue2 - Value for the second filter
 * @param {number} maxRecords - Max number of records to return (default: 10)
 * @param {Array<string>} fields - Specific field names to return (optional)
 * @returns {Promise<Array>} - An array of Airtable record objects
 */

const fetchData = async (
  filterField1 = '',
  filterValue1 = '',
  filterField2 = '',
  filterValue2 = '',
  maxRecords = 10, 
  fields = []
) => {
  try {
    // Check for missing environment variables
    if (!API_KEY || !BASE_ID) {
      throw new Error('Airtable API key or Base ID is missing in .env');
    }
    // Create a cache key based on all params to prevent duplicate API calls
    const cacheKey = JSON.stringify({ filterField1, filterValue1, filterField2, filterValue2, maxRecords, fields });
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      return cachedData; 
    }
    // Construct base URL and params
    let url = `https://api.airtable.com/v0/${BASE_ID}/K53_Content`;
    let params = { maxRecords };
    // Build Airtable filterByFormula string (supports 1 or 2 filters)
    if (filterField1 && filterValue1) {
      params.filterByFormula = filterField2 && filterValue2
        ? `AND({${filterField1}}=${filterValue1}, {${filterField2}}=${filterValue2})`
        : `{${filterField1}}=${filterValue1}`;
    }
    // Request only specific fields if defined
    if (fields.length > 0) {
      params.fields = fields;
    }
    // Make request to Airtable API
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      params,
    });

    const records = response.data.records || [];
    
    // Save result in local cache
    saveToCache(cacheKey, records); 
    return records;
  } catch (error) {
    console.error('Airtable fetch error:', error.message, error.response?.data);
    return [];
  }
};

export { fetchData };
