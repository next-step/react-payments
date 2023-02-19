import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
}

const InputDigit = ({ onChange, value1, value2, value3, value4 }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <Input
          id={'digit1'}
          name={'digit1'}
          onChange={onChange}
          type={'text'}
          value={value1}
          maxLength={4}
        />
        {value1?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit2'}
          name={'digit2'}
          onChange={onChange}
          type={'text'}
          value={value2}
          maxLength={4}
        />
        {value2?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit3'}
          name={'digit3'}
          onChange={onChange}
          type={'password'}
          value={value3}
          maxLength={4}
        />
        {value3?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit4'}
          name={'digit4'}
          onChange={onChange}
          type={'password'}
          value={value4}
          maxLength={4}
        />
      </S.InputBox>
    </S.InputContainer>
  );
};

export default InputDigit;
