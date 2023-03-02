import { useRef, useState } from "react";
import { blockInput, remainOnlyNumber } from "../../utils/format";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

export type Date = {
  month: string;
  year: string;
};

enum ExpiredDateType {
  Month = "month",
  Year = "year",
}

const DATE_MAX_LENGTH = 2;
const MAX_MONTH = 12;
const MIN_YEAR = 23;

const blockInvalidValue = (inputValue: string, type: string) => {
  const value = Number(inputValue);

  if (type === ExpiredDateType.Month) {
    const isValidMonth = value !== 0 && value <= MAX_MONTH;
    if (!isValidMonth) {
      return blockInput(String(value));
    }
  }

  if (type === ExpiredDateType.Year) {
    const isValidYear =
      value !== 0 && !(String(value).length > 1 && value < MIN_YEAR);
    if (!isValidYear) {
      return blockInput(String(value));
    }
  }

  return inputValue;
};

function ExpiredDate({ onExpiredDateChange }: ExpiredDateProps) {
  const [expiredDate, setExpiredDate] = useState<Date>({ month: "", year: "" });

  const itemsRef = useRef<any>([]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    event.currentTarget.value = remainOnlyNumber(event.currentTarget.value);

    event.currentTarget.value = blockInvalidValue(
      event.currentTarget.value,
      type
    );

    const date: Date = {
      ...expiredDate,
      [type]: event.currentTarget.value,
    };

    if (type === ExpiredDateType.Month) {
      if (event.currentTarget.value.length > 1) {
        itemsRef.current[1].focus();
      }
    }

    setExpiredDate(date);
    onExpiredDateChange(date);
  };

  return (
    <InputContainer label="만료일">
      <InputBox medium>
        <Input
          placeholder="MM"
          maxLength={DATE_MAX_LENGTH}
          onChange={(e) => onChange(e, ExpiredDateType.Month)}
          name={ExpiredDateType.Month}
          forwardRef={(el: HTMLInputElement) => (itemsRef.current[0] = el)}
        />
        <Input
          placeholder="YY"
          maxLength={DATE_MAX_LENGTH}
          onChange={(e) => onChange(e, ExpiredDateType.Year)}
          name={ExpiredDateType.Year}
          forwardRef={(el: HTMLInputElement) => (itemsRef.current[1] = el)}
        />
      </InputBox>
    </InputContainer>
  );
}

type ExpiredDateProps = {
  onExpiredDateChange: Function;
};

export default ExpiredDate;
