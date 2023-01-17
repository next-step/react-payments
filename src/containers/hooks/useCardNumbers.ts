import { useEffect, useRef } from "react";
import {
  convertToCardNumbers,
  isSingleNumber,
  TSingleNumber,
} from "../../domain";

export default function useCardNumbers() {
  const $cardNumber = useRef<HTMLInputElement>(null);

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
    };

    $cardNumberInput.addEventListener("keydown", handleKeyDown);

    return () => $cardNumberInput.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { $cardNumber };
}
