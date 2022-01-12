import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  width?: number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  maxLength?: number;
}

const InputBasic = styled.input<{ width?: number }>`
  background-color: #ecebf1;
  height: 45px;
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

const Input: React.VFC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  width,
  name,
  onChange,
  min,
  max,
  maxLength,
}) => {
  return (
    <InputBasic
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
      name={name}
      onChange={onChange}
      min={min}
      max={max}
      maxLength={maxLength}
    />
  );
};

export default Input;
