import { useEffect, useRef } from 'react';

export const useAutoFocus = () => {
  const autoFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    autoFocusRef.current?.focus();
  }, []);

  return autoFocusRef;
};
