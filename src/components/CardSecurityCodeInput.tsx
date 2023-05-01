import React, { useState } from "react";
import {
  HelpDescription,
  HelpIcon,
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";
import { useCardSecurityCode } from "../hooks/useCardSecurityCode";

const CardSecurityCodeInput: React.FC = () => {
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const { securityCode, handleChange } = useCardSecurityCode();

  return (
    <InputContainer>
      <InputTitle>
        보안코드(CVC/CVV)
        <HelpIcon onClick={() => setShowHelp(!showHelp)}>?</HelpIcon>
      </InputTitle>
      <InputBox className="w-25">
        <InputBasic
          type="password"
          placeholder="CVC"
          value={securityCode}
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
      </InputBox>
    </InputContainer>
  );
};

export default CardSecurityCodeInput;
