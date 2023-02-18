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
import { Header } from "@/components/common";

import {
  AddCardForm,
  AddCardFormInputWrapper,
  AddCardPageContainer,
} from "./addCard.style";

export default function AddCard() {
  return (
    <AddCardPageContainer>
      <Header className="add-form-header" startDecorator={<LeftPointArrow />}>
        카드추가
      </Header>
      <AddCardForm>
        <Card
          className="add-form-card"
          size="big"
          cardInfo={{
            cardName: "",
            cardNumber: ["", "", "", ""],
            cardOwnerName: "NAME",
            expireDate: "MM/YY",
          }}
        />
        <AddCardFormInputWrapper>
          <CardNumberInput />
          <CardExpireDateInput />
          <CardOwnerInput />
          <CardCvcInput />
          <CardPasswordInput />
        </AddCardFormInputWrapper>
      </AddCardForm>
    </AddCardPageContainer>
  );
}
