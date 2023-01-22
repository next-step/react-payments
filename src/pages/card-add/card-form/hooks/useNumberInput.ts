import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { leaveOnlyNumber } from "../../../../utils";

interface IProps {
  valueLength: number;
  isValid: (value: string) => boolean;
}

export default function useNumberInput({ valueLength, isValid }: IProps) {
  const $ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const invalid = useMemo(() => !isValid(value), [isValid, value]);

  useEffect(() => {
    if (!$ref.current) {
      return;
    }
    $ref.current.minLength = valueLength;
    $ref.current.maxLength = valueLength;
  }, [valueLength]);

  const handleInput = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      target.value = leaveOnlyNumber(target.value);
      setValue(target.value);
    },
    []
  );

  return [$ref, { invalid, handleInput }] as const;
}
