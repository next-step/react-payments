import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

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
      if ($cardNumberInput.value.length === 4) {
        focusNext?.();
      }
    };

    $cardNumberInput.addEventListener("input", handleInput);

    return () => $cardNumberInput.removeEventListener("input", handleInput);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return $cardNumber;
}
