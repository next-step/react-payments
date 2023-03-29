import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useFetchCardList } from '@/hooks/useFetchCardList';
import { routes } from '@/routes';
import { useCardApiContext } from '@/stores/CardContext';
import { entryObject } from '@/utils';

export function useValidateUpdatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const cardContextApi = useCardApiContext();

  const { cardList } = useFetchCardList();

  useEffect(
    function checkIfCorrectPageAccess() {
      if (!cardId || !cardList) return;

      const card = cardList[cardId];
      if (!card) {
        alert('해당 카드가 존재하지 않습니다.');
        navigate(routes.home);
        return;
      }

      entryObject(card).forEach(([cardStateType, cardStateList]) => {
        cardStateList.forEach(({ value }, index) => {
          cardContextApi?.dispatch({ type: cardStateType, payload: { value, index } });
        });
      });
    },
    [cardId, cardList, navigate, cardContextApi]
  );
}
