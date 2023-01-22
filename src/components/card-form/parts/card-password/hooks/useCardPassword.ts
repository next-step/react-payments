import { useEffect, useRef } from "react";
import { leaveOnlyNumber } from "../../../../../utils";

const MAX_LENGTH = 1;
export default function useCardPassword(focusNext?: () => void) {
  const $cardPassword = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const $input = $cardPassword.current;
    if (!$input) {
      return;
    }

    const handleInputPassword = () => {
      $input.value = leaveOnlyNumber($input.value);
      if ($input.value.length === MAX_LENGTH) {
        focusNext?.();
      }
    };

    $input.maxLength = MAX_LENGTH;
    $input.addEventListener("input", handleInputPassword);

    return () => $input.removeEventListener("input", handleInputPassword);
  }, [focusNext]);

  return $cardPassword;
}
