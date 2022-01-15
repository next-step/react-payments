import React from 'react';
import { InputBasic, InputBox, InputContainer, InputTitle } from './styles';

const ExpirationDate = () => {
  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width={50}>
        <InputBasic type="text" placeholder="MM" />
        <InputBasic type="text" placeholder="YY" />
      </InputBox>
    </InputContainer>
  );
};

export default ExpirationDate;
