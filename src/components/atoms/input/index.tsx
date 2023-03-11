import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, useCallback } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  nextFocus?: () => void;
}

const Input = forwardRef<HTMLInputElement, IInput>((
  {
    type = 'text',
    className = '',
    onChange,
    maxLength,
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
      className={`input-basic ${className}`}
      type={type}
      onChange={handleChange}
      maxLength={maxLength}
      {...props}
    />
  );
});


Input.displayName = 'Input';

export default memo(Input);
