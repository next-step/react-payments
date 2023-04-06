const NUMBER_REGULAR_EXPRESSION = /[^0-9]/g;

export function generatePad(num: number, size: number) {
  const length = size - String(num).length;
  return Array.from({ length }, () => '0').join('') + num;
}

export function leaveOnlyNumbers(str: string) {
  return str.replace(NUMBER_REGULAR_EXPRESSION, '');
}
