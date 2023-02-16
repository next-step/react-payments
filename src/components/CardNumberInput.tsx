import { useState, ChangeEvent } from 'react';
import '../styles/input.css';

type CardNumber = {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
};

type CardNumberInputProps = {
  numbers: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const CardNumberInput = ({ numbers, onChange }: CardNumberInputProps) => {
  const { num1, num2, num3, num4 } = numbers;

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input maxLength={4} className="input-basic w-25" type="text" onChange={onChange} value={num1} name="num1" />
        {num1.length === 4 && <span>-</span>}
        <input maxLength={4} className="input-basic w-25" type="text" onChange={onChange} value={num2} name="num2" />
        {num2.length === 4 && <span>-</span>}

        <input
          maxLength={4}
          className="input-basic w-25"
          type="password"
          onChange={onChange}
          value={num3}
          name="num3"
        />
        {num3.length === 4 && <span>-</span>}

        <input
          maxLength={4}
          className="input-basic w-25"
          type="password"
          onChange={onChange}
          value={num4}
          name="num4"
        />
      </div>
    </div>
  );
};

export default CardNumberInput;
