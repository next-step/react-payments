import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

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

function HeaderLeftPointArrow() {
  const navigate = useNavigate();

  const moveToCardsPage = () => {
    navigate("/cards");
  };

  return <LeftPointArrow onClick={moveToCardsPage} />;
}

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

  const HeaderStartDecorator = useMemo(() => <HeaderLeftPointArrow />, []);

  return (
    <AddCardPageContainer>
      <Header className="add-form-header" startDecorator={HeaderStartDecorator}>
        카드추가
      </Header>
      <AddCardForm>
        <Card className="add-form-card" size="small" cardInfo={cardInfo} />
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
