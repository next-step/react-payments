export const isNumber = (value: any): boolean => {
  return /^[0-9]/gi.test(String(value));
};
