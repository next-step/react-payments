import { useCallback, useEffect, useRef } from "react";
import {
  convertToCardNumbers,
  ICard,
  isCardNumbers,
  isSingleNumber,
  TSingleNumber,
} from "../../domain";

export default function useCardNumbers(
  changeCardState: (newCardState: Partial<ICard>) => void
) {
  const $cardNumber = useRef<HTMLInputElement>(null);

  const changeCardNumbers = useCallback(
    (numberStack: TSingleNumber[]) => {
      const numbers = convertToCardNumbers(numberStack).split("-");
      if (isCardNumbers(numbers)) {
        changeCardState({ numbers });
      }
    },
    [changeCardState]
  );

  useEffect(() => {
    if ($cardNumber.current === null) {
      return;
    }

    const $cardNumberInput: HTMLInputElement = $cardNumber.current;
    const numberStack: TSingleNumber[] = [];
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;
      const numberValue = Number(key);

      if (!key.includes("Arrow")) {
        event.preventDefault();
      }

      if (key === "Backspace") {
        numberStack.pop();
      }

      if (
        !isNaN(numberValue) &&
        isSingleNumber(numberValue) &&
        numberStack.length < 16
      ) {
        numberStack.push(numberValue);
      }

      $cardNumberInput.value = convertToCardNumbers(numberStack);
      changeCardNumbers(numberStack);
    };

    $cardNumberInput.addEventListener("keydown", handleKeyDown);

    return () => $cardNumberInput.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { $cardNumber };
}
