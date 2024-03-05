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
    <span className={classNames(`button-${variant}`, className)} {...props}>
      {children}
    </span>
  );
};

export default Button;
