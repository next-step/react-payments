import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';

const S = {
  Title: styled.h2`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  Text: styled.span`
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: ${COLOR.BLACK};
  `,
  SvgWrapper: styled.div<{ isArrow: boolean }>`
    display: ${(props) => (props.isArrow ? 'block' : 'none')};
    width: 9px;
    height: auto;
    margin-right: 25px;
    & > img {
      width: 100%;
      height: auto;
    }
  `,
};

interface ITitle {
  onClick?: () => void;
  text: string;
  isArrow?: boolean;
}

const Title = ({ onClick, text, isArrow }: ITitle) => {
  return (
    <S.Title onClick={onClick}>
      <S.SvgWrapper isArrow={isArrow ?? false}>
        <img src="/svg/arrow.svg" />
      </S.SvgWrapper>
      <S.Text>{text}</S.Text>
    </S.Title>
  );
};

export default Title;
