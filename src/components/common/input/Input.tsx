import { DetailedHTMLProps, ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

type BaseInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

interface InputProps extends BaseInputProps {
  type: 'text' | 'password';
}

const Input = forwardRef(
  ({ type = 'text', className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return <input type={type} className={className} {...props} ref={ref} />;
  },
);

export default Input;
