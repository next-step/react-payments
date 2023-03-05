import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import NewCardInputContainer from './NewCardInputContainer';

type HTMLInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface InputProps extends HTMLInputProps {
  label: string;
  widthSize?: 'lg' | 'md' | 'sm';
  textAlign?: 'center' | 'left';
  inputLimitCount?: number;
  inputCount?: number;
}

const NewCardInput = ({
  label,
  widthSize,
  textAlign,
  inputLimitCount,
  inputCount,
  ...inputProps
}: InputProps) => (
  <NewCardInputContainer
    size={widthSize}
    inputLabel={label}
    inputLimitCount={inputLimitCount}
    inputCount={inputCount}
  >
    <input className="input-form" {...inputProps} style={{ textAlign }} />
  </NewCardInputContainer>
);

NewCardInput.defaultProps = {
  widthSize: 'lg',
  textAlign: 'center',
  inputLimitCount: 0,
  inputCount: 0,
};

export default NewCardInput;
