import { useEffect } from 'react';

import { useCardApiContext } from '@/stores/CardContext';

export function useFlushCardContextStore() {
  const cardContextApis = useCardApiContext();

  useEffect(() => {
    cardContextApis?.dispatch({});
  }, [cardContextApis]);
}
