import React from 'react';
import { InputBox, InputContainer, InputTitle, InputBasic } from './styles';

const CardName = () => {
  return (
    <InputContainer>
      <InputTitle>카드 번호</InputTitle>
      <InputBox>
        <InputBasic type="text" />
        <InputBasic type="text" />
        <InputBasic type="password" />
        <InputBasic type="password" />
      </InputBox>
    </InputContainer>
  );
};

export default CardName;
