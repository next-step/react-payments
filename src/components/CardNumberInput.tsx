import React from "react";
import {
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";
import { useCardNumberInput } from "../hooks/useCardNumberInput";

const CardNumberInput: React.FC = () => {
  const { cardNumbers, handleChange } = useCardNumberInput();

  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        {cardNumbers.map((number, index) => (
          <React.Fragment key={index}>
            <InputBasic
              type={index === 2 || index === 3 ? "password" : "text"}
              value={number}
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
