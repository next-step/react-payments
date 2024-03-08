import { PropsWithChildren } from 'react';
import { Stack } from '@/shared/components';
import type { AsProps, StyleProps } from '@/shared/types';

type VStackProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      spacing?: string;
    }
>;
export const VStack = ({ children, spacing, ...props }: VStackProps) => (
  <Stack flexDirection="column" spacing={spacing} {...props}>
    {children}
  </Stack>
);

VStack.displayName = 'VStack';
