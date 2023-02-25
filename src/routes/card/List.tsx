import { useContext } from "react";
import { CardsContext } from "../../components/CardsProvider";

function CardList() {
  const cardsContext = useContext(CardsContext);

  if (!cardsContext) {
    alert("context 누락");
    throw Error("context 필수값 누락");
  }

  const { cards } = cardsContext;

  return <div>목록페이지</div>;
}

export default CardList;
