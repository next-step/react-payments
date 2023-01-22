import {
  TCardNumber,
  TCardNumbers,
  TSecurityCode,
  TSingleNumber,
  TTwoDigitNumber,
} from "./types";

export function isSingleNumber(
  singleNumber: unknown
): singleNumber is TSingleNumber {
  const numberValue = Number(singleNumber);
  return !isNaN(numberValue) && 0 < numberValue && numberValue <= 9;
}
export function isTwoDigitNumber(
  twoDigitNumber: unknown
): twoDigitNumber is TTwoDigitNumber {
  const numberValue = Number(twoDigitNumber);
  return !isNaN(numberValue) && String(twoDigitNumber).length === 2;
}
export function isSecurityCode(
  isSecurityCode: unknown
): isSecurityCode is TSecurityCode {
  const numberValue = Number(isSecurityCode);
  return !isNaN(numberValue) && String(isSecurityCode).length === 3;
}

export function isCardNumber(cardNumber: unknown): cardNumber is TCardNumber {
  return Boolean(
    typeof cardNumber === "string" &&
      cardNumber.length === 4 &&
      Array.from(cardNumber)
        .map(Number)
        .filter((singleNumber) => !isNaN(singleNumber))
        .filter(isSingleNumber)
  );
}

export function isCardNumbers(
  cardNumbers?: unknown[]
): cardNumbers is TCardNumbers {
  return cardNumbers?.filter(isCardNumber).length === 4;
}
