/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import classnames from 'classnames';

type InputProps = {
  styleType?: 'basic' | 'underline' | 'fixed';
} & InputHTMLAttributes<HTMLInputElement>;

function Input({ styleType, className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  const styleTypeCss = {
    basic: 'input-basic',
    underline: 'input-underline',
    fixed: 'input-fixed',
  }[styleType!];

  return <input className={classnames(styleTypeCss, className)} ref={ref} {...props} />;
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
