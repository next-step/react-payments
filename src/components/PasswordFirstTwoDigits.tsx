import React, { useState } from "react";
import styled from "styled-components";
import { InputContainer, InputTitle, InputBasic } from "./common/Input";

const PasswordFirstTwoDigits = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");

  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBasic
        type="password"
        maxLength={1}
        value={digit1}
        onChange={(e) =>
          setDigit1(e.target.value.replace(/\D/g, "").substr(0, 1))
        }
      />
      <InputBasic
        type="password"
        maxLength={1}
        value={digit2}
        onChange={(e) =>
          setDigit2(e.target.value.replace(/\D/g, "").substr(0, 1))
        }
      />
    </InputContainer>
  );
};

export default PasswordFirstTwoDigits;
