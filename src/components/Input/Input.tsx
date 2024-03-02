import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type BaseInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props extends BaseInputProps {
  type?: BaseInputProps['type'];
  variant?: 'basic' | 'underline';
}

const Input = ({
  type = 'text',
  variant = 'basic',
  className,
  ...props
}: Props) => {
  return (
    <input
      type={type}
      className={classNames(`input-${variant}`, className)}
      {...props}
    />
  );
};

export default Input;
