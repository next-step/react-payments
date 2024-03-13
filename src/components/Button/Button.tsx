import { PropsWithChildren, ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

interface Props extends ComponentPropsWithoutRef<'span'> {
  variant?: 'text' | 'contained' | 'outlined';
}

const Button = ({
  variant = 'text',
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <button className={classNames(`button-${variant}`, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
