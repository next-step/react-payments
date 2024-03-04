import { useCardInfo } from "../Context/CardProvider";
import { ChangeEvent } from "react";

const useOwnerName = () => {
  const { state, dispatch } = useCardInfo();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_OWNER_NAME",
      payload: { key: "cardOwnerName", value: event.target.value },
    });
  };

  return {
    ownerName: state.cardOwnerName,
    handleNameChange,
  };
};

export default useOwnerName;
