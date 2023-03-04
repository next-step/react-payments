import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardNickNameForm, EmptyCard } from '@/components/domain';
import { ColumnLayout, CreditCard, TopNavigation } from '@/components/UI';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();

  const [card, setCard] = useState<CardData>();

  useEffect(() => {
    const cards = getItem(StorageKey.CARD_LIST) as CardData[];
    const selectedCard = cards.find((card) => card.UID == params.cardId);
    setCard(selectedCard);
  }, []);

  if (!card) {
    return <EmptyCard />;
  }

  return (
    <ColumnLayout css={{ gap: '$3' }}>
      <TopNavigation>카드 별칭 수정하기</TopNavigation>
      <CreditCard size="small" cardInfo={card} />
      <CardNickNameForm card={card} />
    </ColumnLayout>
  );
};
