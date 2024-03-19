import { useCardInfo } from "../../Context/CardProvider";
import { Validation } from "../../Util/Validation";
import { cardNumber } from "../../type/CardInfoType";
import useNumberValidation from "./useNumberValidation";

export const useCardNumberInput = (sectionKey: keyof cardNumber) => {
  const { state, dispatch } = useCardInfo();
  const input = useNumberValidation(
    state.cardNumber[sectionKey],
    (cardNumber: "" | number) => {
      dispatch({
        type: "SET_CARD_INFO",
        payload: { key: sectionKey, value: cardNumber },
      });
    },
    Validation.NumberVal
  );
  return input;
};
