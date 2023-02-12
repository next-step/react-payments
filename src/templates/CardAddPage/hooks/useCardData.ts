import { 카드_추가_초깃값 } from '@/constants';
import { useCardStore } from '@/hooks';
import { CardProps } from 'components';
import { useState } from 'react';

const useCardData = () => {
  const { addCard } = useCardStore();
  const [cardData, setCardData] = useState<CardProps>(카드_추가_초깃값);

  const cardOwnerLength = `${cardData.cardOwner?.length} / 30`;

  const updateCard = (card: CardProps) => setCardData((prev) => ({ ...prev, ...card }));

  return {
    cardData,
    cardOwnerLength,
    submitCard: addCard,
    updateCard,
  };
};

export default useCardData;
