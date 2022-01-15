import React from 'react';
import { ButtonText } from './button.style';

interface ButtonProps {
  /**
   * 버튼의 텍스트
   */
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.VFC<ButtonProps> = ({
  text = '다음',
  onClick,
  disabled,
}) => {
  return (
    <ButtonText onClick={onClick} disabled={disabled}>
      {text}
    </ButtonText>
  );
};

export default Button;
