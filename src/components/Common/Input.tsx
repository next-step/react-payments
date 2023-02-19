import { InputHTMLAttributes } from 'react';

export type Width = 'w-15' | 'w-25' | 'w-50' | 'w-75' | 'w-100';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'basic' | 'underline';
  width?: Width;
}

function Input({ className, kind = 'basic', width = 'w-25', ...props }: InputProps) {
  const inputStyle = kind === 'basic' ? 'input-basic' : 'input-underline';

  return <input {...props} className={`${className} ${inputStyle} ${width}`} />;
}

export default Input;
