export function localStorageGetItem(key: string, defaultValue = '') {
  return localStorage.getItem(key) || defaultValue;
}
