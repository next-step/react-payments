import { useState, ChangeEvent } from "react";

const useValidationInput = (
  initialState: "" | number,
  onChange: (input: "" | number) => void,
  validation: (input: number) => boolean
) => {
  const [value, setValue] = useState<number | "">(initialState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);

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
    if (validation(newValue) === true) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return {
    value,
    handleChange,
  };
};

export default useValidationInput;
