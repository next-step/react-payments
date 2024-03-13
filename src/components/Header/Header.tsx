import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

const Header = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'h1'>) => {
  return (
    <h1 className={classNames('page-title', className)} {...props}>
      {children}
    </h1>
  );
};

export default Header;
