import { HTMLAttributes, PropsWithChildren } from 'react';

export default function VStack({
  children,
  className,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={['flex-column-center', className].join(' ')} {...rest}>
      {children}
    </div>
  );
}
