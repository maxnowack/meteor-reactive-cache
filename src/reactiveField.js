import DataCache from './DataCache';

export default (fn, compare) => {
  const cache = new DataCache(key => fn(...JSON.parse(key)), compare);
  return (...args) => cache.get(JSON.stringify(args));
};
