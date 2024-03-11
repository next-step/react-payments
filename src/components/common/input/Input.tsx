import * as S from './Input.style.ts';
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react';
import { InputVariantType } from './Input.type.ts';
import { INPUT_VARIANT } from './Input.constant.ts';

export interface Props {
  variant?: InputVariantType;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type TextFieldProps = Props & Omit<InputHTMLAttributes<HTMLInputElement>, keyof Props>;

const Input = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { style, variant = INPUT_VARIANT.DEFAULT, onChange, ...rest } = props;

  return (
    <S.Container style={style}>
      <S.TextField {...rest} variant={variant} onChange={onChange} ref={ref} />
    </S.Container>
  );
});

export default Input;
