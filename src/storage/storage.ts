import { StorageKey } from './storageKey';
export const setItem = (key: StorageKey, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error('Fail to set Item in LocalStorage.');
  }
};

export const getItem = (key: StorageKey) => {
  const json = localStorage.getItem(key);
  if (!json) return null;
  return JSON.parse(json);
};
