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
  `,
};

interface IButton {
  onClick?: () => void;
  text: string;
  color?: string;
}

const Button = ({ onClick, text, color }: IButton) => {
  return (
    <S.Button onClick={onClick} color={color ?? COLOR.BLACK}>
      {text}
    </S.Button>
  );
};

export default Button;
