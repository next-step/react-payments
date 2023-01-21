import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

const MAX_LENGTH = 4;

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
      $cardNumberInput.value = leaveOnlyNumber($cardNumberInput.value);
      changeNumbers();
      if ($cardNumberInput.value.length === MAX_LENGTH) {
        focusNext?.();
      }
    };

    $cardNumberInput.minLength = MAX_LENGTH;
    $cardNumberInput.maxLength = MAX_LENGTH;
    $cardNumberInput.pattern = "[0-9]{4}";
    $cardNumberInput.addEventListener("input", handleInput);

    return () => $cardNumberInput.removeEventListener("input", handleInput);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return $cardNumber;
}
