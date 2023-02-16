import type { HTMLInputTypeAttribute } from 'react';

type InputProps = {
  type: HTMLInputTypeAttribute;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
  kind: 'basic' | 'underline';
};

function Input(props: InputProps) {
  const inputStyle = props.kind === 'basic' ? 'input-basic' : 'input-underline';

  return <input className={inputStyle} {...props} />;
}

export default Input;
