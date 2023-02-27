import { RefObject, useMemo } from 'react';

function useSequentialFocusWithElements(elementsRef: RefObject<(HTMLElement | null)[]>) {
  return useMemo(
    () => ({
      toTheNextElement: (currentElementIndex: number, canProgress: boolean) => {
        if (document.activeElement === elementsRef.current?.[currentElementIndex] && canProgress) {
          elementsRef.current[currentElementIndex + 1]?.focus();
        }
      },
    }),
    [elementsRef]
  );
}

export { useSequentialFocusWithElements };
