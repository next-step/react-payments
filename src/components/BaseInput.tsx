import { ChangeEvent, memo } from 'react';

interface Props {
  maxLength?: number;
  type?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

function BaseInput({ type, className = '', onChange, ...props }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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