import React, { ForwardedRef, forwardRef } from 'react';
import '../../styles/input.css';
import useNumberInput from '../../hooks/useNumberInput';
import { TCardComponentProps } from '../../domain/payments/types';

const EACH_PASSWORD_LENGTH = 1;
const PASSWORD_LENGTH = 4;
const INPUTABLE_PASSWORD_LENGTH = 2;
const isEditable = (idx: number) => idx < INPUTABLE_PASSWORD_LENGTH;

function PinInput({ onFulfill }: TCardComponentProps, ref: ForwardedRef<HTMLInputElement>) {
  const {
    numbers: pins,
    refs,
    handleChange,
  } = useNumberInput({ initValues: ['', ''], maxLength: EACH_PASSWORD_LENGTH, onFulfill, forwardedRef: ref });

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {Array.from({ length: PASSWORD_LENGTH }, (_, idx) => (
        <input
          ref={(el) => (refs.current[idx] = el as HTMLInputElement)}
          key={idx}
          className="input-basic w-15"
          type="password"
          maxLength={1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, idx)}
          value={isEditable(idx) ? pins[idx] : '*'}
          // TODO: 패스워드는 2자리까지만 입력받을 수 있는데 입력 받을 수 없는 나머지 2자리는 input이 아니라 별도의 element로 분리할 것
          disabled={!isEditable(idx)}
        />
      ))}
    </div>
  );
}

const ForwardedPinInput = forwardRef(PinInput);
ForwardedPinInput.displayName = 'PinInput';

export default ForwardedPinInput;
