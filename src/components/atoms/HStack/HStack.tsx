import { HTMLAttributes, PropsWithChildren } from 'react';

export default function HStack({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={['flex-center', className].join(' ')} {...rest}>
      {children}
    </div>
  );
}
