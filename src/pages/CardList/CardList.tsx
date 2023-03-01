import { useEffect, useMemo, useState } from 'react';

import { ColumnLayout, CreditCard } from '@/components/UI';
import { Text } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

const CardList = () => {
  const { go } = useRouter();
  const [cards, setCards] = useState<CardData[]>([]);
  const haveCards = cards?.length > 0;
  const recentSortedCard = useMemo(
    () => cards.sort((a, b) => Number(b.createdDate) - Number(a.createdDate)),
    [cards]
  );

  useEffect(() => {
    const cardList = getItem(StorageKey.CARD_LIST) as CardData[];
    setCards(cardList);
  }, []);

  if (!haveCards) {
    return <Text size="5"> 카드를 등록해주세요.</Text>;
  }

  return (
    <ColumnLayout>
      <CardListWrapper>
        <div className="flex-column-center gap-20">
          {recentSortedCard.map((card, index) => (
            <div key={index} onClick={() => go(`/detail/${card?.uid}`)}>
              <CreditCard cardInfo={card} size="small" />
            </div>
          ))}
        </div>
      </CardListWrapper>
    </ColumnLayout>
  );
};

const CardListWrapper = styled('div', {
  overflow: 'scroll',
  margin: '0 $12',
  width: '100%',
  height: '$12',
});

export default CardList;
