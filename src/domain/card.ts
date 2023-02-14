import { CARD_NUMBER } from '@/constants/card';

export function isShowHyphen(prevCardNumber: string, nextCardNumber: string) {
  return prevCardNumber.length === CARD_NUMBER.MAX_LENGTH && nextCardNumber.length > 0;
}

export function maskingNumber(cardNumber: string) {
  return ''.padStart(cardNumber.length, '*');
}

export function isValidExpirationMonth(month: string) {
  const [month1, month2] = month;

  if (Number(month1) < 0 || Number(month1) > 1) return false;

  if (Number(month1) === 1 && month2 !== undefined && ![0, 1, 2].includes(Number(month2))) return false;

  return true;
}
