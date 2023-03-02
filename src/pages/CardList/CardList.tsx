import { useCallback, useEffect, useMemo, useState } from 'react';

import { ColumnLayout, CreditCard } from '@/components/UI';
import { Text } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

const CardList = () => {
  const { go } = useRouter();
  const [cards, setCards] = useState<CardData[]>([]);
  const haveCards = cards?.length > 0;
  const recentSortedCard = useMemo(
    () => cards.sort((a, b) => Number(b.CREATE_DATE) - Number(a.CREATE_DATE)),
    [cards]
  );

  const getStorageCard = useCallback(() => {
    const cardList = getItem(StorageKey.CARD_LIST) as CardData[];
    setCards(cardList);
  }, []);

  useEffect(() => {
    getStorageCard();
  }, []);

  const handleRemoveCard = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    uid: string
  ) => {
    e.preventDefault();
    const filteredCards = cards.filter((card) => card.UID != uid);
    setItem(StorageKey.CARD_LIST, filteredCards);
    getStorageCard();
  };

  if (!haveCards) {
    return <Text size="5"> 카드를 등록해주세요.</Text>;
  }

  return (
    <>
      <CardListWrapper>
        <ColumnLayout css={{ gap: '$3' }}>
          {recentSortedCard.map((card, index) => (
            <CardBox key={index}>
              <RemoveButton onClick={(e) => handleRemoveCard(e, card.UID)} />
              <div onClick={() => go(`/detail/${card?.UID}`)}>
                <CreditCard cardInfo={card} size="small" />
              </div>
              <Text
                css={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '$3',
                  fontSize: '$5',
                }}
              >
                {card.NICK_NAME ?? '이름없음'}
              </Text>
            </CardBox>
          ))}
        </ColumnLayout>
      </CardListWrapper>
    </>
  );
};

const CardListWrapper = styled('div', {
  overflow: 'scroll',
  margin: '0 $12',
  width: '100%',
  height: '$12',
});

const CardBox = styled('div', {
  position: 'relative',
});

const RemoveButton = styled('span', {
  position: 'absolute',
  zIndex: '10',
  right: 0,
  padding: '3px 10px',
  fontSize: '$6',
  cursor: 'pointer',
  color: '$grey2',
  '&::before': {
    content: 'ⓧ',
  },
});

export default CardList;
