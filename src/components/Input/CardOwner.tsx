import React from 'react';
import { InputBasic, InputContainer, InputTitle } from './styles';

const CardOwner = () => {
  return (
    <InputContainer>
      <InputTitle>카드 소유자 이름(선택)</InputTitle>
      <InputBasic type="text" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
    </InputContainer>
  );
};

export default CardOwner;
