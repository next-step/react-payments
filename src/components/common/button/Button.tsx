import * as S from './Button.style.ts';
import { ButtonHTMLAttributes } from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <S.Button {...props}>{props.children}</S.Button>;
};

export default Button;
