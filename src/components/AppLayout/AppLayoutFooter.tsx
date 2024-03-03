import { PropsWithChildren } from 'react';
import { VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const AppLayoutFooter = ({ children }: PropsWithChildren) => (
  <VStack as="footer" width={styleToken.width.w100} minHeight="30px">
    {children}
  </VStack>
);

AppLayoutFooter.displayName = 'AppLayoutFooter';
