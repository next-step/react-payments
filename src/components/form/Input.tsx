import { forwardRef, InputHTMLAttributes, memo } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  filter?: (text: string) => string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

const Input = forwardRef<HTMLInputElement, IInput>((
  {
    type,
    className = '',
    onChange,
    maxLength,
    filter,
    ...props
  }, inputRef) => {

  return (
    <input
      ref={inputRef}
      className={`${config.BASIC_CLASS} ${className}`}
      type={type || config.BASIC_TYPE}
      onChange={onChange}
      maxLength={maxLength}
      {...props}
    />
  );
});


Input.displayName = 'Input';

export default memo(Input);