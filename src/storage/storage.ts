export const setItem = (key: string, value: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error('Fail to set Item in LocalStorage.');
  }
};

export const getItem = (key: string) => {
  const json = localStorage.getItem(key);
  if (!json) return null;
  return JSON.parse(json);
};
