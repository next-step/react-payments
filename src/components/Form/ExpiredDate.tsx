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
    event.currentTarget.value = event.currentTarget.value.replace(
      /[^0-9]/g,
      ""
    );

    let newArr = [...dates];
    newArr[order] = Number(event.currentTarget.value);

    if (order === 0) {
      if (newArr[order] === 0 || newArr[order] > 12) {
        event.currentTarget.value = event.currentTarget.value.replace(
          event.currentTarget.value,
          ""
        );
      }
    }

    if (order === 1) {
      if (
        newArr[order] === 0 ||
        (String(newArr[order]).length > 1 && newArr[order] < 23)
      ) {
        event.currentTarget.value = event.currentTarget.value.replace(
          event.currentTarget.value,
          ""
        );
      }
    }
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
          name="month"
        />
        <Input
          placeholder="YY"
          maxLength={2}
          onChange={(e) => onChange(e, 1)}
          name="year"
        />
      </InputBox>
    </InputContainer>
  );
}

type ExpiredDateProps = {
  onExpiredDateChange: Function;
};

export default ExpiredDate;
