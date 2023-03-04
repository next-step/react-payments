export const extractNumbers = (value: string) => {
  return value.replace(/[^0-9]/g, '');
};

export const masking = (value: string | undefined) => {
  if (value === null || value === undefined) return;

  const mask = '*';
  const NumberRegex = /[0-9]/g;

  return value.replace(NumberRegex, mask);
};
