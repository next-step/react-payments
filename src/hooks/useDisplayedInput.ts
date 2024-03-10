import { useCallback, useMemo, useState } from "react";

export default function useDisplayedInput({
  toDisplayed,
  maxLength,
  validate,
}: {
  toDisplayed: (value: string) => string;
  maxLength?: number;
  validate?: (value: string) => boolean;
}) {
  const [value, setValue] = useState("");
  const displayedValue = useMemo(
    () => toDisplayed(value),
    [value, toDisplayed]
  );
  const deleteValue = useCallback(
    () => setValue((prev) => prev.slice(0, value.length - 1)),
    [value]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetValue = e.target.value;
      const lastInputKey = targetValue.slice(targetValue.length - 1);

      const isBackspace = targetValue.length < displayedValue.length;
      if (isBackspace) {
        deleteValue();
        return;
      }

      if (validate && !validate(lastInputKey)) return;
      if (maxLength && value.length === maxLength) return;
      setValue((prev) => prev + lastInputKey);
    },
    [displayedValue, deleteValue, maxLength, value, validate]
  );

  return { value, displayedValue, handleChange };
}
