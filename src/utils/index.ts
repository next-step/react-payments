export function getOnlyNumber(value: string) {
  return value.replace(/\D/, '');
}

export function getFormattedMonth(value: string) {
  const DEFAULT_VALUE_01 = '01';
  const DEFAULT_VALUE_12 = '12';

  if (value.length !== 2) {
    return value;
  }

  const month = parseInt(value, 10);
  if (isNaN(month)) {
    return DEFAULT_VALUE_01;
  }

  if (month < 1) {
    return DEFAULT_VALUE_01;
  }
  if (12 < month) {
    return DEFAULT_VALUE_12;
  }

  return value;
}
