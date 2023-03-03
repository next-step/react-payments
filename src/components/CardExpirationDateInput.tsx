import React, { useState } from "react";
import styled from "styled-components";
import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";

export const Separator = styled.span`
  display: inline-block;
  width: 1.5rem;
  text-align: center;
`;
interface ExpirationDateProps {
  className?: string;
  onChange?: (value: string) => void;
}

const ExpirationDate: React.FC<ExpirationDateProps> = ({ className }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    const numValue = parseInt(value, 10);

    if (isNaN(numValue) || numValue < 0 || numValue > 12) {
      value = "";
    }

    setMonth(value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setYear(value);
  };

  return (
    <InputContainer className={className}>
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

export default ExpirationDate;
