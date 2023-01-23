import { ICard, ICardDTO } from "./types";
import { isBrand, isCardNumbers, isTwoDigitNumber } from "./typeGuard";

function createCardId() {
  return Math.random().toString(36).substring(2);
}

export default function convertToCard(cardState: ICardDTO): ICard | undefined {
  const { numbers, expiredMonth, expiredYear, owner, nickname, brand } =
    cardState;

  if (
    !isCardNumbers(numbers) ||
    !isTwoDigitNumber(expiredMonth) ||
    !isTwoDigitNumber(expiredYear) ||
    !isBrand(brand) ||
    !owner ||
    !nickname
  ) {
    return;
  }

  return {
    id: createCardId(),
    numbers,
    expiredMonth,
    expiredYear,
    owner,
    nickname,
    brand,
  };
}
