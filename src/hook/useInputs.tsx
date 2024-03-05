import { ChangeEvent, useRef, useState, KeyboardEvent } from 'react';

export const createUseInputConfig = (maxLength?: number, pattern?: RegExp) => ({ maxLength, pattern });
const INPUT_CONFIG_DEFAULTS = [createUseInputConfig()];

type InputConfig = {
  maxLength?: number;
  pattern?: RegExp;
};
type UseInputsProps = InputConfig[];

export const useInputs = (inputConfigs: UseInputsProps = INPUT_CONFIG_DEFAULTS) => {
  const INITIAL_VALUES = inputConfigs.map(() => '');
  const [values, setValues] = useState(INITIAL_VALUES);
  const refs = inputConfigs.map(() => useRef<HTMLInputElement>(null));

  const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;
    const config = inputConfigs[index];
    const isValid = !config.pattern || config.pattern.test(inputValue);

    if (isValid && (!config.maxLength || inputValue.length <= config.maxLength)) {
      const inputValues = [...values];
      inputValues[index] = inputValue;
      setValues(inputValues);

      if (inputValue.length === config.maxLength && index < inputConfigs.length - 1) {
        nextFocus(index);
      }
    }
  };

  const setFocus = (index: number, cursorPosition: 'start' | 'end') => {
    const inputElement = refs[index].current;
    if (inputElement) {
      inputElement.focus();
      const position = cursorPosition === 'end' ? inputElement.value.length : 0;
      inputElement.setSelectionRange(position, position);
    }
  };

  const prevFocus = (index: number) => {
    if (values[index - 1] === undefined) {
      return;
    }
    setFocus(index - 1, 'end');
  };

  const nextFocus = (index: number) => {
    if (values[index + 1] === undefined) {
      return;
    }
    const nextInputValueLength = values[index + 1]?.length || 0;
    const nextFocusPosition = nextInputValueLength === 0 ? 'start' : 'end';
    setFocus(index + 1, nextFocusPosition);
  };

  const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    const { pattern, maxLength } = inputConfigs[index];
    const { key, shiftKey } = e;

    const isValidInputPattern = pattern ? pattern.test(key) : true;
    const isUnderMaxLength = maxLength ? values[index].length < maxLength : true;
    const isControlKey = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(key);
    const isShiftTabKey = shiftKey && key === 'Tab';

    if (!isValidInputPattern && !isUnderMaxLength && !isControlKey && !isShiftTabKey) {
      return;
    }

    if (isShiftTabKey && index > 0) {
      return;
    }

    if (key === 'Tab' && index < inputConfigs.length - 1) {
      return;
    }

    if (key === 'Backspace' && values[index].length === 0 && index > 0) {
      prevFocus(index);
      return;
    }

    if (shiftKey) {
      return;
    }

    const shouldFocusNext = maxLength && values[index].length === maxLength && index < inputConfigs.length - 1;
    if (shouldFocusNext && key !== 'ArrowLeft' && key !== 'Backspace') {
      nextFocus(index);
    }
  };

  return { values, refs, handleChange, handleKeyDown, prevFocus, nextFocus };
};
