import { TCardNumbers } from "./types";
import { isCardNumber } from "./typeGuard";

export default function convertToCardNumbers(
  cardNumbers: TCardNumbers | string[]
) {
  const numbers = cardNumbers.join("").split("").filter(isCardNumber);

  return [
    numbers.slice(0, 4).join(""),
    numbers.slice(4, 8).join(""),
    numbers
      .slice(8, 12)
      .map(() => "*")
      .join(""),
    numbers
      .slice(12, 16)
      .map(() => "*")
      .join(""),
  ]
    .filter(Boolean)
    .join("-");
}
