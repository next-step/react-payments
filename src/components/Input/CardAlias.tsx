import React from 'react';
import { InputContainer, InputUnderline } from './styles';

const CardAlias = () => {
  return (
    <InputContainer flexCenter width={100}>
      <InputUnderline width={75} type="text" placeholder="카드의 별칭을 입력해주세요." />
    </InputContainer>
  );
};

export default CardAlias;
