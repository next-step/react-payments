import React, { ForwardedRef, forwardRef } from 'react';
import { TCardComponentProps } from '../../domain/payments/types';
import '../../styles/input.css';
import useNumberInput from '../../hooks/useNumberInput';

const CARD_NUMBER_INPUT_TYPES = ['text', 'text', 'password', 'password'];
const CARD_NUMBER_MAX_LENGTH = 4;

function CardNumberInput(
  { onChange, onFulfill, nextRef }: TCardComponentProps,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  const {
    numbers: cardNumbers,
    refs,
    handleChange,
  } = useNumberInput({
    initValues: ['', '', '', ''],
    maxLength: CARD_NUMBER_MAX_LENGTH,
    onChange,
    onFulfill,
    nextRef,
    forwardedRef,
  });

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {CARD_NUMBER_INPUT_TYPES.map((type, idx) => (
          <input
            ref={(el: HTMLInputElement) => (refs.current[idx] = el)}
            key={idx}
            className="input-basic"
            type={type}
            maxLength={CARD_NUMBER_MAX_LENGTH}
            onChange={(event) => handleChange(event, idx)}
            value={cardNumbers[idx]}
          />
        ))}
      </div>
    </div>
  );
}

const ForwardedCardNumberInput = forwardRef(CardNumberInput);
ForwardedCardNumberInput.displayName = 'CardNumberInput';
export default React.memo(ForwardedCardNumberInput);
