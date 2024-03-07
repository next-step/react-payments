import { PropsWithChildren } from 'react';
import { Box, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

export const AppLayout = ({ children }: PropsWithChildren) => (
  <Box
    as="main"
    position="relative"
    backgroundColor={styleToken.color.white}
    width="375px"
    minWidth="375px"
    height="700px"
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

const AppLayoutHeader = ({ children }: PropsWithChildren) => (
  <Box as="header" width={styleToken.width.w100} minHeight="30px">
    {children}
  </Box>
);

const AppLayoutBody = ({ children }: PropsWithChildren) => (
  <VStack as="section" width={styleToken.width.w100} height="100%" flexGrow={1} overflow="auto">
    <VStack flex="1 0 auto">{children}</VStack>
  </VStack>
);

const AppLayoutFooter = ({ children, ...props }: PropsWithChildren<{ height?: string }>) => (
  <Box as="footer" width={styleToken.width.w100} minHeight="30px" {...props}>
    {children}
  </Box>
);

AppLayout.Root = AppLayout;
AppLayout.Header = AppLayoutHeader;
AppLayout.Body = AppLayoutBody;
AppLayout.Footer = AppLayoutFooter;

AppLayout.displayName = 'AppLayout';
