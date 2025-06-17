const cache = new Map();

const getFromCache = (key) => cache.get(key);
const saveToCache = (key, value) => cache.set(key, value);

export { getFromCache, saveToCache };
