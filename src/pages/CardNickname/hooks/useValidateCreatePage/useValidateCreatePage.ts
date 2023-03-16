import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { routes } from '@/routes';
import { useValidateCardInfos } from '@/hooks';

export function useValidateCreatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();

  const invalidInfo = useValidateCardInfos();

  useEffect(() => {
    if (!cardId && invalidInfo) {
      alert('카드 정보를 모두 등록해주세요.');
      navigate(routes.cardCreator);
    }
  }, [cardId, navigate, invalidInfo]);
}
