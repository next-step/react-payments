import React, { useContext, useState } from "react";
import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from "./common/Input";
import { CardContext } from "../contexts/Card";

const CardPasswordFirstTwoDigitsInput = () => {
  const { passwordFirstTwoDigits, setPasswordFirstTwoDigits } =
    useContext(CardContext);
  const [firstDigit, setFirstDigit] = useState(
    passwordFirstTwoDigits ? passwordFirstTwoDigits[0] : ""
  );
  const [secondDigit, setSecondDigit] = useState(
    passwordFirstTwoDigits ? passwordFirstTwoDigits[1] : ""
  );

  const handleFirstDigitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setFirstDigit(newValue);
    setPasswordFirstTwoDigits(
      newValue +
        (passwordFirstTwoDigits.length > 1 ? passwordFirstTwoDigits[1] : "")
    );
  };

  const handleSecondDigitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSecondDigit(newValue);
    setPasswordFirstTwoDigits(
      (passwordFirstTwoDigits.length > 0 ? passwordFirstTwoDigits[0] : "") +
        newValue
    );
  };

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
