import { useMemo } from 'react';

import { createObjectWithArrayProps } from '@/utils/object';

const elementObject = createObjectWithArrayProps<HTMLInputElement | null>();

function useSequentialFocusWithElements() {
  return useMemo(
    () => ({
      elementMap: elementObject.object,
      setElement: elementObject.setProp,
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

export { useSequentialFocusWithElements };
