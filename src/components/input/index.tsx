import { HTMLProps } from 'react';
import * as styles from './index.css';
import { cn } from '@/utils';

interface InputProps extends HTMLProps<HTMLInputElement> {}

const Input = (props: InputProps) => {
  const { className, ...rest } = props;
  const classNames = cn([styles.inputElement, className ?? '']);
  return (
    <div className={styles.inputBox}>
      <input {...rest} className={classNames} />
    </div>
  );
};

export default Input;
