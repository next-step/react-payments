import { ChangeEvent, useCallback, useMemo } from "react";
import { useCardFormContext } from "../../../providers";

export default function useCardOwner() {
  const { cardState, changeCardState } = useCardFormContext();
  const owner = useMemo(() => cardState.owner || "", [cardState.owner]);
  const ownerLength = useMemo(() => owner.length, [owner]);
  const invalid = useMemo(() => ownerLength === 0, [ownerLength]);

  const handleInputOwner = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      console.log(target.value);
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
