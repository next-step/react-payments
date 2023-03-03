import React, { useState } from "react";
import styled from "styled-components";

const CardNumberInputContainer = styled.div`
  margin: 16px 0;
`;

const CardNumberTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

const CardNumberInputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 25%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

const CardNumberInputPassword = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 25%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  font-size: 1.5rem;
  letter-spacing: 4px;
  font-family: inherit;
`;

const CardNumberInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;

export interface CardNumberInputProps {
  cardNumber: string;
  onChange: (cardNumber: string) => void;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  cardNumber,
  onChange,
}) => {
  const [inputValues, setInputValues] = useState<string[]>([
    cardNumber.slice(0, 4),
    cardNumber.slice(4, 8),
    cardNumber.slice(8, 12),
    cardNumber.slice(12, 16),
  ]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;
    const newValue = value.replace(/[^\d]/g, "");
    const newInputValues = [...inputValues];
    newInputValues[index] = newValue;

    setInputValues(newInputValues);
    const newCardNumber = newInputValues.join("");
    onChange(newCardNumber);
  };

  return (
    <CardNumberInputContainer>
      <CardNumberTitle>카드 번호</CardNumberTitle>
      <CardNumberInputBox>
        {inputValues.map((value, index) => (
          <React.Fragment key={index}>
            {index === 2 || index === 3 ? (
              <CardNumberInputPassword
                type="password"
                value={value}
                maxLength={4}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <CardNumberInputBasic
                type="text"
                maxLength={4}
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            )}
          </React.Fragment>
        ))}
      </CardNumberInputBox>
    </CardNumberInputContainer>
  );
};

export default CardNumberInput;
