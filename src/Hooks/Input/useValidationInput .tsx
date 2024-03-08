import { useState, ChangeEvent } from "react";

const useValidationInput = (
  initialstate: "" | number,
  onChange: (input: "" | number) => void,
  validation: (input: number) => boolean
) => {
  const [value, setValue] = useState<number | "">(initialstate);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setValue(value);
      onChange(value);
      return;
    }
    if (e.target.value === "") {
      setValue("");
      onChange("");
      return;
    }
    const newValue = Number(e.target.value);

    if (validation(newValue) === true) {
      setValue(newValue);
      onChange(newValue);
      console.log(
        "why...",
        Number(value) * 10 + newValue,
        "arg1",
        Number(value) * 10,
        "arg2",
        newValue
      );
    }
  };

  return {
    value,
    handleChange,
  };
};

export default useValidationInput;
