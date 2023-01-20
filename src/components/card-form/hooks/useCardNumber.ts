import { useEffect, useRef } from "react";

export default function useCardNumber(
  changeNumbers: () => void,
  focusNext?: () => void
) {
  const $cardNumber = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $cardNumberInput = $cardNumber.current;
    if (!$cardNumberInput) {
      return;
    }

    const handleInput = () => {
      $cardNumberInput.value = $cardNumberInput.value.replace(/[^0-9]*/g, "");
      changeNumbers();
      if ($cardNumberInput.value.length === 4) {
        focusNext?.();
      }
    };

    $cardNumberInput.addEventListener("input", handleInput);

    return () => $cardNumberInput.removeEventListener("input", handleInput);
  }, []);

  return $cardNumber;
}
