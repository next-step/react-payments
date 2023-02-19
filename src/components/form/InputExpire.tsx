import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}

const InputExpire = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>만료일</S.InputTitle>
      <S.InputBox className={'w-50'}>
        <Input
          id={'expire'}
          name={'expire'}
          onChange={onChange}
          type={'text'}
          placeholder={'MM / YY'}
          value={value}
        />
      </S.InputBox>
    </S.InputContainer>
  );
};

export default InputExpire;
