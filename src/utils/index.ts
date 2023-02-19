export const isNumber = (input: string) => {
  if (input && !/^[0-9]+$/.test(input)) {
    return false;
  }
  return true;
};
