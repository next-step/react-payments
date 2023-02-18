import React from "react";

import { LeftPointArrow } from "@/assets/icons";
import {
  Card,
  CardCvcInput,
  CardExpireDateInput,
  CardNumberInput,
  CardOwnerInput,
  CardPasswordInput,
} from "@/components/cards";
import { useCardNumberInput } from "@/components/cards/CardNumberInput/hooks";
import { Header } from "@/components/common";

import {
  AddCardForm,
  AddCardFormInputWrapper,
  AddCardPageContainer,
} from "./addCard.style";

const HeaderLeftPointArrow = <LeftPointArrow />;

export default function AddCard() {
  const { cardNumber, onCardNumberChange } = useCardNumberInput("");

  const cardInfo = {
    cardName: "",
    cardNumber: cardNumber.split("-"),
    cardOwnerName: "NAME",
    expireDate: "MM/YY",
  };

  return (
    <AddCardPageContainer>
      <Header className="add-form-header" startDecorator={HeaderLeftPointArrow}>
        카드추가
      </Header>
      <AddCardForm>
        <Card className="add-form-card" size="big" cardInfo={cardInfo} />
        <AddCardFormInputWrapper>
          <CardNumberInput value={cardNumber} onKeyDown={onCardNumberChange} />
          <CardExpireDateInput />
          <CardOwnerInput />
          <CardCvcInput />
          <CardPasswordInput />
        </AddCardFormInputWrapper>
      </AddCardForm>
    </AddCardPageContainer>
  );
}
