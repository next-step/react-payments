import React from 'react';
import styled from '@emotion/styled';

const S = {
  Input: styled.input`
    background-color: #ecebf1;
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #9ca3af;
    border: none;
    border-radius: 0.25rem;
    &.w-25 {
      width: 25%;
    }
    &.w-15 {
      width: 15%;
    }
  `,
};

interface IProps {
  id: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
  type: string;
  className?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
}

const Input = (props: IProps) => {
  return <S.Input {...props} />;
};

export default Input;
