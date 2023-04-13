import React, { forwardRef, useEffect, useRef } from 'react';
import { InputContainer } from '../InputContainer';
import { NumberInput } from '../NumberInput';
import { CARD_INPUT } from '../../constants';

export type TInputEventHandler = {
  onChange?: (values: string[]) => void;
  onKeyDown?: () => void;
};

type TCardNumbersInput = {
  values: string[];
  nextRef?: React.RefObject<HTMLInputElement>;
} & TInputEventHandler;

const { CARD_NUMBER } = CARD_INPUT;

function CardNumbersInput(
  { values, onChange, nextRef }: TCardNumbersInput,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) {
  const refs = Array.from({ length: values.length }, () => useRef() as React.RefObject<HTMLInputElement>);

  useEffect(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') {
      forwardedRef(refs[0].current);
    } else {
      forwardedRef.current = refs[0].current;
    }
  }, []);

  useEffect(() => {
    const lengths = values.map((value) => value.length);
    const targetIndex = lengths.findIndex((length) => length !== CARD_NUMBER.EACH_LENGTH);

    if (!targetIndex) return;

    const nextInput = refs[targetIndex]?.current;
    if (nextInput !== document.activeElement) {
      nextInput?.focus();
    }
  }, [values]);

  const handleChange = (value: string, index: number) => {
    const newCardNumbers = [...values.slice(0, index), value, ...values.slice(index + 1)];

    onChange?.(newCardNumbers);
    if (value.length === CARD_NUMBER.EACH_LENGTH) {
      focusNext(index);
    }

    handleFulfilled(value, index);
  };

  const handleFulfilled = (value: string, index: number) => {
    const newCardNumbers = [...values.slice(0, index), value, ...values.slice(index + 1)];

    if (
      // prettier-ignore
      newCardNumbers.filter(
        (s) => s.length === CARD_NUMBER.EACH_LENGTH
      ).length === CARD_NUMBER.LENGTH
    ) {
      nextRef?.current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const [target, key] = [event.target as HTMLInputElement, event.key];
    const [length, position] = [target.value.length, target.selectionStart];

    const triggerKeys = {
      previous: ['ArrowUp', 'ArrowLeft', 'Backspace'],
      next: ['ArrowDown', 'ArrowRight', 'Enter'],
    };

    if (triggerKeys.previous.includes(key) && position === 0) {
      focusPrev(index);
    } else if (triggerKeys.next.includes(key) && position === length) {
      focusNext(index);
    }
  };

  const focusPrev = (index: number) => {
    refs[index - 1]?.current?.focus();
  };

  const focusNext = (index: number) => {
    refs[index + 1]?.current?.focus();
  };

  return (
    <div>
      <InputContainer title="카드 번호">
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
