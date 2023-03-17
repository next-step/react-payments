import Input from '../common/Input';
import React, { RefObject } from 'react';
import { DigitType } from '../../type/card';
import styled from '@emotion/styled';
import { COLOR } from '../../constant/color';
import { useCardValidation } from '../../context/CardContext';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: DigitType;
  refs: RefObject<HTMLInputElement>;
}
export const S = {
  InputContainer: styled.div`
    margin: 16px 0;
  `,
  InputTitle: styled.label`
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
  Error: styled.span`
    font-size: 10px;
    color: ${COLOR.RED};
  `,
};

const Hyphen = () => {
  return <S.Hyphen>-</S.Hyphen>;
};

const InputDigit = ({ onChange, value, refs }: IProps) => {
  const { validDigit } = useCardValidation();
  return (
    <S.InputContainer>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <Input
          id="digit1"
          name="digit1"
          onChange={onChange}
          type="number"
          value={value.digit1}
          placeholder={'1234'}
          ref={refs}
        />
        <Hyphen />
        <Input
          id="digit2"
          name="digit2"
          onChange={onChange}
          type="number"
          value={value.digit2}
          placeholder={'5678'}
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
      {!validDigit && value.digit1 && (
        <S.Error>유효한 카드 번호를 입력해 주세요.</S.Error>
      )}
    </S.InputContainer>
  );
};

export default InputDigit;
