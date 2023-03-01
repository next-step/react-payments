import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  Button,
  ColumnLayout,
  CreditCard,
  InputContainer,
  Text,
  TopNavigation,
} from '@/components/UI';
import { DefaultCardInfo } from '@/components/UI/CreditCard';
import { useRouter } from '@/hooks/useRouter';
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';
import { CardData } from '@/types';

export const CardDetailPage = () => {
  const params = useParams();
  const [card, setCard] = useState(DefaultCardInfo);
  const haveCard = card && Object.values(card).every(Boolean);
  const { go } = useRouter();

  useEffect(() => {
    const cards = getItem(StorageKey.CARD_LIST) as CardData[];
    const selectedCard = cards.find((card) => card.uid == params.cardId);
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
      <InputContainer>
        <input type="text" placeholder="카드 별칭을 입력해주세요." autoFocus />
        <Button css={{ width: '$10' }}>설정</Button>
      </InputContainer>
    </ColumnLayout>
  );
};
