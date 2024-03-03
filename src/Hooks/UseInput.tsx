import { useState, ChangeEvent } from "react";

const useInput = (
  initialstate: number | null,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const [value, setValue] = useState(initialstate);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
    onChange(e);
  };

  return {
    value,
    handleChange,
  };
};

export default useInput;
