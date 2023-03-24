import { useRef, useState } from "react";
import useKeyboardContext from "../../hooks/useKeyboardContext";
import { Size } from "../../types/common";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Password({ onPasswordChange }: PasswordProps) {
  const [password, setPassword] = useState<PasswordType>({
    1: "",
    2: "",
  });
  const { setIsOpen } = useKeyboardContext();

  const itemsRef = useRef<any>([]);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    passwordIdx: number
  ) => {
    event.currentTarget.value = event.currentTarget.value.replace(
      /[^0-9]/g,
      ""
    );

    const newObj = {
      ...password,
      [passwordIdx]: event.currentTarget.value,
    };

    if (String(newObj[passwordIdx]).length) {
      if (passwordIdx < 2) {
        itemsRef.current[passwordIdx + 1].focus();
      }
    }
    setPassword(newObj);

    const hasPassword = Object.values(newObj).some((number) => number);
    if (hasPassword) {
      onPasswordChange(newObj);
    }
  };

  const onFocus = () => {
    setIsOpen(true);
  };

  return (
    <InputContainer label="카드 비밀번호">
      <Input
        size={Size.Small}
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 1)}
        onFocus={onFocus}
        name="password1"
        ref={(el: HTMLInputElement) => (itemsRef.current[1] = el)}
      ></Input>
      <Input
        size={Size.Small}
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 2)}
        onFocus={onFocus}
        name="password2"
        ref={(el: HTMLInputElement) => (itemsRef.current[2] = el)}
      ></Input>
      <Input size={Size.Small} type="password" readonly={true}></Input>
      <Input size={Size.Small} type="password" readonly={true}></Input>
    </InputContainer>
  );
}

export type PasswordType = {
  [key: number]: string;
};

type PasswordProps = {
  onPasswordChange: Function;
};

export default Password;
