import { useEffect, useRef } from 'react';

type THookForwardedRef = {
  forwardedRef: React.ForwardedRef<HTMLInputElement | HTMLButtonElement>;
  length?: number; //ref 개수
};

const useForwardedRef = ({ forwardedRef, length = 1 }: THookForwardedRef) => {
  const refs = Array.from({ length }, () => useRef<HTMLInputElement>() as React.RefObject<HTMLInputElement>);
  const ref = refs[0];

  useEffect(() => {
    if (!forwardedRef) return;
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref.current);
    } else {
      forwardedRef.current = ref.current;
    }
  }, []);

  return { ref, refs };
};

export default useForwardedRef;
