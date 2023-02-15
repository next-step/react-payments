import { ChangeEvent, memo } from 'react';

interface Props {
  maxLength?: number;
  type?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formatter?: (value: string) => string;
  placeholder?: string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

function BaseInput({ type, className, onChange, formatter, ...props }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (formatter) {
      e.target.value = formatter(e.target.value);
      onChange?.(e);

      return;
    }

    onChange?.(e);
  };

  return (
    <input
      className={`${config.BASIC_CLASS} ${className}`}
      type={type || config.BASIC_TYPE}
      onChange={handleChange}
      {...props}
    />
  );
}

export default memo(BaseInput);