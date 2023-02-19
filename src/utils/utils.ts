export function isNil(any: any) {
  return typeof any === 'undefined' || any === null;
}

export function padNumber(amountOfNumber: number, number?: number) {
  if (isNil(number)) return null;

  if (typeof number !== 'number') {
    throw new Error('only number can use padNumber function');
  }

  const maxNumber = 10 ** (amountOfNumber - 1);
  let stringNumber = String(number);
  if (number < maxNumber) {
    stringNumber = stringNumber.padStart(amountOfNumber, '0');
  }

  return stringNumber;
}

export function filterNumber(inputString: string) {
  return Number(inputString.replace(/\D/g, ''));
}
