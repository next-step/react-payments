import { useContext } from "react";
import { PendingCardStoreContext } from "../pendingCardStore";

const usePendingCardDispatch = () => {
  const { dispatch } = useContext(PendingCardStoreContext);

  return dispatch;
};

export default usePendingCardDispatch;
