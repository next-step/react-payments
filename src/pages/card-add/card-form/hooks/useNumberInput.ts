import { ChangeEvent, useCallback, useEffect, useMemo, useRef } from "react";
import { leaveOnlyNumber } from "../../../../utils";

interface IProps {
  valueLength: number;
  isValid: (value: string) => boolean;
}

export default function useNumberInput({ valueLength, isValid }: IProps) {
  const $ref = useRef<HTMLInputElement>(null);
  const invalid = useMemo(
    () => !isValid($ref.current?.value || ""),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isValid, $ref.current?.value]
  );

  const handleInput = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      target.value = leaveOnlyNumber(target.value);
    },
    []
  );

  useEffect(() => {
    const $target = $ref.current;
    if (!$target) {
      return;
    }
    $target.minLength = valueLength;
    $target.maxLength = valueLength;
  }, [handleInput, valueLength]);

  return [$ref, { invalid, handleInput }] as const;
}
