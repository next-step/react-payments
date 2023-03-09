import { cls } from '@/utils';
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';

const widthToClassNameMap = {
  xs: 'w-15',
  sm: 'w-25',
  md: 'w-50',
  lg: 'w-75',
  xl: 'w-100',
  full: 'w-full',
};

export type Width = keyof typeof widthToClassNameMap;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  kind?: 'basic' | 'underline';
  width?: Width;
  border?: boolean;
  formatter?: (str: string) => string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ kind = 'basic', width = 'full', onChange, formatter, disabled, ...props }, ref) => {
    const onChangeWithFormatter = (e: ChangeEvent<HTMLInputElement>) => {
      if (formatter) {
        e.target.value = formatter(e.target.value);
      }

      onChange?.(e);
    };

    const widthSize = widthToClassNameMap[width];

    return (
      <input
        ref={ref}
        {...props}
        onChange={onChangeWithFormatter}
        disabled={disabled}
        className={cls(
          'h-10 outline-none  bg-transparent',
          'flex items-center justify-center text-center',
          widthSize,
          kind === 'underline' ? 'border-b-2 border-gray-200' : '',
          'placeholder:text-sm',
        )}
      />
    );
  },
);

export default Input;
