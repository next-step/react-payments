import * as styles from './index.css';
import { cn } from '@/utils';
import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  type?: 'default' | 'underline';
  htmpType?: ComponentProps<'input'>['type'];
  block?: boolean;
}

const Input = (props: InputProps) => {
  const {
    className,
    htmpType = 'text',
    type = 'default',
    block = false,
    ...rest
  } = props;
  const classNames = cn([styles.inputElement, className]);
  return (
    <div className={cn([styles.inputBox[type], styles.inputBlock[`${block}`]])}>
      <input {...rest} className={classNames} type={htmpType} />
    </div>
  );
};

export default Input;
