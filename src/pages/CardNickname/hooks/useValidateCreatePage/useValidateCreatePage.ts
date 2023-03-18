import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { routes } from '@/routes';
import { useGetInvalidCardInputState } from '@/hooks';
import { useErrorContextApiSelector } from '@/stores/ErrorContext';

export function useValidateCreatePage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const errorContextApis = useErrorContextApiSelector();

  const invalidElement = useGetInvalidCardInputState();

  useEffect(() => {
    if (!cardId && invalidElement) {
      errorContextApis?.dispatch({ type: invalidElement.key, message: invalidElement.getInvalidMessage() });
      navigate(routes.cardCreator);
    }
  }, [cardId, navigate, invalidElement, errorContextApis]);
}
