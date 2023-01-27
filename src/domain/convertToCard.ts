import { ICard, ICardDTO } from "./types";
import { isBrand, isCardNumbers, isTwoDigitNumber } from "./typeGuard";

function createCardId() {
  return Math.random().toString(36).substring(2);
}

export default function convertToCard(cardState: ICardDTO): ICard | undefined {
  const { numbers, expiredMonth, expiredYear, owner, brand } = cardState;

  if (
    !isCardNumbers(numbers) ||
    !isTwoDigitNumber(expiredMonth) ||
    !isTwoDigitNumber(expiredYear) ||
    !isBrand(brand) ||
    !owner
  ) {
    return;
  }

  return {
    id: createCardId(),
    numbers,
    expiredMonth,
    expiredYear,
    owner,
    brand,
  };
}
