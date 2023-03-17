import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';

const S = {
  Button: styled.button`
    cursor: pointer;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: bold;
    &:disabled {
      cursor: default;
    }
  `,
};

interface IButton {
  onClick?: () => void;
  text: string;
  color?: string;
  disabled?: boolean;
}

const Button = ({ onClick, text, color, disabled }: IButton) => {
  return (
    <S.Button
      onClick={onClick}
      color={color ?? COLOR.BLACK}
      disabled={disabled ?? false}
    >
      {text}
    </S.Button>
  );
};

export default Button;
