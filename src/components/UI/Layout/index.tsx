import { Flex } from '@/components/UI';
import { styled } from '@/lib/stitches.config';

const Layout = styled(Flex, {
  variants: {
    variant: {
      column: {
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      },
    },
  },
});

export default Layout;
