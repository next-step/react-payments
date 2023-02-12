import { RefObject, useEffect, useRef } from 'react';
//
import { eventAdd, eventRemove } from '@/utils';
import { 기본_이벤트_리스트 } from '@/constants';

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = 기본_이벤트_리스트,
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      el && !el.contains(event.target) && savedCallback.current(event);
    };

    events.forEach((eventName) => eventAdd(document, eventName, handler));

    return () => {
      events.forEach((eventName) => eventRemove(document, eventName, handler));
    };
  }, [events, ref]);
};

export default useClickAway;
