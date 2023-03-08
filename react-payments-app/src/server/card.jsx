// card info stored in localStorage
export const keys = Object.keys(localStorage);

const getValues = () => {
  const values = [];
  for (const key of keys) {
    values.push(JSON.parse(localStorage.getItem(key)));
  }

  return values;
};
export const values = getValues();
