import { Dispatch, SetStateAction, useCallback, useState } from "react";
import BasicInput from "../../../components/input/BasicInput";
import useCardNumberInput from "../hooks/useCardNumberInput";

const CARN_NUMBER_LENGTH = 16;

interface CardNumberProps {
  cardNumber: string;
  setCardNumber: Dispatch<SetStateAction<string>>;
}

export default function CardNumberInput({
  cardNumber,
  setCardNumber,
}: CardNumberProps) {
  const { toMaskedCardNumber } = useCardNumberInput();

  const [displayedCardNumber, setDisplayedCardNumber] = useState<string>(
    toMaskedCardNumber(cardNumber)
  );

  const handleChange = useCallback(() => {
    const maskedCardNumber = toMaskedCardNumber(cardNumber);
    setDisplayedCardNumber(maskedCardNumber);
  }, [cardNumber, toMaskedCardNumber]);

  const handleKeydown = useCallback(
    (value: string) => {
      if (cardNumber.length === CARN_NUMBER_LENGTH) return;
      if (value === "Backspace") {
        setCardNumber((prev) => prev.slice(0, cardNumber.length - 1));
        return;
      }
      if (isNaN(Number(value))) return;
      setCardNumber((prev) => prev + value);
    },
    [cardNumber.length, setCardNumber]
  );

  return (
    <BasicInput
      label="카드 번호"
      value={displayedCardNumber}
      onChange={handleChange}
      onKeydown={handleKeydown}
    />
  );
}
