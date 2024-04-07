import classNames from 'classnames';
import { type InputHTMLAttributes, forwardRef } from 'react';

export type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

type InputProps = {
  type: 'text' | 'password';
  boxType?: 'input-basic' | 'input-underline';
} & BaseInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', boxType = 'input-basic', className, ...props }, ref) => (
    <input type={type} className={classNames(boxType, className)} {...props} ref={ref} />
  ),
);
