import React from "react";
import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";
import { useCardNumberInput } from "../hooks/useCardNumberInput";

const CardNumberInput: React.FC = () => {
  const { inputValues, handleChange } = useCardNumberInput("");

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        {inputValues.map((value, index) => (
          <React.Fragment key={index}>
            <InputBasic
              type={index === 2 || index === 3 ? "password" : "text"}
              value={value}
              maxLength={4}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
            />
          </React.Fragment>
        ))}
      </InputBox>
    </InputContainer>
  );
};

export default CardNumberInput;
