export function getOnlyNumber(value: string) {
  return value.replace(/\D/, '');
}

export function getMonthRange(value: string) {
  if (value.length !== 2) {
    return value;
  }

  const month = parseInt(value);
  if (month < 1) {
    return '01';
  }
  if (12 < month) {
    return '12';
  }

  return value;
}
