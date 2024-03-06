import { useRef } from "react";
export const useAutoFocus = (refMap) => {
  const inputRef = useRef({});

  const changeFocus = (name, value, maxLength) => {
    if (value.length === maxLength) {
      const nextRef = refMap[name];
      if (nextRef !== null) {
        inputRef.current[nextRef].focus();
      }
    }
  };
  return [inputRef, changeFocus];
};
