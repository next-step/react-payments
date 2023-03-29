import { useEffect } from 'react';

import { useCardContextApis } from '@/stores/CardContext';

export function useFlushCardContextStore() {
  const cardContextApis = useCardContextApis();

  useEffect(() => {
    cardContextApis?.dispatch({});
  }, [cardContextApis]);
}
