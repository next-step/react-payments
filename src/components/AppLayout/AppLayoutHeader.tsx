import { PropsWithChildren } from 'react';
import { VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const AppLayoutHeader = ({ children }: PropsWithChildren) => (
  <VStack as="header" width={styleToken.width.w100} minHeight="30px">
    {children}
  </VStack>
);

AppLayoutHeader.displayName = 'AppLayoutHeader';
