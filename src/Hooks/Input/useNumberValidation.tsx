import { useState, ChangeEvent } from "react";

const useNumberValidation = (
  initialstate: "" | number,
  onChange: (input: "" | number) => void,
  validation: (input: number) => boolean
) => {
  const [value, setValue] = useState<number | "">(initialstate);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e", isNaN(Number(e.target.value)), e.target.value);
    const newValue = Number(e.target.value);
    if (isNaN(Number(newValue)) === true) {
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

export default useNumberValidation;
