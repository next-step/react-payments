import { ChangeEvent, useRef, useState, KeyboardEvent } from 'react';
import { range } from '@/shared/utils';

type UseInputProps = {
  inputCount: number;
  maxLength?: number;
  pattern?: RegExp | string;
};

export const useInputs = ({ inputCount = 1, maxLength, pattern }: UseInputProps) => {
  const INITIAL_VALUES = range(inputCount).map(() => '');
  const [values, setValues] = useState(INITIAL_VALUES);
  const refs = range(inputCount).map(() => useRef<HTMLInputElement>(null));

  const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;
    const isValid = !pattern || new RegExp(pattern).test(inputValue);

    if (isValid && (!maxLength || inputValue.length <= maxLength)) {
      const inputValues = [...values];
      inputValues[index] = inputValue;
      setValues(inputValues);

      if (inputValue.length === maxLength && index < inputCount - 1) {
        nextFocus(index);
      }
    }
  };
  const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && values[index].length === 0 && index > 0) {
      prevFocus(index);
    }

    if (values[index].length === maxLength && index < inputCount - 1) {
      nextFocus(index);
    }
  };

  const prevFocus = (index: number) => {
    if (index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const nextFocus = (index: number) => {
    if (index < inputCount - 1) {
      refs[index + 1].current?.focus();
    }
  };

  return { values, refs, handleChange, handleKeyDown, prevFocus, nextFocus };
};
