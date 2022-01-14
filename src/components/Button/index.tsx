import React from 'react';
import { ButtonText } from './button.style';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.VFC<ButtonProps> = ({
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
