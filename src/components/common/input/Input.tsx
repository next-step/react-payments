import classNames from 'classnames';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends BaseInputProps {
  type: 'text' | 'password';
}

const Input = forwardRef(
  ({ type = 'text', className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <input type={type} className={classNames('input-basic', className)} {...props} ref={ref} />
    );
  },
);

export default Input;
