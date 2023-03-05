import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  CreditCard,
  Flex,
  Layout,
  ScrollArea,
  Text,
} from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getCards, removeCard } from '@/storage/service';
import { CardData } from '@/types';

const CardList = () => {
  const { go } = useRouter();
  const [cards, setCards] = useState<CardData[]>([]);

  const recentSortedCard =
    cards.sort((a, b) => Number(b.CREATE_DATE) - Number(a.CREATE_DATE)) ?? [];
  const haveCards = recentSortedCard?.length > 0;

  useEffect(() => {
    const cards = getCards();
    setCards(cards);
  }, []);

  const handleRemoveCard = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    uid: string
  ) => {
    e.preventDefault();
    const filteredCards = removeCard(uid);
    setCards(filteredCards);
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
            <CreditCard cardInfo={card} size="small" />
            <Flex justify="between" css={{ paddingTop: '$1' }}>
              <Text size="5">{card.NICK_NAME ?? '이름없음'}</Text>
              <Button
                variant="removeBtn"
                onClick={(e) => handleRemoveCard(e, card.UID)}
              />
            </Flex>
          </Box>
        ))}
      </Layout>
    </ScrollArea>
  );
};

export default CardList;
