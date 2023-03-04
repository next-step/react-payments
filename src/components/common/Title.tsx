import React from 'react';
import styled from '@emotion/styled';

const S = {
  Title: styled.h2`
    margin-bottom: 60px;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #383838;
    cursor: pointer;
  `,
};

interface ITitle {
  onClick?: () => void;
  text: string;
}

const Title = ({ onClick, text }: ITitle) => {
  return <S.Title onClick={onClick}>{text}</S.Title>;
};

export default Title;
