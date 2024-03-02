import { Dispatch, SetStateAction, useCallback, useState } from "react";
import BasicInput from "../../../components/input/BasicInput";

const EXPIRED_DATE_LENGTH = 6;

interface CardExpiredDateInputProps {
  cardExpiredDate: string;
  setCardExpiredDate: Dispatch<SetStateAction<string>>;
}

export default function CardExpiredDateInput({
  cardExpiredDate,
  setCardExpiredDate,
}: CardExpiredDateInputProps) {
  const toDisplayedExpiredDate = (value: string) =>
    value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;

  const [displayedExpiredDate, setDisplayedExpiredDate] = useState<string>(
    toDisplayedExpiredDate(cardExpiredDate)
  );

  const handleChange = useCallback(() => {
    const displayed = toDisplayedExpiredDate(cardExpiredDate);
    setDisplayedExpiredDate(displayed);
  }, [cardExpiredDate]);

  const handleKeydown = useCallback(
    (value: string) => {
      if (cardExpiredDate.length === EXPIRED_DATE_LENGTH) return;
      const numValue = Number(value);
      if (isNaN(numValue)) return;
      if (cardExpiredDate.length === 0 && numValue > 2) return;
      if (cardExpiredDate.length === 1 && numValue > 3) return;
      if (value === "Backspace") {
        setCardExpiredDate((prev) => prev.slice(0, cardExpiredDate.length - 1));
        return;
      }
      setCardExpiredDate((prev) => prev + value);
    },
    [cardExpiredDate.length, setCardExpiredDate]
  );

  return (
    <BasicInput
      label="만료일"
      value={displayedExpiredDate}
      onChange={handleChange}
      onKeydown={handleKeydown}
      placeHolder="MM/YY"
    />
  );
}
