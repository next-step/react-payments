import React, { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { TCardComponentProps } from '../domain/payments/types';
import { setFocus } from '../util/input';
import { leaveOnlyNumbers } from '../util/number';

type THookNumerInputProps = {
  initValues: string[];
  minLength?: number;
  values?: string[];
  maxLength: number;
} & TCardComponentProps;

type THookNumberInputs = {
  numbers: string[];
  setNumbers: Dispatch<SetStateAction<string[]>>;
  refs: MutableRefObject<HTMLInputElement[]>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => void;
};

const getFilledInputs = (inputs: string[] = [], maxLength: number) =>
  inputs.filter((s) => s !== '' && s.length === maxLength);
const isFulfilled = (inputs: string[], maxLength: number) => {
  const filledInputs = getFilledInputs(inputs, maxLength);

  return (
    inputs.length > 0 &&
    inputs.length === filledInputs.length &&
    filledInputs.length === maxLength &&
    filledInputs.every((input) => input.length === maxLength)
  );
};

export default ({
  initValues,
  maxLength,
  onChange,
  onFulfill,
  prevRef,
  nextRef,
  forwardedRef,
  values,
}: THookNumerInputProps): /** returns -> */ THookNumberInputs => {
  const [numbers, setNumbers] = useState(initValues);
  const refs = useRef<HTMLInputElement[]>(Array.from({ length: initValues.length }));

  useEffect(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') {
      forwardedRef(refs.current[0]);
    } else {
      forwardedRef.current = refs.current[0];
    }
  }, []);

  useEffect(() => {
    if (!values) {
      return;
    }

    setNumbers(values);

    const nextIndex = Math.floor((values?.join('') || '').length / maxLength);
    setFocus(refs.current[isFinite(nextIndex) ? nextIndex : 0]);

    if (isFulfilled(values, maxLength)) {
      onFulfill?.(values);
      nextRef?.current?.focus();
    }
  }, [values]);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
      const value = leaveOnlyNumbers(event.target.value);
      const newNumbers = [...numbers.slice(0, currentIndex), value, ...numbers.slice(currentIndex + 1)];
      setNumbers(newNumbers);

      if (value.length === maxLength) {
        const nextSiblingRef = refs.current[currentIndex + 1];
        nextSiblingRef && setFocus(nextSiblingRef);
      }
      onChange?.(newNumbers);
    },
    [numbers, setNumbers, refs]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
      const [target, key] = [event.target as HTMLInputElement, event.key];
      const [length, position] = [target.value.length, target.selectionStart];

      const triggerKeys = {
        previous: ['ArrowUp', 'ArrowLeft', 'Backspace'],
        next: ['ArrowDown', 'ArrowRight', 'Enter'],
      };

      const [prevSiblingRef, nextSiblingRef] = [refs.current[currentIndex - 1], refs.current[currentIndex + 1]];

      if (triggerKeys.previous.includes(key) && position === 0) {
        setFocus(prevSiblingRef || prevRef);
      } else if (triggerKeys.next.includes(key) && position === length) {
        setFocus(nextSiblingRef || nextRef);
      }
    },
    [refs, prevRef, nextRef, setFocus]
  );

  return { numbers, setNumbers, refs, handleChange, handleKeyDown };
};
