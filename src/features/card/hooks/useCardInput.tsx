import { useContext } from "react";

import { CardInfoContext } from "features/card/context/CardInputContext";

export default function useCardInfo() {
  const context = useContext(CardInfoContext);

  if (!context) {
    throw new Error("useCardInfo 훅은 Provider가 있어야합니다.");
  }

  return context;
}
