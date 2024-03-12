import { ReactNode } from 'react';
import { Box } from '@/components/atoms/Box';

interface Props {
  children: ReactNode;
}

export const RootLayout = ({ children }: Props) => {
  return <Box className={'root'}>{children}</Box>;
};
