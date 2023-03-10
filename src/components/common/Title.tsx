import React from 'react';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
import ArrowIcon from '../icon/ArrowIcon';

interface ITitle {
  onClick?: () => void;
  text: string;
  isArrow?: boolean;
}

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
  ArrowWrapper: styled.div<{ isArrow: ITitle['isArrow'] }>`
    display: ${(props) => (props.isArrow ? 'block' : 'none')};
    width: auto;
    height: 16px;
    margin-right: 25px;
  `,
};

const Title = ({ onClick, text, isArrow }: ITitle) => {
  return (
    <S.Title onClick={onClick}>
      <S.ArrowWrapper isArrow={isArrow ?? false}>
        <ArrowIcon width="100%" height="100%" color={COLOR.BLACK} />
      </S.ArrowWrapper>
      <S.Text>{text}</S.Text>
    </S.Title>
  );
};

export default Title;
