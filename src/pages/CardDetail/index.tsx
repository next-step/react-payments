import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CardNickNameForm } from '@/components/domain';
import { CreditCard, Layout, TopNavigation } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getCards } from '@/storage/service';
import { CardData } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();
  const { go } = useRouter();

  const [card, setCard] = useState<CardData>();

  useEffect(() => {
    const cards = getCards();
    const selectedCard = cards.find((card) => card.UID == params.cardId);
    if (!selectedCard) {
      alert('해당하는 카드가 존재하지 않습니다.');
      go('/list');
    }

    setCard(selectedCard);
  }, []);

  return (
    <Layout variant="column" justify="start">
      {card && (
        <>
          <TopNavigation>카드 별칭 수정하기</TopNavigation>
          <CreditCard size="small" cardInfo={card} />
          <CardNickNameForm card={card} />
        </>
      )}
    </Layout>
  );
};
