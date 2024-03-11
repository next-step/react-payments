import clsx from 'clsx';
import { ComponentProps } from 'react';

interface Props {
  type: ComponentProps<'button'>['type'];
  onClick: ComponentProps<'button'>['onClick'];
}

export const Button = ({
  type,
  onClick,
  children,
  className,
  ...buttonProps
}: Props & ComponentProps<'button'>) => {
  return (
    <button className={clsx(className)} type={type} onClick={onClick} {...buttonProps}>
      {children}
    </button>
  );
};
