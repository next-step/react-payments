import { useCallback, useState } from "react";
import { ICard } from "../../domain";

export default function useCardState() {
  const [cardState, setCardState] = useState<Partial<ICard>>({});

  const changeCardState = useCallback(
    (newCardState: typeof cardState) => {
      setCardState({
        ...cardState,
        ...newCardState,
      });
    },
    [cardState]
  );

  return {
    cardState,
    changeCardState,
  };
}
