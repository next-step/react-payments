import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

export default function useMonthExpired(
  validate: (condition: boolean) => void
) {
  const $expirationMonth = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $target = $expirationMonth.current;
    if (!$target) {
      return;
    }

    const handleInput = () => {
      $target.value = leaveOnlyNumber($target.value);
      validate($target.value.length === 2 && Number($target.value) <= 12);
    };

    $target.addEventListener("input", handleInput);

    return () => $target.removeEventListener("input", handleInput);
  }, [validate]);

  return $expirationMonth;
}
