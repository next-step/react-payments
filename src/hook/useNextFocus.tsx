import React, { useCallback, useRef } from 'react';
type InputRefType = React.RefObject<HTMLInputElement>[];
const useNextFocus = () => {
  const inputRefs: InputRefType = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const nextFocus = useCallback(
    (index: number) => {
      const target = inputRefs[index + 1]?.current as HTMLInputElement;
      target?.focus();
    },
    [inputRefs]
  );

  return {
    inputRefs,
    nextFocus,
  };
};

export default useNextFocus;
