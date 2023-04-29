import React, { ForwardedRef, forwardRef } from 'react';
import { VirtualNumPad } from '../VirtualNumPad';
import useNumberInput from './useNumberInput';

export type TNumberInputProps = {
  type: string;
  ref: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (newValue: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  classNames?: string[];
  disabled?: boolean;
};

function NumberInput(props: TNumberInputProps, forwardedRef: ForwardedRef<HTMLInputElement>) {
  const { required = false, type, value, onKeyDown, maxLength, minLength, classNames, disabled = false } = props;
  const { virtualKeyboardVisible, setVirtualKeyboardVisible, isSafety, handleChange, handleVirtualKeyDown } =
    useNumberInput(props);

  const className = ['input-basic', ...(classNames || [])].join(' ');

  return (
    <>
      <input
        className={className}
        required={required}
        readOnly={isSafety}
        disabled={disabled}
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
