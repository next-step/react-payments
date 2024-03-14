import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type BaseButtonBox = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface ButtonBoxProps extends BaseButtonBox, PropsWithChildren {}

const ButtonBox = ({ className, children }: ButtonBoxProps) => {
  return <div className={classNames(className, 'button-box')}>{children}</div>;
};

export default ButtonBox;
