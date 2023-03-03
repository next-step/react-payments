import React, { useState } from "react";

import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";

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
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        {inputValues.map((value, index) => (
          <React.Fragment key={index}>
            {index === 2 || index === 3 ? (
              <InputBasic
                type="password"
                value={value}
                maxLength={4}
                onChange={(e) => handleChange(e, index)}
              />
            ) : (
              <InputBasic
                type="text"
                maxLength={4}
                value={value}
                onChange={(e) => handleChange(e, index)}
              />
            )}
          </React.Fragment>
        ))}
      </InputBox>
    </InputContainer>
  );
};

export default CardNumberInput;
