import { useEffect, useRef } from 'react';
import { INIT_CARD_STATE, FIELD_ORDERS } from '@/constants/index';

const useNextIndexRef = () => {
  const nextFieldId = useRef<string | null>(`${FIELD_ORDERS[0]}${0}`);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nextFieldId.current === null) return;
    inputRef?.current?.focus();

    nextFieldId.current = null;
  }, [nextFieldId.current]);

  return {
    nextFieldId,
    inputRef,
    setNext(fieldKey: keyof typeof INIT_CARD_STATE, index: number) {
      if (index >= 0) {
        nextFieldId.current = `${fieldKey}${index}`;
      } else {
        nextFieldId.current = `${
          FIELD_ORDERS[FIELD_ORDERS.findIndex((v) => v === fieldKey) + 1]
        }0`;
      }
    },
  };
};

export default useNextIndexRef;
