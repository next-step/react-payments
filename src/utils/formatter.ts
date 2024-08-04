export const formatMonth = (value: string) => {
  if (value.length === 1) {
    return value.padStart(2, '0');
  }

  return value;
};
