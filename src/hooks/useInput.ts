import { ChangeEvent, useCallback, useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = useCallback(
    (e: ChangeEvent | string) => {
      if (typeof e === "string") {
        setValue(e);
      } else {
        const { target } = e;

        if (target instanceof HTMLInputElement) {
          setValue(target.value);
        }
      }
    },
    [value]
  );

  return {
    value,
    onChange: handleInputChange,
  };
};

export default useInput;
