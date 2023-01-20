import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

export default function useMonthExpired({
  changeExpired,
  validate,
  nextFocus,
}: {
  changeExpired: () => void;
  validate: (condition: boolean) => void;
  nextFocus: () => void;
}) {
  const $expirationMonth = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $target = $expirationMonth.current;
    if (!$target) {
      return;
    }

    const handleInput = () => {
      $target.value = leaveOnlyNumber($target.value);
      const valid = $target.value.length === 2 && Number($target.value) <= 12;
      validate(valid);
      changeExpired();
      if (valid) {
        nextFocus();
      }
    };

    $target.addEventListener("input", handleInput);

    return () => $target.removeEventListener("input", handleInput);
  }, [changeExpired, validate]);

  return $expirationMonth;
}
