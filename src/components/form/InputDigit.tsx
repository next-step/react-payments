import Input from '../common/Input';
import React from 'react';
import { DigitType } from '../../type/card';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: DigitType;
}
export const S = {
  InputContainer: styled.div`
    margin: 16px 0;
  `,
  InputTitle: styled.span`
    display: flex;
    align-items: center;
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 4px;
    color: #525252;
  `,
  InputBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.375rem;
    border-radius: 0.25rem;
    background-color: ${COLOR.GREY};
    & > input {
      width: 40px;
      &::placeholder {
        opacity: 0.2;
      }
    }
    &.w-50 {
      width: 50%;
    }
  `,
  Hyphen: styled.span`
    color: ${COLOR.BLACK};
    opacity: 0.3;
  `,
};

const Hyphen = () => {
  return <S.Hyphen>-</S.Hyphen>;
};

const InputDigit = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <Input
          id="digit1"
          name="digit1"
          onChange={onChange}
          type={'text'}
          value={value.digit1}
          placeholder={'1234'}
          maxLength={4}
        />
        <Hyphen />
        <Input
          id="digit2"
          name="digit2"
          onChange={onChange}
          type={'text'}
          value={value.digit2}
          placeholder={'5678'}
          maxLength={4}
        />
        <Hyphen />
        <Input
          id="digit3"
          name="digit3"
          onChange={onChange}
          type={'password'}
          value={value.digit3}
          placeholder={'4321'}
          maxLength={4}
        />
        <Hyphen />
        <Input
          id="digit4"
          name="digit4"
          onChange={onChange}
          type={'password'}
          value={value.digit4}
          placeholder={'9876'}
          maxLength={4}
        />
      </S.InputBox>
    </S.InputContainer>
  );
};

export default InputDigit;
