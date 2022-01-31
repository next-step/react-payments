import { useContext } from "react";
import { PendingCardStoreContext } from "../pendingCardStore";

const useCardDispatch = () => {
  const { dispatch } = useContext(PendingCardStoreContext);

  return dispatch;
};

export default useCardDispatch;
