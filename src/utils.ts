export const isNumber = (value: string) => /^\d+$/.test(value);

export const pixelOf = (value: string | number) =>
  typeof value === 'number' ? `${value}px` : value;
