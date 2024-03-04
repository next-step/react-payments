import { useCardInfo } from "../Context/CardProvider";
import UseInput from "./useInput";

export const useCardSectionInput = (
  sectionKey: "section1" | "section2" | "section3" | "section4"
) => {
  const { state, dispatch } = useCardInfo();
  const input = UseInput(state.cardNumber[sectionKey], (event) => {
    dispatch({
      type: "SET_CARD_INFO",
      payload: { key: sectionKey, value: event.target.value },
    });
  });

  return input;
};
