import {createRef} from 'react';

const useInputFocus = (size: number) => {
  const inputRef = Array(size)
    .fill(null)
    .map(() => createRef<HTMLInputElement>());

  return {inputRef};
};

export default useInputFocus;
