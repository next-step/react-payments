import React, { ChangeEvent } from 'react';
import { InputBasic } from './styles';

interface CardNumberProps {
  type: 'text' | 'password' | 'number';
  minLength?: number;
  maxLength?: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  required?: boolean;
  placeholder?: string;
  width?: number;
  max?: number;
  min?: number;
  error?: boolean;
  textAlign?: 'center' | 'left';
}

const CardNumber = ({
  type,
  minLength,
  maxLength,
  onChange,
  value,
  required,
  placeholder,
  width,
  error,
  max,
  min,
  textAlign = 'center',
}: CardNumberProps) => {
  return (
    <InputBasic
      type={type}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      width={width}
      error={error}
      max={max}
      min={min}
      textAlign={textAlign}
    />
  );
};

export default CardNumber;
