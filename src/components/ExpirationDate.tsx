import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin: 16px 0;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

const InputTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const InputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 50%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;

  &:first-child {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  &:last-child {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;

const Separator = styled.span`
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
