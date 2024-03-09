import { useCallback, useMemo, useState } from "react";
import { insertAt } from "../../../utils/stringUtils";

const EXPIRED_DATE_LENGTH = 6;

export default function useCardExpiredDateInput() {
  const [cardExpiredDate, setCardExpiredDate] = useState("");

  const displayedExpiredDate = useMemo(
    () => insertAt(cardExpiredDate, "/", 2),
    [cardExpiredDate]
  );

  const deleteExpiredDate = useCallback(
    () =>
      setCardExpiredDate((prev) => prev.slice(0, cardExpiredDate.length - 1)),
    [cardExpiredDate]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const lastInputKey = value.slice(value.length - 1);

      const isBackspace = value.length < displayedExpiredDate.length;
      if (isBackspace) {
        deleteExpiredDate();
        return;
      }

      if (isNaN(Number(lastInputKey))) return;
      if (cardExpiredDate.length === EXPIRED_DATE_LENGTH) return;
      setCardExpiredDate((prev) => prev + lastInputKey);
    },
    [cardExpiredDate, deleteExpiredDate, displayedExpiredDate]
  );

  return { cardExpiredDate, displayedExpiredDate, handleChange };
}
