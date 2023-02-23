import { ChangeEvent, forwardRef, InputHTMLAttributes, memo, Ref } from 'react';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  nextFocus?: HTMLInputElement;
  filter?: (text: string) => string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

const Input = forwardRef<Ref<HTMLInputElement>, IInput>((
  {
    type,
    className,
    onChange,
    maxLength,
    nextFocus,
    filter,
    ...props
  }, inputRef) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (maxLength && e.target.value.length === maxLength) {
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