import {
  TCardNumber,
  TCardNumbers,
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
  return !isNaN(numberValue) && 0 < numberValue && numberValue <= 99;
}

export function isCardNumber(cardNumber: unknown): cardNumber is TCardNumber {
  return Boolean(
    typeof cardNumber === "string" &&
      cardNumber.length <= 4 &&
      Array.from(cardNumber)
        .map(Number)
        .filter((singleNumber) => !isNaN(singleNumber))
        .filter(isSingleNumber)
  );
}

export function isCardNumbers(
  cardNumbers: unknown[]
): cardNumbers is TCardNumbers {
  return Boolean(cardNumbers.filter(isCardNumber));
}
