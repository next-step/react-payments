import { useEffect, useRef, useState } from "react";
import Box from "../../../../components/Box/Box";
import LabelBox from "../../../../components/LabelBox/LabelBox";
import LimitedLengthInput from "../../../../components/LimitedLengthInput/LimitedLengthInput";
import { ExpirationDate } from "../../types";
import { regex } from "../../../../utils";

interface ExpirationInput {
  onChange?: (value: ExpirationDate) => void;
  value?: ExpirationDate;
}

type ExpirationPeriod = "month" | "year";

export default function ExpirationInput({ value, onChange }: ExpirationInput) {
  const [expiration, setExpiration] = useState(
    value || { month: "", year: "" }
  );
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  function modifyExpiration(period: ExpirationPeriod, value: string) {
    setExpiration((prev) => ({ ...prev, [period]: value }));
  }

  function changeValue(period: ExpirationPeriod) {
    return function changeValue(value: string, isUnderLimitation?: boolean) {
      if (!regex[period].test(value)) return;
      modifyExpiration(period, value);
      onChange && onChange({ ...expiration, [period]: value });
      if (period === "month" && isUnderLimitation)
        yearInputRef.current?.focus();
    };
  }
  useEffect(() => {
    if (!value) return;

    const isMonthChanged = value.month !== expiration.month;
    const isYearChanged = value.year !== expiration.year;

    if (isMonthChanged || isYearChanged) {
      changeValue("month")(value.month);
      changeValue("year")(value.year);
    }
  }, [value, expiration]);

  useEffect(() => {
    const yearInput = yearInputRef.current;
    if (!yearInput) return;

    function moveToMonthCantRemoveAnymore(event: KeyboardEvent) {
      if (event.key === "Backspace") {
        const { value } = event.target as HTMLInputElement;
        if (!value) monthInputRef.current!.focus();
      }
    }

    yearInput.addEventListener("keyup", moveToMonthCantRemoveAnymore);

    return () => {
      yearInput.removeEventListener("keyup", moveToMonthCantRemoveAnymore);
    };
  }, []);

  return (
    <LabelBox description="만료일">
      <Box
        height="45px"
        backgroundColor="#ECEBF1"
        contentPosition="centerMiddle"
      >
        <LimitedLengthInput
          ref={monthInputRef}
          title="Expiration Month"
          type="text"
          colorTheme="primary"
          maxLength={2}
          textAlign="center"
          placeholder="MM"
          value={expiration.month}
          onChange={changeValue("month")}
        />
        <span>/</span>
        <LimitedLengthInput
          ref={yearInputRef}
          title="Expiration Year"
          type="text"
          colorTheme="primary"
          maxLength={2}
          textAlign="center"
          placeholder="YY"
          value={expiration.year}
          onChange={changeValue("year")}
        />
      </Box>
    </LabelBox>
  );
}
