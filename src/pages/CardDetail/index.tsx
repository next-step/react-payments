import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardNickNameForm } from '@/components/common';
import {
  Button,
  ColumnLayout,
  CreditCard,
  Text,
  TopNavigation,
} from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();
  const { go } = useRouter();

  const [card, setCard] = useState<CardData>();
  const haveCard = card && Object.values(card).every(Boolean);

  useEffect(() => {
    const cards = getItem(StorageKey.CARD_LIST) as CardData[];
    const selectedCard = cards.find((card) => card.UID == params.cardId);
    setCard(selectedCard);
  }, []);

  if (!haveCard) {
    return (
      <ColumnLayout css={{ height: '100%' }}>
        <Text>카드가 존재하지 않습니다.</Text>
        <Button
          css={{ marginTop: '$3', width: '$10' }}
          onClick={() => go('/list')}
        >
          카드 목록
        </Button>
      </ColumnLayout>
    );
  }

  return (
    <ColumnLayout css={{ gap: '$3' }}>
      <TopNavigation>카드 별칭 수정하기</TopNavigation>
      <CreditCard size="small" cardInfo={card} />
      <CardNickNameForm card={card} />
    </ColumnLayout>
  );
};
