import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardType = ({ children }: Props) => {
  return <div className="empty-card">{children}</div>;
};
