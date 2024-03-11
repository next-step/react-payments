import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardBottom = ({ children }: Props) => {
  return <div className="card-bottom">{children}</div>;
};
