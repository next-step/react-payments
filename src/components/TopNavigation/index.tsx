import { memo } from 'react';

import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';

const TopNavigation = () => {
  const { back } = useRouter();
  return (
    <Navigation>
      <BackButton onClick={back}>⬅</BackButton>
      <Title>카드 추가하기</Title>
    </Navigation>
  );
};

export default memo(TopNavigation);

const Navigation = styled('nav', {
  position: 'absolute',
  top: 0,
  width: '100%',
  overflow: 'hidden',
  height: '56px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const BackButton = styled('button', {
  border: 0,
  width: '16px',
  height: '14px',
  backgroundColor: 'inherit',
  paddingRight: '15px',
});

const Title = styled('p', {
  fontWeight: 500,
  padding: '15px',
});
