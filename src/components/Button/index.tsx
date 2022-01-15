import React from 'react';
import { ButtonBox, ButtonText } from './styles';

interface ButtonProps {
  mt50?: boolean;
}

const index = ({ mt50 = false }: ButtonProps) => {
  return (
    <ButtonBox mt50={mt50}>
      <ButtonText>다음</ButtonText>
    </ButtonBox>
  );
};

export default index;
