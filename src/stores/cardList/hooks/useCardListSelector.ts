import { useContext } from "react";
import { CardMap } from "../../../@types";
import { SelectFunction } from "../../../utils/storeUtills";
import { CardListStoreContext } from "../cardListStore";

const useCardSelector = (selectFunction: SelectFunction<CardMap>) => {
  const { state } = useContext(CardListStoreContext);

  return selectFunction(state);
};

export default useCardSelector;
