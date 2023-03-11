import { CARD } from '@/constants/card';

export function isShowHyphen(prevCardNumber: string, nextCardNumber: string) {
  return prevCardNumber.length === CARD.NUMBER.LENGTH && nextCardNumber.length > 0;
}

export function maskingNumber(cardNumber: string) {
  return ''.padStart(cardNumber.length, '*');
}
