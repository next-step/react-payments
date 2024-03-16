import classNames from 'classnames';
import {type ForwardedRef, type InputHTMLAttributes, forwardRef} from 'react';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  type: 'text' | 'password';
  boxType?: 'input-basic' | 'input-underline';
} & BaseInputProps;

const Input = forwardRef(
  (
    {type = 'text', boxType = 'input-basic', className, ...props}: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => <input type={type} className={classNames(boxType, className)} {...props} ref={ref} />,
);

export default Input;
