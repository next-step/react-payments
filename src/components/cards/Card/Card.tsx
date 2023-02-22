import React, { MouseEvent, useMemo } from "react";

import type { CardNumber } from "../CardNumberInput/hook/useCardNumberInput";
import * as S from "./card.style";

export type CardInfo = {
  cardName: string;
  cardNumber: CardNumber;
  cardOwnerName: string;
  expireDate: string;
};

export interface CardProps {
  size: "big" | "small";
  className?: string;
  color?: string;
  cardInfo: CardInfo;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function Card({
  size,
  color = "#94dacd",
  cardInfo,
  className,
}: CardProps) {
  const { cardName, cardNumber, cardOwnerName, expireDate } = cardInfo;

  const cardNumberWithDash = useMemo(
    () =>
      Object.entries(cardNumber)
        .map(([_, value], idx) => {
          if (idx <= 1) {
            return value;
          } else {
            return value.replaceAll(/[0-9]/g, "•");
          }
        })
        .filter((number) => number !== "")
        .join("-"),
    [cardNumber]
  );

  return (
    <S.CardContainer className={className} size={size} color={color}>
      <S.CardTopWrapper>
        <S.CardText>{cardName}</S.CardText>
      </S.CardTopWrapper>
      <S.CardMiddleWrapper>
        <S.CardChip />
      </S.CardMiddleWrapper>
      <S.CardBottomWrapper>
        <S.CardNumberWrapper>
          <S.CardText>{cardNumberWithDash}</S.CardText>
        </S.CardNumberWrapper>
        <S.CardInfoWrapper>
          <S.CardText>{cardOwnerName}</S.CardText>
          <S.CardText>{expireDate}</S.CardText>
        </S.CardInfoWrapper>
      </S.CardBottomWrapper>
    </S.CardContainer>
  );
}
