import DataCache from './DataCache';

export default (fn, compare) => {
  const cache = new DataCache(key => fn(...JSON.parse(key)), compare);
  const resolver = (...args) => cache.get(JSON.stringify(args));
  resolver.cache = cache;
  return resolver;
};
