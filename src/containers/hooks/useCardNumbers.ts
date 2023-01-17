import { useEffect, useRef } from "react";
import { isSingleNumber, TSingleNumber } from "../../domain";

function computeCardNumbers(numberStack: TSingleNumber[]) {
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

      $cardNumberInput.value = computeCardNumbers(numberStack);
    };

    $cardNumberInput.addEventListener("keydown", handleKeyDown);

    return () => $cardNumberInput.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { $cardNumber };
}
