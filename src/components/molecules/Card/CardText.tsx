import { PropsWithChildren } from 'react';

type CardTextProps = PropsWithChildren<{
  fontSize?: 'small' | 'big';
  className?: string;
  width?: string;
}>;

export default function CardText({
  fontSize = 'small',
  className,
  width,
  children,
}: CardTextProps) {
  return (
    <span
      className={`card-text${fontSize === 'big' ? '__big' : ''} ${className}`}
      style={{ width }}
    >
      {children}
    </span>
  );
}
