import classNames from 'classnames';
import { type HTMLAttributes } from 'react';

type BaseInputBoxProps = HTMLAttributes<HTMLDivElement>;

type InputBoxProps = Record<string, unknown> & BaseInputBoxProps;

export const InputBox = ({ className, children, ...props }: InputBoxProps) => (
  <div className={classNames('input-box', className)} {...props}>
    {children}
  </div>
);
