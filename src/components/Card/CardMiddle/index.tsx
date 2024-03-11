import { Box } from '@/components/atoms/Box';
import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardMiddle = ({ children, className, ...divProps }: Props & ComponentProps<'div'>) => {
  return (
    <Box
      className={clsx('w-100', 'h-100', 'ml-30', 'flex', 'items-center', className)}
      {...divProps}
    >
      {children}
    </Box>
  );
};
