import { useContext } from "react";
import { CardsContext } from "../components/CardsProvider";

function useCardsContext() {
  const cardsContext = useContext(CardsContext);

  if (!cardsContext) {
    alert("cards context 누락");
    throw Error("cards context 필수값 누락");
  }

  const { cards, setCards } = cardsContext;

  return { cards, setCards };
}

export default useCardsContext;
