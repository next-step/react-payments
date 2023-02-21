import { ChangeEvent, useCallback, useState } from "react";

//임시
const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | string) => {
      if (typeof e === "string") return;

      if (typeof initialValue === "string") {
        return;
      } else {
        const { target } = e;

        if (!target.id) {
          throw new Error("Insert id attribute in input element.");
        }
        setValue((prev: any) => ({ ...prev, [target.id]: target.value }));
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
