import { useMemo } from 'react';

import { createObjectWithArrayProps } from '@/utils/object';

const elementObject = createObjectWithArrayProps<HTMLInputElement | null>();

export function useSequentialFocusWithElements() {
  return useMemo(
    () => ({
      elementMap: elementObject.object,
      setElement: elementObject.setProp,
      // TODO: 다음 key 설정하기 + key들의 순서를 다루는 객체 설정하기
      toTheNextElement: (key: string, currentElementIndex: number, canProgress: boolean) => {
        const elementList = elementObject.object?.[key];
        if (!elementList) return;

        if (document.activeElement === elementList[currentElementIndex] && canProgress) {
          elementList[currentElementIndex + 1]?.focus();
        }
      },
    }),
    []
  );
}
