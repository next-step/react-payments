import React, { useContext } from "react";
import { CardContext } from "../contexts/PaymentsCardContext";
import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";
import { Separator } from "./common/Separator";
import { useCardExpirationDate } from "../hooks/useCardExpirationDate";

const CardExpirationDateInput: React.FC = () => {
  const { expirationDate, setExpirationDate } = useContext(CardContext);

  const { month, year, handleMonthChange, handleYearChange } =
    useCardExpirationDate(expirationDate, setExpirationDate);

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox className="w-50">
        <InputBasic
          type="text"
          placeholder="MM"
          maxLength={2}
          pattern="[0-9]*"
          value={month}
          onChange={handleMonthChange}
        />
        <Separator>/</Separator>
        <InputBasic
          type="text"
          placeholder="YY"
          maxLength={2}
          pattern="[0-9]*"
          value={year}
          onChange={handleYearChange}
        />
      </InputBox>
    </InputContainer>
  );
};

export default CardExpirationDateInput;
