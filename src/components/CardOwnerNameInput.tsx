import { useState } from "react";
import styled from "styled-components";
import { InputContainer, InputTitle, InputBasic } from "./common/Input";

const StyledInputBasic = styled(InputBasic)`
  text-transform: uppercase;
`;

export interface OwnerNameProps {
  onChange: (value: string) => void;
  value?: string;
}

const OwnerName = ({ onChange, value }: OwnerNameProps) => {
  const [inputValue, setInputValue] = useState(value ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
      .replace(/[^a-zA-Z\s]/g, "")
      .replace(/[^\w\s]/gi, "")
      .toUpperCase();
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <InputContainer>
      <InputTitle>카드 소유자 이름(선택)</InputTitle>
      <StyledInputBasic
        type="text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        onChange={handleChange}
        value={inputValue}
        maxLength={30}
      />
    </InputContainer>
  );
};

export default OwnerName;
