import { useCardInfo } from "../Context/CardProvider";
import { ChangeEvent } from "react";
import { Validaton } from "../Util/Validation";

const useCardPassword = () => {
  const { state, dispatch } = useCardInfo();

  const handlePasswordChange =
    (section: string) => (event: ChangeEvent<HTMLInputElement>) => {
      if (Validaton.PassWord(event.target.value) === true) {
        dispatch({
          type: "SET_CARD_PASSWORD",
          payload: { key: section, value: event.target.value },
        });
      }
      return;
    };

  return {
    cardPassword: state.cardPassword,
    handlePasswordChange,
  };
};

export default useCardPassword;
