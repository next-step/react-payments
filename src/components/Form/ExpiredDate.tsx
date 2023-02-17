import { useEffect, useState } from "react";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function ExpiredDate({ onExpiredDateChange }: ExpiredDateProps) {
  const [dates, setDates] = useState<number[]>([]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    order: number
  ) => {
    let newArr = [...dates];
    newArr[order] = Number(event.currentTarget.value);
    setDates(newArr);
  };

  useEffect(() => {
    onExpiredDateChange(dates);
  }, [dates, onExpiredDateChange]);

  return (
    <InputContainer label="만료일">
      <InputBox medium>
        <Input
          placeholder="MM"
          maxLength={2}
          onChange={(e) => onChange(e, 0)}
        />
        <Input
          placeholder="YY"
          maxLength={2}
          onChange={(e) => onChange(e, 1)}
        />
      </InputBox>
    </InputContainer>
  );
}

type ExpiredDateProps = {
  onExpiredDateChange: Function;
};

export default ExpiredDate;
