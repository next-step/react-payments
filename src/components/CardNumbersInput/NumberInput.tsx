import React, { ForwardedRef, forwardRef, useMemo, useState } from 'react';
import { VirtualNumPad } from '../VirtualNumPad';

type TNumberInput = {
  type: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (newValue: string) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
};

function NumberInput(
  { required = false, type, value, onChange, onKeyDown, maxLength, minLength }: TNumberInput,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
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

  return (
    <>
      <input
        className="input-basic"
        required={required}
        readOnly={isSafety}
        type={type}
        ref={forwardedRef}
        value={value}
        onFocus={() => setVirtualKeyboardVisible(true)}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        minLength={minLength}
      />
      {isSafety && virtualKeyboardVisible && (
        <>
          <VirtualNumPad
            onClick={(key) => handleVirtualKeyDown(key)}
            onDimmedClick={() => setVirtualKeyboardVisible(false)}
          />
        </>
      )}
    </>
  );
}

const ForwardedNumberInput = forwardRef(NumberInput);
ForwardedNumberInput.displayName = 'NumberInput';
export default React.memo(ForwardedNumberInput);
