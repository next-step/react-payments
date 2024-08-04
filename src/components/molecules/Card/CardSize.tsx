import { PropsWithChildren } from 'react';

export type CardSizeProps = PropsWithChildren<{
  size?: 'small' | 'big';
  hasChip?: boolean;
  backgroundColor?: string;
}>;

export default function CardSize({
  size = 'small',
  hasChip = false,
  backgroundColor,
  children,
}: CardSizeProps) {
  return (
    <div
      className={`${size}-card${hasChip ? '__chip' : ''}`}
      style={{ backgroundColor }}
    >
      {children}
    </div>
  );
}
