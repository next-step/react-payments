import { useEffect, useState } from 'react';

import { Button, CreditCard } from '@/components/UI';
import { DefaultCardInfo } from '@/components/UI/CreditCard';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';

export const CardRegisterConfirmPage = () => {
  const [card, setCard] = useState(DefaultCardInfo);
  const { go } = useRouter();

  useEffect(() => {
    const newCard = getItem(StorageKey.CARD_LIST).at(-1);

    setCard(newCard);
  }, []);
  return (
    <CardRegisterConfirmPageLayout>
      <h2>카드 등록이 완료되었습니다.</h2>
      <CreditCard size="small" cardInfo={card} />
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
