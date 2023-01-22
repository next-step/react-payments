import { ChangeEvent, useCallback, useMemo } from "react";
import { useCardStateContext } from "../../../../providers";

export default function useCardOwner() {
  const { cardState, changeCardState } = useCardStateContext();
  const owner = useMemo(() => cardState.owner || "", [cardState.owner]);
  const ownerLength = useMemo(() => owner.length, [owner]);
  const invalid = useMemo(() => ownerLength === 0, [ownerLength]);

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
    invalid,
  };
}
