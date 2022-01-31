import { useContext } from "react";
import { CardStoreContext } from "../CardStore";

const useCardDispatch = () => {
  const { dispatch } = useContext(CardStoreContext);

  return dispatch;
};

export default useCardDispatch;
