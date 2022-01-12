import React from 'react';
import { ButtonText } from './button.style';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

const Button: React.VFC<ButtonProps> = ({ text = '다음', onClick }) => {
  return <ButtonText onClick={onClick}>{text}</ButtonText>;
};

export default Button;
