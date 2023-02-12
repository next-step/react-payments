import { isCardNumbers, isSecurityCode, isTwoDigitNumber } from "./typeGuard";
import { ICardDTO, TInvalidCode } from "./types";

const JANUARY = 1;
const DECEMBER = 12;

function getShortYear() {
  return new Date().getFullYear() - 2000;
}

export function isValidMonth(value: string) {
  return (
    isTwoDigitNumber(value) &&
    Number(value) >= JANUARY &&
    Number(value) <= DECEMBER
  );
}

export function isValidYear(value: string) {
  return isTwoDigitNumber(value) && Number(value) >= getShortYear();
}

export function isValidExpiryDateBy(year?: string, month?: string) {
  if (!year || !month) {
    return false;
  }

  const nowDate = new Date();
  const expiryDate = new Date(`20${year}-${month}`);

  return (
    expiryDate.getFullYear() >= nowDate.getFullYear() &&
    expiryDate.getMonth() >= nowDate.getMonth()
  );
}

export function getInvalidCodes(card: ICardDTO) {
  const invalidCodes: TInvalidCode[] = [];

  if (!card.numbers || !isCardNumbers(card.numbers)) {
    invalidCodes.push("InvalidCardNumbers");
  }

  if (!isValidExpiryDateBy(card.expiredYear, card.expiredMonth)) {
    invalidCodes.push("InvalidExpiryDate");
  }

  if (!card.owner) {
    invalidCodes.push("InvalidOwner");
  }

  if (!card.securityCode || !isSecurityCode(card.securityCode)) {
    invalidCodes.push("InvalidSecurityCode");
  }

  if (!card.password || !isTwoDigitNumber(card.password)) {
    invalidCodes.push("InvalidPassword");
  }

  return invalidCodes;
}
