import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { CardContext } from '../../../App';
import { useQueryParams } from '../../../hooks/useQueryParams';
import { CardInfo } from '../../../types';

export const useEditCardName = () => {
  const [cardState, setCardState] = useState<CardInfo | null>(null);
  const { params } = useQueryParams();
  const id = params.get('id');

  const cardList = CardContext.useSelector(({ context }) => context.cardList);
  const targetCard = cardList.find((card) => card.id === id);

  const handleNickname = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!cardState) return;
      setCardState((prev) => ({ ...prev!, nickname: value }));
    },
    [cardState]
  );

  useEffect(() => {
    if (targetCard) {
      setCardState(targetCard);
    }
  }, [targetCard]);

  return {
    cardState,
    handleNickname,
  };
};
