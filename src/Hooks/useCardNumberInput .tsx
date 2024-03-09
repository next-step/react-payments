import { useCardInfo } from "../Context/CardProvider";
import { Validaton } from "../Util/Validation";
import useNumberValidation from "./Input/useNumberValidation";

export const useCardNumberInput = (
  sectionKey: "section1" | "section2" | "section3" | "section4"
) => {
  const { state, dispatch } = useCardInfo();
  const input = useNumberValidation(
    state.cardNumber[sectionKey],
    (cardNumber) => {
      dispatch({
        type: "SET_CARD_INFO",
        payload: { key: sectionKey, value: cardNumber },
      });
    },
    Validaton.NumberVal
  );
  return input;
};
