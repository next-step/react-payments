import { useState, useEffect, useRef } from "react";
import { MAX_INPUT_LENGTH } from "../../../common/constant";

const CardPasswordInput = ({ onChange, handleSubmit }) => {
  const [password, setPassword] = useState(["", ""]);
  const [error, setError] = useState("");
  const nextElement = useRef(null);
  const [event, setEvent] = useState(null);

  const setPasswordByInput = (index) => (e) => {
    const updatedPassword = [...password];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      setError("숫자만 입력해주세요.");
      return;
    }

    setEvent(e);
    updatedPassword[index] = value;
    setPassword(updatedPassword);

    if (index === 0) {
      nextElement.current.focus();
    }
  };

  useEffect(() => {
    onChange(password, error);
    if (password[1]) {
      console.log(password[1]);
      handleSubmit(event);
    }
  }, [password, error]);

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15 mr-10"
        type="password"
        maxLength={MAX_INPUT_LENGTH.PW}
        value={password[0]}
        onChange={setPasswordByInput(0)}
      />
      <input
        className="input-basic w-15 mr-10"
        type="password"
        maxLength={MAX_INPUT_LENGTH.PW}
        value={password[1]}
        onChange={setPasswordByInput(1)}
        ref={nextElement}
      />
      <input
        className="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
      <input
        className="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
    </div>
  );
};

export default CardPasswordInput;
