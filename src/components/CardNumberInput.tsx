import React, { useState, useContext } from "react";
import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";
import { CardContext } from "../contexts/PaymentsCardContext";

export interface CardNumberInputProps {
  onChange: (cardNumber: string) => void;
  value?: string;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  onChange,
  value = "",
}) => {
  const { setCardNumber } = useContext(CardContext);

  const [inputValues, setInputValues] = useState<string[]>([
    value.slice(0, 4),
    value.slice(4, 8),
    value.slice(8, 12),
    value.slice(12, 16),
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
    setCardNumber(newCardNumber);
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, index)
                }
              />
            ) : (
              <InputBasic
                type="text"
                maxLength={4}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(e, index)
                }
              />
            )}
          </React.Fragment>
        ))}
      </InputBox>
    </InputContainer>
  );
};

export default CardNumberInput;
