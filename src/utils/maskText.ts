export const maskText = (text: string, maskChar: string = '*') => {
  return text.replace(/\d/g, maskChar);
};
