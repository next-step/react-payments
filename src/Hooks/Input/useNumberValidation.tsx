import { useState, ChangeEvent } from "react";

const useNumberValidation = (
  initialstate: "" | number,
  onChange: (input: "" | number) => void,
  validation: (input: number) => boolean
) => {
  const [value, setValue] = useState<number | "">(initialstate);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (isNaN(newValue) === true) {
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
    } else return;
  };

  return {
    value,
    handleChange,
  };
};

export default useNumberValidation;
