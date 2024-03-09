import { useCallback, useState } from "react";

export default function useBoolean(defaultValue: boolean) {
  const [boolean, setBoolean] = useState(defaultValue ?? false);

  const setTrue = useCallback(() => {
    setBoolean(true);
  }, []);

  const setFalse = useCallback(() => {
    setBoolean(false);
  }, []);

  return [boolean, setTrue, setFalse] as const;
}
