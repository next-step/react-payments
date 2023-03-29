import { useEffect } from 'react';

import { useCardContextApis } from '@/contexts/CardContext';

export function useFlushCardContextStore() {
  const cardContextApis = useCardContextApis();

  useEffect(() => {
    cardContextApis?.dispatch({});
  }, [cardContextApis]);
}
