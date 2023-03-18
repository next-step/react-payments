export function isNil(any: any): any is undefined | null {
  return typeof any === 'undefined' || any === null;
}

export function padNumber(amountOfNumber: number, numberInput?: number | string) {
  if (isNil(numberInput)) return null;

  return String(numberInput).padStart(amountOfNumber, '0');
}

export function filterNumber(inputString: string) {
  return inputString.replace(/\D/g, '');
}

export function checkIsArrayLast(array: any[], index: number) {
  return index >= array.length - 1;
}

export function changeStringNumberToNumber(string: string) {
  const number = Number(string);
  if (Number.isNaN(number)) return null;
  return number;
}
