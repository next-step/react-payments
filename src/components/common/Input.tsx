import React, { ForwardedRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';

const S = {
  Input: styled.input`
    background-color: ${COLOR.GREY};
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border: none #9ca3af;
    border-radius: 0.25rem;
    font-size: 16px;
    &.w-25 {
      width: 25%;
    }
    &.w-15 {
      width: 15%;
    }
    &.w-10 {
      width: 10%;
    }
    &.m-r-5 {
      margin-right: 5px;
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
  value?: string | number;
  maxLength?: number;
  disabled?: boolean;
}

const Input = forwardRef((props: IProps, ref) => {
  return <S.Input {...props} ref={ref as ForwardedRef<HTMLInputElement>} />;
});

Input.displayName = 'Input';
export default Input;
