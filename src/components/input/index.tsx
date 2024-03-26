import * as styles from './index.css';
import { cn } from '@/utils';
import { forwardRef } from 'react';
import type { ComponentProps } from 'react';
interface InputProps extends ComponentProps<'input'> {
  type?: 'default' | 'underline';
  htmpType?: ComponentProps<'input'>['type'];
  block?: boolean;
}

const Input = forwardRef(
  (
    {
      className,
      htmpType = 'text',
      type = 'default',
      block = false,
      ...rest
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement> | undefined
  ) => {
    const classNames = cn([styles.inputElement, className]);
    return (
      <div
        className={cn([styles.inputBox[type], styles.inputBlock[`${block}`]])}
      >
        <input {...rest} ref={ref} className={classNames} type={htmpType} />
      </div>
    );
  }
);
export default Input;
