import { cn } from '@/utils';
import * as styles from './index.css';

import type { HTMLProps, ReactNode } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'primary' | 'secondary' | 'text';
  htmlType?: 'button' | 'submit' | 'reset';
  primary?: boolean;
}

const Button = ({
  children,
  className,
  type = 'primary',
  htmlType,
  ...restProps
}: ButtonProps) => {
  const classNames = cn([styles.buttonType[type], className]);
  return (
    <button {...restProps} type={htmlType} className={classNames}>
      {children}
    </button>
  );
};
export default Button;
