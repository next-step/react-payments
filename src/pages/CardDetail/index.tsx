import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardNickNameForm, EmptyCard } from '@/components/domain';
import { CreditCard, Layout, TopNavigation } from '@/components/UI';
import { getCards } from '@/storage/service';
import { CardData } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();

  const [card, setCard] = useState<CardData>();

  useEffect(() => {
    const cards = getCards();
    const selectedCard = cards.find((card) => card.UID == params.cardId);
    setCard(selectedCard);
  }, []);

  if (!card) {
    return <EmptyCard />;
  }

  return (
    <Layout variant="column">
      <TopNavigation>카드 별칭 수정하기</TopNavigation>
      <CreditCard size="small" cardInfo={card} />
      <CardNickNameForm card={card} />
    </Layout>
  );
};
