import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

export default function useYearExpired({
  changeExpired,
  validate,
}: {
  changeExpired: () => void;
  validate: (condition: boolean) => void;
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
      validate(
        $target.value.length === 2 && Number($target.value) >= currentYear
      );
      changeExpired();
    };

    $target.addEventListener("input", handleInput);

    return () => $target.removeEventListener("input", handleInput);
  }, [changeExpired, validate]);

  return $expirationYear;
}
