import { useContext } from "react";
import { Card } from "../../../@types";
import { SelectFunction } from "../../../utils/storeUtills";
import { CardStoreContext } from "../CardStore";

const useCardSelector = (selectFunction: SelectFunction<Card>) => {
  const { state } = useContext(CardStoreContext);

  return selectFunction(state);
};

export default useCardSelector;
