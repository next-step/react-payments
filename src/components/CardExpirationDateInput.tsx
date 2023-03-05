import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CardContext } from "../contexts/card";
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
}

const ExpirationDate: React.FC<ExpirationDateProps> = ({ className }) => {
  const { expirationDate, setExpirationDate } = useContext(CardContext);
  const [month, setMonth] = useState(expirationDate.slice(0, 2));
  const [year, setYear] = useState(expirationDate.slice(3));

  useEffect(() => {
    setExpirationDate(`${month}/${year}`);
  }, [month, year, setExpirationDate]);

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
