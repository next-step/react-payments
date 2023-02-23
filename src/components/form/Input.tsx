import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, useCallback } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  filter?: (text: string) => string;
  nextFocus?: () => void;
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
    nextFocus,
    ...props
  }, inputRef) => {

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && maxLength === e.target.value.length) {
      nextFocus?.();
    }
    onChange?.(e);
  }, []);

  return (
    <input
      ref={inputRef}
      className={`${config.BASIC_CLASS} ${className}`}
      type={type || config.BASIC_TYPE}
      onChange={handleChange}
      maxLength={maxLength}
      {...props}
    />
  );
});


Input.displayName = 'Input';

export default memo(Input);