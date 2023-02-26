import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
}

const InputName = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 소유자 이름(선택)</S.InputTitle>
      <S.InputTitle>{value?.length + '/30'}</S.InputTitle>
      <Input
        id="name"
        name="name"
        onChange={onChange}
        type={'text'}
        placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
        maxLength={30}
        value={value}
      />
    </S.InputContainer>
  );
};

export default InputName;
