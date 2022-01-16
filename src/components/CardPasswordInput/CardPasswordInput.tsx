import { ChangeEvent, useEffect, useState } from "react";
import { hasNonNumberChar } from "../../utils/validations";
import Styled from "./CardPasswordInput.styles";

interface Props {
  dotColor?: string;
  onPasswordChange?: (firstNumber: number, secondNumber: number) => void;
}

const CardPasswordInput = ({ dotColor, onPasswordChange }: Props) => {
  const [password, setPassword] = useState<[string, string]>(["", ""]);

  const makeChangeHandler = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedPassword: [string, string] = [...password];
    const { value } = event.target;

    if (hasNonNumberChar(value)) {
      return;
    }

    updatedPassword[index] = value;
    setPassword(updatedPassword);
  };

  useEffect(() => {
    const [firstNumber, secondNumber] = password.map((p) => Number(p));

    onPasswordChange?.(firstNumber, secondNumber);
  }, [password]);

  return (
    <div>
      <Styled.Label>카드비밀번호</Styled.Label>
      <Styled.FlexWrapper>
        <Styled.InputArea color={dotColor}>
          <input type="password" value={password[0]} onChange={makeChangeHandler(0)} maxLength={1} />
        </Styled.InputArea>
        <Styled.InputArea color={dotColor}>
          <input type="password" value={password[1]} onChange={makeChangeHandler(1)} maxLength={1} />
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
