import { ReactNode } from 'react';
import { Box } from '@/shared/components/atoms/Box';

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return <Box className={'app'}>{children}</Box>;
};
