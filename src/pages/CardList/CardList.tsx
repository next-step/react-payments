import { useCallback, useEffect, useState } from 'react';

import {
  Box,
  ButtonRemove,
  CreditCard,
  Flex,
  Layout,
  ScrollArea,
  Text,
} from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getItem, setItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

const CardList = () => {
  const { go } = useRouter();
  const [cards, setCards] = useState<CardData[]>([]);

  const recentSortedCard =
    cards.sort((a, b) => Number(b.CREATE_DATE) - Number(a.CREATE_DATE)) ?? [];
  const haveCards = recentSortedCard?.length > 0;

  const getStorageCard = useCallback(() => {
    const cardList = getItem(StorageKey.CARD_LIST) as CardData[];
    setCards(cardList ?? []);
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
    <ScrollArea>
      <Layout variant="column" gap="5">
        {recentSortedCard.map((card, index) => (
          <Box
            key={index}
            css={{
              position: 'relative',
            }}
            onClick={() => go(`/detail/${card?.UID}`)}
          >
            <ButtonRemove
              onRight
              onClick={(e) => handleRemoveCard(e, card.UID)}
            />
            <CreditCard cardInfo={card} size="small" />
            <Flex justify="center">
              <Text size="5">{card.NICK_NAME ?? '이름없음'}</Text>
            </Flex>
          </Box>
        ))}
      </Layout>
    </ScrollArea>
  );
};

export default CardList;
