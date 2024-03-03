import { PropsWithChildren } from 'react';
import { AppLayoutBody } from './AppLayoutBody';
import { AppLayoutFooter } from './AppLayoutFooter';
import { AppLayoutHeader } from './AppLayoutHeader';
import { Box, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const AppLayout = ({ children }: PropsWithChildren) => (
  <Box
    as="main"
    backgroundColor={styleToken.color.white}
    width="375px"
    minWidth="375px"
    height="700px"
    position="relative"
    borderRadius="15px"
    border={`1px solid ${styleToken.color.body}`}
  >
    <AppLayoutDisplay>{children}</AppLayoutDisplay>
  </Box>
);

const AppLayoutDisplay = ({ children }: PropsWithChildren) => (
  <VStack as="section" height="100%" padding="16px 24px">
    {children}
  </VStack>
);

AppLayout.Root = AppLayout;
AppLayout.Header = AppLayoutHeader;
AppLayout.Body = AppLayoutBody;
AppLayout.Footer = AppLayoutFooter;

AppLayout.displayName = 'AppLayout';
