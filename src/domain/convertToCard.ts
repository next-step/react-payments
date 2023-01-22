import { ICard, ICardDTO } from "./types";
import { isCardNumbers, isTwoDigitNumber } from "./typeGuard";

export default function convertToCard(cardState: ICardDTO): ICard | undefined {
  const { numbers, expiredMonth, expiredYear, owner, nickname } = cardState;

  if (
    !isCardNumbers(numbers) ||
    !isTwoDigitNumber(expiredMonth) ||
    !isTwoDigitNumber(expiredYear) ||
    !owner ||
    !nickname
  ) {
    return;
  }

  return {
    id: Math.random().toString(36).substring(2),
    numbers,
    expiredMonth,
    expiredYear,
    owner,
    nickname,
  };
}
