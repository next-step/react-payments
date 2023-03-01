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
import { getItem } from '@/storage/storage';
import { StorageKey } from '@/storage/storageKey';

export const CardDetailPage = () => {
  const params = useParams();
  const [card, setCard] = useState(DefaultCardInfo);
  const haveCard = card && Object.values(card).every(Boolean);

  useEffect(() => {
    const selectedCard = getItem(StorageKey.CARD_LIST).at(params.cardId);
    setCard(selectedCard);
  }, []);

  if (!haveCard) {
    return <Text>카드가 존재하지 않습니다.</Text>;
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
