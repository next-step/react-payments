import { ChangeEvent, forwardRef, memo } from 'react';

interface Props {
  maxLength?: number;
  type?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  nextFocus?: HTMLInputElement;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

const BaseInput = forwardRef(({ type, className, onChange, maxLength, nextFocus, ...props }: Props, inputRef) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (maxLength && value.length === maxLength) {
      nextFocus && nextFocus.focus();
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

BaseInput.displayName = 'BaseInput';

export default memo(BaseInput);