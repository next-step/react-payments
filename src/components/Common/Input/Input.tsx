import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

function Input({ ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return <input ref={ref} {...props} />;
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
