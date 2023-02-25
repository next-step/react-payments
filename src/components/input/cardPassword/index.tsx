import { useInputFocus, useRefs } from "hooks";
import { ChangeEvent, useEffect, useState } from "react";

const MAX_PASSWORD_LENGTH = 1;

type CardPasswordInputProps = {
  handlePassword: (input: string[]) => void;
};

const CardPasswordInput = ({ handlePassword }: CardPasswordInputProps) => {
  const [passwordNumber, setPasswordNumber] = useState<string[]>(["", ""]);
  const passwordRefs = useRefs<HTMLInputElement>(2);

  useInputFocus({
    refs: passwordRefs,
    deps: passwordNumber,
    maxLength: MAX_PASSWORD_LENGTH,
  });

  const handleChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const updatedPassword = [...passwordNumber];
      const { value } = e.target;

      if (Number.isNaN(+value)) {
        alert("숫자만 입력해주세요.");
        return;
      }

      updatedPassword[index] = value;
      setPasswordNumber(updatedPassword);
    };

  useEffect(() => {
    handlePassword(passwordNumber);
  }, [passwordNumber, handlePassword]);
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <div>
        <input
          ref={passwordRefs[0]}
          className="input-basic w-15"
          type="password"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={handleChange(0)}
          value={passwordNumber[0]}
        />
        <input
          ref={passwordRefs[1]}
          className="input-basic w-15"
          type="password"
          maxLength={MAX_PASSWORD_LENGTH}
          onChange={handleChange(1)}
          value={passwordNumber[1]}
        />
        <input
          className="input-basic w-15 card-pass-word__disabled"
          type="password"
          value="x"
          disabled
        />
        <input
          className="input-basic w-15 card-pass-word__disabled"
          type="password"
          value="x"
          disabled
        />
      </div>
    </div>
  );
};

export default CardPasswordInput;
