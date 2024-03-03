import * as S from './Input.style.ts';
import { InputHTMLAttributes } from 'react';
import { InputVariantType } from './Input.type.ts';
import { INPUT_VARIANT } from './Input.variant.ts';

interface Props {
  variant?: InputVariantType;
}

export type TextFieldProps = Props & Omit<InputHTMLAttributes<HTMLInputElement>, keyof Props>;

const Input = (props: TextFieldProps) => {
  const { title, style, variant = INPUT_VARIANT.DEFAULT, ...rest } = props;

  return (
    <S.Container style={style}>
      <S.TextField variant={variant} {...rest} />
    </S.Container>
  );
};

export default Input;
