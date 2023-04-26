import React, { useMemo, useState } from 'react';
import { TNumberInputProps } from './NumberInput';

const useNumberInput = ({ type, onChange, maxLength }: TNumberInputProps) => {
  const [virtualKeyboardVisible, setVirtualKeyboardVisible] = useState(false);
  const isSafety = useMemo(() => type === 'password', [type]);

  const handleChange = (event: React.ChangeEvent) => {
    const newValue = (event.target as HTMLInputElement).value;

    handleFulfilled(newValue);
    onChange(newValue);
  };

  const handleFulfilled = (value: string) => {
    if (value.length === maxLength) {
      setVirtualKeyboardVisible(false);
    }
  };

  const handleVirtualKeyDown = (newValue: string) => {
    handleFulfilled(newValue);
    onChange(newValue);
  };

  return {
    virtualKeyboardVisible,
    setVirtualKeyboardVisible,
    isSafety,
    handleChange,
    handleFulfilled,
    handleVirtualKeyDown,
  };
};

export default useNumberInput;
