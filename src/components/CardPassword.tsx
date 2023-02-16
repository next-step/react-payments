import { ChangeEvent, useRef, useEffect } from 'react';

type PasswordNumber = {
  num1: string;
  num2: string;
};

type PasswordNumProps = {
  cardPassword: PasswordNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const CardPassword = ({ cardPassword, onChange }: PasswordNumProps) => {
  const { num1, num2 } = cardPassword;

  const num2InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (num1.length === 1) {
      num2InputRef.current?.focus();
    }
  }, [num1]);

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15 mr-3"
        type="password"
        maxLength={1}
        value={num1}
        name="num1"
        onChange={onChange}
      />
      <input
        className="input-basic w-15 mr-3"
        type="password"
        maxLength={1}
        value={num2}
        name="num2"
        onChange={onChange}
        ref={num2InputRef}
      />
      <input className="input-basic w-15 mr-3" type="password" readOnly value={1} />
      <input className="input-basic w-15" type="password" readOnly value={1} />
    </div>
  );
};

export default CardPassword;
