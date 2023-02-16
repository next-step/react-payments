import type { HTMLInputTypeAttribute } from 'react';

export type Width = 'w-15' | 'w-25' | 'w-50' | 'w-75' | 'w-100';
interface InputProps {
  type?: HTMLInputTypeAttribute;
  className?: string;
  max?: number;
  min?: number;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  name?: string;
  value?: string;
  width?: Width;
  onChange?: () => void;
  kind?: 'basic' | 'underline';
}

function Input({
  type = 'text',
  max,
  min,
  maxLength,
  minLength,
  placeholder,
  name,
  value,
  onChange,
  kind = 'basic',
  width = 'w-100',
  className = '',
}: InputProps) {
  const inputStyle = kind === 'basic' ? 'input-basic' : 'input-underline';

  return (
    <input
      className={`${className} ${inputStyle} ${width}`}
      type={type}
      max={max}
      min={min}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
