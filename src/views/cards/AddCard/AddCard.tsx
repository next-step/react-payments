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
import { useCardExpireDateInput } from "@/components/cards/CardExpireDateInput/hook";
import { useCardNumberInput } from "@/components/cards/CardNumberInput/hooks";
import useCardOwnerInput from "@/components/cards/CardOwnerInput/hook/useCardOwnerInput";
import { Header } from "@/components/common";

import {
  AddCardForm,
  AddCardFormInputWrapper,
  AddCardPageContainer,
} from "./addCard.style";

const HeaderLeftPointArrow = <LeftPointArrow />;

export default function AddCard() {
  const { cardNumber, onCardNumberChange } = useCardNumberInput("");
  const { cardExpireDate, onCardExpireDateChange } = useCardExpireDateInput("");
  const { cardOwnerName, onCardOwnerNameChange } = useCardOwnerInput("");

  const cardInfo = {
    cardName: cardOwnerName,
    cardNumber: cardNumber.split("-"),
    cardOwnerName: "NAME",
    expireDate: cardExpireDate || "MM/YY",
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
          <CardExpireDateInput
            value={cardExpireDate}
            onChange={onCardExpireDateChange}
          />
          <CardOwnerInput
            ownerNameLength={cardOwnerName.length}
            value={cardOwnerName}
            onChange={onCardOwnerNameChange}
          />
          <CardCvcInput />
          <CardPasswordInput />
        </AddCardFormInputWrapper>
      </AddCardForm>
    </AddCardPageContainer>
  );
}
