import { type InputHTMLAttributes, type DetailedHTMLProps } from 'react';

import classnames from 'classnames';

type BaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputProps = {
  variant: 'basic' | 'secondary' | 'underline';
  className?: string;
  type: string;
} & BaseInputProps;

export default function Input({ variant, className, ...props }: InputProps) {
  return (
    <input className={classnames(`input-${variant}`, className)} {...props} />
  );
}
