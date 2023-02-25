export const isNotNumber = (str: string) =>
  Number.isNaN(Number(str)) || str === ' ';

export const isMonth = (month: number) =>
  month > 100 || (month >= 0 && month < 13);
