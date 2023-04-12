import React, { ForwardedRef, forwardRef } from 'react';
import '../../styles/input.css';
import useNumberInput from '../../hooks/useNumbersInput';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';

const { LENGTH, EDITABLE_LENGTH } = CARD_INPUT.PIN;
const EACH_PASSWORD_LENGTH = 1;

const isEditable = (idx: number) => idx < EDITABLE_LENGTH;

function PinInput({ onChange, onFulfill }: TCardComponentProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    numbers: pins,
    refs,
    handleChange,
  } = useNumberInput({ initValues: ['', ''], maxLength: EACH_PASSWORD_LENGTH, onChange, onFulfill, forwardedRef: ref });

  return (
    <InputContainer caption="카드 비밀번호" tied={false}>
      {Array.from({ length: LENGTH }, (_, idx) => (
        <input
          required
          ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
          key={idx}
          className="input-basic w-15"
          type="password"
          maxLength={1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, idx)}
          value={isEditable(idx) ? pins[idx] : '*'}
          disabled={!isEditable(idx)}
        />
      ))}
    </InputContainer>
  );
}

const ForwardedPinInput = forwardRef(PinInput);
ForwardedPinInput.displayName = 'PinInput';

export default ForwardedPinInput;
