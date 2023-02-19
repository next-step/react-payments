import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}

const InputCvc = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>보안코드(CVC/CVV)</S.InputTitle>
      <Input
        id={'cvc'}
        name={'cvc'}
        onChange={onChange}
        type={'password'}
        className={'w-25'}
        maxLength={3}
        value={value}
      />
    </S.InputContainer>
  );
};

export default InputCvc;
