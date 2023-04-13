import React, { forwardRef } from 'react';
import { InputContainer } from '../InputContainer';
import { NumberInput } from '../NumberInput';
import { CARD_INPUT } from '../../constants';
import useForwardedRef from '../../hooks/useForwardedRef';
import useHandler from './hooks/useHandler';

export type TInputEventHandler = {
  onChange?: (values: string[]) => void;
  onKeyDown?: () => void;
};

type TCardNumbersInput = {
  values: string[];
  nextRef?: React.RefObject<HTMLInputElement>;
  caption?: string;
} & TInputEventHandler;

const { CARD_NUMBER } = CARD_INPUT;

function CardNumbersInput(
  props: TCardNumbersInput,
  forwardedRef: React.ForwardedRef<HTMLInputElement | HTMLButtonElement>
) {
  const { values, onChange, nextRef, caption } = props;
  const { refs } = useForwardedRef({ forwardedRef, length: values.length });

  const { handleChange, handleKeyDown } = useHandler({
    cardNumbers: values,
    onChange,
    nextRef,
    refs,
  });

  return (
    <div>
      <InputContainer title="카드 번호" caption={caption}>
        {values.map((value, idx) => (
          <NumberInput
            key={idx}
            required
            type={CARD_NUMBER.TYPES[idx]}
            ref={refs[idx]}
            onChange={(newValue) => handleChange(newValue, idx)}
            onKeyDown={(event) => handleKeyDown(event, idx)}
            maxLength={CARD_NUMBER.EACH_LENGTH}
            minLength={CARD_NUMBER.EACH_LENGTH}
            value={value}
          />
        ))}
      </InputContainer>
    </div>
  );
}

const ForwardedCardNumbersInput = forwardRef(CardNumbersInput);
ForwardedCardNumbersInput.displayName = 'CardNumbersInput';
export default React.memo(ForwardedCardNumbersInput);
