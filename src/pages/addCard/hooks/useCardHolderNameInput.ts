import { useCallback, useState } from "react";

export default function useCardHolderNameInput() {
  const [cardHolderName, setCardHolderName] = useState("");
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCardHolderName(e.target.value);
  }, []);
  return { cardHolderName, handleChange };
}
