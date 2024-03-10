import { useCardInfo } from "../Context/CardProvider";
import { ChangeEvent } from "react";
import { Validaton } from "../Util/Validation";
const useOwnerName = () => {
  const { state, dispatch } = useCardInfo();
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Validaton.OwnerName(event.target.value)) {
      dispatch({
        type: "SET_OWNER_NAME",
        payload: { key: "cardOwnerName", value: event.target.value },
      });
    }
  };
  return {
    ownerName: state.cardOwnerName,
    handleNameChange,
  };
};

export default useOwnerName;
