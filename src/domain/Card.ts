import { CARD_NUMBER } from '@/constants/Card';
import { isNumber } from '@/utils';

export function isValidCardNumber(value: string) {
  return isNumber(value);
}

export function isShowHyphen(prevCardNumber: string, nextCardNumber: string) {
  return prevCardNumber.length === CARD_NUMBER.MAX_LENGTH && nextCardNumber.length > 0;
}

export function maskingNumber(cardNumber: string) {
  return ''.padStart(cardNumber.length, '*');
}
