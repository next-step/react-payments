import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Width = 'w-15' | 'w-25' | 'w-50' | 'w-75' | 'w-100';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'basic' | 'underline';
  width?: Width;
  formatter?: (str: string) => string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, kind = 'basic', width = 'w-25', onChange, formatter, ...props }: InputProps) {
  const inputStyle = kind === 'basic' ? 'input-basic' : 'input-underline';

  const onChangeWithFormatter = (e: ChangeEvent<HTMLInputElement>) => {
    if (formatter) {
      e.target.value = formatter(e.target.value);
    }

    onChange && onChange(e);
  };

  return <input {...props} onChange={onChangeWithFormatter} className={`${className} ${inputStyle} ${width}`} />;
}

export default Input;
