import React, { ForwardedRef, forwardRef } from 'react';
import '../../styles/input.css';
import useNumberInput from '../../hooks/useNumberInput';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';

const EACH_PASSWORD_LENGTH = 1;
const PASSWORD_LENGTH = 4;
const EDITABLE_PASSWORD_LENGTH = 2;

const isEditable = (idx: number) => idx < EDITABLE_PASSWORD_LENGTH;

function PinInput({ onChange, onFulfill }: TCardComponentProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    numbers: pins,
    refs,
    handleChange,
  } = useNumberInput({ initValues: ['', ''], maxLength: EACH_PASSWORD_LENGTH, onChange, onFulfill, forwardedRef: ref });

  return (
    <InputContainer caption="카드 비밀번호" width={15}>
      {Array.from({ length: PASSWORD_LENGTH }, (_, idx) => (
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
