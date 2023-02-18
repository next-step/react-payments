import { ChangeEvent, forwardRef, InputHTMLAttributes, memo } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  nextFocus?: HTMLInputElement;
  filter?: (text: string) => string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

const Input = forwardRef((
  {
    type,
    className,
    onChange,
    maxLength,
    nextFocus,
    filter,
    ...props
  }: Props, inputRef) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (filter) e.target.value = filter(e.target.value);
    const value = e.target.value;

    if (maxLength && value.length === maxLength) {
      nextFocus?.focus();
    }
    onChange?.(e);
  };

  return (
    <input
      ref={inputRef}
      className={`${config.BASIC_CLASS} ${className || ''}`}
      type={type || config.BASIC_TYPE}
      onChange={handleChange}
      maxLength={maxLength}
      {...props}
    />
  );
});

Input.displayName = 'BaseInput';

export default memo(Input);