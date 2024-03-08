import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

import Funnel from "common/components/layout/funnel";

import useFunnel from "features/card/hooks/useFunnel";

function PaymentCard() {
  const { currentStep, handleChangeCurrentStep } = useFunnel();

  return (
    <Funnel.Container currentStep={currentStep}>
      <Funnel.Step name="addCard">
        <AddCard onChangePage={handleChangeCurrentStep} />
      </Funnel.Step>
      <Funnel.Step name="addCardSuccess">
        <SuccessAddCard onChangePage={handleChangeCurrentStep} />
      </Funnel.Step>
      <Funnel.Step name="cardList">
        <CardList />
      </Funnel.Step>
    </Funnel.Container>
  );
}

export default PaymentCard;
