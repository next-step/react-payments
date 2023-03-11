import { TFourDigit, TSingleDigit, TThreeDigit, TTwoDigit } from './types';

export function isSingleDigit(digit: string): digit is TSingleDigit {
  return !isNaN(Number(digit)) && digit.length === 1;
}

export function isTwoDigit(digit: string): digit is TTwoDigit {
  return !isNaN(Number(digit)) && digit.length === 2;
}

export function isThreeDigit(digit: string): digit is TThreeDigit {
  return !isNaN(Number(digit)) && digit.length === 3;
}

export function isFourDigit(digit: string): digit is TFourDigit {
  return !isNaN(Number(digit)) && digit.length === 4;
}
