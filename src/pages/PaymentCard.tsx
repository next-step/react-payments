import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

import useFunnel from "features/card/hooks/useFunnel";

function PaymentCard() {
  const { Funnel, Step, handleChangeCurrentStep } = useFunnel();

  return (
    <Funnel>
      <Step name="addCard">
        <AddCard onChangePage={handleChangeCurrentStep} />
      </Step>
      <Step name="addCardSuccess">
        <SuccessAddCard onChangePage={handleChangeCurrentStep} />
      </Step>
      <Step name="cardList">
        <CardList />
      </Step>
    </Funnel>
  );
}

export default PaymentCard;
