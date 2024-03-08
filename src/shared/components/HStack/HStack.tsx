import { PropsWithChildren } from 'react';
import { Stack } from '@/shared/components';
import type { AsProps, StyleProps } from '@/shared/types';

type HStackProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      spacing?: string;
    }
>;
export const HStack = ({ children, spacing, ...props }: HStackProps) => (
  <Stack flexDirection="row" spacing={spacing} {...props}>
    {children}
  </Stack>
);

HStack.displayName = 'HStack';
