import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props {
  type: ComponentProps<'button'>['type'];
  onClick: ComponentProps<'button'>['onClick'];
}

export const Button = ({
  children,
  className,
  ...buttonProps
}: Props & ComponentProps<'button'>) => {
  return (
    <button className={clsx('btn-init', className)} {...buttonProps}>
      {children}
    </button>
  );
};
