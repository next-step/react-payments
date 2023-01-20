import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

export default function useYearExpired(validate: (condition: boolean) => void) {
  const $expirationYear = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $target = $expirationYear.current;
    if (!$target) {
      return;
    }

    const currentYear = new Date().getFullYear() - 2000;

    const handleInput = () => {
      $target.value = leaveOnlyNumber($target.value);
      validate(
        $target.value.length === 2 && Number($target.value) >= currentYear
      );
    };

    $target.addEventListener("input", handleInput);

    return () => $target.removeEventListener("input", handleInput);
  }, [validate]);

  return $expirationYear;
}
