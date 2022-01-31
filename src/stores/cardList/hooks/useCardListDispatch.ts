import { useContext } from "react";
import { CardListStoreContext } from "../cardListStore";

const useCardDispatch = () => {
  const { dispatch } = useContext(CardListStoreContext);

  return dispatch;
};

export default useCardDispatch;
