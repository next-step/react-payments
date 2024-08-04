import { InputHTMLAttributes } from 'react';

export default function InputUnderLine({
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className={['input-underline', className].join(' ')} {...rest} />
  );
}
