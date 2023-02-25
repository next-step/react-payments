import { ChangeEvent, useCallback, useState } from "react";

//임시
const useInput = <T extends { [k: string]: string }>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;

      if (!target.id) {
        throw new Error("Insert id attribute in input element.");
      }
      setValue((prev) => ({ ...prev, [target.id]: target.value }));
    },
    [value]
  );

  return {
    value,
    onChange: handleInputChange,
  };
};

export default useInput;
