import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value1: string;
  value2: string;
}

const InputPassword = ({ onChange, value1, value2 }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 비밀번호</S.InputTitle>
      <Input
        id={'ps1'}
        name={'ps1'}
        onChange={onChange}
        type={'password'}
        className={'w-15'}
        maxLength={1}
        value={value1}
      />
      <Input
        id={'ps2'}
        name={'ps2'}
        onChange={onChange}
        type={'password'}
        className={'w-15'}
        maxLength={1}
        value={value2}
      />
      <Input
        id={'ps3'}
        name={'ps3'}
        type={'password'}
        className={'w-15'}
        disabled={true}
        placeholder={'*'}
      />
      <Input
        id={'ps4'}
        name={'ps4'}
        type={'password'}
        className={'w-15'}
        disabled={true}
        placeholder={'*'}
      />
    </S.InputContainer>
  );
};

export default InputPassword;
