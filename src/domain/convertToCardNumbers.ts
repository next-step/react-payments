import { TCardNumbers, TSingleNumber } from "./types";
import { isCardNumbers } from "./typeGuard";

export default function convertToCardNumbers(
  numbers: TCardNumbers | TSingleNumber[]
) {
  const numberStack = !isCardNumbers(numbers)
    ? numbers
    : numbers.join("").split("");

  return [
    numberStack.slice(0, 4).join(""),
    numberStack.slice(4, 8).join(""),
    numberStack
      .slice(8, 12)
      .map(() => "*")
      .join(""),
    numberStack
      .slice(12, 16)
      .map(() => "*")
      .join(""),
  ]
    .filter(Boolean)
    .join("-");
}
