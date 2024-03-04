import { useCardInfo } from "../Context/CardProvider";
import { ChangeEvent } from "react";

const useCardPassword = () => {
  const { state, dispatch } = useCardInfo();

  const handlePasswordChange =
    (section: string) => (event: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "SET_CARD_PASSWORD",
        payload: { key: section, value: event.target.value },
      });
    };

  return {
    cardPassword: state.cardPassword,
    handlePasswordChange,
  };
};

export default useCardPassword;
