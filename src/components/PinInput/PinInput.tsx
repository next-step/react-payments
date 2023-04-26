import React, { forwardRef, useCallback } from 'react';
import '../../styles/input.css';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../domain/payments/constants';
import { NumberInput } from '../NumberInput';
import useForwardedRef from '../../hooks/useForwardedRef';
import { TCardComponentProps } from '../../pages/card-edit/types';

const { EDITABLE_LENGTH, EACH_LENGTH } = CARD_INPUT.PIN;

function PinInput(
  props: TCardComponentProps<string>,
  forwardedRef: React.ForwardedRef<HTMLInputElement | HTMLButtonElement>
) {
  const { value = '', onChange, nextRef, caption } = props;
  const { refs } = useForwardedRef({ forwardedRef, length: EDITABLE_LENGTH });

  const handleChange = useCallback(
    (newValue: string, index: number) => {
      const values = value.split('');
      const newValues = [...values.slice(0, index), newValue, ...values.slice(index + 1)];

      onChange?.(newValues.join(''));
      if (newValue.length === EACH_LENGTH) {
        refs[index + 1]?.current?.focus();
      }

      handleFulfilled(newValue, index);
    },
    [props]
  );

  const handleFulfilled = useCallback(
    (value: string, index: number) => {
      if (index === 1 && value.length === EDITABLE_LENGTH) {
        nextRef?.current?.focus();
      }
    },
    [props]
  );

  return (
    <InputContainer title="카드 비밀번호" tied={false} caption={caption}>
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
