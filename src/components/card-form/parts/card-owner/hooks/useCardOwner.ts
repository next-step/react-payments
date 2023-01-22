import { ChangeEvent, useCallback, useMemo } from "react";
import { useCardFormContext } from "../../../providers";

export default function useCardOwner() {
  const { cardState, changeCardState } = useCardFormContext();
  const owner = useMemo(() => cardState.owner || "", [cardState.owner]);
  const ownerLength = useMemo(() => owner.length, [owner]);

  const handleInputOwner = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      changeCardState({ owner: target.value });
    },
    [changeCardState]
  );

  return {
    owner,
    ownerLength,
    handleInputOwner,
  };
}
