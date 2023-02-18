import React from 'react';
import styled from '@emotion/styled';

const S = {
  Title: styled.h2`
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    display: flex;
    align-items: center;
    color: #383838;
    cursor: pointer;
  `,
};

interface ITitle {
  onClick?: () => void;
  title: string;
}

export const Title = ({ onClick, title }: ITitle) => {
  return <S.Title onClick={onClick}>{title}</S.Title>;
};
