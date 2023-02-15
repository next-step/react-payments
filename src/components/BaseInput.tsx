import { ChangeEvent, memo } from 'react';

interface Props {
  maxLength?: number;
  type?: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const config = {
  BASIC_TYPE: 'text',
  BASIC_CLASS: 'input-basic',
};

function BaseInput({ type, className, ...props }: Props) {
  return (
    <input
      className={`${config.BASIC_CLASS} ${className}`}
      type={type || config.BASIC_TYPE}
      {...props}
    />
  );
}

export default memo(BaseInput);