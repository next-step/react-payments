import React from 'react';
import { InputBasic, InputContainer, InputTitle } from './styles';

const CardPassword = () => {
  return (
    <InputContainer>
      <InputTitle>카드 비밀번호</InputTitle>
      <InputBasic width={15} type="password" />
      &nbsp;
      <InputBasic width={15} type="password" />
      &nbsp;
      <InputBasic width={15} type="password" />
      &nbsp;
      <InputBasic width={15} type="password" />
      &nbsp;
    </InputContainer>
  );
};

export default CardPassword;
