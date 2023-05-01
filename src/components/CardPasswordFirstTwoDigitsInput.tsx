import React from "react";
import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from "./common/Input";
import { usePasswordFirstTwoDigits } from "../hooks/usePasswordFirstTwoDigits";

const CardPasswordFirstTwoDigitsInput = () => {
  const {
    firstDigit,
    secondDigit,
    handleFirstDigitChange,
    handleSecondDigitChange,
  } = usePasswordFirstTwoDigits();

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBox className="w-75">
        <InputBasic
          type="password"
          maxLength={1}
          value={firstDigit}
          onChange={handleFirstDigitChange}
        />
        <InputBasic
          type="password"
          maxLength={1}
          value={secondDigit}
          onChange={handleSecondDigitChange}
        />
        <InputBasic type="password" maxLength={1} value={"*"} disabled />
        <InputBasic type="password" maxLength={1} value={"*"} disabled />
      </InputBox>
    </InputContainer>
  );
};

export default CardPasswordFirstTwoDigitsInput;
