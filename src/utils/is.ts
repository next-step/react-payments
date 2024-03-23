export const isMonth = (value: string) => {
  const month = parseInt(value, 10);
  return month > 0 && month < 13;
};

export const isYear = (value: string) => {
  const year = parseInt(value, 10);
  return year > 0 && year < 100;
};
