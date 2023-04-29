import React, { Dispatch, MutableRefObject, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
import { setFocus } from '../util/input';
import { leaveOnlyNumbers } from '../util/number';
import { TCardComponentProps } from '../pages/card-edit/types';

type THookNumerInputProps = {
  initValues: string[];
  minLength?: number;
  maxLength: number;
} & TCardComponentProps;

type THookNumberInputs = {
  numbers: string[];
  setNumbers: Dispatch<SetStateAction<string[]>>;
  refs: MutableRefObject<HTMLInputElement[]>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => void;
};

const useNumberInput = ({
  initValues,
  minLength = 0,
  maxLength,
  onChange,
  onFulfill,
  prevRef,
  nextRef,
  forwardedRef,
}: THookNumerInputProps): THookNumberInputs => {
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

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
      const value = leaveOnlyNumbers(event.target.value);
      const newNumbers = [...numbers.slice(0, currentIndex), value, ...numbers.slice(currentIndex + 1)];
      setNumbers(newNumbers);

      if (value.length === maxLength) {
        const nextFocusedRef = refs.current[currentIndex + 1];
        nextFocusedRef && setFocus(nextFocusedRef);
      }
      onChange?.(newNumbers);
    },
    [numbers, setNumbers, refs]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
      //
      const [target, key] = [event.target as HTMLInputElement, event.key];
      const [length, position] = [target.value.length, target.selectionStart];

      const triggerKeys = {
        previous: ['ArrowUp', 'ArrowLeft', 'Backspace'],
        next: ['ArrowDown', 'ArrowRight', 'Enter'],
      };

      const [prevFocusedRef, nextFocusedRef] = [refs.current[currentIndex - 1], refs.current[currentIndex + 1]];

      if (triggerKeys.previous.includes(key) && position === 0) {
        setFocus(prevFocusedRef || prevRef);
      } else if (triggerKeys.next.includes(key) && position === length) {
        setFocus(nextFocusedRef || nextRef);
      }
    },
    [refs, prevRef, nextRef, setFocus]
  );

  const filledInputs = numbers.filter((s) => s !== '' && s.length === maxLength);
  const isFulfilled =
    numbers.length === filledInputs.length &&
    filledInputs.every((input) => input.length >= minLength && input.length <= maxLength);
  if (isFulfilled) {
    setTimeout(() => onFulfill?.(numbers));
    nextRef?.current?.focus();
  }

  return { numbers, setNumbers, refs, handleChange, handleKeyDown };
};

export default useNumberInput;
