import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardMiddle = ({ children }: Props) => {
  return <div className="card-middle">{children}</div>;
};
