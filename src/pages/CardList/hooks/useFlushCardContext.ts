import { useEffect } from 'react';

import { useCardContextApi } from '@/stores/CardContext';

export function useFlushCardContextStore() {
  const cardContextApis = useCardContextApi();

  useEffect(() => {
    cardContextApis?.dispatch({});
  }, [cardContextApis]);
}
