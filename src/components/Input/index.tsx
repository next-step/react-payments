import React from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  /**
   * 타입
   */
  type: 'text' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  width?: number;
  /**
   * Input attr name
   */
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * type이 text일 때 마스킹 처리 할 때 사용
   */
  isPassword?: boolean;
  readOnly?: boolean;
  ref?: any;
}

const InputBasic = styled.input<{ width?: number; isPassword?: boolean }>`
  background-color: #ecebf1;
  height: 45px;
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;

  ${({ isPassword }) =>
    isPassword &&
    css`
      -webkit-text-security: disc;
    `}
`;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      placeholder,
      value,
      width,
      name,
      onChange,
      isPassword,
      readOnly,
    },
    ref,
  ) => {
    return (
      <InputBasic
        type={type}
        placeholder={placeholder}
        value={value}
        width={width}
        name={name}
        onChange={onChange}
        isPassword={isPassword}
        readOnly={readOnly}
        ref={ref}
      />
    );
  },
);

export default Input;
