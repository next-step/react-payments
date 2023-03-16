import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useCardListWithLocalStorage } from '@/hooks/useCardListWithLocalStorage';
import { routes } from '@/routes';

export function useValidateUpdatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const { getCardFromStorage } = useCardListWithLocalStorage();

  useEffect(
    function checkIfCorrectPageAccess() {
      if (!cardId) return;

      getCardFromStorage(cardId, () => {
        alert('해당 카드가 존재하지 않습니다.');
        navigate(routes.home);
      });
    },
    [cardId, getCardFromStorage, navigate]
  );
}
