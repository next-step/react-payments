import { useCallback, useState } from "react";

export default function useInput() {
  const [value, setValue] = useState("");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return { value, handleChange };
}
