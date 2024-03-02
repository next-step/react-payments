import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

type BaseInputProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

interface Props extends BaseInputProps {
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
