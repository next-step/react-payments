import React, { useEffect, useRef, useState } from 'react';
import { onNumericKeyDownOnly } from '../../domain/payments/listeners';
import { replaceNumberOnly } from '../../util/number';
import '../../styles/input.css';

type TCardNumberInputProps = {
  onCardNumberChange?: (cardNumbers: string[]) => void;
};

const CARD_NUMBER_INPUT_TYPES = ['text', 'text', 'password', 'password'];
const CARD_NUMBER_MAX_LENGTH = 4;

function CardNumberInput({ onCardNumberChange }: TCardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);
  const cardNumberInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (onCardNumberChange) onCardNumberChange(cardNumbers);
  }, [cardNumbers]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = replaceNumberOnly(event.target.value);
    const cardNumbers = cardNumberInputRefs.current?.map((input) => input?.value || '');
    setCardNumbers(cardNumbers);
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {CARD_NUMBER_INPUT_TYPES.map((type, idx) => (
          <input
            key={idx}
            type={type}
            className="input-basic"
            onKeyDown={onNumericKeyDownOnly}
            onChange={onChange}
            ref={(el) => (cardNumberInputRefs.current[idx] = el)}
            maxLength={CARD_NUMBER_MAX_LENGTH}
          />
        ))}
      </div>
    </div>
  );
}

export default CardNumberInput;
