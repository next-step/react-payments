import { CARD } from '@/constants/card';
import { getCurrentYear } from '@/utils';

export function isShowHyphen(prevCardNumber: string, nextCardNumber: string) {
  return prevCardNumber.length === CARD.NUMBER.LENGTH && nextCardNumber.length > 0;
}

export function maskingNumber(cardNumber: string) {
  return ''.padStart(cardNumber.length, '*');
}

export function isValidExpirationMonth(_month: string) {
  const 입력된자리수 = _month.length;

  const month = Number(_month);

  if (입력된자리수 === 0) {
    return true;
  }
  if (입력된자리수 === 1) {
    return month < 2;
  }

  return month > 0 && month < 13;
}

export function isValidExpirationYear(_year: string) {
  const currentYear = getCurrentYear('yy');
  const 십의자리년도 = String(currentYear).split('').map(Number)[0];

  const 입력된자리수 = _year.length;

  const year = Number(_year);

  if (입력된자리수 === 0) {
    return true;
  }
  if (입력된자리수 === 1) {
    return year >= 십의자리년도;
  }

  return year >= currentYear;
}
