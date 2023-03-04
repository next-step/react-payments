import { useEffect, useState } from 'react';

import { CardNickNameForm, EmptyCard } from '@/components/domain';
import { Button, CreditCard } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getLatestCard } from '@/storage/service';
import { CardData } from '@/types';

export const CardRegisterConfirmPage = () => {
  const [card, setCard] = useState<CardData>();
  const { go } = useRouter();

  useEffect(() => {
    const newCard = getLatestCard();
    setCard(newCard);
  }, []);

  if (!card) {
    return <EmptyCard />;
  }

  return (
    <CardRegisterConfirmPageLayout>
      <CreditCard size="small" cardInfo={card} />
      <h2>카드 등록이 완료되었습니다.</h2>
      <CardNickNameForm card={card} />
      <Button
        css={{ position: 'absolute', bottom: '$5', width: '$11' }}
        onClick={() => go('/list')}
      >
        카드 목록
      </Button>
    </CardRegisterConfirmPageLayout>
  );
};

const CardRegisterConfirmPageLayout = styled('div', {
  position: 'relative',
  height: '100%',
  margin: '0 2rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'column',
  placeContent: 'end center',
});
