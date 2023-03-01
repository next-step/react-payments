import { memo, PropsWithChildren } from 'react';

import { Text, TopNavbar } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';

const TopNavigation = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();
  return (
    <TopNavbar css={{ display: 'flex', justifyContent: 'center' }}>
      <BackButton onClick={back}>{'<'}</BackButton>
      <Text>{children}</Text>
    </TopNavbar>
  );
};

export default memo(TopNavigation);

const BackButton = styled('button', {
  position: 'absolute',
  left: '0',
  border: 0,
  padding: '0 1rem',
  fontSize: '$4',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});
