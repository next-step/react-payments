import { useEffect, useState } from 'react';

import { CardNickNameForm } from '@/components/domain';
import { Button, CreditCard, Layout } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { getLatestCard } from '@/storage/service';
import { CardData } from '@/types';

export const CardRegisterConfirmPage = () => {
  const [card, setCard] = useState<CardData | null>(null);
  const { go } = useRouter();

  useEffect(() => {
    const newCard = getLatestCard();
    if (!newCard) {
      alert('해당하는 카드가 존재하지 않습니다.');
      go('/list');
    }
    setCard(newCard);
  }, []);

  return (
    <Layout variant="column" justify="center">
      {card && (
        <>
          <CreditCard size="small" cardInfo={card} />
          <h2>카드 등록이 완료되었습니다.</h2>
          <CardNickNameForm card={card} />
          <Button
            css={{ position: 'absolute', bottom: '$5', width: '$11' }}
            onClick={() => go('/list')}
          >
            카드 목록
          </Button>
        </>
      )}
    </Layout>
  );
};
