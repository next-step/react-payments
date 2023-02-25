export const showSlash = (value: string, number: number) => {
  if (value && value.length === number) return '/';
  return false;
};

export const showDash = (value: string, number: number) => {
  if (value && value.length === number) return '-';
  return false;
};
