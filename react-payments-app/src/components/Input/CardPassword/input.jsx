import { useState, useEffect, useRef } from "react";

const MAX_PW_INPUT_LENGTH = 1;

const CardPasswordInput = ({ onChange }) => {
  const [password, setPassword] = useState(["", ""]);
  const [error, setError] = useState("");
  const nextElement = useRef(null);

  const setPasswordByInput = (index) => (e) => {
    const updatedPassword = [...password];
    const { value } = e.target;

    if (Number.isNaN(+value)) {
      setError("숫자만 입력해주세요.");
      return;
    }

    updatedPassword[index] = value;
    setPassword(updatedPassword);

    if (index === 0) {
      nextElement.current.focus();
    }
    if (index === 1) {
      // check is all input filled
      /// if yes,
      //// open companySelection Modal
      /// if no,
      //// auto focus on which is blank & notice the user the error
    }
  };

  useEffect(() => {
    onChange(password, error);
  }, [password, error]);

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15 mr-10"
        type="password"
        maxLength={MAX_PW_INPUT_LENGTH}
        value={password[0]}
        onChange={setPasswordByInput(0)}
      />
      <input
        className="input-basic w-15 mr-10"
        type="password"
        maxLength={MAX_PW_INPUT_LENGTH}
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
