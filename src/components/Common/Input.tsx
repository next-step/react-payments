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
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ kind = 'basic', width = 'full', onChange, disabled, error, ...props }, ref) => {
    const onChangeWithFormatter = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
    };

    const widthSize = widthToClassNameMap[width];

    return (
      <input
        {...props}
        ref={ref}
        onChange={onChangeWithFormatter}
        disabled={disabled}
        className={cls(
          'h-10 outline-none  bg-transparent',
          'flex items-center justify-center text-center',
          widthSize,
          kind === 'underline' ? 'border-b-2 border-gray-200' : '',
          'placeholder:text-sm',
          error
            ? 'focus:border-red-300 focus:bg-red-200 focus:border-2 focus:border-solid focus:rounded'
            : 'focus:border-blue-300 focus:bg-blue-100 focus:border-2 focus:border-solid focus:rounded',
        )}
      />
    );
  },
);

export default Input;
