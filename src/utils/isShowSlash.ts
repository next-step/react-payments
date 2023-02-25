export const isShowSlash = (value: string, number: number) => {
  if (value && value.length === number) return true;
  return false;
};
