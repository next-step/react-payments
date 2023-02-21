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
  const { cardNumber, onCardNumberChange } = useCardNumberInput({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });
  const { cardExpireDate, onCardExpireDateChange } = useCardExpireDateInput({
    month: "",
    year: "",
  });
  const { cardOwnerName, onCardOwnerNameChange } = useCardOwnerInput({
    ownerName: "",
  });
  const { cvcNumber, onCvcNumberChange } = useCardCvcInput({ cvc: "" });

  const cardNumberWithDash = useMemo(
    () =>
      Object.keys(cardNumber)
        .map((fieldId, idx) => {
          if (idx <= 1) {
            return cardNumber[fieldId];
          } else {
            return cardNumber[fieldId].replaceAll(/[0-9]/g, "•");
          }
        })
        .filter((number) => number !== "")
        .join("-"),
    [cardNumber]
  );

  const cardExpireDateWithSlash = useMemo(
    () =>
      Object.keys(cardExpireDate)
        .map((fieldId) => cardExpireDate[fieldId])
        .filter((data) => data !== "")
        .join("/"),
    [cardExpireDate]
  );

  const cardInfo = useMemo(
    () => ({
      cardName: "",
      cardNumber: cardNumberWithDash,
      cardOwnerName: cardOwnerName.ownerName || "NAME",
      expireDate: cardExpireDateWithSlash || "MM/YY",
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
          <CardNumberInput
            cardNumber={cardNumber}
            onChange={onCardNumberChange}
          />
          <CardExpireDateInput
            cardExpireDate={cardExpireDate}
            onChange={onCardExpireDateChange}
          />
          <CardOwnerInput
            cardOwnerName={cardOwnerName.ownerName}
            onChange={onCardOwnerNameChange}
          />
          <CardCvcInput cardCvc={cvcNumber.cvc} onChange={onCvcNumberChange} />
          <CardPasswordInput />
        </AddCardFormInputWrapper>
      </AddCardForm>
    </AddCardPageContainer>
  );
}
