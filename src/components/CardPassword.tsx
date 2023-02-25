import { ChangeEvent, useRef, useEffect } from 'react';
import { CARD } from '../utils/card_constants';

type PasswordNumber = [string, string];

type PasswordNumProps = {
  cardPassword: PasswordNumber;
  onChange: (index: number) => (e: ChangeEvent<HTMLInputElement>) => void;
};

const CardPassword = ({ cardPassword, onChange }: PasswordNumProps) => {
  const [num1, num2] = cardPassword;

  const num2InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (num1.length === CARD.PASSWORD_LENGTH) {
      num2InputRef.current?.focus();
    }
  }, [num1]);
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15 mr-3"
        type="password"
        maxLength={CARD.PASSWORD_LENGTH}
        value={num1}
        onChange={onChange(0)}
      />
      <input
        className="input-basic w-15 mr-3"
        type="password"
        maxLength={CARD.PASSWORD_LENGTH}
        value={num2}
        onChange={onChange(1)}
        ref={num2InputRef}
      />
      <input className="input-basic w-15 mr-3" type="password" readOnly value={1} />
      <input className="input-basic w-15" type="password" readOnly value={1} />
    </div>
  );
};

export default CardPassword;
