export const remainOnlyNumber = (value: any) => {
  return value.replace(/[^0-9]/g, "");
};

export const blockInput = (value: string): string => {
  return value.replace(value, "");
};
