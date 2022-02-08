import { useContext } from "react";
import { CardListStoreContext } from "../cardListStore";

const useCardListDispatch = () => {
  const { dispatch } = useContext(CardListStoreContext);

  return dispatch;
};

export default useCardListDispatch;
