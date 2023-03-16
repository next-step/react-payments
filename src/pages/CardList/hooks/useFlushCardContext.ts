import { useEffect } from 'react';

import { useCardContextApiSelector } from '@/stores/CardContext';

export function useFlushCardContextStore() {
  const cardContextApis = useCardContextApiSelector();

  useEffect(() => {
    cardContextApis?.dispatch({});
  }, [cardContextApis]);
}
