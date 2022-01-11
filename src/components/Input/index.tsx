import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type: 'text' | 'password';
  placeholder?: string;
  value?: string;
  className?: string;
  width?: number;
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
  className,
  width,
}) => {
  return (
    <InputBasic
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      width={width}
    />
  );
};

export default Input;
