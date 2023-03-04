import { Flex } from '@/components/UI';
import { styled } from '@/lib/stitches.config';

const Layout = styled(Flex, {
  variants: {
    variant: {
      column: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});

export default Layout;
