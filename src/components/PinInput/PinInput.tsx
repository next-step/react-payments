import React, { forwardRef, useEffect, useRef } from 'react';
import '../../styles/input.css';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';
import { NumberInput } from '../NumberInput';

const { EDITABLE_LENGTH, EACH_LENGTH } = CARD_INPUT.PIN;

function PinInput(
  { value = '', onChange, nextRef }: TCardComponentProps<string>,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  const refs = Array.from({ length: EDITABLE_LENGTH }, () => useRef() as React.RefObject<HTMLInputElement>);

  useEffect(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') {
      forwardedRef(refs[0].current);
    } else {
      forwardedRef.current = refs[0].current;
    }
  }, []);

  const handleChange = (newValue: string, index: number) => {
    const values = value.split('');
    const newValues = [...values.slice(0, index), newValue, ...values.slice(index + 1)];

    onChange?.(newValues.join(''));
    if (newValue.length === EACH_LENGTH) {
      refs[index + 1]?.current?.focus();
    }

    handleFulfilled(newValue, index);
  };

  const handleFulfilled = (value: string, index: number) => {
    if (index === 1 && value.length === EDITABLE_LENGTH) {
      nextRef?.current?.focus();
    }
  };

  return (
    <InputContainer title="카드 비밀번호" tied={false}>
      {Array.from({ length: EDITABLE_LENGTH }, (_, idx) => (
        <NumberInput
          //
          key={idx}
          required
          type="password"
          ref={refs[idx]}
          onChange={(event) => handleChange(event, idx)}
          value={value[idx] ? value[idx] : ''}
          classNames={['input-basic', 'w-15']}
          minLength={EACH_LENGTH}
          maxLength={EACH_LENGTH}
        />
      ))}
      <input disabled className="input-basic w-15" type="password" maxLength={1} value={'*'} />
      <input disabled className="input-basic w-15" type="password" maxLength={1} value={'*'} />
    </InputContainer>
  );
}

const ForwardedPinInput = forwardRef(PinInput);
ForwardedPinInput.displayName = 'PinInput';
export default ForwardedPinInput;
