import { ChangeEvent, useCallback, useMemo, useState } from "react";

export default function useCardOwner() {
  const [owner, setOwner] = useState("");
  const ownerLength = useMemo(() => owner.length, [owner]);

  const handleInputOwner = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setOwner(event.target.value);
    },
    []
  );

  return {
    owner,
    ownerLength,
    handleInputOwner,
  };
}
