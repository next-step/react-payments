import { useCallback } from "react";

export default function useCardNumberInput() {
  const toMaskedCardNumber = useCallback(
    (value: string) =>
      value
        .split("")
        .map((str, index) => {
          const displayedStr = index > 7 ? "*" : str;
          return index !== 0 && index % 4 === 0
            ? `-${displayedStr}`
            : displayedStr;
        })
        .join(""),
    []
  );

  return { toMaskedCardNumber };
}
