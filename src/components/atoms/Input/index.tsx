import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props<T> {
  value: T;
  type: ComponentProps<'input'>['type'];
}

export const Input = <T extends string | number>({
  value,
  type,
  className,
  ...inputProps
}: Props<T> & ComponentProps<'input'>) => {
  return (
    <input className={clsx('input-basic', className)} {...inputProps} type={type} value={value} />
  );
};
