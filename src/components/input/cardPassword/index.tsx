import { ChangeEvent, useRef, useState } from "react";

const MAX_PASSWORD_LENGTH = 1;

const CardPasswordInput = () => {
  const [password, setPassword] = useState(["", ""]);
  const nextElement = useRef<HTMLInputElement>(null);

  const setPasswordByInput = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const updatedPassword = [...password];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      alert("숫자만 입력해주세요.");
      return;
    }

    updatedPassword[index] = value;
    setPassword(updatedPassword);

    if (index === 0) {
      if(nextElement.current) {
        nextElement.current.focus();
      }
    }
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15"
        type="password"
        maxLength={MAX_PASSWORD_LENGTH}
        onChange={setPasswordByInput(0)}
      />
      <input
        className="input-basic w-15"
        type="password"
        maxLength={MAX_PASSWORD_LENGTH}
        onChange={setPasswordByInput(1)}
      />
      <input
        className="input-basic w-15"
        type="password"
        readOnly
        value="*"
      />
      <input
        className="input-basic w-15"
        type="password"
        readOnly
        value="*"
      />
    </div>
  );
};

export default CardPasswordInput;
