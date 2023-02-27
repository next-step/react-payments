import { cls } from '@/utils';
import { ChangeEvent, InputHTMLAttributes } from 'react';

export type Width = 'w-15' | 'w-25' | 'w-50' | 'w-75' | 'w-100' | 'w-full';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'basic' | 'underline';
  width?: Width;
  formatter?: (str: string) => string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ kind = 'basic', width = 'w-full', onChange, formatter, disabled, ...props }: InputProps) {
  const onChangeWithFormatter = (e: ChangeEvent<HTMLInputElement>) => {
    if (formatter) {
      e.target.value = formatter(e.target.value);
    }

    onChange?.(e);
  };

  return (
    <input
      {...props}
      onChange={onChangeWithFormatter}
      disabled={disabled}
      className={cls(
        'h-10 outline-none  bg-transparent',
        'flex items-center justify-center text-center',
        width,
        kind === 'underline' ? 'border-b-2 border-gray-200' : '',
        'placeholder:text-sm',
      )}
    />
  );
}

export default Input;
