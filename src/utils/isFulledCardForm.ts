import {
  CARD_NUMBER_LIMIT,
  CARD_PASSWORD_LIMIT,
  EXPIRATION_DATE_LIMIT,
  SECURITY_CODE_LIMIT,
} from '../constants/cardLimit';

import { CardFulledType } from '../types/CardFormType';

const isFilled = (value: string, limit: number) => value.length === limit;

const isObjectFilled = (object: Record<string, string>, limit: number) =>
  Object.values(object).every((value) => isFilled(value, limit));

export default function isFulledCardForm({
  cardNumber,
  cardPassword,
  securityCode,
  expirationDate,
}: CardFulledType) {
  return (
    isObjectFilled(cardNumber, CARD_NUMBER_LIMIT) &&
    isObjectFilled(cardPassword, CARD_PASSWORD_LIMIT) &&
    isObjectFilled(expirationDate, EXPIRATION_DATE_LIMIT) &&
    isFilled(securityCode, SECURITY_CODE_LIMIT)
  );
}
