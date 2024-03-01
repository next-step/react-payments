import { Dispatch, SetStateAction, useCallback, useState } from "react";
import BasicInput from "../../../components/input/BasicInput";

const EXPIRED_DATE_LENGTH = 6;

interface ExpiredDateInputProps {
  expiredDate: string;
  setExpiredDate: Dispatch<SetStateAction<string>>;
}

export default function ExpiredDateInput({
  expiredDate,
  setExpiredDate,
}: ExpiredDateInputProps) {
  const toDisplayedExpiredDate = (value: string) =>
    value.length > 2 ? `${value.slice(0, 2)}/${value.slice(2)}` : value;

  const [displayedExpiredDate, setDisplayedExpiredDate] = useState<string>(
    toDisplayedExpiredDate(expiredDate)
  );

  const handleChange = useCallback(() => {
    const displayed = toDisplayedExpiredDate(expiredDate);
    setDisplayedExpiredDate(displayed);
  }, [expiredDate]);

  const handleKeydown = useCallback(
    (value: string) => {
      if (expiredDate.length === EXPIRED_DATE_LENGTH) return;
      const numValue = Number(value);
      if (isNaN(numValue)) return;
      if (expiredDate.length === 0 && numValue > 2) return;
      if (expiredDate.length === 1 && numValue > 3) return;
      if (value === "Backspace") {
        setExpiredDate((prev) => prev.slice(0, expiredDate.length - 1));
        return;
      }
      setExpiredDate((prev) => prev + value);
    },
    [expiredDate.length, setExpiredDate]
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
