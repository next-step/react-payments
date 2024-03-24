import { useCardInfo } from "../../Context/CardProvider";
import { ChangeEvent } from "react";
import { Validation } from "../../Util/Validation";
import { cardPassword } from "../../type/CardInfoType";
const useCardPassword = () => {
  const { state, dispatch } = useCardInfo();

  const handlePasswordChange =
    (section: keyof cardPassword) => (event: ChangeEvent<HTMLInputElement>) => {
      if (Validation.PassWord(event.target.value) === true) {
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
