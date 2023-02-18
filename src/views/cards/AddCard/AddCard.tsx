import React, { useMemo } from "react";

import { LeftPointArrow } from "@/assets/icons";
import {
  Card,
  CardCvcInput,
  CardExpireDateInput,
  CardNumberInput,
  CardOwnerInput,
  CardPasswordInput,
} from "@/components/cards";
import { useCardCvcInput } from "@/components/cards/CardCvcInput/hook";
import { useCardExpireDateInput } from "@/components/cards/CardExpireDateInput/hook";
import { useCardNumberInput } from "@/components/cards/CardNumberInput/hook";
import { useCardOwnerInput } from "@/components/cards/CardOwnerInput/hook";
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
  const { cvcNumber, onCvcNumberChange } = useCardCvcInput("");

  const cardInfo = useMemo(
    () => ({
      cardName: cardOwnerName,
      cardNumber: cardNumber.split("-"),
      cardOwnerName: "NAME",
      expireDate: cardExpireDate || "MM/YY",
    }),
    [cardNumber, cardExpireDate, cardOwnerName]
  );

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
          <CardCvcInput value={cvcNumber} onChange={onCvcNumberChange} />
          <CardPasswordInput />
        </AddCardFormInputWrapper>
      </AddCardForm>
    </AddCardPageContainer>
  );
}
