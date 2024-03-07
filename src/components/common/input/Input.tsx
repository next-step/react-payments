import classNames from 'classnames';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends BaseInputProps {
  type: 'text' | 'password';
  boxType?: 'input-basic' | 'input-underline';
}

const Input = forwardRef(
  (
    { type = 'text', boxType = 'input-basic', className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return <input type={type} className={classNames(boxType, className)} {...props} ref={ref} />;
  },
);

export default Input;
