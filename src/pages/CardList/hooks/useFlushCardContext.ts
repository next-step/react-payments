import { useEffect } from 'react';

import { useCardContextApiSelector } from '@/stores/CardCreatorContext';

export function useFlushCardContextStore() {
  const cardContextApi = useCardContextApiSelector();

  useEffect(() => {
    cardContextApi?.dispatch({});
  }, [cardContextApi]);
}
