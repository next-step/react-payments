import React, { MouseEvent, useId, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { LeftPointArrow } from "@/assets/icons";
import {
  Card,
  CardCvcInput,
  CardExpireDateInput,
  CardNameModal,
  CardNumberInput,
  CardOwnerInput,
  CardPasswordInput,
} from "@/components/cards";
import { useCardCvcInput } from "@/components/cards/CardCvcInput/hook";
import { useCardExpireDateInput } from "@/components/cards/CardExpireDateInput/hook";
import { useCardNameModal } from "@/components/cards/CardNameModal/hook";
import { useCardNumberInput } from "@/components/cards/CardNumberInput/hook";
import { useCardOwnerInput } from "@/components/cards/CardOwnerInput/hook";
import { useCardPasswordInput } from "@/components/cards/CardPasswordInput/hook";
import { Button } from "@/components/common";
import { useCardsContext } from "@/contexts";
import type { CardItem } from "@/contexts/CardsContext";
import { CardPageLayout } from "@/layouts/cards";
import { domains } from "@/router";

import * as S from "./addCard.style";

const initialFormValue = {
  cardNumber: {
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  },
  expireDate: {
    month: "",
    year: "",
  },
  ownerName: {
    ownerName: "",
  },
  cvcNumber: {
    cvc: "",
  },
  password: {
    password1: "",
    password2: "",
  },
};

function HeaderLeftPointArrow() {
  const navigate = useNavigate();

  const handleMoveToCardsPage = () => {
    navigate(domains.CARD_LIST);
  };

  return <LeftPointArrow onClick={handleMoveToCardsPage} />;
}

export default function AddCard() {
  const uuid = useId();
  const navigate = useNavigate();

  const { dispatch } = useCardsContext();

  // 카드번호
  const {
    cardNumber,
    cardNumberError,
    isValidCardNumber,
    onCardNumberChange,
    onCardNumberInputBlur,
  } = useCardNumberInput(initialFormValue.cardNumber);

  // 카드 만료일
  const {
    cardExpireDate,
    cardExpireDateError,
    isValidExpireDate,
    onCardExpireDateChange,
    onCardExpireDateInputBlur,
  } = useCardExpireDateInput(initialFormValue.expireDate);

  // 카드 소유주
  const {
    cardOwnerName,
    cardOwnerError,
    isValidOwnerName,
    onCardOwnerNameChange,
    onCardOwnerInputBlur,
  } = useCardOwnerInput(initialFormValue.ownerName);

  // 카드 CVC
  const {
    cvcNumber,
    cvcError,
    isValidCvcNumber,
    onCvcNumberChange,
    onCvcNumberInputBlur,
  } = useCardCvcInput(initialFormValue.cvcNumber);

  // 카드 비밀번호
  const {
    cardPassword,
    cardPasswordError,
    isPasswordValid,
    onCardPasswordChange,
    onCardPasswordInputBlur,
  } = useCardPasswordInput(initialFormValue.password);

  // 카드 이름
  const { cardNameList, selectedCardName, isOpen, onCardNameSelect, open } =
    useCardNameModal(true);

  const cardExpireDateWithSlash = useMemo(
    () =>
      Object.entries(cardExpireDate)
        .map(([_, value]) => value)
        .filter((data) => data !== "")
        .join("/"),
    [cardExpireDate]
  );

  const cardNumberWithDash = useMemo(
    () =>
      Object.entries(cardNumber)
        .map(([_, value]) => value)
        .filter((number) => number !== "")
        .join("-"),
    [cardNumber]
  );

  const cardInfo = useMemo(
    () => ({
      cardName: selectedCardName.name ?? "",
      cardNumber: cardNumberWithDash,
      cardOwnerName: cardOwnerName.ownerName || "NAME",
      expireDate: cardExpireDateWithSlash || "MM/YY",
    }),
    [cardNumber, cardExpireDate, cardOwnerName, selectedCardName]
  );

  const checkSubmittable = () => {
    return [
      isValidCardNumber,
      isValidExpireDate,
      isValidOwnerName,
      isValidCvcNumber,
      isPasswordValid,
    ].every((isValid) => isValid);
  };

  const handleMoveToCompleteAddPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isSubmittable = checkSubmittable();

    if (isSubmittable) {
      const cardItem: CardItem = {
        id: uuid,
        ...cardInfo,
        color: selectedCardName?.color,
      };

      dispatch({ type: "ADD_CARD", payload: cardItem });

      navigate(domains.CARD_COMPLETE, {
        state: {
          cardInfo: cardItem,
        },
      });
    }
  };

  const HeaderStartDecorator = useMemo(() => <HeaderLeftPointArrow />, []);

  return (
    <CardPageLayout style={{ height: "100%" }}>
      <S.AddCardPageHeader startDecorator={HeaderStartDecorator}>
        카드추가
      </S.AddCardPageHeader>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <S.CustomizedCard
          className="add-form-card"
          size="small"
          color={selectedCardName.color}
          cardInfo={cardInfo}
          onClick={open}
        />
        <S.AddCardForm>
          <S.AddCardFormInputWrapper>
            <CardNumberInput
              cardNumber={cardNumber}
              error={cardNumberError}
              onChange={onCardNumberChange}
              onBlur={onCardNumberInputBlur}
            />
            <CardExpireDateInput
              cardExpireDate={cardExpireDate}
              error={cardExpireDateError}
              onChange={onCardExpireDateChange}
              onBlur={onCardExpireDateInputBlur}
            />
            <CardOwnerInput
              cardOwnerName={cardOwnerName.ownerName}
              error={cardOwnerError}
              onChange={onCardOwnerNameChange}
              onBlur={onCardOwnerInputBlur}
            />
            <CardCvcInput
              cardCvc={cvcNumber.cvc}
              error={cvcError}
              onChange={onCvcNumberChange}
              onBlur={onCvcNumberInputBlur}
            />
            <CardPasswordInput
              cardPassword={cardPassword}
              error={cardPasswordError}
              onChange={onCardPasswordChange}
              onBlur={onCardPasswordInputBlur}
            />
          </S.AddCardFormInputWrapper>
          <S.AddCardFormSubmitButtonWrapper>
            <Button variant="text" onClick={handleMoveToCompleteAddPage}>
              다음
            </Button>
          </S.AddCardFormSubmitButtonWrapper>
        </S.AddCardForm>
        <CardNameModal
          isShow={isOpen}
          onCardNameSelect={onCardNameSelect}
          cardNameList={cardNameList}
        />
      </div>
    </CardPageLayout>
  );
}
