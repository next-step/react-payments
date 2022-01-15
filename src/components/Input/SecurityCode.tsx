import React from 'react';
import { InputBasic, InputContainer, InputTitle } from './styles';

const SecurityCode = () => {
  return (
    <InputContainer>
      <InputTitle>보안코드(CVC/CVV)</InputTitle>
      <InputBasic width={25} type="password" />
    </InputContainer>
  );
};

export default SecurityCode;
