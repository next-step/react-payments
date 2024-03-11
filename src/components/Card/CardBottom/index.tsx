import { Box } from '@/components/atoms/Box';
import clsx from 'clsx';
import { ComponentProps, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const CardBottom = ({ children, className, ...divProps }: Props & ComponentProps<'div'>) => {
  return (
    <Box className={clsx('w-100', 'h-100', 'flex-col', 'items-center', className)} {...divProps}>
      {children}
    </Box>
  );
};
