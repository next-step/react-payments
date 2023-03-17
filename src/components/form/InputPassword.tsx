import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: {
    password1: string;
    password2: string;
  };
}

const InputPassword = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 비밀번호</S.InputTitle>
      <Input
        id="password1"
        name="password1"
        onChange={onChange}
        type={'password'}
        className={'w-10 m-r-5'}
        maxLength={1}
        value={value.password1}
      />
      <Input
        id="password2"
        name="password2"
        onChange={onChange}
        type={'password'}
        className={'w-10 m-r-5'}
        maxLength={1}
        value={value.password2}
      />
      <Input
        id="password3"
        name="password3"
        type={'password'}
        className={'w-10 m-r-5'}
        disabled={true}
        value={'●'}
      />
      <Input
        id="password4"
        name="password4"
        type={'password'}
        className={'w-10'}
        disabled={true}
        value={'●'}
      />
      <S.Error>비밀번호를 입력해 주세요.</S.Error>
    </S.InputContainer>
  );
};

export default InputPassword;
