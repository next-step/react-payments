import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const SingleInput = ({ disabled, ...props }: InputProps) => (
  <input
    className={`card-password-input ${disabled ? 'disabled' : ''}`}
    type="password"
    maxLength={1}
    disabled={disabled}
    {...props}
  />
);

export default SingleInput;
