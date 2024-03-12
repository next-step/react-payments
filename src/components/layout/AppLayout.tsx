import { ReactNode } from 'react';
import { Box } from '@/components/atoms/Box';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return <Box className={'app'}>{children}</Box>;
};
