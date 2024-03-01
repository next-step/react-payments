import type { ReactNode } from 'react';
import * as styles from './form-item.css';

interface FormItemProps {
  children: ReactNode;
  label?: ReactNode | string;
  vertical?: boolean;
}

const FormItem = ({ children, label, vertical = false }: FormItemProps) => {
  return (
    <div className={styles.formItem[vertical.toString() as 'true' | 'false']}>
      {label && <span className={styles.formItemLabel}>{label}</span>}
      {children}
    </div>
  );
};

export default FormItem;
