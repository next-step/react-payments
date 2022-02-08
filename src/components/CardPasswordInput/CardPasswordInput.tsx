import { useEffect, useState } from "react";
import IntegerInput from "../IntegerInput/IntegerInput";
import Styled from "./CardPasswordInput.styles";

interface Props {
  dotColor?: string;
  onChange?: (firstNumber: string, secondNumber: string) => void;
}

const CardPasswordInput = ({ dotColor, onChange }: Props) => {
  const [password, setPassword] = useState<[string, string]>(["", ""]);

  const makeChangeHandler = (index: number) => (value: string) => {
    const updatedPassword: [string, string] = [...password];

    updatedPassword[index] = value;
    setPassword(updatedPassword);
  };

  useEffect(() => {
    const [firstNumber, secondNumber] = password;

    onChange?.(firstNumber, secondNumber);
  }, [password]);

  return (
    <div>
      <Styled.Label>카드비밀번호</Styled.Label>
      <Styled.FlexWrapper>
        <Styled.InputArea color={dotColor}>
          <IntegerInput type="password" value={password[0]} onChange={makeChangeHandler(0)} maxLength={1} />
        </Styled.InputArea>
        <Styled.InputArea color={dotColor}>
          <IntegerInput type="password" value={password[1]} onChange={makeChangeHandler(1)} maxLength={1} />
        </Styled.InputArea>
        <Styled.DisabledInputArea>
          <Styled.Dot color={dotColor} />
        </Styled.DisabledInputArea>
        <Styled.DisabledInputArea>
          <Styled.Dot color={dotColor} />
        </Styled.DisabledInputArea>
      </Styled.FlexWrapper>
    </div>
  );
};

export default CardPasswordInput;
