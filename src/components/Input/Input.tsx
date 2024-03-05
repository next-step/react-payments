import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'input'> {
  type?: ComponentPropsWithoutRef<'input'>['type'];
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
