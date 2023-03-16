import { useEffect } from 'react';

import { useCardContextApiSelector } from '@/stores/CardContext';

export function useFlushCardContextStore() {
  const cardContextApi = useCardContextApiSelector();

  useEffect(() => {
    cardContextApi?.dispatch({});
  }, [cardContextApi]);
}
