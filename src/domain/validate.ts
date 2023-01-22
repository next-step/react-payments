import { isTwoDigitNumber } from "./typeGuard";

const JANUARY = 1;
const DECEMBER = 12;
const TWO_DIGIT_NUMBER_LENGTH = 2;
function getShortYear() {
  return new Date().getFullYear() - 2000;
}

function isFullyTwoDigitNumber(value: string) {
  return isTwoDigitNumber(value) && value.length == TWO_DIGIT_NUMBER_LENGTH;
}

export function isValidMonth(value: string) {
  return (
    isFullyTwoDigitNumber(value) &&
    Number(value) >= JANUARY &&
    Number(value) <= DECEMBER
  );
}

export function isValidYear(value: string) {
  return isFullyTwoDigitNumber(value) && Number(value) >= getShortYear();
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
