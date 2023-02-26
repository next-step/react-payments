export const isNumber = (value: string) => /^\d+$/.test(value);

export const pixelOf = (value: string | number) =>
  typeof value === 'number' ? `${value}px` : value;

const MIN_MONTH = 0;
const MAX_MONTH = 12;
const LEADING_DIGIT = ['0', '1'];
export const isOutOfRangeMonth = (month: string) => {
  if (month.length === 1) {
    return LEADING_DIGIT.every((value) => month !== value);
  }

  if (month.length === 2) {
    return +month <= MIN_MONTH || +month > MAX_MONTH;
  }
};
