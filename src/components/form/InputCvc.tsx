import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';
import { useCardValidation } from '../../context/CardContext';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}

const InputCvc = ({ onChange, value }: IProps) => {
  const { validCvc } = useCardValidation();
  return (
    <S.InputContainer>
      <S.InputTitle>보안코드(CVC/CVV)</S.InputTitle>
      <Input
        id="cvc"
        name="cvc"
        onChange={onChange}
        type={'password'}
        className={'w-25'}
        maxLength={3}
        value={value}
      />
      {!validCvc && value && <S.Error>보안코드를 입력해 주세요.</S.Error>}
    </S.InputContainer>
  );
};

export default InputCvc;
