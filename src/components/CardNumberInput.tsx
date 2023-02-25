import { useEffect, useRef, ChangeEvent } from 'react';
import '../styles/input.css';

type CardNumber = [string, string, string, string];

type CardNumberProps = {
  cardNumber: CardNumber;
  onChange: (index: number) => (event: ChangeEvent<HTMLInputElement>) => void;
};

const CardNumberInput = ({ cardNumber, onChange }: CardNumberProps) => {
  const [num1, num2, num3, num4]: CardNumber = cardNumber;

  const num1InputRef = useRef<HTMLInputElement>(null);
  const num2InputRef = useRef<HTMLInputElement>(null);
  const num3InputRef = useRef<HTMLInputElement>(null);
  const num4InputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    num1InputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (num1.length === 4) {
      num2InputRef.current?.focus();
    }
  }, [num1]);

  useEffect(() => {
    if (num2.length === 4) {
      num3InputRef.current?.focus();
    }
  }, [num2]);

  useEffect(() => {
    if (num3.length === 4) {
      num4InputRef.current?.focus();
    }
  }, [num3]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          maxLength={4}
          className="input-basic w-25"
          type="text"
          onChange={onChange(0)}
          value={num1}
          ref={num1InputRef}
        />
        {num1.length === 4 && <span>-</span>}
        <input
          maxLength={4}
          className="input-basic w-25"
          type="text"
          onChange={onChange(1)}
          value={num2}
          ref={num2InputRef}
        />
        {num2.length === 4 && <span>-</span>}

        <input
          maxLength={4}
          className="input-basic w-25"
          type="password"
          onChange={onChange(2)}
          value={num3}
          ref={num3InputRef}
        />
        {num3.length === 4 && <span>-</span>}

        <input
          maxLength={4}
          className="input-basic w-25"
          type="password"
          onChange={onChange(3)}
          value={num4}
          ref={num4InputRef}
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
