import { PropsWithChildren } from 'react';
import { VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const AppLayoutBody = ({ children }: PropsWithChildren) => (
  <VStack as="section" width={styleToken.width.w100} flexGrow={1} overflow="auto">
    {children}
  </VStack>
);

AppLayoutBody.displayName = 'AppLayoutBody';
