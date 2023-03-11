import { REGEXP } from '../constants';

export function filterCardBackDigit(cardNumber: string): string {
  const changeValue = cardNumber?.match(REGEXP.CARD_NUMBER)?.flatMap((item, index) => {
    if (!item.length) return [];
    if (index > 1) return item.replace(REGEXP.NUMBER, '*');

    return item;
  }).join('-');
  return changeValue || '';
}

export function formatterExpiredDate(expiredDate: string) {
  return expiredDate?.match(REGEXP.EXPIRED_DATE)?.join(' / ');
}

export function formToArray(data: object): string[] {
  return Object.values(data).map((item) => item.value);
}
