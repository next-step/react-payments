import { isSingleDigit, isThreeDigit, isTwoDigit } from './typeGuard';
import { ICardDTO } from './types';
import { VALIDATE_MESSAGE } from '../constants';

export function isCardNumber(cardNumbers: string): boolean {
  return cardNumbers.length === 16 && Array.from(cardNumbers).every((cardNumber) => isSingleDigit(cardNumber));
}

export function isInvalidMonth(month: string): boolean {
  return Number(month) < 1 || Number(month) > 12;
}

export function isPreviousDate(year: string, month: string): boolean {
  const nowFullYear = Math.floor(new Date().getFullYear() / 100);
  const date = new Date(`${nowFullYear}${year}/${month}`);
  const currentDate = new Date();

  return date.getTime() < currentDate.getTime();
}

export function isSecurityCode(securityCode: string | number): boolean {
  return isThreeDigit(String(securityCode));
}

export function isCardPassword(cardPassword: string | number): boolean {
  return isTwoDigit(String(cardPassword));
}

export function invalidCard(card: ICardDTO) {
  if (!card.cardNumber || !isCardNumber(card.cardNumber)) {
    return VALIDATE_MESSAGE.CARD_NUMBER;
  }

  if (!card.expiredDate) {
    return VALIDATE_MESSAGE.CARD_EXPIRED_DATE;
  }

  if (!card.cardSecurityCode || !isSecurityCode(card.cardSecurityCode)) {
    return VALIDATE_MESSAGE.CARD_SECURITY_CODE;
  }

  if (!card.cardPassword || !isCardPassword(card.cardPassword)) {
    return VALIDATE_MESSAGE.CARD_PASSWORD;
  }

  return null;
}
