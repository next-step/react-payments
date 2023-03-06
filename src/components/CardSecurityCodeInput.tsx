import React, { useState } from "react";
import {
  HelpDescription,
  HelpIcon,
  InputBasic,
  InputBox,
  InputContainer,
  InputTitle,
} from "./common/Input";

export interface CardSecurityCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CardSecurityCodeInput: React.FC<CardSecurityCodeInputProps> = ({
  value,
  onChange,
}) => {
  const [showHelp, setShowHelp] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, "").slice(0, 3);
    onChange(newValue);
  };

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
          value={value}
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
