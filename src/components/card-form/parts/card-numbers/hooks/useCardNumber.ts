import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { leaveOnlyNumber } from "../../../../../utils";
import { isCardNumber, TCardNumber } from "../../../../../domain";

const MAX_LENGTH = 4;

interface IProps {
  focusNext: () => void;
  onInput: () => void;
}

export default function useCardNumber({ focusNext, onInput }: IProps) {
  const $cardNumber = useRef<HTMLInputElement>(null);
  const [cardNumber, setCardNumber] = useState<TCardNumber>("");
  const invalid = useMemo(
    () => !isCardNumber(cardNumber) || cardNumber.length < MAX_LENGTH,
    [cardNumber]
  );

  const handleInput = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      target.value = leaveOnlyNumber(target.value);
      if (isCardNumber(target.value)) {
        setCardNumber(target.value);
      }
      onInput();
    },
    [onInput]
  );

  useEffect(() => {
    if (!invalid) {
      focusNext();
    }
  }, [focusNext, invalid]);

  useEffect(() => {
    if (!$cardNumber.current) {
      return;
    }
    $cardNumber.current.minLength = MAX_LENGTH;
    $cardNumber.current.maxLength = MAX_LENGTH;
  }, []);

  return {
    $cardNumber,
    handleInput,
    invalid,
  };
}
