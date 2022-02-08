import { useContext } from "react";
import { PendingCard } from "../../../@types";
import { SelectFunction } from "../../../utils/storeUtills";
import { PendingCardStoreContext } from "../pendingCardStore";

const usePendingCardSelector = (selectFunction: SelectFunction<PendingCard>) => {
  const { state } = useContext(PendingCardStoreContext);

  return selectFunction(state);
};

export default usePendingCardSelector;
