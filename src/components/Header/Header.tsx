import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

type BaseProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Header = ({
  children,
  className,
  ...props
}: PropsWithChildren<BaseProps>) => {
  return (
    <h1 className={classNames('page-title', className)} {...props}>
      {children}
    </h1>
  );
};

export default Header;
