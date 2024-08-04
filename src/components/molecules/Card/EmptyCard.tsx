import { PropsWithChildren } from 'react';

export type EmptyCardProps = PropsWithChildren & {
  onClick?: () => void;
  backgroundColor?: string;
};

export default function EmptyCard({
  onClick,
  children,
  backgroundColor,
}: EmptyCardProps) {
  return (
    <div onClick={onClick} className='empty-card' style={{ backgroundColor }}>
      {children}
    </div>
  );
}
