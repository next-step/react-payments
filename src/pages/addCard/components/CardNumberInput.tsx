import { SetStateAction, useCallback, useState } from "react";
import BasicInput from "../../../components/input/BasicInput";
import { toMaskedCardNumber } from "../../../utils/stringUtils";

const CARN_NUMBER_LENGTH = 16;

interface CardNumberProps {
  cardNumber: string;
  setCardNumber: React.Dispatch<SetStateAction<string>>;
}

export default function CardNumberInput({
  cardNumber,
  setCardNumber,
}: CardNumberProps) {
  const [displayedCardNumber, setDisplayedCardNumber] = useState<string>(
    toMaskedCardNumber(cardNumber)
  );

  const handleChange = useCallback(() => {
    const maskedCardNumber = toMaskedCardNumber(cardNumber);
    setDisplayedCardNumber(maskedCardNumber);
  }, [cardNumber]);

  const handleKeydown = useCallback(
    (value: string) => {
      if (cardNumber.length === CARN_NUMBER_LENGTH) return;
      if (isNaN(Number(value))) return;
      if (value === "Backspace") {
        setCardNumber((prev) => prev.slice(0, cardNumber.length - 1));
        return;
      }
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
