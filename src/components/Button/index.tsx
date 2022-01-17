import React from 'react';
import { ButtonBox, ButtonText } from './styles';

interface ButtonProps {
  /**
   * 버튼 내용
   */
  label: string;

  width?: number;
  mt50?: boolean;
  onClick: () => void;
}

/**
 * 카드 하단에 '다음' 버튼
 */
const Button = ({ label, width, mt50, onClick }: ButtonProps) => {
  return (
    <ButtonBox width={width} mt50={mt50} onClick={onClick}>
      <ButtonText>{label}</ButtonText>
    </ButtonBox>
  );
};

export default Button;
