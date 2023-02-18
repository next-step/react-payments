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
}

export const Title = ({ onClick }: ITitle) => {
  return <S.Title onClick={onClick}>{'< 카드 추가'}</S.Title>;
};
