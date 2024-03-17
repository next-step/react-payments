import { CardContext } from "../App";

import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

function PaymentCard() {
  const currentState = CardContext.useSelector((state) => state.context.step);

  return (
    <>
      {currentState === "addCard" && <AddCard />}
      {currentState === "addCardSuccess" && <SuccessAddCard />}
      {currentState === "cardList" && <CardList />}
    </>
  );
}

export default PaymentCard;
