import React from "react";
import { InputContainer, InputTitle, InputBasic } from "./common/Input";

const PasswordFirstTwoDigits = () => {
  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBasic type="password" maxLength={1} />
      <InputBasic type="password" maxLength={1} />
    </InputContainer>
  );
};

export default PasswordFirstTwoDigits;
