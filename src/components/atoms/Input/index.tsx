import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props<T> {
  value: T;
  type: ComponentProps<'input'>['type'];
  onChange: ComponentProps<'input'>['onChange'];
}

export const Input = <T extends string | number>({
  value,
  type,
  className,
  onChange,
  ...inputProps
}: Props<T> & ComponentProps<'input'>) => {
  return (
    <input
      className={clsx('input-basic', className)}
      type={type}
      value={value}
      onChange={onChange}
      {...inputProps}
    />
  );
};
