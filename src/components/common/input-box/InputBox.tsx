import classNames from 'classnames';
import {type DetailedHTMLProps, type HTMLAttributes} from 'react';

type BaseInputBoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type InputBoxProps = Record<string, unknown> & BaseInputBoxProps;

const InputBox = ({className, children, ...props}: InputBoxProps) => (
  <div className={classNames('input-box', className)} {...props}>
    {children}
  </div>
);

export default InputBox;
