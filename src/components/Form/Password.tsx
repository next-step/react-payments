import { useEffect, useState } from "react";
import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Password({ onPasswordChange }: PasswordProps) {
  const [password, setPassword] = useState<PasswordType>({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    passwordIdx: number
  ) => {
    let newObj = {
      ...password,
      [passwordIdx]: event.currentTarget.value,
    };
    setPassword(newObj);
  };

  useEffect(() => {
    const hasPassword = Object.values(password).some((number) => number);
    if (hasPassword) {
      onPasswordChange(password);
    }
  }, [password, onPasswordChange]);

  return (
    <InputContainer label="카드 비밀번호">
      <Input
        size="small"
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 1)}
        name="password1"
      ></Input>
      <Input
        size="small"
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 2)}
        name="password2"
      ></Input>
      <Input
        size="small"
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 3)}
        name="password3"
      ></Input>
      <Input
        size="small"
        type="password"
        maxLength={1}
        onChange={(e) => onChange(e, 4)}
        name="password4"
      ></Input>
    </InputContainer>
  );
}

type PasswordType = {
  [key: number]: string;
};

type PasswordProps = {
  onPasswordChange: Function;
};

export default Password;
