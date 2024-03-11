import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardTop = ({ children }: Props) => {
  return <div className="card-top">{children}</div>;
};
