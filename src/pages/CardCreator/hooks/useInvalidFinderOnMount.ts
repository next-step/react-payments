import { useEffect, useRef } from 'react';
import { TCardState, findInvalidStoreAndFocus } from '@/utils/card';

export function useInvalidFinderOnMount(cardStore?: TCardState[][] | null) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!cardStore || hasRun.current) return;

    findInvalidStoreAndFocus(cardStore);
    hasRun.current = true;
  }, [cardStore]);
}
