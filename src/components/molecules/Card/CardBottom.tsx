import { PropsWithChildren } from 'react';

type CardBottomProps = PropsWithChildren<{
  as?: 'info' | 'number';
}>;

export default function CardBottom({ as, children }: CardBottomProps) {
  return <div className={`card-bottom${as ? `__${as}` : ''}`}>{children}</div>;
}
