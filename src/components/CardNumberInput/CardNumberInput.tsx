import React, { useEffect, useRef, useState } from 'react';
import { replaceNumberOnly } from '../../util/number';
import { TCardComponentProps } from '../../domain/payments/types';
import '../../styles/input.css';
import { setFocus } from '../../util/input';

const CARD_NUMBER_INPUT_TYPES = ['text', 'text', 'password', 'password'];
const CARD_NUMBER_MAX_LENGTH = 4;

function CardNumberInput({ onChange }: TCardComponentProps<string[]>) {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    onChange?.(cardNumbers);
  }, [cardNumbers]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
    const value = replaceNumberOnly(event.target.value);
    setCardNumbers([...cardNumbers.slice(0, currentIndex), value, ...cardNumbers.slice(currentIndex + 1)]);

    const [prevRef, nextRef] = [refs.current[currentIndex - 1], refs.current[currentIndex + 1]];
    if (value === '' && prevRef) {
      setFocus(prevRef);
    } else if (value.length === CARD_NUMBER_MAX_LENGTH && nextRef) {
      setFocus(nextRef);
    }
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {CARD_NUMBER_INPUT_TYPES.map((type, idx) => (
          <input
            key={idx}
            className="input-basic"
            type={type}
            maxLength={CARD_NUMBER_MAX_LENGTH}
            ref={(el) => (refs.current[idx] = el)}
            onChange={(event) => handleChange(event, idx)}
            value={cardNumbers[idx]}
          />
        ))}
      </div>
    </div>
  );
}

export default CardNumberInput;
