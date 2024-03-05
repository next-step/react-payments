import type { ReactNode } from 'react';
import * as styles from './form-item.css';

interface FormItemProps {
  children: ReactNode;
  label?: ReactNode | string;
  vertical?: boolean;
  inputId?: string;
}

type LabelProps = Pick<FormItemProps, 'label' | 'inputId'>;

const Label = ({ label, inputId }: LabelProps) => {
  if (!label) {
    return null;
  }
  if (!inputId) {
    return <span className={styles.formItemLabel}>{label}</span>;
  }
  return (
    <label htmlFor={inputId} className={styles.formItemLabel}>
      {label}
    </label>
  );
};

const FormItem = ({
  children,
  label,
  vertical = false,
  inputId,
}: FormItemProps) => {
  return (
    <div className={styles.formItem[vertical.toString() as 'true' | 'false']}>
      <Label label={label} inputId={inputId} />
      {children}
    </div>
  );
};

export default FormItem;
