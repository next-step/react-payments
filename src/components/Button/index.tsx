import React from 'react';
import { ButtonBox, ButtonText } from './styles';

interface ButtonProps {
  /**
   * 버튼 내용
   */
  label: string;

  /**
   * 버튼 width, 픽셀이 아닌 %로 적용됨
   */
  width?: number;

  /**
   * 버튼 margin-top: 11.5rem 적용 여부
   */
  mt50?: boolean;

  /**
   * 버튼 onClick event 설정
   */
  onClick?: () => void;
}

const Button = ({ label, width, mt50, onClick }: ButtonProps) => {
  return (
    <ButtonBox width={width} mt50={mt50} onClick={onClick}>
      <ButtonText>{label}</ButtonText>
    </ButtonBox>
  );
};

export default Button;
