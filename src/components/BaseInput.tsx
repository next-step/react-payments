import { ChangeEvent } from 'react';

interface Props {
  maxLength?: number;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

export default function BaseInput({ type, placeholder, className, ...props }: Props) {
  return (
    <input
      className={`${config.BASIC_CLASS} ${className}`}
      placeholder={placeholder}
      type={type || config.BASIC_TYPE}
      {...props}
    />
  );
}