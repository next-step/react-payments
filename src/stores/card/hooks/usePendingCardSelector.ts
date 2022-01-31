import { useContext } from "react";
import { Card } from "../../../@types";
import { SelectFunction } from "../../../utils/storeUtills";
import { PendingCardStoreContext } from "../pendingCardStore";

const useCardSelector = (selectFunction: SelectFunction<Card>) => {
  const { state } = useContext(PendingCardStoreContext);

  return selectFunction(state);
};

export default useCardSelector;
