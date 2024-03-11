import { Box } from '@/components/atoms/Box';
import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardTop = ({ children, className, ...divProps }: Props & ComponentProps<'div'>) => {
  return (
    <Box className={clsx('w-100', 'h-100', 'flex', 'items-center', className)} {...divProps}>
      {children}
    </Box>
  );
};
