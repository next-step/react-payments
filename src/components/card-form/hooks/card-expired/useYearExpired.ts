import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

export default function useYearExpired({
  changeExpired,
  validate,
  focusNext,
}: {
  changeExpired: () => void;
  validate: (condition: boolean) => void;
  focusNext: () => void;
}) {
  const $expirationYear = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $target = $expirationYear.current;
    if (!$target) {
      return;
    }

    const currentYear = new Date().getFullYear() - 2000;

    const handleInput = () => {
      $target.value = leaveOnlyNumber($target.value);
      const valid =
        $target.value.length === 2 && Number($target.value) >= currentYear;
      validate(valid);
      changeExpired();
      if (valid) {
        focusNext();
      }
    };

    $target.addEventListener("input", handleInput);

    return () => $target.removeEventListener("input", handleInput);
  }, [changeExpired, focusNext, validate]);

  return $expirationYear;
}
