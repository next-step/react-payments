import { HTMLAttributes, PropsWithChildren } from 'react';

export default function Box({
  className,
  onClick,
  children,
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={['button-box', className].join(' ')} onClick={onClick}>
      {children}
    </div>
  );
}
