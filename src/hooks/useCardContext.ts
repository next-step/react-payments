import { useContext } from "react";
import { CardContext } from "../components/CardProvider";

function useCardContext() {
  const cardContext = useContext(CardContext);

  if (!cardContext) {
    alert("card context 누락");
    throw Error("card context 필수값 누락");
  }

  const { card, setCard, formattedCardNumber, color, bankName } = cardContext;

  return { card, setCard, formattedCardNumber, color, bankName };
}

export default useCardContext;
