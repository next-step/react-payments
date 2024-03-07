import { useState } from "react";

import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

import { CardInfo } from "features/card/types/card.type";

import useFunnel from "features/card/hooks/useFunnel";

function PaymentCard() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardName: "",
    cardNumber: "",
    expireDate: "",
    cardOwner: "",
    cvc: "",
    firstPassword: "",
    secondPassword: "",
  });

  const { Funnel, Step, handleChangeCurrentStep } = useFunnel();

  const handleCardInfoChange = (key: keyof CardInfo, value: string) => {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Funnel>
      <Step name="addCard">
        <AddCard onChangePage={handleChangeCurrentStep} onChangeCardInfo={handleCardInfoChange} {...cardInfo} />
      </Step>
      <Step name="addCardSuccess">
        <SuccessAddCard {...cardInfo} onChangePage={handleChangeCurrentStep} />
      </Step>
      <Step name="cardList">
        <CardList />
      </Step>
    </Funnel>
  );
}

export default PaymentCard;
