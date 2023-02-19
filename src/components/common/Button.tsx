import React from 'react';
import styled from '@emotion/styled';

const S = {
  Button: styled.div`
    width: 100%;
    text-align: right;
    cursor: pointer;
  `,
  Span: styled.span`
    margin-right: 10px;
  `,
};

interface IButton {
  onClick?: () => void;
  text: string;
}

const Button = ({ onClick, text }: IButton) => {
  return (
    <S.Button onClick={onClick}>
      <S.Span>{text}</S.Span>
    </S.Button>
  );
};

export default Button;
