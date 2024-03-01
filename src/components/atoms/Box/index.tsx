import { ComponentProps } from 'react';

export default function HFlex({ children, className, ...restProps }: ComponentProps<'div'>) {
  return (
    <div className={className} {...restProps}>
      {children}
    </div>
  );
}
