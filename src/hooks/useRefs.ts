import { createRef } from 'react';

const useRefs = <T>(length: number) => {
  return Array.from({ length }).map(() => createRef<T>());
};

export default useRefs;