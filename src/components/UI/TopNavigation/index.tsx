import { memo } from 'react';

import { Text, TopNavbar } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';

const TopNavigation = () => {
  const { back } = useRouter();
  return (
    <TopNavbar>
      <BackButton onClick={back}>{'<'}</BackButton>
      <Text>카드 추가하기</Text>
    </TopNavbar>
  );
};

export default memo(TopNavigation);

const BackButton = styled('button', {
  border: 0,
  padding: '0 1rem',
  fontSize: '$4',
  backgroundColor: 'inherit',
  cursor: 'pointer',
});
