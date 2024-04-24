import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const RootLayout = ({ children }: Props) => {
  return <div className={'root'}>{children}</div>;
};
