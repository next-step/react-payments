import React, { useState } from "react";
import {
  HelpDescription,
  HelpIcon,
  InputBasic,
  InputContainer,
  InputTitle,
} from "./common/Input";

const Cvc = () => {
  const [cvc, setCvc] = useState<string>("");
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, "").slice(0, 3);
    setCvc(newValue);
  };

  return (
    <InputContainer>
      <InputTitle>
        보안코드(CVC/CVV)
        <HelpIcon onClick={() => setShowHelp(!showHelp)}>?</HelpIcon>
      </InputTitle>
      <InputBasic
        type="password"
        placeholder="CVC"
        value={cvc}
        onChange={handleChange}
        maxLength={3}
        pattern="[0-9]*"
        required
      />
      {showHelp && (
        <HelpDescription>
          카드 뒷면 마지막에 있는 3자리 숫자입니다.
        </HelpDescription>
      )}
    </InputContainer>
  );
};

export default Cvc;
